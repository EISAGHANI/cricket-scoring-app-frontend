import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    try {
      // Simulated login logic - replace with actual authentication
      if (email && password) {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Placeholder authentication 
        if (email === 'user@cricket.com' && password === 'password123') {
          // Successful login logic
          window.location.href = '/dashboard';
        } else {
          setLoginError('Invalid email or password');
        }
      } else {
        setLoginError('Please enter both email and password');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google authentication
    alert('Google Login Coming Soon!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Cricket Scorer Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {loginError}
              </div>
            )}

            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </Button>

            <div className="text-center text-sm text-gray-600 mt-2">
              <a href="/forgot-password" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <Button 
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleGoogleLogin}
            >
              <img 
                src="/api/placeholder/20/20" 
                alt="Google logo" 
                className="mr-2 h-5 w-5" 
              />
              Google
            </Button>

            <div className="text-center text-sm text-gray-600 mt-4">
              Don't have an account? 
              <a 
                href="/register" 
                className="ml-1 text-blue-600 hover:underline"
              >
                Sign Up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;