import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Award, Clock, DollarSign } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: CheckCircle,
      title: 'Quality',
      description: 'We deliver exceptional construction with attention to every detail'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Using cutting-edge technology and modern construction methods'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Consistent delivery on time, every time, without compromise'
    },
    {
      icon: DollarSign,
      title: 'Deadlines',
      description: 'Meeting project timelines while maintaining budget efficiency'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-800">
            About <span className="text-blue-600">United Construction for Africa</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded in April 2021, United Construction for Africa is a leading construction and civil engineering company 
            dedicated to transforming Africa's infrastructure landscape. We specialize in designing and building 
            world-class projects that drive economic growth and improve quality of life across the continent.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.h3 
                className="text-4xl mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                150+
              </motion.h3>
              <p className="text-blue-100">Projects Completed</p>
            </div>
            <div>
              <motion.h3 
                className="text-4xl mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
              >
                3+
              </motion.h3>
              <p className="text-blue-100">Years of Excellence</p>
            </div>
            <div>
              <motion.h3 
                className="text-4xl mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                viewport={{ once: true }}
              >
                98%
              </motion.h3>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}