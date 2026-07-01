import { ArrowRight, ShieldCheck, HeartPulse, Truck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Home() {
  const features = [
    { icon: ShieldCheck, title: 'Genuine Medicines', desc: '100% certified and original medicines from trusted pharmaceutical brands.' },
    { icon: HeartPulse, title: 'Healthcare Products', desc: 'Wide range of over-the-counter wellness and personal care products.' },
    { icon: Truck, title: 'Fast Home Delivery', desc: 'Convenient and reliable doorstep delivery for your medicine needs.' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-teal-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                Your Trusted Neighborhood <span className="text-teal-600">Pharmacy</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                We are committed to serving the community with genuine medicines, reliable healthcare solutions, and excellent customer service.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="bg-teal-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-teal-700 transition inline-flex items-center gap-2">
                  View Medicines <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition flex items-center gap-2 shadow-sm">
                  <PhoneCall className="w-4 h-4 text-teal-600" />
                  Contact Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="relative lg:h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800" 
                alt="Pharmacy Staff" 
                className="rounded-2xl object-cover w-full h-full shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Why Choose Rawal Medical Hall?</h2>
            <p className="text-gray-600 text-lg">We prioritize your health with quality products and professional guidance.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition"
              >
                <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-teal-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-4">Need medicines or healthcare products?</h2>
              <p className="text-teal-100 text-lg mb-8">Contact us today for quick assistance and professional guidance.</p>
              <Link to="/contact" className="bg-white text-teal-600 px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition inline-block">
                Get Quick Assistance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
