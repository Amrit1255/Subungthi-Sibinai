import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
// Batch 6 Images
import B61 from "@/assets/batch6/B61.jpg";
import B62 from "@/assets/batch6/B62.jpg";
import B63 from "@/assets/batch6/B63.jpg";
import B64 from "@/assets/batch6/B64.jpg";
import B65 from "@/assets/batch6/B65.jpg";
import B66 from "@/assets/batch6/B66.jpg";
import B67 from "@/assets/batch6/B67.jpg";
import B68 from "@/assets/batch6/B68.jpg";
import B69 from "@/assets/batch6/B69.jpg";
import B610 from "@/assets/batch6/B610.jpg";
import B611 from "@/assets/batch6/B611.jpg";
import B612 from "@/assets/batch6/B612.jpg";
import B613 from "@/assets/batch6/B613.jpg";
import B615 from "@/assets/batch6/B615.jpg";
import B616 from "@/assets/batch6/B616.jpg";
import B617 from "@/assets/batch6/B617.jpg";
// Batch 4 Images
import B41 from "@/assets/batch4/B41.jpg";
import B42 from "@/assets/batch4/B42.jpg";
import B43 from "@/assets/batch4/B43.jpg";
import B44 from "@/assets/batch4/B44.jpg";
import B45 from "@/assets/batch4/B45.jpg";
import B46 from "@/assets/batch4/B46.jpg";
import B47 from "@/assets/batch4/B47.jpg";
import B48 from "@/assets/batch4/B48.jpg";
import B49 from "@/assets/batch4/B49.jpg";
// Batch 5 Images
import B51 from "@/assets/batch5/B51.jpg";
import B52 from "@/assets/batch5/B52.jpg";
import B53 from "@/assets/batch5/B53.jpg";
import B54 from "@/assets/batch5/B54.jpg";
import B56 from "@/assets/batch5/B56.jpg";
import B57 from "@/assets/batch5/B57.jpg";
import B58 from "@/assets/batch5/B58.jpg";
import B59 from "@/assets/batch5/B59.jpg";
import B510 from "@/assets/batch5/B510.jpg";
import B511 from "@/assets/batch5/B511.jpg";
import B512 from "@/assets/batch5/B512.jpg";
import B513 from "@/assets/batch5/B513.jpg";
// Batch 3 Images
import B31 from "@/assets/batch3/B31.jpg";
import B32 from "@/assets/batch3/B32.jpg";
import B33 from "@/assets/batch3/B33.jpg";
import B34 from "@/assets/batch3/B34.jpg";
import B35 from "@/assets/batch3/B35.jpg";
import B36 from "@/assets/batch3/B36.jpg";
import B37 from "@/assets/batch3/B37.jpg";
import B38 from "@/assets/batch3/B38.jpg";
import B39 from "@/assets/batch3/B39.jpg";
import B310 from "@/assets/batch3/B310.jpg";
import B311 from "@/assets/batch3/B311.jpg";
import B312 from "@/assets/batch3/B312.jpg";
import B313 from "@/assets/batch3/B313.jpg";

const GalleryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Define gallery data for each category
  const galleryData: Record<string, { title: string; images: Array<{ id: number; image: string; title: string }> }> = {
    "1": {
      title: "Sibungthi Sibinai Batch 6",
      images: [
        { id: 1, image: B61, title: "B61" },
        { id: 2, image: B62, title: "B62" },
        { id: 3, image: B63, title: "B63" },
        { id: 4, image: B64, title: "B64" },
        { id: 5, image: B65, title: "B65" },
        { id: 6, image: B66, title: "B66" },
        { id: 7, image: B67, title: "B67" },
        { id: 8, image: B68, title: "B68" },
        { id: 9, image: B69, title: "B69" },
        { id: 10, image: B610, title: "B610" },
        { id: 11, image: B611, title: "B611" },
        { id: 12, image: B612, title: "B612" },
        { id: 13, image: B613, title: "B613" },
        { id: 15, image: B615, title: "B615" },
        { id: 16, image: B616, title: "B616" },
        { id: 17, image: B617, title: "B617" },
      ],
    },
    "2": {
      title: "Sibungthi Sibinai Batch 5",
      images: [
        { id: 1, image: B51, title: "B51" },
        { id: 2, image: B52, title: "B52" },
        { id: 3, image: B53, title: "B53" },
        { id: 4, image: B54, title: "B54" },
        { id: 6, image: B56, title: "B56" },
        { id: 7, image: B57, title: "B57" },
        { id: 8, image: B58, title: "B58" },
        { id: 9, image: B59, title: "B59" },
        { id: 10, image: B510, title: "B510" },
        { id: 11, image: B511, title: "B511" },
        { id: 12, image: B512, title: "B512" },
        { id: 13, image: B513, title: "B513" },
      ],
    },
    "3": {
      title: "sibungthi Sibinai Batch 4",
      images: [
        { id: 1, image: B41, title: "B41" },
        { id: 2, image: B42, title: "B42" },
        { id: 3, image: B43, title: "B43" },
        { id: 4, image: B44, title: "B44" },
        { id: 5, image: B45, title: "B45" },
        { id: 6, image: B46, title: "B46" },
        { id: 7, image: B47, title: "B47" },
        { id: 8, image: B48, title: "B48" },
        { id: 9, image: B49, title: "B49" },
      ],
    },
    "4": {
      title: "Sibungthi Sibinai Batch 3",
      images: [
        { id: 1, image: B31, title: "B31" },
        { id: 2, image: B32, title: "B32" },
        { id: 3, image: B33, title: "B33" },
        { id: 4, image: B34, title: "B34" },
        { id: 5, image: B35, title: "B35" },
        { id: 6, image: B36, title: "B36" },
        { id: 7, image: B37, title: "B37" },
        { id: 8, image: B38, title: "B38" },
        { id: 9, image: B39, title: "B39" },
        { id: 10, image: B310, title: "B310" },
        { id: 11, image: B311, title: "B311" },
        { id: 12, image: B312, title: "B312" },
        { id: 13, image: B313, title: "B313" },
      ],
    },
    "5": {
      title: "Sibungthi Sibinai Batch 2",
      images: [
        { id: 7, image: B67, title: "B67" },
        { id: 8, image: B68, title: "B68" },
        { id: 9, image: B69, title: "B69" },
        { id: 10, image: B610, title: "B610" },
        { id: 11, image: B611, title: "B611" },
      ],
    },
    "6": {
      title: "Sibungthi Sibinai Batch 1",
      images: [
        { id: 4, image: B44, title: "B44" },
        { id: 5, image: B45, title: "B45" },
        { id: 6, image: B46, title: "B46" },
        { id: 11, image: B311, title: "B311" },
        { id: 12, image: B312, title: "B312" },
        { id: 13, image: B313, title: "B313" },
      ],
    },
  };

  const currentGallery = id ? galleryData[id] : null;

  if (!currentGallery) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Gallery not found</h1>
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
            <p className="text-lg md:text-xl max-w-3xl opacity-90 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
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
              const prev = (selectedIndex - 1 + currentGallery.images.length) % currentGallery.images.length;
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
