import { useAuth } from "@/hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Pill, Menu } from "lucide-react";

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
            <div className="bg-primary rounded-lg p-2">
              <Pill className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">MediMind</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate("/features")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => navigate("/dashboard")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </button>
            <button 
              onClick={() => navigate("/about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground hidden sm:inline">
                  Welcome back!
                </span>
                {location.pathname !== "/dashboard" && (
                  <Button 
                    variant="ghost" 
                    onClick={() => navigate("/dashboard")}
                    className="text-primary hover:text-primary-dark"
                  >
                    Dashboard
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="hidden md:inline-flex text-primary hover:text-primary-dark"
                  onClick={() => navigate("/auth")}
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary-dark text-primary-foreground"
                  onClick={() => navigate("/auth")}
                >
                  Get Started
                </Button>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};