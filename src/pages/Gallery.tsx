import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image as ImageIcon, Camera } from "lucide-react";
import batchSix from "@/assets/B6main.jpg";
import batchFive from "@/assets/B5main.jpg";
import batchFour from "@/assets/B4main.jpg";
import batchThree from "@/assets/B3main.jpg";
import batchTwo from "@/assets/B2main.jpg";
import batchOne from "@/assets/B1main.jpg";
const Gallery = () => {
  const navigate = useNavigate();

  const galleryItems = [
    {
      id: 1,
      image: batchSix,
      title: "Sibungthi Sibinai Batch 6",
      category: "Batch 6",
    },
    {
      id: 2,
      image: batchFive,
      title: "Sibungthi Sibinai Batch 5",
      category: "Batch 5",
    },
    {
      id: 3,
      image: batchFour,
      title: "Sibungthi Sibinai Batch 4",
      category: "batch 4",
    },
    {
      id: 4,
      image: batchThree,
      title: "Sibungthi Sibinai Batch 3",
      category: "Batch 3",
    },
    {
      id: 5,
      image: batchTwo,
      title: "Sibungthi Sibinai Batch 2",
      category: "Batch 2",
    },
    {
      id: 6,
      image: batchOne,
      title: "Sibungthi Sibinai Batch 1",
      category: "Batch 1",
    },
  ];


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Header */}
        <section className="relative py-32 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-gold/40 animate-fade-in">
                <Camera className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-primary-foreground">Visual Stories</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Gallery
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Moments from Our Journey of Empowerment and Innovation
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className="border-0 shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group animate-scale-in"
                    onClick={() => navigate(`/gallery/${item.id}`)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-semibold px-2 py-1 bg-gold rounded-full">{item.category}</span>
                      </div>
                    </div>
                    <CardContent className="pt-6 pb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
