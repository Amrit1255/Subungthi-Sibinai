import { Users, Award, BookOpen, Target } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "5000+",
      label: "Beneficiaries",
      description: "ST community members empowered",
    },
    {
      icon: BookOpen,
      value: "6",
      label: "Batches Completed",
      description: "Subungthi Sibinai programs",
    },
    {
      icon: Award,
      value: "21+",
      label: "Villages",
      description: "Across Kokrajhar district",
    },
    {
      icon: Target,
      value: "100%",
      label: "Success Rate",
      description: "In skill development",
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-background shadow-sm hover:shadow-medium transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold mb-4">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
