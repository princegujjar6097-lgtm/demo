import { Target, Eye, Shield, HeartHandshake, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const values = [
    { icon: Shield, title: 'Integrity', desc: 'We operate with uncompromising honesty and transparency in all our interactions.' },
    { icon: HeartHandshake, title: 'Customer Care', desc: 'Putting our patients and their well-being at the forefront of everything we do.' },
    { icon: Award, title: 'Quality Assurance', desc: 'Ensuring every product we sell meets the highest standards of safety.' },
    { icon: Target, title: 'Professional Excellence', desc: 'Delivering expert advice and service from knowledgeable staff.' },
    { icon: Users, title: 'Community Service', desc: 'Dedicated to improving the overall health of our local community.' },
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">About Rawal Medical Hall</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are dedicated to providing high-quality pharmaceutical products and healthcare solutions. 
              With a focus on trust, authenticity, and customer satisfaction, we strive to be the preferred pharmacy for families and healthcare professionals.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-teal-50 rounded-2xl p-8 md:p-12"
          >
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To improve community health by providing safe, genuine, and affordable medicines along with exceptional customer service.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <div className="bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To become a trusted healthcare partner by offering comprehensive pharmaceutical care and top-tier healthcare products.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600">The principles that guide our everyday commitment to your health.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div 
                key={v.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{v.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
