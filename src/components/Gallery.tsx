import { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Zap,
  Heart,
  Play,
  Pause,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Import your images
import eventPics from "@/assets/blossom-event.jpg";
import matureGroup from "@/assets/mature-grop.jpg";
import blossomSingle2Image from "@/assets/blossom-single2.jpg";
import danceImage from "@/assets/blossom-group4.jpg";
import strengthImage from "@/assets/blossom-group3.jpg";
import blossomSingleWhite from "@/assets/blossom-single-white.jpg";
import yogaImage from "@/assets/blossom-group2.jpg";
import blastImage from "@/assets/blossom-group1.jpg";
import pilatesImage from "@/assets/blossom-group5.jpg";
import boxingImage from "@/assets/blossom-group8.jpg";
import blossomSingleImage from "@/assets/blossom-single.jpg";
import dance from "@/assets/dance-no-logo.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: eventPics,
      alt: "Fitness Events",
      title: "Community Events",
      description: "Vibrant group workouts that bring our community together",
      category: "events",
      featured: true,
    },
    {
      id: 2,
      src: matureGroup,
      alt: "Mature Group Class",
      title: "All-Ages Fitness",
      description: "Inclusive classes designed for every generation",
      category: "classes",
      featured: false,
    },
    {
      id: 3,
      src: blossomSingle2Image,
      alt: "Personal Training Session",
      title: "Elite Coaching",
      description: "One-on-one transformation sessions with expert trainers",
      category: "training",
      featured: true,
    },
    {
      id: 4,
      src: danceImage,
      alt: "Dance Fitness Class",
      title: "Dance Revolution",
      description: "Energetic dance workouts that make fitness fun",
      category: "classes",
      featured: false,
    },
    {
      id: 5,
      src: strengthImage,
      alt: "Strength Training Session",
      title: "Power Zone",
      description: "Intensive strength and conditioning programs",
      category: "classes",
      featured: true,
    },
    {
      id: 6,
      src: blossomSingleWhite,
      alt: "Yoga Session",
      title: "Mindful Movement",
      description: "Yoga and meditation for holistic wellness",
      category: "wellness",
      featured: false,
    },
    {
      id: 7,
      src: yogaImage,
      alt: "Group Yoga Class",
      title: "Sunrise Yoga",
      description: "Morning sessions to energize your day",
      category: "wellness",
      featured: false,
    },
    {
      id: 8,
      src: blastImage,
      alt: "HIIT Workout",
      title: "HIIT Blast",
      description: "High-intensity interval training for maximum results",
      category: "classes",
      featured: true,
    },
    {
      id: 9,
      src: dance,
      alt: "Zumba Class",
      title: "Zumba Party",
      description: "Latin-inspired dance fitness that feels like a celebration",
      category: "classes",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Classes", count: galleryImages.length },
    {
      id: "classes",
      label: "Group Classes",
      count: galleryImages.filter((img) => img.category === "classes").length,
    },
    {
      id: "training",
      label: "Personal Training",
      count: galleryImages.filter((img) => img.category === "training").length,
    },
    {
      id: "wellness",
      label: "Wellness",
      count: galleryImages.filter((img) => img.category === "wellness").length,
    },
    {
      id: "events",
      label: "Events",
      count: galleryImages.filter((img) => img.category === "events").length,
    },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openModal = useCallback((index: number) => {
    setSelectedImage(index);
    setIsAutoPlaying(false);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    if (isAutoPlaying) setIsAutoPlaying(false);
  }, [isAutoPlaying]);

  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  }, [selectedImage, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  }, [selectedImage, filteredImages.length]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
  }, [isAutoPlaying]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && selectedImage !== null) {
      autoPlayRef.current = setInterval(nextImage, 3000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, selectedImage, nextImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeModal();
        if (e.key === " ") {
          e.preventDefault();
          toggleAutoPlay();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, nextImage, prevImage, closeModal, toggleAutoPlay]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-purple-50/20 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-100/30 to-pink-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-100/20 to-transparent rounded-full blur-3xl"></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-300/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-3 rounded-full mb-6 border border-purple-100 shadow-sm">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">
              Visual Journey
            </span>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight bg-gradient-to-r from-purple-500 to-purple-500 bg-clip-text text-transparent">
            Our Classes
            <br />& Events
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Immerse yourself in our vibrant fitness community through
            captivating moments
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={cn(
                  "group relative px-6 py-3 rounded-full transition-all duration-300",
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-purple-600 to-purple-900 text-white shadow-lg shadow-purple-200"
                    : "bg-white text-gray-600 hover:text-purple-600 border border-gray-200 hover:border-purple-300 hover:shadow-md"
                )}
              >
                <span className="font-medium">{category.label}</span>
                <span
                  className={cn(
                    "ml-2 px-2 py-1 rounded-full text-xs font-bold",
                    activeFilter === category.id
                      ? "bg-white/20"
                      : "bg-purple-100 text-purple-600"
                  )}
                >
                  {category.count}
                </span>

                {/* Hover effect */}
                {activeFilter !== category.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Modern Layout */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "relative group cursor-pointer",
                image.featured && "md:col-span-2 md:row-span-2"
              )}
              onMouseEnter={() => setHoveredCard(image.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => openModal(index)}
            >
              {/* Card with advanced effects */}
              <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]">
                  <div className="absolute inset-0 bg-white rounded-3xl"></div>
                </div>

                {/* Image container */}
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-3xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Overlay gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Featured badge */}
                  {image.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-purple-900 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 z-10">
                      <Zap className="h-3 w-3" />
                      Featured
                    </div>
                  )}

                  {/* Quick view button */}
                  <div className="absolute top-4 right-4 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                      <Maximize2 className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 rounded-2xl backdrop-blur-sm">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {image.description}
                      </p>

                      {/* Category tag */}
                      <div className="flex items-center gap-2 mt-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Floating particles on hover */}
              {hoveredCard === image.id && (
                <>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full animate-ping opacity-75"></div>
                  <div
                    className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full animate-ping opacity-75"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        {/* <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 shadow-lg mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-black text-purple-600 mb-2">
                50+
              </div>
              <p className="text-gray-600 font-medium">Weekly Classes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-600 mb-2">
                1000+
              </div>
              <p className="text-gray-600 font-medium">Happy Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-600 mb-2">
                24/7
              </div>
              <p className="text-gray-600 font-medium">Facility Access</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-600 mb-2">
                4.9★
              </div>
              <p className="text-gray-600 font-medium">Member Rating</p>
            </div>
          </div>
        </div> */}

        {/* Modal - Enhanced */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9902f7_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="relative max-w-6xl max-h-[90vh] w-full">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-50 backdrop-blur-sm"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Auto-play control */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 left-4 text-white hover:bg-white/20 z-50 backdrop-blur-sm"
                onClick={toggleAutoPlay}
              >
                {isAutoPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50 backdrop-blur-sm"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50 backdrop-blur-sm"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-1">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].alt}
                    className="w-full h-[70vh] object-contain rounded-xl"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Info panel */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8 rounded-t-2xl">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {filteredImages[selectedImage].title}
                    </h3>
                    <p className="text-white/80 text-lg max-w-2xl">
                      {filteredImages[selectedImage].description}
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-pink-400" />
                        <span className="text-white/60">Featured</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                        <span className="text-white/60 uppercase tracking-wider">
                          {filteredImages[selectedImage].category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Image counter */}
                  <div className="text-white/60">
                    {selectedImage + 1} / {filteredImages.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add custom animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          .animate-float {
            animation: float 20s ease-in-out infinite;
          }
          
          @keyframes shine {
            to {
              transform: translateX(100%);
            }
          }
          .animate-shine {
            animation: shine 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
