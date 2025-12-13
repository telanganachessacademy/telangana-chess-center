"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera, Trophy, Users, BookOpen, Grid3X3, StretchHorizontal, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const galleryCategories = [
  { id: "all", name: "All Photos", icon: Camera, bg: "bg-blue-600", text: "text-white" },
  { id: "tournaments", name: "Tournaments", icon: Trophy, bg: "bg-orange-500", text: "text-white" },
  { id: "certificate", name: "Certificates", icon: Users, bg: "bg-purple-600", text: "text-white" },
  { id: "events", name: "Events", icon: BookOpen, bg: "bg-green-600", text: "text-white" },
];

// Preserved Image Data
const galleryImages = [
  {
    id: 1,
    src: "/gallery-1.jpg",
    alt: "Chess Tournament 2024",
    category: "tournaments",
    title: "Organising Tournaments",
    description: "Our students competing in the championship",
  },
  {
    id: 2,
    src: "/gallery-2.jpg",
    alt: "Beginner Chess Class",
    category: "tournaments",
    title: "Tournaments",
    description: "Young minds learning the mastery of chess",
  },
  {
    id: 3,
    src: "/gallery-3.jpg",
    alt: "Chess Workshop",
    category: "tournaments",
    title: "Inhouse Tournaments",
    description: "Advanced strategy inhouse tournaments.",
  },
  {
    id: 4,
    src: "/certificate-1.jpg",
    alt: "Youth Tournament",
    category: "certificate",
    title: "Fide Arbiter",
    description: "Tejavath Naresh Sir",
  },
  {
    id: 5,
    src: "/certificate-2.jpeg",
    alt: "Advanced Chess Class",
    category: "certificate",
    title: "Certification",
    description: "Tejawat Naresh Sir",
  },
  {
    id: 6,
    src: "/certificate-3.jpeg",
    alt: "Chess Seminar",
    category: "certificate",
    title: "National Arbiter",
    description: "Tejawat Naresh Sir",
  },
  {
    id: 7,
    src: "/academy.jpeg",
    alt: "School Tournament",
    category: "events",
    title: "Inter-School Championship",
    description: "Schools competing for the championship title",
  },
  {
    id: 8, // Fixed duplicate ID
    src: "/certificate.jpg",
    alt: "School Tournament",
    category: "certificate",
    title: "Arena International Master",
    description: "Tejawat Naresh Sir",
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id));
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-indigo-500/10 text-indigo-300 border-indigo-500/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-lg">
            Visual Journey
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight">
            Moments of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">Mastery</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed border-t border-slate-800 pt-6 mt-6">
            Explore the vibrant life at Telangana Chess Institute. From intense tournament battles to joyous award ceremonies.
          </p>
        </div>
      </section>

      {/* --- GALLERY CONTROLS --- */}
      <section className="sticky top-0 z-30 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-slate-800 py-4 shadow-lg shadow-black/50">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {galleryCategories.map(category => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              // Dynamic Style Logic for Dark Theme
              let btnClass = "bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-600";
              
              if (isSelected) {
                 if(category.id === 'all') btnClass = "bg-indigo-600 text-white border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.4)]";
                 else if(category.id === 'tournaments') btnClass = "bg-orange-500 text-white border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.4)]";
                 else if(category.id === 'certificate') btnClass = "bg-purple-600 text-white border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]";
                 else btnClass = "bg-emerald-600 text-white border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]";
              }

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-all duration-300 ${btnClass}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* View Toggle */}
          <div className="bg-slate-900 border border-slate-800 p-1 rounded-lg flex items-center">
            <button 
              onClick={() => setViewMode("grid")} 
              className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-slate-800 text-white shadow-sm" : "text-slate-500 hover:text-slate-300"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode("masonry")} 
              className={`p-2 rounded-md transition-all ${viewMode === "masonry" ? "bg-slate-800 text-white shadow-sm" : "text-slate-500 hover:text-slate-300"}`}
            >
              <StretchHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* --- IMAGE GRID --- */}
      <section className="py-12 px-4 min-h-screen">
        <div className="container mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
              }
            >
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative cursor-zoom-in break-inside-avoid mb-6 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-slate-600 hover:shadow-indigo-500/10"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Badge className={`self-start mb-2 border-0 text-white text-[10px] uppercase font-bold tracking-widest ${
                       image.category === 'tournaments' ? 'bg-orange-500' :
                       image.category === 'certificate' ? 'bg-purple-600' : 'bg-emerald-600'
                    }`}>
                      {image.category}
                    </Badge>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1">{image.title}</h3>
                    <p className="text-slate-400 text-xs line-clamp-2">{image.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- PRO LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl"
            onClick={closeLightbox}
          >
            {/* Main Image Container */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-10" onClick={(e) => e.stopPropagation()}>
              
              {/* Image */}
              <motion.img
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[85vh] max-w-full rounded-lg shadow-2xl shadow-black border border-white/10 object-contain"
              />

              {/* Caption Overlay (Bottom) */}
              <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
                 <div className="inline-block bg-black/60 backdrop-blur-md text-white px-8 py-4 rounded-2xl border border-white/10 pointer-events-auto max-w-md mx-auto">
                    <h3 className="font-bold text-lg mb-1">{selectedImage.title}</h3>
                    <p className="text-slate-400 text-sm">{selectedImage.description}</p>
                 </div>
              </div>

              {/* Controls */}
              <button 
                onClick={closeLightbox} 
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button 
                 className="absolute top-6 left-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all hidden md:block group"
                 title="Download"
              >
                 <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>

              <button 
                onClick={prevImage} 
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 text-white hover:bg-indigo-600 backdrop-blur-md border border-white/10 transition-all group hover:scale-110 hover:border-indigo-500"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button 
                onClick={nextImage} 
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 text-white hover:bg-indigo-600 backdrop-blur-md border border-white/10 transition-all group hover:scale-110 hover:border-indigo-500"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}