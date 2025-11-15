import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Lightbulb, AlertCircle, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const WritingGuide = () => {
  const guidelines = [
    {
      title: "Choose a Compelling Topic",
      icon: Lightbulb,
      points: [
        "Write about what you know and are passionate about",
        "Research trending topics in your niche",
        "Solve a specific problem for your readers",
        "Make it original and unique"
      ]
    },
    {
      title: "Structure Your Content",
      icon: BookOpen,
      points: [
        "Start with a captivating introduction",
        "Use clear headings and subheadings",
        "Break content into digestible paragraphs",
        "Include relevant images and media",
        "End with a strong conclusion"
      ]
    },
    {
      title: "Writing Best Practices",
      icon: CheckCircle,
      points: [
        "Write in a clear, conversational tone",
        "Use active voice instead of passive",
        "Keep sentences concise and impactful",
        "Proofread for grammar and spelling",
        "Use examples and real-world scenarios"
      ]
    }
  ];

  const rules = [
    "Be respectful and maintain a professional tone",
    "No plagiarism - always credit your sources",
    "Avoid offensive or discriminatory content",
    "Use high-quality, properly licensed images",
    "Fact-check your information before publishing",
    "Respond to comments and engage with readers"
  ];

  return (
    <div className="min-h-screen bg-background">
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
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Writing Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              How to Write an{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Amazing Blog Post
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Follow these guidelines to create engaging content that resonates with your audience
            </p>
          </div>

          {/* Guidelines */}
          <div className="grid gap-6">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={guideline.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <guideline.icon className="w-6 h-6 text-primary" />
                      {guideline.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {guideline.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Community Rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Community Guidelines & Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Alert>
                  <AlertDescription>
                    <p className="font-medium mb-3">
                      To maintain a high-quality community, please follow these rules:
                    </p>
                    <ul className="space-y-2">
                      {rules.map((rule, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </motion.div>

          {/* SEO Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>SEO Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>• Use descriptive titles with relevant keywords</p>
                <p>• Add alt text to all images</p>
                <p>• Include internal links to related posts</p>
                <p>• Write meta descriptions under 160 characters</p>
                <p>• Use heading tags (H1, H2, H3) properly</p>
                <p>• Optimize images for web (compress file sizes)</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WritingGuide;
