import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import PostCard from "@/components/PostCard";
import { mockPosts } from "@/data/mockData";

const Home = () => {
  const featuredPosts = mockPosts.filter((post) => post.featured);
  const latestPosts = mockPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Welcome to ModernBlog</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Discover Stories,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ideas & More
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore insightful articles on development, design, and technology
          </p>
        </motion.div>
      </section>

      {/* Featured Posts */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} featured />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Latest Posts */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
