import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Filter, X } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';

// Data Structure for Medicine Categories
const CATEGORIES = [
  "All",
  "Pain Relief",
  "Vitamins & Supplements",
  "Cold & Cough",
  "First Aid",
  "Medical Equipment",
  "Personal Care"
];

// Specific Products Data Structure
const PRODUCTS = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    price: "₹30.00",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
    description: "Effective relief from fever and mild to moderate pain. Fast-acting formula."
  },
  {
    id: 2,
    name: "Ibuprofen 400mg",
    category: "Pain Relief",
    price: "₹45.00",
    image: "https://images.unsplash.com/photo-1550572017-edb799971ce9?auto=format&fit=crop&q=80&w=400",
    description: "Reduces inflammation and provides relief from body ache and headaches."
  },
  {
    id: 3,
    name: "Vitamin C Supplements",
    category: "Vitamins & Supplements",
    price: "₹150.00",
    image: "https://images.unsplash.com/photo-1640003054174-8b6eb063b45a?auto=format&fit=crop&q=80&w=400",
    description: "Boost your immunity with our premium Vitamin C tablets. Essential for daily health."
  },
  {
    id: 4,
    name: "Multivitamin Complex",
    category: "Vitamins & Supplements",
    price: "₹299.00",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
    description: "Complete daily multivitamin support for energy and overall well-being."
  },
  {
    id: 5,
    name: "Cough Syrup",
    category: "Cold & Cough",
    price: "₹95.00",
    image: "https://images.unsplash.com/photo-1643936952766-bd95333e6ca6?auto=format&fit=crop&q=80&w=400",
    description: "Fast-acting relief for dry and chesty coughs with a soothing effect."
  },
  {
    id: 6,
    name: "Antiseptic Liquid",
    category: "First Aid",
    price: "₹120.00",
    image: "https://images.unsplash.com/photo-1583947581924-860bda6a5d0e?auto=format&fit=crop&q=80&w=400",
    description: "Multi-purpose antiseptic liquid for protection against germs and minor cuts."
  },
  {
    id: 7,
    name: "First Aid Kit",
    category: "First Aid",
    price: "₹450.00",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400",
    description: "Complete first aid solution for home and travel emergencies in a compact box."
  },
  {
    id: 8,
    name: "Digital Thermometer",
    category: "Medical Equipment",
    price: "₹250.00",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400",
    description: "Fast and accurate digital thermometer for all ages with memory recall."
  },
  {
    id: 9,
    name: "Blood Pressure Monitor",
    category: "Medical Equipment",
    price: "₹1850.00",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400",
    description: "Automatic blood pressure monitor for reliable home health tracking."
  }
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();
  const [lightboxProduct, setLightboxProduct] = useState<typeof PRODUCTS[0] | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-16 md:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
            >
              Our Products
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Explore our wide range of medicines, health supplements, and medical equipment.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-auto relative"
          >
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-72 pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition shadow-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Categories Menu */}
        <div className="mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            <div className="flex items-center gap-2 mr-2 text-gray-500 font-medium px-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter:</span>
            </div>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category 
                    ? 'bg-teal-600 text-white shadow-md' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col"
              >
                <div 
                  className="h-56 overflow-hidden relative bg-white border-b border-gray-100 shrink-0 p-6 flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => setLightboxProduct(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-teal-600 rounded-full shadow-sm border border-teal-100">
                    {product.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
                    <span className="font-bold text-teal-600 whitespace-nowrap">{product.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-gray-50 text-gray-900 font-medium py-2.5 rounded-xl border border-gray-200 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition flex items-center justify-center gap-2 mt-auto"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to List
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100">
            <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">We couldn't find anything matching your search criteria.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-6 text-teal-600 font-medium hover:text-teal-700 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxProduct(null)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl p-4 pointer-events-none"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row w-full max-h-[90vh]">
                
                {/* Close button (mobile absolute, desktop absolute within container) */}
                <button
                  onClick={() => setLightboxProduct(null)}
                  className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm border border-gray-100 md:hidden"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Main image container */}
                <div className="w-full md:w-3/5 bg-gray-50 p-6 md:p-12 flex items-center justify-center relative min-h-[40vh] md:min-h-[60vh]">
                  <button
                    onClick={() => setLightboxProduct(null)}
                    className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm border border-gray-100 hidden md:flex"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <img
                    src={lightboxProduct.image}
                    alt={lightboxProduct.name}
                    className="w-full h-full object-contain max-h-full"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-4 py-2 text-xs font-bold tracking-wider uppercase text-teal-600 rounded-full shadow-sm border border-teal-100">
                    {lightboxProduct.category}
                  </div>
                </div>

                {/* Details container */}
                <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-center overflow-y-auto">
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{lightboxProduct.name}</h2>
                  <span className="text-3xl font-bold text-teal-600 mb-6 block">{lightboxProduct.price}</span>
                  
                  <div className="w-12 h-1 bg-teal-100 rounded-full mb-6" />
                  
                  <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                    {lightboxProduct.description}
                  </p>
                  
                  <button
                    onClick={() => {
                      addToCart(lightboxProduct);
                      setLightboxProduct(null);
                    }}
                    className="w-full bg-teal-600 text-white font-medium py-4 rounded-xl shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:shadow-teal-700/20 transition-all flex items-center justify-center gap-3 text-lg mt-auto"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Add to List
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}

