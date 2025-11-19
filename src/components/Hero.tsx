import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, BookOpen, Users, Target, TrendingUp, Award } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const keyFocus = [
    { icon: GraduationCap, label: "Skill Development", desc: "Hands-on training programs" },
    { icon: BookOpen, label: "Research & Innovation", desc: "Cutting-edge projects" },
    { icon: Users, label: "Community Outreach", desc: "Inclusive participation" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCampus}
          alt="CIT Kokrajhar Campus - Education and Innovation Hub"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background/95 to-accent/6" />
      </div>

      {/* Decorative Geometric Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-accent/10 rounded-full opacity-30" />
        <div className="absolute bottom-32 left-10 w-48 h-48 border-2 border-primary/10 rounded-lg rotate-12 opacity-25" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-tertiary/5 rounded-full blur-2xl opacity-20" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 relative py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary/30 shadow-sm"
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                DST Funded Initiative • Government of India
              </span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Science Technology and Innovation Hub
                <span className="block mt-2 text-primary">at CIT Kokrajhar</span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              STIHUB is a pioneering initiative dedicated to empowering Scheduled Tribe communities through comprehensive training in science, technology, and innovation. We bridge the gap between traditional knowledge and modern technological advancement.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Beneficiaries</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent-dark" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground">Programs</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="group shadow-lg hover:shadow-xl transition-shadow duration-200"
                onClick={scrollToAbout}
                aria-label="Explore Programs"
              >
                Explore Programs
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 hover:bg-primary/5"
                onClick={scrollToAbout}
                aria-label="Learn more about STIHUB"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Information Cards */}
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Focus Areas</h3>
              <div className="space-y-4">
                {keyFocus.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 group cursor-default"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.label}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-primary to-tertiary text-primary-foreground rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2">Our Mission</h3>
              <p className="text-sm opacity-95 leading-relaxed">
                To foster inclusive growth by providing quality education, practical skills, and innovative solutions that address the unique challenges faced by ST communities in the region.
              </p>
            </div>

            {/* Info Badge */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-center">
              <p className="text-sm font-medium text-foreground">
                <span className="text-accent-dark font-bold">Next Batch</span> registrations opening soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
