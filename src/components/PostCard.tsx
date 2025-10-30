import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/data/mockData";

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard = ({ post, featured = false }: PostCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link to={`/posts/${post.id}`}>
        <Card className="h-full overflow-hidden hover:shadow-hover transition-all duration-300 border-border">
          <div className="relative overflow-hidden h-48">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            {featured && (
              <Badge className="absolute top-4 left-4 bg-gradient-secondary">
                Featured
              </Badge>
            )}
          </div>
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-2">
              {post.category}
            </Badge>
            <h3 className={`font-bold leading-tight line-clamp-2 ${featured ? 'text-2xl' : 'text-xl'}`}>
              {post.title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default PostCard;
