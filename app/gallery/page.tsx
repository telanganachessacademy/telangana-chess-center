"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera, Trophy, Users, BookOpen, Grid3X3, StretchHorizontal, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const galleryCategories = [
  { id: "all", name: "All Photos", icon: Camera, bg: "bg-blue-600", text: "text-white" },
  { id: "tournaments", name: "Tournaments", icon: Trophy, bg: "bg-orange-500", text: "text-white" },
  { id: "certificate", name: "Certificates", icon: Users, bg: "bg-purple-600", text: "text-white" },
  { id: "events", name: "Events", icon: BookOpen, bg: "bg-green-600", text: "text-white" },
];

// Placeholder images from Unsplash to ensure they render
const galleryImages = [
  // No color changes - colors come from galleryCategories color property
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
    id: 7,
    src: "/certificate.jpg",
    alt: "School Tournament",
    category: "certificate",
    title: "Arena International Master",
    description: "Tejawat Naresh Sir",
  }
]


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
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-[#020617] overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-blue-900/50 text-blue-300 border-blue-800 px-4 py-1.5 text-sm uppercase tracking-wider">
            Visual Journey
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            Moments of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Mastery</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore the vibrant life at Bharat Chess School. From intense tournament battles to joyous award ceremonies.
          </p>
        </div>
      </section>

      {/* --- GALLERY CONTROLS --- */}
      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {galleryCategories.map(category => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              // Dynamic Style Logic
              let btnClass = "bg-white border-slate-200 text-slate-600 hover:bg-slate-50";
              if (isSelected) {
                 if(category.id === 'all') btnClass = "bg-slate-900 text-white border-slate-900";
                 else if(category.id === 'tournaments') btnClass = "bg-orange-500 text-white border-orange-500";
                 else if(category.id === 'certificate') btnClass = "bg-purple-600 text-white border-purple-600";
                 else btnClass = "bg-green-600 text-white border-green-600";
              }

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${btnClass}`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* View Toggle */}
          <div className="bg-slate-100 p-1 rounded-lg flex items-center">
            <button 
              onClick={() => setViewMode("grid")} 
              className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-white shadow-sm text-blue-600" : "text-slate-500 hover:text-slate-900"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode("masonry")} 
              className={`p-2 rounded-md transition-all ${viewMode === "masonry" ? "bg-white shadow-sm text-blue-600" : "text-slate-500 hover:text-slate-900"}`}
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
                  className="group relative cursor-zoom-in break-inside-avoid mb-6 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Badge className={`self-start mb-2 border-0 ${
                       image.category === 'tournaments' ? 'bg-orange-500' :
                       image.category === 'certificate' ? 'bg-purple-600' : 'bg-green-600'
                    }`}>
                      {image.category}
                    </Badge>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1">{image.title}</h3>
                    <p className="text-slate-300 text-xs line-clamp-2">{image.description}</p>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
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
                className="max-h-[85vh] max-w-full rounded-lg shadow-2xl object-contain"
              />

              {/* Caption Overlay (Bottom) */}
              <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
                 <div className="inline-block bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/10 pointer-events-auto">
                    <h3 className="font-bold text-sm md:text-base">{selectedImage.title}</h3>
                 </div>
              </div>

              {/* Controls */}
              <button 
                onClick={closeLightbox} 
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button 
                 className="absolute top-6 left-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all hidden md:block"
                 title="Download"
              >
                 <Download className="w-5 h-5" />
              </button>

              <button 
                onClick={prevImage} 
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-white hover:text-black backdrop-blur-md border border-white/10 transition-all group"
              >
                <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>

              <button 
                onClick={nextImage} 
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-white hover:text-black backdrop-blur-md border border-white/10 transition-all group"
              >
                <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}