import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: ["Central Institute of Technology", "Kokrajhar, Assam", "Bodoland Territorial Region (BTR)"],
      color: "from-primary to-primary-light",
    },
    {
      icon: Mail,
      title: "Email",
      content: ["stihub@cit.ac.in"],
      link: "mailto:stihub@cit.ac.in",
      color: "from-gold to-gold-light",
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["+91 7002571322"],
      color: "from-primary-dark to-primary",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: ["Monday - Friday", "9:00 AM - 5:00 PM"],
      color: "from-gold-dark to-gold",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Header */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-12 left-6 w-56 h-56 bg-gold rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-12 right-6 w-72 h-72 bg-gold-light rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-gold/40 animate-fade-in">
                <MessageSquare className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-primary-foreground">We're Here to Help</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Get in Touch
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="rounded-lg border border-border shadow-sm hover:shadow-md transition-transform duration-300 group overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-primary to-primary-light"></div>
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 bg-gradient-to-br from-primary to-primary-light rounded-xl mb-4 group-hover:scale-105 transition-transform duration-200"> 
            <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                {info.link ? (
            <a
              href={info.link}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {info.content.map((line, i) => (
                <p key={i} className="text-sm">{line}</p>
              ))}
            </a>
                ) : (
            info.content.map((line, i) => (
              <p key={i} className="text-sm text-muted-foreground">{line}</p>
            ))
                )}
              </CardContent>
            </Card>
          ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-20 bg-gradient-smoke">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="animate-slide-in">
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                      Send Us a Message
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <Card className="border-0 shadow-xl">
                    <CardContent className="pt-8 pb-6 px-8">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-base font-semibold">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="h-12 text-base"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-base font-semibold">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            className="h-12 text-base"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-base font-semibold">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="h-12 text-base"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-base font-semibold">
                            Message *
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us how we can help you..."
                            required
                            rows={6}
                            className="text-base resize-none"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full text-lg py-6 group"
                        >
                          <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Map & Additional Info */}
                <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                      Visit Our Campus
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Located in the heart of Kokrajhar, our campus is easily accessible and equipped with modern facilities.
                    </p>
                  </div>

                  {/* Map (Google Maps embed) */}
                  <Card className="rounded-lg border border-border shadow-sm overflow-hidden">
                    <div className="aspect-video">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7142.701209389135!2d90.29162458652496!3d26.47665394733496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3758f4d277d13e8d%3A0x233749495bfdb465!2sCentral%20Institute%20of%20Technology%2C%20Kokrajhar!5e0!3m2!1sen!2sin!4v1763450080660!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        title="Central Institute of Technology, Kokrajhar"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </Card>

                  {/* Additional Info Card */}
                  <Card className="rounded-lg border border-border shadow-sm overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
                      <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                        Our team typically responds to inquiries within 24 hours during business days. For urgent matters, please call us directly.
                      </p>
                      <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                        <Clock className="w-5 h-5 text-gold" />
                        <div>
                          <p className="font-semibold">Office Hours</p>
                          <p className="text-sm text-primary-foreground/80">Mon - Fri: 9:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-smoke">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Frequently Asked Questions</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Got Questions? We've Got Answers
                </h2>
                <p className="text-muted-foreground text-base">
                  Find concise answers to common questions about STIHUB programs and services.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Who can participate in STIHUB programs?",
                    answer: "STIHUB programs are open to all members of ST communities in Kokrajhar District, including unemployed youth, women, SHGs, farmers, artisans, weavers, students, and innovators."
                  },
                  {
                    question: "Are the training programs free?",
                    answer: "Yes, all training programs under STIHUB are completely free of cost as they are funded by the Department of Science & Technology, Government of India."
                  },
                  {
                    question: "What is the duration of the training programs?",
                    answer: "Program duration varies depending on the specific training. Most programs run for 3-6 months with both theoretical and practical components."
                  },
                  {
                    question: "Do I need prior technical knowledge?",
                    answer: "No prior technical knowledge is required. Our programs are designed to accommodate learners at all levels, from beginners to advanced participants."
                  },
                  {
                    question: "Will I receive a certificate after completion?",
                    answer: "Yes, participants who successfully complete the program will receive a certificate from CIT Kokrajhar and STIHUB."
                  },
                  {
                    question: "How can I register for upcoming programs?",
                    answer: "You can register through our website's registration form or contact us directly at stihub@cit.ac.in. We also announce new batches through local community channels."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="rounded-lg border border-border bg-background shadow-sm">
                    <div className="h-1 bg-primary/80 rounded-t-lg" />
                    <AccordionTrigger className="px-6 py-4 text-left">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-semibold mt-1">Q:</span>
                        <span className="font-medium text-foreground">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <p className="text-muted-foreground leading-relaxed py-2">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-10 text-center">
                <p className="text-muted-foreground text-lg mb-4">
                  Still have questions? We're here to help!
                </p>
                <p className="text-muted-foreground">
                  Email us at {" "}
                  <a href="mailto:stihub@cit.ac.in" className="text-primary hover:underline font-semibold">
                    stihub@cit.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
