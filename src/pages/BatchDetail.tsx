import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { Calendar, Users, Award, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import batchSuccess from "@/assets/batch-success.jpg";
import communityTraining from "@/assets/community-training.jpg";

const textCls = "text-base leading-relaxed";
const headingCls = "font-bold text-base tracking-wide";
const subHeadingCls = "font-semibold text-base";

const BatchDetail = () => {
  const { id } = useParams();

  const batchData = {
    title: `Subungthi Sibinai – Batch ${id}`,
    duration: "March 2025 – September 2025",
    participants: 65,
    description:
      "The sixth batch of Subungthi Sibinai focused on cutting-edge technology training including AI, IoT, and modern web development. Participants gained hands-on experience with industry-standard tools and frameworks, preparing them for careers in technology and innovation. The program emphasized practical skill development, entrepreneurship, and community impact.",
    highlights: [
      "Comprehensive training in AI and Machine Learning fundamentals",
      "Hands-on IoT projects for rural development solutions",
      "Modern web development with React and Node.js",
      "Entrepreneurship and business development workshops",
      "Community project implementation and showcase",
    ],
    teamMembers: [
      { name: "Dr. Pranav Singh", role: "Principal Investigator" },
      { name: "Mr. Abhijit Padun", role: "Co-PI" },
      { name: "Dr. Kaushik Sarma", role: "Co-PI" },
      { name: "Swaubhik Chakraborty", role: "Senior Research Fellow" },
      { name: "Amrit Tripathi", role: "Junior Research Fellow" },
      { name: "Jaya Rani Mushahary", role: "Junior Research Fellow" },
      { name: "Ananya Swargiary", role: "Project Assistant" },
      { name: "Manisha Hazarika", role: "Project Coordinator" },
      { name: "Jagadish Roy", role: "Field Assistant" },
    ],
    topPerformers: [
      { name: "Rahul Basumatary", achievement: "Best Overall Performance" },
      { name: "Anjali Boro", achievement: "Innovation Award" },
      { name: "Bikash Narzary", achievement: "Leadership Excellence" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-base text-foreground bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="py-12 bg-gradient-to-br from-primary/95 to-primary-dark text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="flex-1">
                <h1 className={`${headingCls} text-2xl md:text-3xl lg:text-4xl mb-2`}>{batchData.title}</h1>
                <p className="text-sm md:text-base text-primary-foreground/90">Detailed information, highlights and team for this training batch.</p>
              </div>

              <div className="flex gap-3 items-center md:ml-auto">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 rounded-full text-sm">
                  <Calendar size={16} /> {batchData.duration}
                </span>
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 rounded-full text-sm">
                  <Users size={16} /> {batchData.participants}
                </span>
                <Link to="/programs" aria-label="Back to programs">
                  <Button variant="ghost" className="ml-2">Back</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content: two-column layout */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main column */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="overflow-hidden">
                  <div className="aspect-video">
                    <img src={batchSuccess} alt="Batch" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <CardContent className="pt-6">
                    <h2 className={`${headingCls} mb-3`}>About This Batch</h2>
                    <p className={`${textCls} mb-5`}>{batchData.description}</p>

                    <h3 className={`${subHeadingCls} mb-3`}>Program Highlights</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {batchData.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="inline-flex w-3 h-3 rounded-full bg-primary mt-2 shrink-0" />
                          <span className={textCls}>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                      <Link to="/contact">
                        <Button size="lg" className="w-full sm:w-auto">Contact Program Team</Button>
                      </Link>
                      <Link to="/programs">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">View Other Batches</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Performers */}
                <div>
                  <h2 className={`${headingCls} text-center mb-6`}>Top Performers</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {batchData.topPerformers.map((p, i) => (
                      <Card key={i} className="text-center">
                        <CardContent className="pt-6">
                          <div className="mx-auto mb-3 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                            <Award size={24} className="text-gold" />
                          </div>
                          <div className={`${subHeadingCls}`}>{p.name}</div>
                          <p className="text-muted-foreground">{p.achievement}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h2 className={`${headingCls} text-center mb-6`}>Batch Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[batchSuccess, communityTraining, batchSuccess, communityTraining].map((image, i) => (
                      <Card key={i} className="overflow-hidden">
                        <div className="aspect-video">
                          <img src={image} alt={`Batch ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <Card>
                    <CardContent>
                      <h3 className="text-lg font-semibold mb-3">Quick Facts</h3>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Duration</span>
                          <span className="font-medium">{batchData.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Participants</span>
                          <span className="font-medium">{batchData.participants}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Team Members</span>
                          <span className="font-medium">{batchData.teamMembers.length}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent>
                      <h3 className="text-lg font-semibold mb-3">Program Team</h3>
                      <div className="flex flex-col gap-3">
                        {batchData.teamMembers.slice(0, 5).map((m, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                              <User size={16} className="text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{m.name}</div>
                              <div className="text-sm text-muted-foreground">{m.role}</div>
                            </div>
                          </div>
                        ))}
                        {batchData.teamMembers.length > 5 && (
                          <div className="text-sm text-muted-foreground">And {batchData.teamMembers.length - 5} more...</div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BatchDetail;
