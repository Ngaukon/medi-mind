import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {currentView === "home" && (
        <>
          <Hero />
          
          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Everything You Need to Stay Healthy
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  MediMind provides comprehensive medication management with intelligent reminders 
                  and detailed tracking to help you maintain perfect adherence.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Smart Reminders</h3>
                  <p className="text-muted-foreground">
                    Get timely notifications via email, push notifications, or SMS to never miss a dose.
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="bg-secondary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-secondary rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Track Progress</h3>
                  <p className="text-muted-foreground">
                    Monitor your adherence with detailed logs, charts, and insights about your medication habits.
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="bg-accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-accent rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Easy Management</h3>
                  <p className="text-muted-foreground">
                    Simple interface to add, edit, and organize all your medications in one secure place.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Demo Dashboard Preview */}
          <section id="dashboard" className="py-20 px-4 bg-muted">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  See Your Dashboard in Action
                </h2>
                <p className="text-xl text-muted-foreground">
                  Click below to explore the dashboard demo
                </p>
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => setCurrentView("dashboard")}
                  className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                >
                  Try Dashboard Demo
                </button>
              </div>
            </div>
          </section>
        </>
      )}
      
      {currentView === "dashboard" && (
        <div className="pt-8">
          <div className="container mx-auto px-4 mb-6">
            <button
              onClick={() => setCurrentView("home")}
              className="text-primary hover:text-primary-dark transition-colors"
            >
              ← Back to Home
            </button>
          </div>
          <Dashboard />
        </div>
      )}
    </div>
  );
};

export default Index;
