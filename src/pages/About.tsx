import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import batchSuccess from "@/assets/batch-success.jpg";
import B4main from "@/assets/B4main.jpg";
import { Target, Eye, Lightbulb, Users, TrendingUp, Heart, Award, Rocket, Globe, Shield } from "lucide-react";

const About = () => {
  const objectives = [
    {
      icon: Target,
      title: "Sustainable Livelihoods",
      description: "Demonstrating innovative approaches for sustainable local livelihoods through technology integration"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Supporting NGOs and entrepreneurs to link traditional knowledge with modern technology"
    },
    {
      icon: TrendingUp,
      title: "Impact Enhancement",
      description: "Enhancing impact through learning, sharing, and technology dissemination across communities"
    },
    {
      icon: Lightbulb,
      title: "Innovation Ecosystem",
      description: "Building a thriving innovation ecosystem for ST communities in Kokrajhar district"
    }
  ];

  const achievements = [
    { icon: Users, value: "500+", label: "Beneficiaries Trained" },
    { icon: Award, value: "6", label: "Successful Batches" },
    { icon: Rocket, value: "50+", label: "Community Projects" },
    { icon: Globe, value: "100+", label: "Villages Reached" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/8 via-background to-secondary/8 pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiMwMDZBNzEiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        {/* Decorative elements (subtle) */}
        <div className="absolute top-16 right-8 w-44 h-44 bg-gold rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-10 left-6 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-16" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/8 border border-primary/15 rounded-full mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">DST — Government of India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3">
              About <span className="text-primary">Subungthi Sibinai</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Initiative by Science, Technology and Innovation Hub at Central Institute of Technology, Kokrajhar
            </p>
          </div>

          {/* Key Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="relative overflow-hidden rounded-xl border border-primary/10 bg-card/60 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <CardContent className="p-5 text-center">
                  <div className="mx-auto mb-3 grid place-items-center">
                    <div className="w-12 h-12 rounded-lg grid place-items-center bg-gradient-to-br from-primary/12 to-secondary/12 text-primary ring-1 ring-primary/20">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {item.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 rounded-full">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Journey</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold">
                Empowering <span className="text-primary">Communities</span> Through Innovation
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                STIHUB is a flagship initiative funded by the Department of Science & Technology (DST), Government of India, established at the Central Institute of Technology, Kokrajhar. Located in the Bodoland Territorial Region (BTR) of Assam, we are dedicated to transforming lives through science, technology, and innovation.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our hub serves as a catalyst for change, empowering Scheduled Tribe (ST) communities across Kokrajhar District by bridging the gap between traditional knowledge and modern technological solutions. We focus on creating sustainable livelihoods, fostering entrepreneurship, and building a culture of innovation at the grassroots level.
              </p>
            </div>

            <Card className="border border-primary/10 bg-card/70">
              <CardContent className="p-6">
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                      <p className="text-sm text-muted-foreground">
                        Central Institute of Technology, Kokrajhar, Bodoland Territorial Region, Assam
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Focus</h3>
                      <p className="text-sm text-muted-foreground">
                        Empowering ST communities through technology, innovation, and sustainable development
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Funding</h3>
                      <p className="text-sm text-muted-foreground">
                        Supported by Department of Science & Technology (DST), Government of India
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="border-0 shadow-2xl overflow-hidden animate-scale-in">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={B4main}
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

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-secondary/6 to-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Mission & <span className="text-primary">Vision</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Driving sustainable development and innovation in rural communities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border border-primary/10 bg-card">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" /> <span>Demonstrate innovative approaches for sustainable local livelihoods</span></li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" /> <span>Support NGOs and entrepreneurs linking traditional knowledge with technology</span></li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" /> <span>Enhance impact through learning, sharing, and technology dissemination</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-primary/10 bg-card">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" /> <span>Create a thriving innovation ecosystem in Kokrajhar district</span></li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" /> <span>Transform ST communities through technology and entrepreneurship</span></li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" /> <span>Build sustainable models for rural development and empowerment</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Key <span className="text-primary">Objectives</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Strategic focus areas for community transformation and sustainable development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="border border-primary/10 bg-card p-4">
                <CardContent className="p-4 text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <objective.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{objective.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gradient-to-br from-primary/6 to-secondary/10">
        <div className="max-w-5xl mx-auto px-4">
          <Card className="border border-primary/10 bg-card">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Our <span className="text-primary">Approach</span></h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">Target Beneficiaries:</strong> We serve unemployed youth, women, Self-Help Groups (SHGs), farmers, artisans, weavers, students, startups, and innovators from Scheduled Tribe communities across Kokrajhar district.</p>
                <p><strong className="text-foreground">Expected Benefits:</strong> Our programs deliver tangible outcomes including livelihood benefits, self-employment opportunities, digital empowerment, entrepreneurship development, financial inclusion, and support for the "Vocal for Local" initiative.</p>
                <p><strong className="text-foreground">Implementation Strategy:</strong> Through our flagship program "Subungthi Sibinai" (meaning "Together We Rise"), we provide comprehensive training, mentorship, and resources to help participants transform their ideas into sustainable ventures that benefit their communities.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
