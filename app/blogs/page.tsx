"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  Search,
  Eye,
  Heart,
  BookOpen,
  Share2,
  ChevronRight,
  PenTool
} from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Content Data (Preserved)
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
    <div className="min-h-screen bg-[#0B0F19] font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-indigo-300 text-xs font-bold uppercase tracking-widest shadow-lg mb-6">
            <PenTool className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
            <span>The Knowledge Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight leading-tight">
            Chess Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">Analysis</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed border-t border-slate-800 pt-6 mt-6">
            Deep dive into strategies, opening theories, and grandmaster secrets curated by the faculty of Telangana Chess Institute.
          </p>
        </div>
      </section>

      {/* --- SEARCH & FILTER BAR --- */}
      <section className="sticky top-0 z-40 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-slate-800 py-4 shadow-lg shadow-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-5xl mx-auto">
            
            {/* Search */}
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors w-4 h-4" />
              <Input
                placeholder="Search articles, tactics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-11 h-11 bg-slate-900/50 border-slate-700 text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-full transition-all placeholder:text-slate-600"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                    selectedCategory === category.id
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                      : "bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-600"
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
              className="bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-500 group"
            >
              {/* Cover Image */}
              <div className="relative h-64 md:h-96 w-full overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent"></div>
                
                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 md:left-10 md:bottom-10 text-white z-10">
                  <Badge className="bg-indigo-600 hover:bg-indigo-500 border-0 mb-4 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-lg">
                    {post.category}
                  </Badge>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-lg">
                    {post.title}
                  </h2>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-slate-300">
                    <div className="flex items-center gap-3">
                       <img src={post.authorImage} alt={post.author} className="w-9 h-9 rounded-full border border-white/20" />
                       <span className="font-semibold text-white">{post.author}</span>
                    </div>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-500" /> {post.readTime}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-slate-500" /> {format(new Date(post.date), "MMM d, yyyy")}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 md:p-12">
                {/* Content Body (Dark Mode Typography) */}
                <div className="prose prose-lg prose-invert max-w-none 
                  prose-headings:text-white prose-headings:font-bold 
                  prose-p:text-slate-300 prose-p:leading-8 
                  prose-li:text-slate-300 
                  prose-strong:text-white 
                  prose-a:text-indigo-400 hover:prose-a:text-indigo-300 
                  prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border prose-img:border-slate-800"
                >
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-white border-b border-slate-800 pb-4" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-10 mb-4 text-indigo-100 flex items-center gap-2" {...props}><span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>{props.children}</h2>,
                      p: ({node, ...props}) => <p className="mb-6 text-lg text-slate-300 leading-relaxed" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-300 marker:text-indigo-500" {...props} />,
                      li: ({node, ...props}) => <li className="pl-2" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-bold text-white bg-white/5 px-1 rounded" {...props} />,
                      img: ({node, ...props}) => (
                        <figure className="my-10">
                          <img className="w-full rounded-2xl shadow-2xl border border-slate-800 opacity-90 hover:opacity-100 transition-opacity" {...props} alt={props.alt || "Article Image"} />
                          {props.alt && <figcaption className="text-center text-sm text-slate-500 mt-3 italic">{props.alt}</figcaption>}
                        </figure>
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Footer / Stats */}
                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="bg-slate-800 border border-slate-700 text-slate-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-slate-700 hover:text-white cursor-pointer transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 text-slate-500">
                    <button className="flex items-center gap-2 hover:text-rose-400 transition-colors group">
                      <Heart className="w-5 h-5 group-hover:fill-rose-400 transition-all" /> <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                      <Eye className="w-5 h-5" /> <span className="text-sm font-medium">{post.views}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-white transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </article>
          ))}
        </div>
      </section>

      {/* --- Newsletter / CTA --- */}
      <section className="py-20 bg-slate-900/50 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 shadow-lg shadow-black/50">
             <BookOpen className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Move</h2>
          <p className="text-slate-400 mb-8 text-lg">Subscribe to the Telangana Chess Institute newsletter for weekly tactics, tournament updates, and exclusive articles.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input 
               placeholder="Enter your email" 
               className="rounded-full bg-slate-950 border-slate-700 h-12 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
            />
            <Button className="rounded-full bg-indigo-600 hover:bg-indigo-500 h-12 px-8 font-bold shadow-lg shadow-indigo-900/20">Subscribe</Button>
          </div>
        </div>
      </section>

    </div>
  );
}