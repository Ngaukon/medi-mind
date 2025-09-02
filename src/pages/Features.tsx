import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Bell, 
  Calendar, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Clock,
  CheckCircle,
  Users,
  Database,
  Mail
} from "lucide-react";

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Smart Reminders",
      description: "Never miss a dose with intelligent, customizable medication reminders.",
      details: [
        "Multiple notification types (push, email, SMS)",
        "Smart scheduling based on your routine",
        "Snooze and reschedule options",
        "Escalating reminders for missed doses"
      ],
      status: "Available"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Progress Tracking",
      description: "Monitor your adherence with detailed analytics and insights.",
      details: [
        "Daily, weekly, and monthly adherence reports",
        "Visual charts and progress indicators",
        "Streak tracking and milestones",
        "Export reports for healthcare providers"
      ],
      status: "Available"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Optimized for all devices with a clean, intuitive interface.",
      details: [
        "Responsive design for all screen sizes",
        "Quick-access medication logging",
        "Offline functionality",
        "Touch-friendly controls"
      ],
      status: "Available"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security.",
      details: [
        "End-to-end encryption",
        "HIPAA-compliant data storage",
        "Secure user authentication",
        "No data sharing with third parties"
      ],
      status: "Available"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Flexible Scheduling",
      description: "Create complex medication schedules with ease.",
      details: [
        "Multiple doses per day",
        "Custom intervals and frequencies",
        "Medication breaks and pauses",
        "Holiday and travel adjustments"
      ],
      status: "Available"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Caregiver Support",
      description: "Share medication status with family members and caregivers.",
      details: [
        "Family dashboard access",
        "Emergency contact notifications",
        "Shared medication logs",
        "Caregiver oversight controls"
      ],
      status: "Coming Soon"
    }
  ];

  const upcomingFeatures = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Drug Interaction Checker",
      description: "Automatically check for potential medication interactions and allergies."
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Healthcare Provider Integration",
      description: "Share medication logs directly with your doctor or pharmacy."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Medication History",
      description: "Comprehensive medication history with side effect tracking."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Powerful Features for Better Health
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              MediMind combines intelligent reminders, comprehensive tracking, and 
              intuitive design to help you maintain perfect medication adherence.
            </p>
          </div>

          {/* Current Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Current Features</h2>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary-light rounded-lg p-3 text-primary">
                          {feature.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                          <CardDescription className="text-base">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge 
                        variant={feature.status === "Available" ? "default" : "secondary"}
                      >
                        {feature.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Coming Soon</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingFeatures.map((feature, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="pb-4">
                    <div className="bg-secondary-light rounded-lg p-3 text-secondary w-fit mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                    <CardDescription>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of users who trust MediMind to manage their medications.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate("/dashboard")}
              >
                Try Dashboard Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/auth")}
              >
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;