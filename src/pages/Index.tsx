import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Eye, Lightbulb, Users, Briefcase, TrendingUp, Heart, GraduationCap, Handshake, Sparkles, Zap, Globe, ChevronLeft, ChevronRight, Calendar, Download, ExternalLink, Bell } from "lucide-react";
import communityTraining from "@/assets/community-training.jpg";
import batchSuccess from "@/assets/batch-success.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const notices = [
    { title: "Application for Batch 7 Now Open", date: "2025-01-15", link: "#", download: "#" },
    { title: "Success Stories: Batch 6 Graduation", date: "2025-01-10", link: "#", download: "#" },
    { title: "Workshop on Digital Marketing", date: "2025-01-05", link: "#", download: "#" },
    { title: "New Partnership Announcement", date: "2024-12-28", link: "#", download: "#" },
    { title: "Year End Report 2024", date: "2024-12-20", link: "#", download: "#" },
  ];

  const events = [
    { date: "25", month: "Jan", year: "2025", title: "Entrepreneurship Bootcamp", description: "3-day intensive bootcamp for aspiring entrepreneurs covering business planning and funding strategies." },
    { date: "10", month: "Feb", year: "2025", title: "Technology Innovation Fair", description: "Showcase of innovative projects from community members and networking with industry experts." },
    { date: "15", month: "Mar", year: "2025", title: "Women in Tech Workshop", description: "Special workshop focused on empowering women in technology and digital entrepreneurship." },
  ];
  
  const benefits = [
    {
      icon: Briefcase,
      title: "Self-Employment",
      description: "Creating sustainable business opportunities for community members",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Financial Inclusion",
      description: "Enabling economic growth through skill development and entrepreneurship",
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      title: "Digital Empowerment",
      description: "Bridging the digital divide with technology training and awareness",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Livelihood Benefits",
      description: "Direct impact on income generation and quality of life",
      color: "text-primary"
    },
    {
      icon: Sparkles,
      title: "Innovation Support",
      description: "Fostering creativity and innovative solutions for local challenges",
      color: "text-primary"
    },
    {
      icon: Handshake,
      title: "Vocal for Local",
      description: "Promoting local products and traditional knowledge with modern tech",
      color: "text-primary"
    }
  ];

  const targetBeneficiaries = [
    { icon: Users, label: "Unemployed Youth", count: "200+" },
    { icon: Users, label: "Women & SHGs", count: "150+" },
    { icon: Users, label: "Farmers & Artisans", count: "100+" },
    { icon: GraduationCap, label: "Students", count: "50+" }
  ];

  const testimonials = [
    {
      name: "Ranjit Basumatary",
      role: "Batch 3 Participant",
      image: "👨‍🎓",
      quote: "STIHUB gave me the skills and confidence to start my own digital services business. The training was practical and directly applicable to real-world scenarios.",
      rating: 5
    },
    {
      name: "Anjali Daimary",
      role: "Women Entrepreneur",
      image: "👩‍💼",
      quote: "Through the programs, I learned how to integrate traditional crafts with e-commerce platforms. Now I'm selling our local products nationwide!",
      rating: 5
    },
    {
      name: "Jwngswr Boro",
      role: "Agriculture Innovator",
      image: "🌾",
      quote: "The technology training helped me implement smart farming techniques. My yield has increased by 40% while reducing costs significantly.",
      rating: 5
    },
    {
      name: "Malati Narzary",
      role: "Batch 4 Graduate",
      image: "👩‍🎓",
      quote: "I never thought I could learn technology at my age, but STIHUB's supportive environment made it possible. Now I help manage our village's digital initiatives.",
      rating: 5
    },
    {
      name: "Biswajit Brahma",
      role: "Tech Entrepreneur",
      image: "💼",
      quote: "The mentorship and resources provided by STIHUB were instrumental in launching my startup. We're now providing digital solutions to local businesses.",
      rating: 5
    },
    {
      name: "Sanjita Mushahary",
      role: "Batch 5 Participant",
      image: "👩",
      quote: "STIHUB empowered me with financial literacy and digital marketing skills. I've successfully grown my small business and now employ three people.",
      rating: 5
    },
    {
      name: "Pranab Basumatary",
      role: "Innovation Leader",
      image: "🎯",
      quote: "The program opened my eyes to the possibilities of combining traditional knowledge with modern technology. It's been truly transformative.",
      rating: 5
    },
    {
      name: "Rwngsar Daimary",
      role: "Community Organizer",
      image: "🤝",
      quote: "STIHUB didn't just teach me skills—it connected me with a network of like-minded innovators. Together, we're making real change in our community.",
      rating: 5
    },
    {
      name: "Lakhimi Boro",
      role: "Digital Trainer",
      image: "👩‍🏫",
      quote: "After completing the program, I now train others in digital literacy. It's incredibly fulfilling to pass on the knowledge and empower more community members.",
      rating: 5
    }
  ];

  const testimonialsPerPage = 3;
  const maxIndex = Math.max(0, testimonials.length - testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentTestimonialIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevTestimonials = () => {
    setCurrentTestimonialIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <StatsSection />

        {/* Notices & Events Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Latest Notices */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Bell className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Latest Notices</h2>
                </div>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-primary/5">
                          <tr>
                            <th className="text-left p-4 text-sm font-semibold text-foreground">Notice</th>
                            <th className="text-left p-4 text-sm font-semibold text-foreground">Date</th>
                            <th className="text-right p-4 text-sm font-semibold text-foreground">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {notices.map((notice, index) => (
                            <tr key={index} className="border-t border-border hover:bg-muted/50 transition-colors">
                              <td className="p-4 text-foreground">{notice.title}</td>
                              <td className="p-4 text-muted-foreground text-sm">{notice.date}</td>
                              <td className="p-4">
                                <div className="flex items-center justify-end gap-2">
                                  <Button asChild size="sm" variant="outline" className="gap-1">
                                    <a href={notice.link} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="w-3 h-3" />
                                      View
                                    </a>
                                  </Button>
                                  <Button asChild size="sm" variant="default" className="gap-1">
                                    <a href={notice.download} download>
                                      <Download className="w-3 h-3" />
                                      Download
                                    </a>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Events */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
                </div>
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <Card key={index} className="hover:shadow-medium transition-all hover:-translate-y-1 duration-300">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex flex-col items-center justify-center text-white">
                              <div className="text-2xl font-bold leading-none">{event.date}</div>
                              <div className="text-xs font-medium uppercase">{event.month}</div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-smoke">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">About STIHUB</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Transforming Communities Through Innovation
                </h2>
                <p className="text-description text-muted-foreground mb-6 leading-relaxed">
                  The Science Technology and Innovation Hub (STIHUB) at CIT Kokrajhar is a transformative initiative funded by the Department of Science & Technology, Government of India, specifically designed to empower the Scheduled Tribe (ST) communities of Kokrajhar District.
                </p>
                <p className="text-description text-muted-foreground mb-6 leading-relaxed">
                  Located within the Bodoland Territorial Region (BTR) of Assam, our hub serves as a catalyst for sustainable development, blending traditional knowledge with modern technology to create meaningful livelihood opportunities.
                </p>
                <Button asChild variant="default" size="lg" className="group">
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <img
                  src={communityTraining}
                  alt="Community Training"
                  className="rounded-2xl shadow-elegant w-full h-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Mission, Vision, Objectives */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <Card className="border-t-4 border-t-primary hover:shadow-medium transition-all hover:-translate-y-2 duration-300">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-description text-muted-foreground leading-relaxed">
                    To demonstrate innovative approaches for sustainable local livelihoods through science and technology intervention.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-primary hover:shadow-medium transition-all hover:-translate-y-2 duration-300">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <Eye className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-description text-muted-foreground leading-relaxed">
                    To enhance the impact of S&T initiatives through learning, sharing, and technology dissemination among ST communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-primary hover:shadow-medium transition-all hover:-translate-y-2 duration-300">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <Lightbulb className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Approach</h3>
                  <p className="text-description text-muted-foreground leading-relaxed">
                    Supporting NGOs and entrepreneurs in linking traditional knowledge with modern technology for community benefit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Expected Benefits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Empowering Through Innovation
              </h2>
              <p className="text-description text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive programs deliver tangible benefits to ST community members, fostering sustainable development and economic growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-medium transition-all hover:-translate-y-2 duration-300 border-l-4 border-l-primary"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
                      <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-description text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Target Beneficiaries Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Target Beneficiaries
              </h2>
              <p className="text-description text-muted-foreground max-w-2xl mx-auto">
                Serving diverse groups within the Scheduled Tribe communities of Kokrajhar District
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {targetBeneficiaries.map((beneficiary, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-medium transition-all hover:scale-105 duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="pt-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark mb-6">
                      <beneficiary.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{beneficiary.count}</div>
                    <div className="text-xl font-semibold text-foreground">{beneficiary.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Preview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={batchSuccess}
                  alt="Batch Success"
                  className="rounded-2xl shadow-elegant w-full h-auto hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Our Programs</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Subungthi Sibinai Initiative
                </h2>
                <p className="text-description text-muted-foreground mb-6 leading-relaxed">
                  Our flagship program "Subungthi Sibinai" has successfully completed 6 batches, training over 500 beneficiaries in various skills including digital literacy, entrepreneurship, and technology-based livelihood programs.
                </p>
                <p className="text-description text-muted-foreground mb-8 leading-relaxed">
                  Each batch runs for 6 months, providing comprehensive training, mentorship, and certification to empower ST community members with market-relevant skills.
                </p>
                <Button asChild variant="default" size="lg" className="group">
                  <Link to="/programs">
                    Explore All Programs
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                What Our Participants Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Real experiences from community members who transformed their lives through STIHUB programs
              </p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.slice(currentTestimonialIndex, currentTestimonialIndex + testimonialsPerPage).map((testimonial, index) => (
                  <Card 
                    key={index}
                    className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group animate-fade-in"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                          {testimonial.image}
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-gold">⭐</span>
                        ))}
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-center gap-4 mt-12">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonials}
                  className="h-12 w-12 rounded-full border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Previous testimonials"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonialIndex(index * testimonialsPerPage > maxIndex ? maxIndex : index * testimonialsPerPage)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        Math.floor(currentTestimonialIndex / testimonialsPerPage) === index
                          ? "w-8 bg-primary"
                          : "w-2 bg-primary/30 hover:bg-primary/50"
                      }`}
                      aria-label={`Go to testimonial set ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonials}
                  className="h-12 w-12 rounded-full border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Next testimonials"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
