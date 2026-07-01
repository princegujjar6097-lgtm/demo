import { Pill, Thermometer, Truck, Stethoscope, BriefcaseMedical, Bandage } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: Pill,
      title: 'Prescription Medicines',
      desc: 'We dispense doctor-prescribed medicines from trusted and certified pharmaceutical companies.'
    },
    {
      icon: Bandage,
      title: 'Over-the-Counter Medicines',
      desc: 'A wide range of medicines for common health concerns without requiring a prescription.'
    },
    {
      icon: BriefcaseMedical,
      title: 'Healthcare Products',
      desc: 'Vitamins, supplements, personal care, baby care products, and daily medical supplies.'
    },
    {
      icon: Thermometer,
      title: 'Medical Equipment',
      desc: 'Blood pressure monitors, glucometers, thermometers, nebulizers, and more.'
    },
    {
      icon: Truck,
      title: 'Home Delivery',
      desc: 'Convenient and fast medicine delivery straight to your doorstep when you need it most.'
    },
    {
      icon: Stethoscope,
      title: 'Health Support',
      desc: 'Basic medicine guidance, dosage instructions, and healthcare product recommendations.'
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Comprehensive pharmaceutical care tailored to support your health and wellness journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
