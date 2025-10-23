/**
 * Blog Page
 * 
 * Company blog with articles and insights.
 * 
 * @author Manish Raj
 * @version 1.0.0
 */

import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent } from "../components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping web development, from AI integration to progressive web apps and beyond.",
      author: "Manish Raj",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
      category: "Web Development"
    },
    {
      title: "Building Scalable Cloud Architecture: Best Practices",
      excerpt: "Learn how to design and implement cloud solutions that can grow with your business needs.",
      author: "Manish Raj", 
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      category: "Cloud Computing"
    },
    {
      title: "Mobile App Performance Optimization Techniques",
      excerpt: "Discover proven strategies to improve your mobile app's performance and user experience.",
      author: "Manish Raj",
      date: "Dec 5, 2024", 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      category: "Mobile Development"
    },
    {
      title: "AI and Machine Learning in Modern Software Development",
      excerpt: "How artificial intelligence is transforming the way we build and deploy software applications.",
      author: "Manish Raj",
      date: "Nov 28, 2024",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2032&auto=format&fit=crop",
      category: "AI & ML"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on technology, development, and digital transformation.
          </p>
        </div>

        {/* Featured Post */}
        <div className="py-16">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto">
                <img 
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="text-sm text-primary font-medium mb-2">{posts[0].category}</div>
                <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="size-4" />
                    {posts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    {posts[0].date}
                  </div>
                </div>
                <Button className="w-fit">
                  Read More <ArrowRight className="size-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="py-16">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="size-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      {post.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;