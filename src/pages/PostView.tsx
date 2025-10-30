import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CommentSection from "@/components/CommentSection";
import { mockPosts, mockComments } from "@/data/mockData";
import { useState } from "react";
import { toast } from "sonner";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

const PostView = () => {
  const { id } = useParams();
  const post = mockPosts.find((p) => p.id === id);
  const comments = mockComments.filter((c) => c.postId === id);
  const [showAiSummary, setShowAiSummary] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Underline, Link, Image],
    content: post?.content ? JSON.parse(post.content) : "",
    editable: false,
  });

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const generateAiSummary = () => {
    setShowAiSummary(true);
    toast.success("AI summary generated!");
  };

  const aiSummary = `This article provides a comprehensive overview of ${post.title.toLowerCase()}. Key points include best practices, implementation strategies, and practical examples. Perfect for developers looking to enhance their skills in this area.`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Header Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-card">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <Badge className="absolute top-6 left-6 bg-gradient-secondary">
              {post.category}
            </Badge>
          </div>

          {/* Title and Meta */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* AI Summary Card */}
          <Card className="border-accent/20 bg-gradient-to-r from-accent/5 to-transparent">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">AI Summary</h3>
                </div>
                <Button
                  onClick={generateAiSummary}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Generate Summary
                </Button>
              </div>
              {showAiSummary && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {aiSummary}
                </motion.p>
              )}
            </CardContent>
          </Card>

          {/* Content */}
          <Card>
            <CardContent className="p-8">
              <EditorContent
                editor={editor}
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-foreground
                  prose-p:text-foreground prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground prose-strong:font-bold
                  prose-code:text-accent prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-muted prose-pre:text-foreground
                  prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground
                  prose-ul:text-foreground prose-ol:text-foreground
                  prose-li:text-foreground"
              />
            </CardContent>
          </Card>

          {/* Comments Section */}
          <CommentSection postId={post.id} comments={comments} />
        </motion.article>
      </div>
    </div>
  );
};

export default PostView;
