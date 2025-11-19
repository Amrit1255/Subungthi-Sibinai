import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Home, Briefcase, DollarSign, ShoppingBag, Smartphone, Sprout } from "lucide-react";

const ProjectArea = () => {
  const beneficiaries = [
    "Unemployed Youth",
    "Women",
    "Self-Help Groups (SHGs)",
    "Farmers",
    "Artisans",
    "Weavers",
    "Students",
    "Startups",
    "Innovators",
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: "Livelihood Benefits",
      description: "Sustainable income generation opportunities through skill development and technology adoption.",
    },
    {
      icon: Users,
      title: "Self-Employment",
      description: "Entrepreneurship training and support for creating independent business ventures.",
    },
    {
      icon: Smartphone,
      title: "Digital Empowerment",
      description: "Digital literacy and technology skills for the modern economy.",
    },
    {
      icon: DollarSign,
      title: "Entrepreneurship",
      description: "Business development support and mentorship for aspiring entrepreneurs.",
    },
    {
      icon: Home,
      title: "Financial Inclusion",
      description: "Access to financial services and resources for community development.",
    },
    {
      icon: ShoppingBag,
      title: "Vocal for Local",
      description: "Promoting local products and traditional crafts in wider markets.",
    },
    {
      icon: Sprout,
      title: "Sustainable Development",
      description: "Environmentally conscious practices for long-term community growth.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
          <div className="max-w-8xl mx-auto px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Project Area Profile
            </h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-90 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Empowering ST Communities in Kokrajhar District
            </p>
          </div>
        </section>

        {/* Target Area Overview */}
        <section className="py-16">
          <div className="max-w-8xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="border-t-4 border-t-primary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">Kokrajhar</h3>
                  <p className="text-muted-foreground">Target District</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-primary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">Simbargaon</h3>
                  <p className="text-muted-foreground">VCDC Area</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-primary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">5</h3>
                  <p className="text-muted-foreground">Target Villages</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-primary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">ST</h3>
                  <p className="text-muted-foreground">Community Focus</p>
                </CardContent>
              </Card>
            </div>

            {/* Beneficiary Groups */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Target Beneficiary Groups
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <ul
                    role="list"
                    aria-label="Target beneficiary groups"
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 p-0 m-0 list-none"
                  >
                    {beneficiaries.map((beneficiary, index) => (
                      <li
                        key={index}
                        role="listitem"
                        className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border hover:shadow-md transition-transform transition-shadow duration-200 transform hover:-translate-y-0.5"
                      >
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full flex-shrink-0">
                          <Users className="w-4 h-4" />
                        </span>
                        <span className="text-foreground font-medium">{beneficiary}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Expected Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Expected Benefits
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="hover:shadow-medium transition-shadow">
                    <CardContent className="pt-6">
                      <benefit.icon className="w-10 h-10 text-primary mb-3" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
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

export default ProjectArea;
