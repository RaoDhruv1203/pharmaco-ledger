
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "LOKESH" && password === "7876") {
      navigate("/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: "Invalid credentials",
        description: "Please check your username and password.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pharmacy-secondary/30 animate-fadeIn">
      <Card className="w-[400px] p-8 shadow-lg bg-white/80 backdrop-blur-sm">
        <div className="mb-8 text-center">
          <img
            src="/lovable-uploads/3309b2b6-839b-4f3a-ba38-2ca9d7185037.png"
            alt="HealthCure Pharmacy"
            className="w-64 mx-auto mb-4"
          />
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pharmacy-primary/20"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pharmacy-primary/20"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-pharmacy-primary hover:bg-pharmacy-primary/90 text-white"
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
