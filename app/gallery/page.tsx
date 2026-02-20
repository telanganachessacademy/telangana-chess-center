"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera, Trophy, Users, BookOpen, Grid3X3, StretchHorizontal, Download, Share2, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const galleryCategories = [
  { id: "all", name: "All Photos", icon: Camera, color: "bg-blue-600", border: "border-blue-100", light: "bg-blue-50", text: "text-blue-600" },
  { id: "tournaments", name: "Tournaments", icon: Trophy, color: "bg-orange-500", border: "border-orange-100", light: "bg-orange-50", text: "text-orange-600" },
  { id: "certificate", name: "Certificates", icon: Users, color: "bg-purple-600", border: "border-purple-100", light: "bg-purple-50", text: "text-purple-600" },
  { id: "events", name: "Events", icon: BookOpen, color: "bg-emerald-600", border: "border-emerald-100", light: "bg-emerald-50", text: "text-emerald-600" },
];

const galleryImages = [
  { id: 1, src: "/gallery-1.jpg", alt: "Chess Tournament 2024", category: "tournaments", title: "Organising Tournaments", description: "Our students competing in the championship" },
  { id: 2, src: "/gallery-2.jpg", alt: "Beginner Chess Class", category: "tournaments", title: "Tournaments", description: "Young minds learning the mastery of chess" },
  { id: 3, src: "/gallery-3.jpg", alt: "Chess Workshop", category: "tournaments", title: "Tournaments Hall", description: "Advanced strategy inhouse tournaments." },
  { id: 4, src: "/certificate-1.jpg", alt: "Youth Tournament", category: "certificate", title: "Fide Arbiter", description: "Tejavath Naresh Sir" },
  { id: 5, src: "/certificate-2.jpeg", alt: "Advanced Chess Class", category: "certificate", title: "SChool Instructor", description: "Tejawat Naresh Sir" },
  { id: 6, src: "/certificate-3.jpeg", alt: "Chess Seminar", category: "certificate", title: "National Instructor", description: "Tejawat Naresh Sir" },
  { id: 7, src: "/academy.jpeg", alt: "School Tournament", category: "events", title: "TCA Board", description: "Schools competing for the championship title" },
  { id: 8, src: "/certificate.jpg", alt: "School Tournament", category: "certificate", title: "Arena International Master", description: "Tejawat Naresh Sir" }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");

  const filteredImages = selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory);

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
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-emerald-100">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-40" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <Camera className="w-3.5 h-3.5" />
            <span>Institutional Archive</span>
          </div>
          <h1 className="text-6xl md:text-5xl font-black mb-8 text-slate-900 tracking-tighter leading-none">
            Moments of <span className="text-emerald-600">Mastery.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Explore the vibrant legacy of <span className="text-slate-900 font-bold underline decoration-emerald-500/30">Telangana Chess Academy</span>. From intense battles to crowning ceremonies.
          </p>
        </div>
      </section>

      {/* --- GALLERY CONTROLS --- */}
      <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 py-6 shadow-sm">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Categories with Multi-Colored Active States */}
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map(category => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest border transition-all duration-300 shadow-sm ${
                    isSelected 
                      ? `${category.color} text-white border-transparent scale-105 shadow-lg` 
                      : `bg-white border-slate-100 text-slate-400 hover:border-slate-300 hover:text-slate-600`
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* View Toggle */}
          <div className="bg-slate-50 border border-slate-200 p-1.5 rounded-xl flex items-center gap-1 shadow-inner">
            <button 
              onClick={() => setViewMode("grid")} 
              className={`p-2.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-white text-emerald-600 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode("masonry")} 
              className={`p-2.5 rounded-lg transition-all ${viewMode === "masonry" ? "bg-white text-emerald-600 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
            >
              <StretchHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* --- IMAGE GRID --- */}
      <section className="py-20 px-6 min-h-screen">
        <div className="container mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                  : "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8"
              }
            >
              {filteredImages.map((image) => {
                const categoryData = galleryCategories.find(c => c.id === image.category);
                return (
                  <motion.div
                    key={image.id}
                    layoutId={`img-${image.id}`}
                    className="group relative cursor-zoom-in break-inside-avoid rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                    onClick={() => openLightbox(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <div className={`self-start mb-4 px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest text-white ${categoryData?.color}`}>
                        {image.category}
                      </div>
                      <h3 className="text-white font-black text-xl leading-tight mb-2 tracking-tight">{image.title}</h3>
                      <p className="text-slate-300 text-xs font-medium line-clamp-2">{image.description}</p>
                    </div>
                  </motion.div>
                );
              })}
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl"
            onClick={closeLightbox}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6" onClick={(e) => e.stopPropagation()}>
              
              <motion.img
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[80vh] max-w-full rounded-[2.5rem] shadow-2xl border-4 border-white/10 object-contain"
              />

              {/* Lightbox Caption */}
              <div className="mt-8 text-center bg-white/5 border border-white/10 backdrop-blur-md px-10 py-6 rounded-[2rem] max-w-lg">
                  <h3 className="text-white font-black text-2xl mb-2">{selectedImage.title}</h3>
                  <p className="text-slate-400 font-medium">{selectedImage.description}</p>
              </div>

              {/* Close Button */}
              <button 
                onClick={closeLightbox} 
                className="absolute top-10 right-10 p-4 rounded-full bg-white/5 text-white hover:bg-emerald-600 border border-white/10 transition-all active:scale-90"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Utilities */}
              <div className="absolute bottom-10 left-10 flex gap-4">
                  <button className="p-4 rounded-full bg-white/5 text-white hover:bg-blue-600 border border-white/10 transition-all">
                    <Download className="w-5 h-5" />
                  </button>
                  <button className="p-4 rounded-full bg-white/5 text-white hover:bg-orange-500 border border-white/10 transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
              </div>

              {/* Nav Controls */}
              <button 
                onClick={prevImage} 
                className="absolute left-10 top-1/2 -translate-y-1/2 p-6 rounded-full bg-white/5 text-white hover:bg-emerald-600 border border-white/10 transition-all active:scale-95 group"
              >
                <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={nextImage} 
                className="absolute right-10 top-1/2 -translate-y-1/2 p-6 rounded-full bg-white/5 text-white hover:bg-emerald-600 border border-white/10 transition-all active:scale-95 group"
              >
                <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
