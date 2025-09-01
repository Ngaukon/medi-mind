import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-light to-background py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Never Miss Your
                <span className="text-secondary block">Medication Again</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                MediMind helps you stay on track with your medication schedule through 
                smart reminders, easy tracking, and comprehensive health insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg"
                onClick={() => window.location.href = "/auth"}
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary-light px-8 py-4 text-lg"
                onClick={() => window.location.href = "/dashboard"}
              >
                View Dashboard
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Adherence Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50k+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">4.9★</div>
                <div className="text-sm text-muted-foreground">App Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <img 
              src={heroImage} 
              alt="MediMind app interface showing medication reminders"
              className="relative z-10 w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};