import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { Calendar, Users, Award, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import B1main from "@/assets/B1main.jpg";
import B2main from "@/assets/B2main.jpg";
import B3main from "@/assets/B3main.jpg";
import B4main from "@/assets/B4main.jpg";
import B5main from "@/assets/B5main.jpg";
import B6main from "@/assets/B6main.jpg";

// batch 2 images
import B21 from "@/assets/B21.jpg";
import B22 from "@/assets/B22.jpg";

// batch3 images
import B31 from "@/assets/batch3/B31.jpg";
import B32 from "@/assets/batch3/B32.jpg";
import B33 from "@/assets/batch3/B33.jpg";
import B34 from "@/assets/batch3/B34.jpg";
import B35 from "@/assets/batch3/B35.jpg";

// batch4 images
import B41 from "@/assets/batch4/B41.jpg";
import B42 from "@/assets/batch4/B42.jpg";
import B43 from "@/assets/batch4/B43.jpg";
import B44 from "@/assets/batch4/B44.jpg";
import B45 from "@/assets/batch4/B45.jpg";

// batch5 images
import B51 from "@/assets/batch5/B51.jpg";
import B52 from "@/assets/batch5/B52.jpg";
import B53 from "@/assets/batch5/B53.jpg";
import B54 from "@/assets/batch5/B54.jpg";
import B56 from "@/assets/batch5/B56.jpg";

// batch6 images
import B62 from "@/assets/batch6/B62.jpg";
import B63 from "@/assets/batch6/B63.jpg";
import B64 from "@/assets/batch6/B64.jpg";
import B65 from "@/assets/batch6/B65.jpg";
import B66 from "@/assets/batch6/B66.jpg";

const textCls = "text-base leading-relaxed";
const headingCls = "font-bold text-base tracking-wide";
const subHeadingCls = "font-semibold text-base";

const BatchDetail = () => {
  const { id } = useParams();

  const allBatches: Record<string, any> = {
    "1": {
      title: `Subungthi Sibinai – Batch 1`,
      duration: "January 2023 – June 2023",
      participants: 45,
      description:
        "The first batch of Subungthi Sibinai focused on building a strong digital foundation for participants, introducing them to essential computer skills, internet usage, and basic productivity tools. The training helped learners gain confidence in using technology for everyday tasks and prepared them for advanced modules in future batches. Emphasis was placed on hands-on learning, digital awareness, and empowering the ST community to embrace digital transformation.",
      highlights: [
        "Fundamental computer operations and digital literacy training",
        "Introduction to productivity tools such as MS Office and Google Workspace",
        "Basics of internet safety, email communication, and online research",
        "Hands-on mini projects for building confidence in real-world tasks",
        "Orientation on career pathways in digital and technical fields"
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
        { name: "Anjali Brahma", achievement: "Overall Top Performer" },
        { name: "Susma Narzary", achievement: "Top Learner" },
        { name: "Bikash Boro", achievement: "Top Performer" },
      ],
      mainImage: B1main,
      gallery: [B35, B41, B45, B56, B64],
    },
    "2": {
      title: `Subungthi Sibinai – Batch 2`,
      duration: "July 2023 – December 2023",
      participants: 52,
      description:
        "The second batch of Subungthi Sibinai expanded participants’ capabilities by introducing creative digital skills and intermediate-level computer applications. Learners explored graphic design, content creation, and digital productivity tools, enabling them to express ideas visually and build foundational skills for freelancing and entrepreneurship. This batch focused on practical, industry-relevant digital media training tailored for the ST community.",
      highlights: [
        "Introduction to graphic design using Canva and Adobe tools",
        "Basics of digital content creation: posters, banners, and social media creatives.",
        "Intermediate computer applications and file management.",
        "Creative assignments designed for real-world community and business use.",
        "Guidance on how digital design skills can be used for income generation.",
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
        { name: "Jwmwi Basumatary", achievement: "Best Performer" },
        { name: "Kanak Kumar Boro", achievement: "Top Learner" },
        { name: "Mayadebi Basumatary", achievement: "Top Performer" },
      ],
      mainImage: B2main,
      gallery: [B21, B22],
    },
    "3": {
      title: `Subungthi Sibinai – Batch 3`,
      duration: "January 2024 – June 2024",
      participants: 48,
      description:
        "The third batch of Subungthi Sibinai focused on building strong digital productivity skills along with an introduction to web technologies. Participants learned how modern digital tools enhance efficiency, communication, and problem-solving in both academic and professional environments. The batch also introduced the basics of website structure, enabling learners to understand how the internet and web applications function.",
      highlights: [
        "Digital productivity training using Google Workspace and modern tools",
        "Introduction to HTML, CSS, and fundamental web structure concepts",
        "Practical sessions on online collaboration and digital communication",
        "Hands-on exercises for creating simple static web pages",
        "Awareness sessions on digital careers, freelancing, and online opportunities",

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
        { name: "Tikamaya Rai", achievement: "Top Performer" },
        {name: "Lakhinath Boro", achievement: "Best Performer" },
        {name : "Suman Basumatary", achievement: "Excellence in Learning" },
      ],
      mainImage: B3main,
      gallery: [B31, B32, B33, B34, B35],
    },
    "4": {
      title: `Subungthi Sibinai – Batch 4`,
      duration: "July 2024 – December 2024",
      participants: 55,
      description:
        "The fourth batch of Subungthi Sibinai introduced participants to advanced digital tools and creative technologies, enabling them to design, build, and present real-world digital solutions. This batch elevated learners from foundational skills to mid-level technical competence, focusing on creativity, productivity, and digital problem-solving. Participants engaged in practical assignments that strengthened their confidence and readiness for modern digital careers.",
      highlights: [
        "Advanced digital productivity and workflow management training",
        "Hands-on creative design using Canva, Figma, and other digital tools",
        "Introduction to interactive web elements and improved UI/UX concepts",
        "Practical assignments focused on real-world community problem solving",
        "Career guidance on digital freelancing and portfolio development",

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
        { name: "Manisha bargayary", achievement: "Best performer" },
        { name: "Derhasat Brahma", achievement: "Best Performer" },
        { name: "Nijira Narzary ", achievement: "Best Performer" },
      ],
      mainImage: B4main,
      gallery: [B41, B42, B43, B44, B45],
    },
    "5": {
      title: `Subungthi Sibinai – Batch 5`,
      duration: "January 2025 – June 2025",
      participants: 60,
      description:
        "The fifth batch of Subungthi Sibinai emphasized applied digital skills, introducing participants to a blend of technical learning, innovation tools, and hands-on project development. Learners explored essential technologies such as AI basics, responsive web design, and digital communication strategies. This batch helped participants transition from learners to creators, enabling them to design solutions relevant to their communities.",
      highlights: [
        "Introduction to AI concepts and practical everyday applications",
        "Training in responsive web design and modern UI practices",
        "Hands-on digital communication and presentation workshops",
        "Mini projects focused on solving local challenges through technology",
        "Skill-building sessions for future upskilling in tech and innovation domains",

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
        { name: "Samaina Narzary", achievement: "Top Performer" },
        {name: "Janali Brahma", achievement: "Top Performer" },
        {name: "Mwnthai Brahma ", achievement: "Best Learner" },
      ],
      mainImage: B5main,
      gallery: [B51, B52, B53, B54, B56],
    },
    "6": {
      title: `Subungthi Sibinai – Batch 6`,
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
        { name: "Anuj Narzary ", achievement: "Best Overall Performance" },
        { name: "Biku Basumatary ", achievement: "Dedication and Hard Work" },
        { name: "Fulonita Roy ", achievement: "Best Overall Performance" },
      ],
      mainImage: B6main,
      gallery: [B62, B63, B64, B65, B66],
    },
  };

  const batchData = (id && allBatches[id]) ? allBatches[id] : allBatches["1"];

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
                    <img src={batchData.mainImage} alt={batchData.title} className="w-full h-full object-cover" loading="lazy" />
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
                    {batchData.gallery.map((image: string, i: number) => (
                      <Card key={i} className="overflow-hidden">
                        <div className="aspect-video">
                          <img src={image} alt={`${batchData.title} image ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
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
