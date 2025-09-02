import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Heart, 
  Target, 
  Users, 
  Shield,
  Award,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health First",
      description: "We believe everyone deserves access to tools that help them stay healthy and manage their medications effectively."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy & Security",
      description: "Your health data is precious. We use enterprise-grade security to keep your information safe and private."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User-Centered Design",
      description: "Every feature is designed with real users in mind, making medication management simple for all ages."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Simplicity",
      description: "Complex medication schedules made simple through intuitive design and smart automation."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "99.5%", label: "Uptime" },
    { number: "95%", label: "Adherence Rate" },
    { number: "4.8/5", label: "User Rating" }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Medical Advisor",
      description: "Former hospital pharmacist with 15+ years experience in medication management."
    },
    {
      name: "Alex Chen",
      role: "Lead Developer",
      description: "Full-stack developer passionate about healthcare technology and user experience."
    },
    {
      name: "Maria Rodriguez",
      role: "UX Designer",
      description: "Designer focused on creating accessible interfaces for healthcare applications."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              About MediMind
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              MediMind was created to solve a simple but critical problem: helping people 
              take their medications on time, every time. We believe that medication adherence 
              should be effortless, not another source of stress in managing your health.
            </p>
          </div>

          {/* Mission */}
          <Card className="mb-12 p-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl mb-4">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                To empower individuals to take control of their health by providing 
                the most intuitive, reliable, and secure medication management platform. 
                We're committed to reducing medication errors, improving adherence rates, 
                and ultimately helping people live healthier lives.
              </p>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground text-center mb-8">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary-light rounded-lg p-3 text-primary">
                        {value.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Story */}
          <Card className="mb-16 p-8">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                MediMind was born from a personal experience. Our founder watched their elderly 
                grandmother struggle with a complex medication regimen, often forgetting doses 
                or taking medications at the wrong times. Traditional pill organizers and sticky 
                notes weren't enough for her busy lifestyle and declining memory.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We realized that millions of people face similar challenges every day. Whether 
                it's managing chronic conditions, post-surgery recovery, or simply remembering 
                daily vitamins, medication adherence is a universal challenge that technology 
                could solve.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, MediMind serves thousands of users worldwide, from busy professionals 
                managing daily prescriptions to caregivers helping elderly family members. 
                Our platform continues to evolve based on real user feedback and the latest 
                healthcare technology standards.
              </p>
            </CardContent>
          </Card>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground text-center mb-8">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="p-6 text-center">
                  <CardHeader>
                    <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact */}
          <Card className="p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Get in Touch</CardTitle>
              <CardDescription className="text-base">
                Have questions, feedback, or need support? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">Email</span>
                  <span className="text-sm text-muted-foreground">support@medimind.app</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">Phone</span>
                  <span className="text-sm text-muted-foreground">1-800-MEDIMIND</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">Location</span>
                  <span className="text-sm text-muted-foreground">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="text-center pt-6">
                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={() => navigate("/dashboard")}
                  >
                    Try MediMind
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate("/features")}
                  >
                    View Features
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;