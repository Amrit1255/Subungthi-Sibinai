import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, ArrowRight, CheckCircle2, TrendingUp, BookOpen, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import batchSuccess from "@/assets/batch-success.jpg";

const Programs = () => {
  const batches = [
    {
      id: 1,
      title: "Subungthi Sibinai – Batch 1",
      duration: "January 2023 – June 2023",
      participants: 45,
      description: "The inaugural batch focused on digital literacy and basic computer skills for rural youth.",
      status: "completed",
    },
    {
      id: 2,
      title: "Subungthi Sibinai – Batch 2",
      duration: "July 2023 – December 2023",
      participants: 52,
      description: "Advanced training in entrepreneurship and business development for aspiring entrepreneurs.",
      status: "completed",
    },
    {
      id: 3,
      title: "Subungthi Sibinai – Batch 3",
      duration: "January 2024 – June 2024",
      participants: 48,
      description: "Specialized program in agricultural technology and sustainable farming practices.",
      status: "completed",
    },
    {
      id: 4,
      title: "Subungthi Sibinai – Batch 4",
      duration: "July 2024 – December 2024",
      participants: 55,
      description: "Training in traditional crafts innovation and digital marketing for artisans.",
      status: "completed",
    },
    {
      id: 5,
      title: "Subungthi Sibinai – Batch 5",
      duration: "January 2025 – June 2025",
      participants: 60,
      description: "Technology-driven solutions for community development and social innovation.",
      status: "ongoing",
    },
    {
      id: 6,
      title: "Subungthi Sibinai – Batch 6",
      duration: "March 2025 – September 2025",
      participants: 65,
      description: "Comprehensive program covering AI, IoT, and modern technology applications for rural development.",
      featured: true,
      status: "enrolling",
    },
  ];

  const programFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "6 months of structured learning covering technology, entrepreneurship, and practical skills",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Guidance from industry experts and experienced faculty members throughout the program",
    },
    {
      icon: Lightbulb,
      title: "Hands-on Projects",
      description: "Real-world project implementation with focus on community impact and innovation",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Recognized certification upon successful completion with placement assistance",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-muted-foreground";
      case "ongoing": return "text-primary";
      case "enrolling": return "text-gold";
      default: return "text-muted-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "ongoing": return "Ongoing";
      case "enrolling": return "Now Enrolling";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Header */}
        <section className="relative py-16 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
          <div className="absolute inset-0 opacity-8">
            <div className="absolute top-16 right-8 w-48 h-48 bg-gold rounded-full blur-3xl" />
            <div className="absolute bottom-12 left-6 w-64 h-64 bg-gold-light rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 py-2 rounded-full mb-5 border border-gold/40">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-primary-foreground">Flagship Training Program</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Our Programs
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
                Subungthi Sibinai – Empowering Communities Through Technology Training
              </p>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="border-0 shadow-2xl overflow-hidden animate-scale-in">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={batchSuccess}
                      alt="Batch Success - Community Training"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-smoke">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      About Subungthi Sibinai
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Subungthi Sibinai is our flagship training program designed to empower ST community members with modern technological skills, entrepreneurial mindset, and sustainable livelihood opportunities.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Each batch runs for 6 months with comprehensive training, hands-on projects, and certification upon successful completion.
                    </p>
                    <div className="flex items-center gap-4 text-primary">
                      <TrendingUp className="w-6 h-6" />
                      <span className="text-lg font-semibold">500+ Lives Transformed Across 6 Batches</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Program Features */}
        <section className="py-20 bg-gradient-smoke">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  What We Offer
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary via-gold to-primary mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {programFeatures.map((feature, index) => (
                  <Card 
                    key={index}
                    className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="pt-8 pb-6 text-center">
                      <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-gold transition-all duration-300">
                        <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Batch Listings */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Program Batches
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary via-gold to-primary mx-auto mb-8"></div>
                <p className="text-xl text-muted-foreground">
                  Explore our training batches and their unique focus areas
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {batches.map((batch, index) => (
                  <Card 
                    key={batch.id}
                    className={`rounded-2xl border border-border shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden group ${batch.featured ? 'ring-2 ring-gold' : ''} h-full flex flex-col`}
                  >
                    {/* Top status stripe */}
                    <div className={`h-1 bg-gradient-to-r ${batch.status === 'enrolling' ? 'from-gold to-gold-dark' : 'from-primary to-primary-dark'}`} />

                    <CardContent className="pt-6 pb-6 px-6 md:px-8 flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-semibold text-foreground">
                          {batch.title}
                        </h3>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          batch.status === 'enrolling' 
                            ? 'bg-gold/20 text-gold' 
                            : batch.status === 'ongoing'
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {getStatusBadge(batch.status)}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-3 text-muted-foreground text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{batch.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{batch.participants} Participants</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-5">
                        {batch.description}
                      </p>

                      <Button 
                        asChild 
                        variant={batch.featured ? "default" : "outline"}
                        className="w-full"
                      >
                        <Link to={`/batch/${batch.id}`} aria-label={`View details for ${batch.title}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-20 w-64 h-64 bg-gold rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-gold-light rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your Future?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Join our next batch of Subungthi Sibinai and gain the skills, knowledge, and support you need to create sustainable livelihoods through technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6 group"
                >
                  <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link to="/contact">
                    Contact Us
                  </Link>
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

export default Programs;
