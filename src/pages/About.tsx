import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Content",
      description: "Carefully curated articles on development, design, and technology topics.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built for developers and designers who love to learn and share knowledge.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Leveraging AI to enhance your reading experience with smart summaries.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Crafted with care to provide the best blogging experience possible.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">ModernBlog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A modern blogging platform built with React, TypeScript, and cutting-edge web technologies
            </p>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-card">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-foreground leading-relaxed">
                  ModernBlog is dedicated to creating an exceptional reading and writing experience
                  for the tech community. We believe in the power of knowledge sharing and aim to
                  provide a platform that makes it easy to discover, read, and engage with
                  high-quality content.
                </p>
                <p className="text-foreground leading-relaxed">
                  Built with modern web technologies including React, TypeScript, TailwindCSS, and
                  Framer Motion, our platform showcases what's possible with today's frontend tools.
                  We're constantly evolving to incorporate new features and improvements.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="shadow-card hover:shadow-hover transition-all h-full">
                    <CardContent className="p-6 space-y-3">
                      <div className="bg-gradient-primary p-3 rounded-lg w-fit">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="shadow-card">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-bold">Built With</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "TypeScript",
                    "TailwindCSS",
                    "Framer Motion",
                    "React Router",
                    "TipTap Editor",
                    "Vite",
                    "shadcn/ui",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-muted rounded-lg font-medium text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
