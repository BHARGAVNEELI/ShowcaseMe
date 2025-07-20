import { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Mail, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Download,
  Share2,
  Award,
  Trophy,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Portfolio = () => {
  const { username } = useParams();
  
  // Mock data - in real app this would come from API based on username
  const portfolioData = {
    name: "Sarah Johnson",
    title: "Computer Science Student",
    bio: "Passionate full-stack developer with a love for creating innovative solutions. Currently pursuing my degree in Computer Science while working on exciting projects that make a difference.",
    location: "San Francisco, CA",
    email: "sarah.johnson@university.edu",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face",
    social: {
      github: "https://github.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    stats: {
      projects: 12,
      certificates: 8,
      events: 24
    }
  };

  const projects = [
    {
      id: 1,
      title: "E-commerce React Application",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      githubUrl: "https://github.com/sarahjohnson/ecommerce-app",
      liveUrl: "https://my-ecommerce-demo.com",
      date: "2024-01"
    },
    {
      id: 2,
      title: "AI-Powered Chat Application",
      description: "Intelligent chatbot using natural language processing to provide customer support. Built with Python, TensorFlow, and Flask with real-time messaging capabilities.",
      technologies: ["Python", "TensorFlow", "Flask", "Socket.io", "NLP"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      githubUrl: "https://github.com/sarahjohnson/ai-chat",
      date: "2023-12"
    },
    {
      id: 3,
      title: "Mobile Game Development",
      description: "2D puzzle game developed in Unity with engaging gameplay mechanics and beautiful graphics. Published on mobile app stores with 1000+ downloads.",
      technologies: ["Unity", "C#", "Mobile Development"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      liveUrl: "https://play.google.com/store/apps/details?id=com.sarah.puzzlegame",
      date: "2023-10"
    }
  ];

  const certificates = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024-02",
      credentialId: "AWS-CCP-2024-001"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023-11",
      credentialId: "META-REACT-2023"
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      date: "2023-09",
      credentialId: "GAIQ-2023-789"
    }
  ];

  const achievements = [
    {
      title: "Hackathon Winner",
      description: "1st place at University Tech Challenge 2024",
      date: "2024-03",
      icon: Trophy
    },
    {
      title: "Dean's List",
      description: "Academic excellence recognition",
      date: "2023-12",
      icon: Award
    },
    {
      title: "Internship Completed",
      description: "Software Engineering Intern at TechCorp",
      date: "2023-08",
      icon: Briefcase
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-32 h-32 border-4 border-white/20">
              <AvatarImage src={portfolioData.avatar} alt={portfolioData.name} />
              <AvatarFallback className="text-4xl">{portfolioData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">{portfolioData.name}</h1>
              <p className="text-xl text-white/80 mb-4">{portfolioData.title}</p>
              <p className="text-white/70 mb-4 max-w-2xl">{portfolioData.bio}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {portfolioData.location}
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {portfolioData.email}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <Button variant="hero" size="sm">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="hero" size="sm">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="hero" size="sm">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
                <Button variant="hero" size="sm">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center shadow-card">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{portfolioData.stats.projects}</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-success mb-2">{portfolioData.stats.certificates}</div>
                <div className="text-muted-foreground">Certificates Earned</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">{portfolioData.stats.events}</div>
                <div className="text-muted-foreground">Events Participated</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 space-y-12">
        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="default" size="sm">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Certificates & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certificates */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Certificates</h2>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{cert.title}</h3>
                        <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">ID: {cert.credentialId}</p>
                      </div>
                      <Badge variant="secondary">
                        {new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <achievement.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-muted-foreground text-sm">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(achievement.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;