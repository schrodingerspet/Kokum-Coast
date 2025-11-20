import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Mail, Star, ChefHat, Calendar, Sparkles, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Hero Section - Animated Mumbai Coastline */}
      <section 
        ref={heroRef}
        className="relative h-screen overflow-hidden"
        role="banner"
        aria-label="Hero section with restaurant introduction"
      >
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="https://static.wixstatic.com/media/bb9e77_28a8ed1e808648dd9188045ddabfb474~mv2.png?originWidth=1920&originHeight=1024"
            alt="Mumbai coastline with Gateway of India and Colaba area"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-orange-900/60" />
        </motion.div>
        
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-20 left-8 right-8 z-20 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl">
              <Sparkles className="w-4 h-4" />
              Mumbai's Premier Coastal Dining
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-7xl md:text-8xl font-heading font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Kokum & Coast
            </span>
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-3xl font-paragraph text-white/95 mb-8 font-light"
          >
            Where Tradition Meets Innovation
          </motion.p>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-10 py-6 text-xl rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105"
            >
              <Link to="/store">Order Online</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-3 border-white bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-purple-900 px-10 py-6 text-xl rounded-full shadow-2xl transition-all hover:scale-105"
            >
              <Link to="/reservations">Reserve Table</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="max-w-[120rem] mx-auto px-4 py-20">
        
        {/* Restaurant Information Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
          aria-labelledby="restaurant-info-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  About Us
                </span>
              </motion.div>
              
              <h2 id="restaurant-info-heading" className="text-6xl font-heading font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent mb-8">
                Experience Mumbai's Coastal Heritage
              </h2>
              <p className="text-xl font-paragraph text-gray-700 mb-8 leading-relaxed">
                Nestled in the heart of Colaba, Kokum & Coast brings you an innovative culinary journey through 
                coastal Maharashtra. Our menu celebrates traditional flavors with a contemporary twist, 
                featuring fresh seafood, aromatic spices, and the signature tang of kokum.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-5 bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl text-white">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="font-paragraph text-gray-700 text-lg">Shop No. 12, Colaba Causeway, Mumbai 400005</span>
                </div>
                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                  <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-3 rounded-xl text-white">
                    <Phone className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <a href="tel:+912240001234" className="font-paragraph text-gray-700 text-lg hover:text-pink-600 transition-colors">
                    +91-22-4000-1234
                  </a>
                </div>
                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded-xl text-white">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <a href="mailto:hello@kokumandcoast.in" className="font-paragraph text-gray-700 text-lg hover:text-pink-600 transition-colors">
                    hello@kokumandcoast.in
                  </a>
                </div>
                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-xl text-white">
                    <Clock className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="font-paragraph text-gray-700 text-lg">Open Daily: 11:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="https://static.wixstatic.com/media/bb9e77_7948a845b7814523848831706501d3e0~mv2.png?originWidth=576&originHeight=512"
                alt="Elegant restaurant interior with coastal-inspired decor"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                width={600}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Quick Actions Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-32"
          aria-labelledby="quick-actions-heading"
        >
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              Get Started
            </span>
            <h2 id="quick-actions-heading" className="text-6xl font-heading font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Quick Access
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-2xl h-full bg-gradient-to-br from-orange-500 to-pink-600 text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
                <CardContent className="relative p-10 text-center">
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <ChefHat className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-4">Order Online</h3>
                  <p className="font-paragraph text-white/90 text-lg mb-8">
                    Browse our menu and order your favorite coastal delicacies for delivery or pickup.
                  </p>
                  <Button asChild className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-6 rounded-xl shadow-xl">
                    <Link to="/store">View Menu</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-2xl h-full bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
                <CardContent className="relative p-10 text-center">
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Calendar className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-4">Reserve Table</h3>
                  <p className="font-paragraph text-white/90 text-lg mb-8">
                    Book your table for an unforgettable dining experience overlooking the Arabian Sea.
                  </p>
                  <Button asChild className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold py-6 rounded-xl shadow-xl">
                    <Link to="/reservations">Make Reservation</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-2xl h-full bg-gradient-to-br from-pink-600 to-yellow-500 text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
                <CardContent className="relative p-10 text-center">
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Star className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-4">Reviews</h3>
                  <p className="font-paragraph text-white/90 text-lg mb-8">
                    Read what our guests say about their dining experience and share your own.
                  </p>
                  <Button asChild className="w-full bg-white text-pink-600 hover:bg-gray-100 font-bold py-6 rounded-xl shadow-xl">
                    <Link to="/reviews">Read Reviews</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Highlights */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-32"
          aria-labelledby="highlights-heading"
        >
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              Our Strengths
            </span>
            <h2 id="highlights-heading" className="text-6xl font-heading font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Why Choose Kokum & Coast
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: '🌊', title: 'Fresh Seafood', desc: "Daily catch from Mumbai's fishing docks", gradient: 'from-blue-500 to-cyan-400' },
              { emoji: '🥥', title: 'Authentic Flavors', desc: 'Traditional Maharashtrian coastal cuisine', gradient: 'from-green-500 to-emerald-400' },
              { emoji: '🏛️', title: 'Prime Location', desc: 'Heart of historic Colaba district', gradient: 'from-purple-500 to-pink-400' },
              { emoji: '⭐', title: 'Award Winning', desc: 'Recognized for culinary excellence', gradient: 'from-yellow-500 to-orange-400' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all group-hover:rotate-6`}>
                  <span className="text-5xl">{item.emoji}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="font-paragraph text-gray-600 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>
    </div>
  );
}