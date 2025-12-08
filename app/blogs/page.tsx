"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  Search,
  Eye,
  Heart,
  BookOpen,
  Share2,
  ChevronRight
} from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Content Data
  const blogPosts = [
    {
      id: 1,
      title: "Mastering the Board: A Guide to Chess Pieces",
      content: `
# The Army on the Board

![Starting chess board](https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000)

To become great at chess, you must understand the unique powers of your army. Each piece moves differently, and knowing how to coordinate them is the key to victory.

There are 6 unique chess pieces. They are:
- **The King**: The leader
- **The Queen**: The powerhouse
- **The Rook**: The castle
- **The Bishop**: The sniper
- **The Knight**: The jumper
- **The Pawn**: The soul of chess

## The King ♔
The king is the most important piece. If you lose your king, you lose the game.
* **Start:** e1 (White) / e8 (Black)
* **Movement:** One square in any direction.
* **Strategy:** Protect him early (Castle!), use him as an attacker in the endgame.

## The Rook ♖
The rook is a major piece, worth 5 points.
* **Start:** Corners of the board (a1, h1).
* **Movement:** Straight lines (up, down, left, right) for any distance.
* **Pro Tip:** Rooks love open files. Don't leave them trapped behind your own pawns!

## The Bishop ♗
The bishop is a minor piece, worth 3 points.
* **Start:** Next to King and Queen.
* **Movement:** Diagonals only.
* **Limitation:** A bishop starting on a light square will *never* touch a dark square.

## The Queen ♕
The most powerful piece, worth 9 points.
* **Movement:** Combines the Rook and Bishop. She can move in any direction for any distance.
* **Warning:** Don't bring her out too early! She becomes a target for opponent's minor pieces.

## The Knight ♘
The trickiest piece, worth 3 points.
* **Movement:** "L" shape (2 squares one way, 1 square the other).
* **Superpower:** The only piece that can jump over others.
* **Strategy:** Knights are best in the center of the board. A knight on the rim is dim!

## The Pawn ♙
The foot soldier, worth 1 point.
* **Movement:** Forward only. 1 square at a time (option for 2 on first move).
* **Attack:** Captures diagonally forward.
* **Special Moves:** Promotion (turning into a Queen!) and En Passant.

---
### Summary
Understanding movement is step one. Step two is understanding *coordination*. A Bishop and Knight working together are often stronger than a Rook alone. Practice these movements until they become second nature!
      `,
      author: "Tejavath Naresh",
      authorRole: "Grandmaster Coach",
      authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
      date: "2025-09-10",
      readTime: "8 min read",
      category: "Basics",
      tags: ["Fundamentals", "Pieces", "Strategy"],
      coverImage: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=1200",
      views: 1542,
      likes: 128,
    },
  ];

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "Basics", name: "Chess Basics" },
    { id: "Strategy", name: "Strategy" },
    { id: "Openings", name: "Openings" },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-[#020617] overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-blue-900/50 text-blue-300 border-blue-800 px-4 py-1.5 text-sm uppercase tracking-wider">
            The Knowledge Hub
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            Chess Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Analysis</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Deep dive into strategies, opening theories, and grandmaster secrets curated by the faculty of Bharat Chess School.
          </p>
        </div>
      </section>

      {/* --- SEARCH & FILTER BAR --- */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-5xl mx-auto">
            
            {/* Search */}
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors w-4 h-4" />
              <Input
                placeholder="Search articles, tactics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all rounded-full"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BLOG CONTENT --- */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Cover Image */}
              <div className="relative h-64 md:h-96 w-full overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                
                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 md:left-10 md:bottom-10 text-white">
                  <Badge className="bg-orange-500 hover:bg-orange-600 border-0 mb-3 text-white px-3 py-1">
                    {post.category}
                  </Badge>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
                    {post.title}
                  </h2>
                  
                  <div className="flex items-center gap-6 text-sm md:text-base text-slate-200">
                    <div className="flex items-center gap-2">
                       <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full border border-white/30" />
                       <span className="font-semibold text-white">{post.author}</span>
                    </div>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {format(new Date(post.date), "MMM d, yyyy")}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 md:p-12">
                {/* Content Body */}
                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-8 prose-li:text-slate-600 prose-img:rounded-2xl prose-img:shadow-lg prose-a:text-blue-600 hover:prose-a:text-blue-700">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    components={{
                      // Styling Markdown Elements
                      h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-slate-900 border-b border-slate-100 pb-2" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800" {...props} />,
                      p: ({node, ...props}) => <p className="mb-6 text-lg text-slate-600 leading-relaxed" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600" {...props} />,
                      li: ({node, ...props}) => <li className="pl-2" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-bold text-slate-900" {...props} />,
                      img: ({node, ...props}) => (
                        <figure className="my-8">
                          <img className="w-full rounded-2xl shadow-md border border-slate-100" {...props} alt={props.alt || "Article Image"} />
                          {props.alt && <figcaption className="text-center text-sm text-slate-400 mt-2 italic">{props.alt}</figcaption>}
                        </figure>
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Footer / Stats */}
                <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 text-slate-400">
                    <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                      <Heart className="w-5 h-5" /> <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                      <Eye className="w-5 h-5" /> <span className="text-sm font-medium">{post.views}</span>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Never Miss a Move</h2>
          <p className="text-slate-500 mb-8">Subscribe to the Bharat Chess School newsletter for weekly tactics, tournament updates, and exclusive articles.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="rounded-full bg-slate-50 border-slate-200 h-12" />
            <Button className="rounded-full bg-slate-900 hover:bg-blue-600 h-12 px-6">Subscribe</Button>
          </div>
        </div>
      </section>

    </div>
  );
}