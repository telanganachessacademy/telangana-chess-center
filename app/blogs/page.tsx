"use client";

import { useState } from "react";
import { CardContent } from "@/components/ui/card";
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
  PenTool,
  ExternalLink
} from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Mastering the Board: A Guide to Chess Pieces",
      content: `
# The Army on the Board

![Starting chess board](https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000)

To become great at chess, you must understand the unique powers of your army. Each piece moves differently, and knowing how to coordinate them is the key to victory.

## The King ♔
The king is the most important piece. If you lose your king, you lose the game.
* **Start:** e1 (White) / e8 (Black)
* **Strategy:** Protect him early (Castle!), use him as an attacker in the endgame.

## The Queen ♕
The most powerful piece, worth 9 points.
* **Movement:** Combines the Rook and Bishop.
* **Warning:** Don't bring her out too early! She becomes a target for opponent's minor pieces.

## The Rook ♖
The rook is a major piece, worth 5 points. Rooks love open files. Don't leave them trapped behind your own pawns!

---
### Summary
Understanding movement is step one. Step two is understanding *coordination*. A Bishop and Knight working together are often stronger than a Rook alone. Practice these movements until they become second nature!
      `,
      author: "Tejavath Naresh",
      authorRole: "FIDE Master Coach",
      authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
      date: "2025-09-10",
      readTime: "8 min read",
      category: "Basics",
      tags: ["Fundamentals", "Strategy"],
      coverImage: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=1200",
      views: 1542,
      likes: 128,
      themeColor: "emerald"
    },
  ];

  const categories = [
    { id: "all", name: "All Articles", color: "bg-slate-900" },
    { id: "Basics", name: "Chess Basics", color: "bg-blue-600" },
    { id: "Strategy", name: "Strategy", color: "bg-orange-500" },
    { id: "Openings", name: "Openings", color: "bg-purple-600" },
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
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-emerald-100">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-40" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <PenTool className="w-3.5 h-3.5" />
            <span>The Knowledge Hub</span>
          </div>
          
          <h1 className="text-6xl md:text-5xl font-black mb-8 text-slate-900 tracking-tighter leading-none">
            Academy <span className="text-emerald-600">Insights</span>
          </h1>
          
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Deep dive into strategies, opening theories, and grandmaster secrets curated 
            by the professional faculty of <span className="text-slate-900 font-bold underline decoration-emerald-500/30">Telangana Chess Academy</span>.
          </p>
        </div>
      </section>

      {/* --- SEARCH & FILTER BAR (Sticky) --- */}
      <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 py-6 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between max-w-6xl mx-auto">
            
            {/* Search */}
            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors w-4 h-4" />
              <Input
                placeholder="Search tactics, strategy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl transition-all font-medium"
              />
            </div>

            {/* Categories - Different Colors Used */}
            <div className="flex gap-3 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all border shadow-sm ${
                    selectedCategory === cat.id
                      ? `${cat.color} border-transparent text-white scale-105 shadow-lg`
                      : "bg-white border-slate-100 text-slate-500 hover:border-emerald-200 hover:text-emerald-600"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BLOG CONTENT --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden group flex flex-col"
            >
              {/* Cover Image Section */}
              <div className="relative h-72 md:h-[500px] w-full overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                
                {/* Header Overlay */}
                <div className="absolute bottom-10 left-10 right-10 z-10">
                  <Badge className="bg-emerald-600 text-white border-0 mb-6 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                    {post.category}
                  </Badge>
                  <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                    {post.title}
                  </h2>
                  
                  <div className="flex flex-wrap items-center gap-8 text-sm text-white/90">
                    <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                       <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full border-2 border-emerald-500" />
                       <span className="font-bold">{post.author}</span>
                    </div>
                    <span className="flex items-center gap-2 font-bold"><Clock className="w-4 h-4 text-emerald-400" /> {post.readTime}</span>
                    <span className="flex items-center gap-2 font-bold"><Calendar className="w-4 h-4 text-emerald-400" /> {format(new Date(post.date), "MMM d, yyyy")}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-10 md:p-20">
                {/* Content Body (Light Mode Professional Typography) */}
                <div className="prose prose-lg max-w-none 
                  prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
                  prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
                  prose-strong:text-slate-900 prose-strong:font-black
                  prose-img:rounded-[2rem] prose-img:shadow-2xl prose-img:border-[10px] prose-img:border-slate-50"
                >
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-4xl font-black mt-12 mb-8 text-slate-900 border-b-4 border-emerald-50 pb-6" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-3xl font-black mt-12 mb-6 text-slate-900 flex items-center gap-3" {...props}><span className="w-2 h-8 bg-emerald-500 rounded-full" />{props.children}</h2>,
                      p: ({node, ...props}) => <p className="mb-8 text-lg text-slate-600 leading-relaxed font-medium" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-8 mb-8 space-y-4 text-slate-600 marker:text-emerald-500" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-black text-slate-900 bg-emerald-50 px-1.5 rounded" {...props} />,
                      img: ({node, ...props}) => (
                        <figure className="my-16">
                          <img className="w-full rounded-[2.5rem] shadow-2xl border-[12px] border-white" {...props} alt={props.alt || "Article Visual"} />
                          {props.alt && <figcaption className="text-center text-xs font-bold text-slate-400 mt-6 uppercase tracking-widest">{props.alt}</figcaption>}
                        </figure>
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Footer Section */}
                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row gap-8 items-center justify-between">
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="bg-slate-50 border border-slate-100 text-slate-500 px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-8 text-slate-400">
                    <button className="flex items-center gap-2 hover:text-rose-500 transition-colors group">
                      <Heart className="w-6 h-6 group-hover:fill-rose-500 transition-all" /> 
                      <span className="text-sm font-black">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                      <Eye className="w-6 h-6" /> 
                      <span className="text-sm font-black">{post.views}</span>
                    </button>
                    <button className="p-3 bg-slate-50 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </article>
          ))}
        </div>
      </section>

      {/* --- Newsletter --- */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <div className="w-20 h-20 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-emerald-100 shadow-xl shadow-emerald-50">
             <BookOpen className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Never Miss a Strategy</h2>
          <p className="text-slate-500 font-medium mb-10 text-lg leading-relaxed">Join 2,000+ chess enthusiasts. Get weekly tactics, opening breakdowns, and academy news delivered to your inbox.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-slate-50 p-2 rounded-[2rem] border border-slate-100 shadow-inner">
            <Input 
               placeholder="Enter your email address" 
               className="rounded-2xl border-0 bg-transparent h-14 text-slate-900 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0 px-6 font-medium" 
            />
            <Button className="rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-10 font-black uppercase tracking-widest text-xs shadow-xl shadow-emerald-100">Subscribe</Button>
          </div>
        </div>
      </section>

    </div>
  );
}