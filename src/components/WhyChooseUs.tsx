import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Clock, DollarSign } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Superior Quality',
      description: 'We use premium materials and employ skilled craftsmen to ensure the highest quality construction standards.',
      stat: '100%',
      statLabel: 'Quality Assured'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced engineers and construction professionals bring decades of combined expertise to every project.',
      stat: '25+',
      statLabel: 'Years Experience'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We pride ourselves on meeting deadlines and delivering projects on schedule, every time.',
      stat: '98%',
      statLabel: 'On-Time Delivery'
    },
    {
      icon: DollarSign,
      title: 'Budget Respect',
      description: 'Transparent pricing and efficient project management ensure we stay within your budget without compromising quality.',
      stat: '95%',
      statLabel: 'Budget Compliance'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-800">
            Why Choose <span className="text-blue-600">United Construction</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With years of experience and countless successful projects, we've built a reputation 
            for excellence that sets us apart from the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="relative bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex items-start space-x-6">
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <div className="text-right">
                        <motion.div
                          className="text-2xl text-orange-500"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                          viewport={{ once: true }}
                        >
                          {feature.stat}
                        </motion.div>
                        <div className="text-sm text-gray-500">{feature.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <motion.div
                  className="absolute bottom-4 right-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mb-4">Ready to Experience the Difference?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have trusted United Construction for Africa 
            with their most important projects.
          </p>
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}