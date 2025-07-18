import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  ChevronDown, 
  Play, 
  ArrowRight, 
  Zap, 
  Shield, 
  BarChart3,
  Globe,
  Cpu,
  Network,
  Database,
  Cloud,
  Brain,
  Settings,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Users,
  Award,
  Activity,
  Microscope,
  Factory,
  Pill,
  Utensils,
  Dna,
  Beaker,
  FlaskConical,
  TestTube,
  Atom,
  Leaf,
  Gauge,
  Lock,
  Code,
  Layers,
  Server,
  Workflow,
  Sparkles
} from 'lucide-react';

const ImprovedHeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "#",
  showMetrics = false,
  heroType = "default" // "default", "industries", "technology", "solutions", "about", "products", "resources", "contact"
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  // Multi-colored floating cards based on hero type
  const getFloatingCards = () => {
    switch (heroType) {
      case "industries":
        return [
          {
            icon: Pill,
            title: "Pharmaceuticals",
            subtitle: "GMP Compliance",
            position: { top: '15%', left: '8%' },
            delay: 0,
            gradient: "from-purple-500 to-violet-500"
          },
          {
            icon: Activity,
            title: "Medical Devices",
            subtitle: "ISO 13485",
            position: { top: '20%', right: '10%' },
            delay: 0.5,
            gradient: "from-red-500 to-pink-500"
          },
          {
            icon: Utensils,
            title: "Food & Beverage",
            subtitle: "HACCP Standards",
            position: { bottom: '25%', left: '12%' },
            delay: 1,
            gradient: "from-green-500 to-emerald-500"
          },
          {
            icon: Dna,
            title: "Biotechnology",
            subtitle: "Advanced Research",
            position: { bottom: '30%', right: '8%' },
            delay: 1.5,
            gradient: "from-indigo-500 to-purple-500"
          }
        ];
      case "technology":
        return [
          {
            icon: Brain,
            title: "AI/ML Platform",
            subtitle: "Smart Analytics",
            position: { top: '15%', left: '8%' },
            delay: 0,
            gradient: "from-cyan-500 to-blue-500"
          },
          {
            icon: Cloud,
            title: "Cloud Native",
            subtitle: "Scalable Infrastructure",
            position: { top: '20%', right: '10%' },
            delay: 0.5,
            gradient: "from-orange-500 to-red-500"
          },
          {
            icon: Network,
            title: "IoT Integration",
            subtitle: "Connected Systems",
            position: { bottom: '25%', left: '12%' },
            delay: 1,
            gradient: "from-teal-500 to-cyan-500"
          },
          {
            icon: Shield,
            title: "Security First",
            subtitle: "Enterprise Grade",
            position: { bottom: '30%', right: '8%' },
            delay: 1.5,
            gradient: "from-amber-500 to-yellow-500"
          }
        ];
      case "solutions":
        return [
          {
            icon: Settings,
            title: "Manufacturing",
            subtitle: "Process Control",
            position: { top: '15%', left: '8%' },
            delay: 0,
            gradient: "from-blue-500 to-indigo-500"
          },
          {
            icon: BarChart3,
            title: "Analytics",
            subtitle: "Data Insights",
            position: { top: '20%', right: '10%' },
            delay: 0.5,
            gradient: "from-purple-500 to-pink-500"
          },
          {
            icon: CheckCircle,
            title: "Quality Control",
            subtitle: "Compliance Ready",
            position: { bottom: '25%', left: '12%' },
            delay: 1,
            gradient: "from-green-500 to-teal-500"
          },
          {
            icon: Workflow,
            title: "Automation",
            subtitle: "Smart Workflows",
            position: { bottom: '30%', right: '8%' },
            delay: 1.5,
            gradient: "from-orange-500 to-amber-500"
          }
        ];
      default:
        return [
          {
            icon: Brain,
            title: "AI-Powered Analytics",
            subtitle: "Predictive Intelligence",
            position: { top: '8%', left: '3%' },
            delay: 0,
            gradient: "from-blue-500 to-cyan-500"
          },
          {
            icon: Shield,
            title: "GxP Compliance",
            subtitle: "Regulatory Excellence",
            position: { top: '12%', right: '3%' },
            delay: 0.5,
            gradient: "from-green-500 to-emerald-500"
          },
          {
            icon: Activity,
            title: "Real-time Monitoring",
            subtitle: "24/7 Operations",
            position: { bottom: '20%', left: '3%' },
            delay: 1,
            gradient: "from-purple-500 to-pink-500"
          },
          {
            icon: Factory,
            title: "Smart Manufacturing",
            subtitle: "Industry 4.0/5.0",
            position: { bottom: '25%', right: '3%' },
            delay: 1.5,
            gradient: "from-orange-500 to-red-500"
          }
        ];
    }
  };

  const floatingCards = getFloatingCards();

  // Central elements based on hero type
  const getCenterElements = () => {
    switch (heroType) {
      case "industries":
        return [
          { icon: Pill, angle: 0, radius: 120, color: "text-purple-400" },
          { icon: Activity, angle: 72, radius: 130, color: "text-red-400" },
          { icon: Utensils, angle: 144, radius: 125, color: "text-green-400" },
          { icon: Dna, angle: 216, radius: 135, color: "text-indigo-400" },
          { icon: Leaf, angle: 288, radius: 140, color: "text-orange-400" }
        ];
      case "technology":
        return [
          { icon: Cpu, angle: 0, radius: 120, color: "text-cyan-400" },
          { icon: Cloud, angle: 60, radius: 130, color: "text-orange-400" },
          { icon: Network, angle: 120, radius: 125, color: "text-teal-400" },
          { icon: Database, angle: 180, radius: 135, color: "text-purple-400" },
          { icon: Code, angle: 240, radius: 140, color: "text-pink-400" },
          { icon: Server, angle: 300, radius: 130, color: "text-yellow-400" }
        ];
      default:
        return [
          { icon: Pill, angle: 0, radius: 120, color: "text-blue-400" },
          { icon: Microscope, angle: 60, radius: 140, color: "text-green-400" },
          { icon: Beaker, angle: 120, radius: 130, color: "text-purple-400" },
          { icon: Dna, angle: 180, radius: 125, color: "text-cyan-400" },
          { icon: FlaskConical, angle: 240, radius: 135, color: "text-pink-400" },
          { icon: TestTube, angle: 300, radius: 140, color: "text-orange-400" }
        ];
    }
  };

  const centerElements = getCenterElements();

  // Background gradient based on hero type
  const getBackgroundGradient = () => {
    switch (heroType) {
      case "industries":
        return "from-purple-900 via-indigo-900 to-blue-900";
      case "technology":
        return "from-cyan-900 via-blue-900 to-indigo-900";
      case "solutions":
        return "from-blue-900 via-purple-900 to-indigo-900";
      case "about":
        return "from-green-900 via-teal-900 to-blue-900";
      case "products":
        return "from-orange-900 via-red-900 to-pink-900";
      case "resources":
        return "from-amber-900 via-orange-900 to-red-900";
      case "contact":
        return "from-emerald-900 via-green-900 to-teal-900";
      default:
        return "from-slate-900 via-blue-900 to-purple-900";
    }
  };

  useEffect(() => {
    setIsVisible(true);
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${getBackgroundGradient()}`}>
      {/* Enhanced Animated Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px]"></div>
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'] 
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/8 via-purple-500/8 to-cyan-500/8 bg-[length:200%_200%]"
        />
        
        {/* Optimized mobile particles */}
        <div className="absolute inset-0 lg:hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Cards - Desktop Only, Properly Positioned */}
      {floatingCards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute z-10 hidden xl:block"
          style={{
            ...card.position,
            // Ensure cards don't overlap with main content
            ...(card.position.top && parseFloat(card.position.top) < 40 ? { top: '10%' } : {}),
            ...(card.position.bottom && parseFloat(card.position.bottom) < 30 ? { bottom: '15%' } : {}),
            ...(card.position.left && parseFloat(card.position.left) < 15 ? { left: '5%' } : {}),
            ...(card.position.right && parseFloat(card.position.right) < 15 ? { right: '5%' } : {})
          }}
          variants={cardVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: card.delay }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: card.delay
            }}
            className={`bg-gradient-to-r ${card.gradient} p-3 lg:p-4 rounded-xl lg:rounded-2xl backdrop-blur-lg shadow-2xl border border-white/20 min-w-[160px] lg:min-w-[180px]`}
          >
            <div className="flex items-center gap-2 lg:gap-3 mb-1 lg:mb-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <card.icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs lg:text-sm">{card.title}</h4>
                <p className="text-white/70 text-xs">{card.subtitle}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Central 3D Illustration - Only for home page and desktop, positioned to not overlap */}
      {heroType === "default" && (
        <div className="absolute inset-0 z-5 hidden 2xl:flex items-center justify-center">
          <div className="relative w-64 h-64 xl:w-80 xl:h-80 mt-20">
            {/* Central Core */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 xl:w-24 xl:h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center"
            >
              <div className="w-12 h-12 xl:w-16 xl:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Cpu className="w-6 h-6 xl:w-8 xl:h-8 text-white" />
              </div>
            </motion.div>

            {/* Reduced Orbiting Elements */}
            {centerElements.slice(0, 3).map((element, index) => {
              const x = Math.cos((element.angle * Math.PI) / 180) * (element.radius * 0.6);
              const y = Math.sin((element.angle * Math.PI) / 180) * (element.radius * 0.6);
              
              return (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-10 h-10 xl:w-12 xl:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.8 }
                  }}
                >
                  <element.icon className={`w-5 h-5 xl:w-6 xl:h-6 ${element.color}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Optimized Particle Effect */}
      <div className="absolute inset-0 z-1">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content - Better Mobile Spacing */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto pt-24 sm:pt-28 md:pt-32 lg:pt-20 xl:pt-24 min-h-screen flex flex-col justify-center"
        >
          {/* Badge - Better Mobile Spacing */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-sm sm:text-base font-medium border border-blue-400/30">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="hidden sm:inline">{subtitle}</span>
              <span className="sm:hidden text-sm">Manufacturing Intelligence</span>
            </span>
          </motion.div>

          {/* Main Title - Better Mobile Spacing */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 lg:mb-10 xl:mb-12 leading-tight max-w-6xl mx-auto px-2"
          >
            {title}
          </motion.h1>
          
          {/* Subtitle - Better Mobile Spacing */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-10 lg:mb-12 xl:mb-16 text-gray-300 leading-relaxed max-w-5xl mx-auto px-2"
          >
            {description}
          </motion.p>

          {/* Key Metrics - Better Mobile Layout */}
          {showMetrics && heroType === "default" && (
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 xl:mb-16 max-w-6xl mx-auto"
            >
              {[
                { number: "99.9%", label: "System Uptime", icon: TrendingUp, color: "text-green-400" },
                { number: "50+", label: "Global Customers", icon: Users, color: "text-blue-400" },
                { number: "15+", label: "Countries", icon: Globe, color: "text-purple-400" },
                { number: "24/7", label: "Support", icon: Shield, color: "text-cyan-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 text-center"
                >
                  <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ${stat.color} mx-auto mb-2 sm:mb-3`} />
                  <div className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 ${stat.color}`}>{stat.number}</div>
                  <div className="text-sm sm:text-base lg:text-lg text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* Action Buttons - Better Mobile Layout */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12"
          >
            <motion.a
              href={primaryButtonLink}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg lg:text-xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Play size={20} className="sm:w-6 sm:h-6" />
              <span className="truncate">{primaryButtonText}</span>
            </motion.a>
            
            <motion.a
              href={secondaryButtonLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg lg:text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span className="truncate">{secondaryButtonText}</span>
              <ArrowRight size={20} className="sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>

          {/* Trust Badges - Better Mobile Layout */}
          {heroType === "default" && (
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10 text-gray-400 max-w-4xl mx-auto"
            >
              {[
                { icon: Award, text: "FDA Validated" },
                { icon: Shield, text: "SOC 2 Certified" },
                { icon: CheckCircle, text: "GxP Compliant" },
                { icon: Star, text: "Industry Leader" }
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  <span className="text-sm sm:text-base lg:text-lg">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator - Mobile Optimized */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20"
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-sm opacity-70 hidden sm:block">Discover More</span>
          <ChevronDown size={20} className="sm:w-6 sm:h-6 text-blue-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default ImprovedHeroSection;