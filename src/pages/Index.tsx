import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["React", "Firebase", "Tailwind"],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with modern design",
      technologies: ["React", "Typescript", "Tailwind"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js",
    "Python", "SQL", "Git", "AWS",
  ];

  return (
    <div className="min-h-screen bg-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Full Stack Developer
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-up">
              I create beautiful and functional web applications with modern technologies
            </p>
            <Button
              size="lg"
              className="animate-fade-up"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <Card key={skill} className="p-4 text-center hover:shadow-md transition-shadow">
                {skill}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="flex justify-center gap-6">
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="h-5 w-5" />
              Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;