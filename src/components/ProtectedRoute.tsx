import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10 flex items-center justify-center">
    <Card className="border-border/50 shadow-elegant">
      <CardContent className="p-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <GraduationCap className="h-8 w-8 text-primary animate-pulse" />
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            StudentShowcase
          </h1>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-muted-foreground mt-4">Loading your dashboard...</p>
      </CardContent>
    </Card>
  </div>
);

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;