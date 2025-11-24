import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import pb, { getFileUrl } from "@/lib/pocketbase";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Loader2,
} from "lucide-react";

interface GalleryImage {
  id: number;
  image: string;
  title: string;
}

interface GalleryDetailData {
  title: string;
  subtitle: string;
  images: GalleryImage[];
}

const GalleryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const {
    data: currentGallery,
    isLoading,
    error,
  } = useQuery<GalleryDetailData | null>({
    queryKey: ["galleryDetail", id],
    queryFn: async () => {
      if (!id) return null;

      try {
        const record = await pb.collection("gallery").getOne(id);

        // Map the images array from PocketBase
        const images: GalleryImage[] = record.images
          ? (record.images as string[]).map(
              (filename: string, index: number) => ({
                id: index + 1,
                image: getFileUrl(record, filename) || "",
                title: `Image ${index + 1}`,
              })
            )
          : [];

        return {
          title: record.title || "Gallery",
          subtitle: record.subtitle || "",
          images,
        };
      } catch (e: unknown) {
        console.warn("Failed to fetch gallery detail from PocketBase:", e);
        return null;
      }
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading gallery...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!currentGallery || error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Gallery not found
            </h1>
            <button
              onClick={() => navigate("/gallery")}
              className="text-primary hover:underline"
            >
              Back to Gallery
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate("/gallery")}
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Gallery
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              {currentGallery.title}
            </h1>
            <p
              className="text-lg md:text-xl max-w-3xl opacity-90 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              Browse through our collection of memorable moments
            </p>
          </div>
        </section>

        {/* Images Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentGallery.images.map((item, idx) => (
                <Card
                  key={item.id}
                  className="overflow-hidden cursor-pointer hover:shadow-xl transition-all group rounded-lg"
                  onClick={() => setSelectedIndex(idx)}
                >
                  <div className="overflow-hidden rounded-lg bg-muted h-48 sm:h-56 md:h-60 lg:h-64 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-end justify-center p-3 pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="inline-flex items-center justify-center bg-black/30 text-white rounded-full p-2 backdrop-blur">
                          <ZoomIn className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              const prev =
                (selectedIndex - 1 + currentGallery.images.length) %
                currentGallery.images.length;
              setSelectedIndex(prev);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-[90%] max-h-[85%] flex items-center justify-center">
            <img
              src={currentGallery.images[selectedIndex].image}
              alt={currentGallery.images[selectedIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              const next = (selectedIndex + 1) % currentGallery.images.length;
              setSelectedIndex(next);
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            className="absolute top-4 right-4 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryDetail;
