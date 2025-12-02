import { motion } from 'framer-motion';
import { Heart, Code, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from '@/lib/router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-heading font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Kokum & Coast
            </h3>
            <p className="text-gray-300 mb-6 font-paragraph">
              Coastal Maharashtra, Reimagined. Experience authentic flavors with a modern twist.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-heading font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-heading font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Shop No. 12, Colaba Causeway, Mumbai 400005</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <a href="tel:+912240001234" className="text-gray-300 hover:text-pink-400 transition-colors">
                  +91-22-4000-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <a href="mailto:hello@kokumandcoast.in" className="text-gray-300 hover:text-pink-400 transition-colors">
                  hello@kokumandcoast.in
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-heading font-bold mb-6">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-pink-400 font-semibold">11 AM - 11 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Saturday - Sunday</span>
                <span className="text-pink-400 font-semibold">11 AM - 12 AM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Bar with Developer Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kokum & Coast. All rights reserved.
          </div>

          {/* Developer Credit */}
          <motion.div
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-6 py-3 rounded-full border border-purple-400/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-gray-400 text-sm">Crafted with</span>
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
            <span className="text-gray-400 text-sm">by</span>
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full">
              <Code className="w-4 h-4 text-white" />
              <span className="font-mono font-bold text-white tracking-wider">𝚜𝚌𝚑𝚛𝚘𝚍𝚒𝚗𝚐𝚎𝚛𝚜𝚙𝚎𝚝</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600"></div>
    </footer>
  );
}
