import { useState, useEffect, useRef, useCallback } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
  Trophy,
  Heart,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Import from react-router-dom instead

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Blossom's Fitness Hub completely transformed my workout routine! The virtual classes are so engaging and the community support is incredible. I've never felt stronger!",
      achievement: "Lost 25 lbs in 3 months",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "Marcus Davis",
      role: "Professional Athlete",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The variety of classes and expert instructors here are top-notch. As a professional athlete, I need quality training, and Blossom's delivers every time.",
      achievement: "Improved performance by 40%",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Busy Mom",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "With two kids and a full-time job, I thought fitness was impossible. The flexible schedule and home workouts saved my sanity and health!",
      achievement: "Found work-life balance",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Fitness Beginner",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I was intimidated by gyms, but the welcoming community and beginner-friendly classes gave me confidence. Now I'm stronger than ever!",
      achievement: "Gained confidence & strength",
      color: "from-indigo-500 to-purple-700",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Yoga Instructor",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Even as an instructor myself, I learn so much from the diverse classes offered. The platform is intuitive and the content quality is exceptional.",
      achievement: "Enhanced teaching skills",
      color: "from-teal-400 to-purple-500",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Corporate Executive",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The convenience of working out on my schedule while maintaining quality instruction is game-changing. Stress levels down, energy up!",
      achievement: "Reduced stress, increased energy",
      color: "from-amber-500 to-purple-600",
    },
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextTestimonial, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, nextTestimonial]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden py-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-100/50 to-purple-2                                                     00/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-100/40 to-transparent rounded-full blur-3xl"></div>

        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(153,2,247,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(153,2,247,0.08)_0%,transparent_50%)]"></div>
        </div>

        {/* Floating abstract shapes */}
        <div className="absolute top-40 right-1/4 w-32 h-32 border border-purple-200/40 rounded-full animate-float"></div>
        <div
          className="absolute bottom-40 left-1/4 w-24 h-24 border border-purple-300/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid lines - very subtle */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#9902f7_1px,transparent_1px),linear-gradient(to_bottom,#9902f7_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-purple-600 via-[#9902f7] to-purple-500 bg-clip-text text-transparent">
              Voices of
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-[#9902f7] to-purple-500 bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands who have transformed their lives.{" "}
            <span className="text-purple-600 font-semibold">
              Their success stories
            </span>{" "}
            speak volumes.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div
          className="relative max-w-6xl mx-auto mb-20"
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card with subtle shadow and border */}
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-purple-100/50 border border-purple-100 overflow-hidden">
            {/* Decorative top gradient bar */}
            <div className="h-2 bg-gradient-to-r from-purple-500 via-[#9902f7] to-purple-900"></div>

            <div className="p-8 md:p-12 lg:p-16">
              {/* Floating quote icon - subtle */}
              <div className="absolute top-8 right-8 text-purple-100 text-8xl">
                <Quote className="w-16 h-16" />
              </div>

              {/* Testimonial Content */}
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                {/* Left: Avatar and Info */}
                <div className="flex flex-col items-center lg:items-start space-y-6">
                  {/* Avatar with subtle glow */}
                  <div className="relative">
                    <div
                      className={`absolute -inset-3 bg-gradient-to-r ${testimonials[currentIndex].color} rounded-full blur-lg opacity-20`}
                    ></div>
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                      />
                      {/* Verified badge */}
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-purple-900 p-2 rounded-full shadow-lg">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-purple-600 font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-6 w-6 text-yellow-400 fill-current"
                        />
                      )
                    )}
                  </div>

                  {/* Achievement Badge */}
                  <div
                    className={`bg-gradient-to-r ${testimonials[currentIndex].color} px-6 py-3 rounded-full text-white font-semibold text-sm flex items-center gap-2 shadow-lg`}
                  >
                    <Trophy className="h-4 w-4" />
                    {testimonials[currentIndex].achievement}
                  </div>
                </div>

                {/* Center: Quote */}
                <div className="lg:col-span-2 relative">
                  <div className="absolute -left-6 top-0 text-6xl text-purple-200 font-serif">
                    "
                  </div>
                  <blockquote className="text-2xl md:text-3xl leading-relaxed font-medium text-gray-800 pl-6">
                    {testimonials[currentIndex].text}
                  </blockquote>
                  <div className="absolute -right-6 bottom-0 text-6xl text-purple-200 font-serif">
                    "
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Elegant */}
          <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2">
            <Button
              onClick={prevTestimonial}
              className="rounded-full bg-white p-4 hover:bg-purple-50 transition-all duration-300 hover:scale-110 shadow-xl border border-purple-100 group"
            >
              <ChevronLeft className="h-6 w-6 text-purple-600 group-hover:text-purple-700" />
            </Button>
          </div>

          <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2">
            <Button
              onClick={nextTestimonial}
              className="rounded-full bg-white p-4 hover:bg-purple-50 transition-all duration-300 hover:scale-110 shadow-xl border border-purple-100 group"
            >
              <ChevronRight className="h-6 w-6 text-purple-600 group-hover:text-purple-700" />
            </Button>
          </div>
        </div>

        {/* Testimonial Dots with Avatars */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative group transition-all duration-300 ${
                index === currentIndex
                  ? "scale-110"
                  : "scale-100 hover:scale-105"
              }`}
            >
              {/* Active indicator */}
              {index === currentIndex && (
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-purple-900/20 rounded-full blur-md"></div>
              )}

              <div className="relative">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className={`w-14 h-14 rounded-full object-cover border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "border-purple-600 ring-4 ring-purple-100"
                      : "border-white group-hover:border-purple-300"
                  } shadow-md`}
                />
              </div>

              {/* Active indicator dot */}
              <div
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-600 to-purple-900 scale-125"
                    : "bg-gray-300 group-hover:bg-purple-300"
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Stats Section - Clean & Modern */}

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-purple-100 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to start your transformation?
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Join our community of achievers and begin your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* External link to Zumba */}
              <a
                href="https://www.zumba.com/en-US/p/blossom-maduafokwa/1426095"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <Button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-[#9902f7] to-purple-900 text-white px-8 py-6 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <span className="relative z-10">Join Us Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-[-8px]" />
                </Button>
              </a>

              {/* Internal link to classes page */}
              <Link to="/classes" className="no-underline">
                <Button
                  variant="outline"
                  className="group relative overflow-hidden bg-white text-purple-700 px-8 py-6 rounded-full text-lg font-semibold border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <span className="relative z-10">Explore Classes</span>
                  <ArrowRight className="ml-2 h-5 w-5 text-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Optional: Add a note about external link */}
            <p className="text-gray-500 text-sm mt-6">
              <span className="text-purple-600">*</span> Clicking "Join Us
              Today" will redirect you to our official Zumba® page
            </p>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
