import { motion } from 'motion/react';
import { ChevronRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Blog() {
  const articles = [
    {
      title: 'How to Store Medicines Safely at Home',
      excerpt: 'Tips for maintaining medicine effectiveness and safety in your household.',
      date: 'Oct 12, 2023',
      category: 'Safety'
    },
    {
      title: 'Importance of Completing Your Antibiotic Course',
      excerpt: 'Understanding why prescribed antibiotic treatment should not be stopped early.',
      date: 'Oct 05, 2023',
      category: 'Medication'
    },
    {
      title: 'Essential First Aid Items Every Home Should Have',
      excerpt: 'A comprehensive checklist of important first aid supplies for emergencies.',
      date: 'Sep 28, 2023',
      category: 'Wellness'
    },
    {
      title: 'Managing Seasonal Allergies',
      excerpt: 'Simple, effective ways to reduce and manage allergy symptoms during changing seasons.',
      date: 'Sep 15, 2023',
      category: 'Health Tips'
    },
    {
      title: 'Understanding Common Vitamins and Supplements',
      excerpt: 'A beginner\'s guide to choosing the right supplements for your overall health.',
      date: 'Sep 02, 2023',
      category: 'Nutrition'
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Health & Wellness Blog</h1>
          <p className="text-lg text-gray-600">
            Stay informed with our latest articles on health, medication, and wellness tips.
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-teal-100 hover:shadow-lg transition-all bg-white flex flex-col md:flex-row gap-6 md:items-center justify-between"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-teal-50 text-teal-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              
              <Link to="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-gray-400 group-hover:bg-teal-600 group-hover:text-white transition-colors shrink-0">
                <ChevronRight className="w-6 h-6" />
              </Link>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
