import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  User, 
  FolderOpen, 
  Calendar, 
  Award, 
  Trophy, 
  Settings,
  Eye,
  Plus,
  Search,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sidebarItems = [
  { icon: User, label: "Profile", path: "/dashboard" },
  { icon: FolderOpen, label: "Projects", path: "/dashboard/projects" },
  { icon: Calendar, label: "Events", path: "/dashboard/events" },
  { icon: Award, label: "Certificates", path: "/dashboard/certificates" },
  { icon: Trophy, label: "Achievements", path: "/dashboard/achievements" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

const Dashboard = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { label: "Projects", value: "12", change: "+2 this month", color: "text-primary" },
    { label: "Certificates", value: "8", change: "+1 this week", color: "text-success" },
    { label: "Events", value: "24", change: "+3 this month", color: "text-accent" },
    { label: "Portfolio Views", value: "156", change: "+12 today", color: "text-warning" },
  ];

  const recentProjects = [
    {
      title: "E-commerce React App",
      tech: ["React", "Node.js", "MongoDB"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop"
    },
    {
      title: "AI Chat Application",
      tech: ["Python", "TensorFlow", "Flask"],
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
    },
    {
      title: "Mobile Game Development",
      tech: ["Unity", "C#"],
      status: "Planning",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Showcase Hub
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search projects, events..." 
                className="pl-10 bg-muted/50 border-none"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Link to="/portfolio/student-demo">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4" />
                View Portfolio
              </Button>
            </Link>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=32&h=32&fit=crop&crop=face" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`sticky top-16 h-[calc(100vh-4rem)] border-r bg-muted/30 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
          <nav className="flex flex-col gap-2 p-4">
            {sidebarItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start ${!sidebarOpen && 'px-3'}`}
                  >
                    <item.icon className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-2">{item.label}</span>}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-hero rounded-xl p-6 text-white shadow-elegant">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Welcome back, Sarah! 👋</h2>
                  <p className="text-white/80">Ready to showcase your amazing work today?</p>
                </div>
                <Button variant="hero" size="lg">
                  <Plus className="h-5 w-5" />
                  Add New Project
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Projects */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Projects</CardTitle>
                    <CardDescription>Your latest work and achievements</CardDescription>
                  </div>
                  <Button variant="outline">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentProjects.map((project, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Badge 
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks to manage your portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex-col">
                    <FolderOpen className="h-6 w-6 mb-2" />
                    Add Project
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Award className="h-6 w-6 mb-2" />
                    Upload Certificate
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Calendar className="h-6 w-6 mb-2" />
                    Log Event
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Eye className="h-6 w-6 mb-2" />
                    Preview Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;