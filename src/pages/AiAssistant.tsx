import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Lightbulb, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { aiSuggestions } from "@/data/mockData";
import { toast } from "sonner";

const AiAssistant = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [summary, setSummary] = useState("");

  const generateSuggestions = () => {
    const randomSuggestions = aiSuggestions
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
    setSuggestions(randomSuggestions);
    toast.success("Generated 5 blog topic ideas!");
  };

  const generateSummary = () => {
    const mockSummary =
      "Based on current trends in web development, here's what's important: Modern frameworks like React and Vue continue to dominate. TypeScript adoption is growing rapidly. Performance optimization and accessibility are becoming key priorities. Serverless architecture is gaining traction for scalable applications.";
    setSummary(mockSummary);
    toast.success("Summary generated!");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">AI-Powered Features</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              AI <span className="bg-gradient-primary bg-clip-text text-transparent">Assistant</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get intelligent suggestions and summaries powered by AI
            </p>
          </div>

          {/* Blog Idea Generator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-secondary p-3 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>Blog Topic Generator</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Get AI-generated blog post ideas
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={generateSuggestions}
                  className="w-full bg-gradient-secondary"
                  size="lg"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Ideas
                </Button>
                {suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <h4 className="font-semibold">Suggested Topics:</h4>
                    <div className="space-y-2">
                      {suggestions.map((suggestion, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="w-full justify-start text-left py-3 px-4 font-normal"
                          >
                            {suggestion}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Content Summarizer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>Trend Summarizer</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Get a summary of current web development trends
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={generateSummary}
                  className="w-full bg-gradient-primary"
                  size="lg"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Summary
                </Button>
                {summary && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-muted rounded-lg"
                  >
                    <p className="text-foreground leading-relaxed">{summary}</p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="border-accent/20 bg-gradient-to-r from-accent/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h3 className="font-semibold">About AI Features</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      These AI features use mock data to demonstrate potential functionality.
                      In a production environment, these would be powered by actual AI models
                      to provide real-time, personalized suggestions and summaries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AiAssistant;
