import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import communityTraining from "@/assets/community-training.jpg";
import batchSuccess from "@/assets/batch-success.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const GalleryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Define gallery data for each category
  const galleryData: Record<string, { title: string; images: Array<{ id: number; image: string; title: string }> }> = {
    "1": {
      title: "Community Training Session",
      images: [
        { id: 1, image: communityTraining, title: "Training Workshop Day 1" },
        { id: 2, image: communityTraining, title: "Hands-on Practice Session" },
        { id: 3, image: communityTraining, title: "Group Discussion" },
        { id: 4, image: communityTraining, title: "Technical Training" },
        { id: 5, image: communityTraining, title: "Community Engagement" },
        { id: 6, image: communityTraining, title: "Skill Development" },
      ],
    },
    "2": {
      title: "Batch Graduation Ceremony",
      images: [
        { id: 1, image: batchSuccess, title: "Certificate Distribution" },
        { id: 2, image: batchSuccess, title: "Graduation Ceremony" },
        { id: 3, image: batchSuccess, title: "Award Winners" },
        { id: 4, image: batchSuccess, title: "Group Photo" },
        { id: 5, image: batchSuccess, title: "Chief Guest Address" },
        { id: 6, image: batchSuccess, title: "Student Presentations" },
      ],
    },
    "3": {
      title: "CIT Kokrajhar Campus",
      images: [
        { id: 1, image: heroCampus, title: "Main Building" },
        { id: 2, image: heroCampus, title: "Campus Grounds" },
        { id: 3, image: heroCampus, title: "Innovation Lab" },
        { id: 4, image: heroCampus, title: "Library Facility" },
        { id: 5, image: heroCampus, title: "Sports Complex" },
        { id: 6, image: heroCampus, title: "Administrative Block" },
      ],
    },
    "4": {
      title: "Technology Workshop",
      images: [
        { id: 1, image: communityTraining, title: "IoT Workshop" },
        { id: 2, image: communityTraining, title: "3D Printing Demo" },
        { id: 3, image: communityTraining, title: "Coding Session" },
        { id: 4, image: communityTraining, title: "Robotics Training" },
        { id: 5, image: communityTraining, title: "AI/ML Workshop" },
        { id: 6, image: communityTraining, title: "Tech Demonstration" },
      ],
    },
    "5": {
      title: "Certificate Distribution",
      images: [
        { id: 1, image: batchSuccess, title: "Batch 1 Certificates" },
        { id: 2, image: batchSuccess, title: "Batch 2 Certificates" },
        { id: 3, image: batchSuccess, title: "Batch 3 Certificates" },
        { id: 4, image: batchSuccess, title: "Batch 4 Certificates" },
        { id: 5, image: batchSuccess, title: "Batch 5 Certificates" },
        { id: 6, image: batchSuccess, title: "Batch 6 Certificates" },
      ],
    },
    "6": {
      title: "Innovation Hub",
      images: [
        { id: 1, image: heroCampus, title: "Innovation Center" },
        { id: 2, image: heroCampus, title: "Research Lab" },
        { id: 3, image: heroCampus, title: "Prototyping Area" },
        { id: 4, image: heroCampus, title: "Collaboration Space" },
        { id: 5, image: heroCampus, title: "Maker Space" },
        { id: 6, image: heroCampus, title: "Technology Showcase" },
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentGallery.images.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden cursor-pointer hover:shadow-medium transition-all group"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain animate-scale-in"
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryDetail;
