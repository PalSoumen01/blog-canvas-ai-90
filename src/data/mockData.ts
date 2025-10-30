export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
  imageUrl: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  date: string;
  content: string;
}

export const mockPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to build modern web applications with React and TypeScript. This comprehensive guide covers everything from setup to advanced patterns.",
    content: JSON.stringify({
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: { level: 2 },
          content: [{ type: "text", text: "Introduction" }]
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "React and TypeScript together provide a powerful foundation for building scalable web applications. In this guide, we'll explore the fundamentals and best practices."
            }
          ]
        },
        {
          type: "heading",
          attrs: { level: 3 },
          content: [{ type: "text", text: "Why TypeScript?" }]
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              marks: [{ type: "bold" }],
              text: "Type Safety: "
            },
            {
              type: "text",
              text: "TypeScript helps catch errors during development, reducing runtime bugs and improving code quality."
            }
          ]
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Better IDE support with autocomplete" }]
                }
              ]
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Easier refactoring" }]
                }
              ]
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Self-documenting code" }]
                }
              ]
            }
          ]
        }
      ]
    }),
    author: "Sarah Chen",
    date: "2024-01-15",
    category: "Development",
    readTime: "8 min read",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  },
  {
    id: "2",
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "Unlock the full potential of modern CSS layout systems. From basic concepts to advanced techniques, we cover it all.",
    content: JSON.stringify({
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: { level: 2 },
          content: [{ type: "text", text: "Modern CSS Layouts" }]
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "CSS Grid and Flexbox have revolutionized web layout. Understanding when to use each is crucial for efficient development."
            }
          ]
        },
        {
          type: "codeBlock",
          attrs: { language: "css" },
          content: [
            {
              type: "text",
              text: ".container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}"
            }
          ]
        }
      ]
    }),
    author: "Michael Rodriguez",
    date: "2024-01-12",
    category: "Design",
    readTime: "6 min read",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop"
  },
  {
    id: "3",
    title: "Building RESTful APIs with Node.js",
    excerpt: "A complete guide to creating robust and scalable REST APIs using Node.js and Express.",
    content: JSON.stringify({
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: { level: 2 },
          content: [{ type: "text", text: "REST API Best Practices" }]
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Building a well-designed API is essential for modern applications. Let's explore the key principles."
            }
          ]
        }
      ]
    }),
    author: "Jessica Park",
    date: "2024-01-10",
    category: "Backend",
    readTime: "10 min read",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
  },
  {
    id: "4",
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that will shape the next generation of web applications.",
    content: JSON.stringify({
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: { level: 2 },
          content: [{ type: "text", text: "Emerging Technologies" }]
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "The web development landscape is constantly evolving. Here are the trends to watch."
            }
          ]
        }
      ]
    }),
    author: "Alex Kumar",
    date: "2024-01-08",
    category: "Technology",
    readTime: "7 min read",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
  }
];

export const mockComments: Comment[] = [
  {
    id: "c1",
    postId: "1",
    author: "John Doe",
    date: "2024-01-16",
    content: "Great article! This really helped me understand the TypeScript integration better."
  },
  {
    id: "c2",
    postId: "1",
    author: "Emily Watson",
    date: "2024-01-17",
    content: "Could you elaborate more on the advanced patterns mentioned? I'd love to see some examples."
  },
  {
    id: "c3",
    postId: "2",
    author: "David Lee",
    date: "2024-01-13",
    content: "The Grid examples are super helpful. Thanks for sharing!"
  }
];

export const aiSuggestions = [
  "Building a Progressive Web App with Service Workers",
  "Understanding Web Performance Optimization",
  "Introduction to Web Assembly",
  "Serverless Architecture Patterns",
  "GraphQL vs REST: Choosing the Right API",
  "State Management in Modern React Applications",
  "Accessible Design: Building Inclusive Interfaces",
  "Securing Your Web Application: Best Practices"
];
