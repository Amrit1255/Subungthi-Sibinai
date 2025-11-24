import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Play } from "lucide-react";

type Testimonial = {
  id: string;
  name: string;
  role?: string;
  quote?: string;
  videoUrl?: string;
};

const initialTestimonials: Testimonial[] = [
  {
    id: "t2",
    name: "Elbina Brahma",
    role: "Alumni - Batch 3",
    quote: "The mentorship and practical assignments made a real difference for my career.",
    videoUrl: "https://www.youtube.com/embed/dFlU7yN7aX4",
  },
  {
    id: "t3",
    name: "Shripuja Basumatary",
    role: "Alumni - Batch 5",
    quote: "I gained skills that helped me start freelancing and support my family.",
    videoUrl: "https://www.youtube.com/embed/StT3_kB3yfo",
  },
  {
    id: "t4",
    name: "Anjali Boro",
    role: "Alumni - Batch 2",
    quote: "The program gave me the confidence to pursue my passion in tech.",
    videoUrl: "https://www.youtube.com/embed/vatFpoJesTo",
  },
  {
    id: "t5",
    name: "Subungthi Sibinai",
    role: "Computer training program",
    quote: "The program gave me the confidence to pursue my passion in tech.",
    videoUrl: "https://www.youtube.com/embed/JoB3Np6kk4U",
  },
  {
    id: "t6",
    name: "Sagar Musahary",
    role: "Alumni - Batch 2",
    quote: "The program gave me the confidence to pursue my passion in tech.",
    videoUrl: "https://www.youtube.com/embed/8wBDKO1AZeY",
  },
];

const Feedback = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || (!quote.trim() && !videoUrl.trim())) return;

    const id = `t${Date.now()}`;
    const newTestimonial: Testimonial = { id, name: name.trim(), role: role.trim() || undefined, quote: quote.trim() || undefined, videoUrl: videoUrl.trim() || undefined };
    setTestimonials([newTestimonial, ...testimonials]);
    setName("");
    setRole("");
    setQuote("");
    setVideoUrl("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Student Testimonials</h1>
          <p className="text-center text-muted-foreground mb-10">Real stories from participants who completed the Subungthi Sibinai program.</p>

          {/* Video / Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((t) => {
              const initials = t.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")
                .toUpperCase();

              return (
                <Card key={t.id} className="overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="relative bg-black">
                    <div className="aspect-video">
                      {t.videoUrl ? (
                        <iframe
                          src={t.videoUrl}
                          className="w-full h-full"
                          title={`testimonial-${t.id}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">No video provided</div>
                      )}
                    </div>

                    {/* Top accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-gold opacity-80" />
                  </div>

                  <CardContent>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">{initials}</div>
                        <div>
                          <div className="font-semibold text-foreground">{t.name}</div>
                          {t.role && <div className="text-sm text-muted-foreground">{t.role}</div>}
                        </div>
                      </div>
                    </div>

                    {t.quote && <p className="mt-3 text-sm text-muted-foreground">{t.quote}</p>}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Feedback;