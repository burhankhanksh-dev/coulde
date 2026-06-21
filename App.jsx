import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Star, ChevronRight } from 'lucide-react';
import DiamondRing from './DiamondRing';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Smooth Scroll Reveal for Sections
    const sections = document.querySelectorAll('.reveal');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }}
      );
    });
  }, []);

  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-gold selection:text-black">
      
      {/* Loading Screen Overlay */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
      >
        <div className="w-24 h-24 border-4 border-t-gold border-gold/20 rounded-full animate-spin" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="text-2xl font-serif tracking-widest text-gold">
          M.S. JEWELLERS
        </div>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-300">
          {['Home', 'Collections', 'About', 'Reviews', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors">{item}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} color="#D4AF37" intensity={2} />
            <DiamondRing />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>

        <div className="relative z-10 text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif text-gold leading-tight"
          >
            सुश्री। ज्वैलर्स
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl tracking-[0.3em] uppercase font-light"
          >
            Latest Designs • Premium Quality
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="mt-8 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
          >
            EXPLORE COLLECTIONS
          </motion.button>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 px-10 bg-[#080808]">
        <h2 className="text-4xl font-serif text-center mb-16 reveal">Our Masterpieces</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Gold Rings', 'Necklaces', 'Wedding Sets', 'Earrings', 'Party Wear', 'Diamond Cut'].map((item, index) => (
            <div key={index} className="reveal group relative overflow-hidden bg-white/5 border border-white/10 p-4 backdrop-blur-sm rounded-xl cursor-pointer">
              <div className="h-80 bg-neutral-900 rounded-lg overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                 {/* Placeholder for high-end images */}
                 <img src={`https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800`} 
                      alt={item} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <h3 className="absolute bottom-6 left-6 z-20 text-2xl font-serif">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 reveal">
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl font-serif text-gold">Crafting Legacies Since Decades</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            M.S. Jewellers is one of the most trusted jewellery stores in Okhla, New Delhi. 
            Located in the heart of Batla House, we specialize in unique designs, 
            exquisite wedding collections, and daily wear gold that balances luxury with affordability.
          </p>
          <div className="flex gap-10">
            <div><span className="block text-3xl text-gold">100%</span><span className="text-xs uppercase">Hallmarked</span></div>
            <div><span className="block text-3xl text-gold">Unique</span><span className="text-xs uppercase">Designs</span></div>
            <div><span className="block text-3xl text-gold">Trust</span><span className="text-xs uppercase">In Okhla</span></div>
          </div>
        </div>
        <div className="flex-1 w-full h-[400px] bg-gold/10 rounded-2xl border border-gold/20 flex items-center justify-center">
             <span className="text-gold italic font-serif">A Legacy of Excellence</span>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-10 bg-black">
        <h2 className="text-4xl font-serif text-center mb-16 reveal">Voice of our Patrons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: "Latest design, Best Gold and reasonable Rates... best jewellers in Okhla.", author: "Shabana Begum" },
            { text: "Good Collection of Jewelleries for wedding and parties.", author: "Arif Khan" },
            { text: "Unique and attractive design for weddings.", author: "Mohd. Zaid" }
          ].map((rev, i) => (
            <div key={i} className="reveal p-8 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-gold/30 hover:border-gold transition-all duration-500">
              <div className="flex text-gold mb-4 font-bold"><Star fill="#D4AF37" size={16}/> <Star fill="#D4AF37" size={16}/> <Star fill="#D4AF37" size={16}/> <Star fill="#D4AF37" size={16}/> <Star fill="#D4AF37" size={16}/></div>
              <p className="italic text-gray-300 mb-6 font-light">"{rev.text}"</p>
              <p className="text-gold font-serif">— {rev.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 px-10 grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#080808]">
        <div className="space-y-8 reveal">
          <h2 className="text-4xl font-serif text-gold">Visit Our Boutique</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-gold shrink-0" />
              <p className="text-gray-400">Batla House, 19/2 Nafees Rd, Jamia, Jogabai Extension, Jamia Nagar, Okhla, New Delhi, 110025</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-gold" />
              <p className="text-gray-400">+91 98112 34802</p>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="text-gold" />
              <p className="text-gray-400">11:00 AM - 9:00 PM (Everyday)</p>
            </div>
          </div>
        </div>
        <div className="h-[400px] rounded-2xl overflow-hidden border border-white/10 reveal">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.428807534433!2d77.2829285!3d28.5568853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3899f8d9753%3A0xc08d745c36399081!2sM.S.%20Jewellers!5e0!3m2!1sen!2sin!4v1700000000000" 
            className="w-full h-full grayscale invert"
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-white/5 text-gray-500 text-sm">
        <p>© 2026 M.S. Jewellers. Crafted with elegance for Okhla's finest.</p>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919811234802" 
        className="fixed bottom-8 right-8 z-[60] bg-green-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={30} color="white" />
      </a>

    </div>
  );
};

export default App;
