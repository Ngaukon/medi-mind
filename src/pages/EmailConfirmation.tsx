import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const EmailConfirmation = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [confirmationStatus, setConfirmationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleConfirmation = async () => {
      try {
        const hash = window.location.hash;
        
        if (!hash.includes('access_token')) {
          setConfirmationStatus('error');
          setErrorMessage('Invalid confirmation link. Please try again or request a new confirmation email.');
          return;
        }

        // Wait for auth to process the confirmation
        setTimeout(() => {
          if (user) {
            setConfirmationStatus('success');
            // Redirect to dashboard after showing success message
            setTimeout(() => {
              navigate('/dashboard');
            }, 2000);
          } else if (!loading) {
            setConfirmationStatus('error');
            setErrorMessage('Email confirmation failed. Please try again or contact support.');
          }
        }, 2000);

      } catch (error) {
        console.error('Confirmation error:', error);
        setConfirmationStatus('error');
        setErrorMessage('An unexpected error occurred during confirmation.');
      }
    };

    handleConfirmation();
  }, [user, loading, navigate]);

  const renderContent = () => {
    switch (confirmationStatus) {
      case 'loading':
        return (
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
              <CardTitle>Confirming your email...</CardTitle>
              <CardDescription>
                Please wait while we verify your email address.
              </CardDescription>
            </CardHeader>
          </Card>
        );

      case 'success':
        return (
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <CardTitle className="text-green-700">Email confirmed!</CardTitle>
              <CardDescription>
                Your account has been successfully verified. You'll be redirected to your dashboard shortly.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={() => navigate('/dashboard')} className="mt-4">
                Go to Dashboard
              </Button>
            </CardContent>
          </Card>
        );

      case 'error':
        return (
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <AlertCircle className="h-12 w-12 text-red-500" />
              </div>
              <CardTitle className="text-red-700">Confirmation failed</CardTitle>
              <CardDescription>
                {errorMessage}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <Button onClick={() => navigate('/auth')} variant="outline">
                Back to Sign In
              </Button>
              <Button onClick={() => navigate('/')} variant="ghost">
                Go to Home
              </Button>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">MediMind</h1>
          <p className="text-muted-foreground">Email Verification</p>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default EmailConfirmation;