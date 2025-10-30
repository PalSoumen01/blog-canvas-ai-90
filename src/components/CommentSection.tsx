import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, User, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import type { Comment } from "@/data/mockData";

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
}

const CommentSection = ({ postId, comments: initialComments }: CommentSectionProps) => {
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const newComment: Comment = {
      id: `c${Date.now()}`,
      postId,
      author: name,
      date: new Date().toISOString().split("T")[0],
      content: message,
    };

    setComments([...comments, newComment]);
    setName("");
    setMessage("");
    toast.success("Comment added successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Leave a Comment</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Textarea
                placeholder="Your comment..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
              />
            </div>
            <Button type="submit" className="bg-gradient-primary">
              Post Comment
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-full">
                    <User className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">{comment.author}</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(comment.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <p className="text-foreground">{comment.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
