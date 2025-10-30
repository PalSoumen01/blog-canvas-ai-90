import { useState } from "react";
import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";
import PostCard from "@/components/PostCard";
import { Badge } from "@/components/ui/badge";
import { mockPosts } from "@/data/mockData";

const Categories = () => {
  const categories = Array.from(new Set(mockPosts.map((post) => post.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? mockPosts.filter((post) => post.category === selectedCategory)
    : mockPosts;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
              <FolderOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Browse by Category</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Explore <span className="bg-gradient-primary bg-clip-text text-transparent">Topics</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive into articles organized by your interests
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer px-6 py-2 text-sm"
              onClick={() => setSelectedCategory(null)}
            >
              All Posts
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-6 py-2 text-sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Posts Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found in this category.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
