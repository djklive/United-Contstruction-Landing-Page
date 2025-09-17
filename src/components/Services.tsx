import React from 'react';
import { motion } from 'motion/react';
import { Building, Truck, Wrench, Ruler, TreePine, Droplets } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Building,
      title: 'Building Construction',
      description: 'Residential and commercial buildings, offices, and modern architectural projects',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Truck,
      title: 'Public Works',
      description: 'Road construction, bridges, and large-scale infrastructure development',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wrench,
      title: 'Renovation & Rehabilitation',
      description: 'Modernizing existing structures and bringing new life to old buildings',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Ruler,
      title: 'Civil Engineering',
      description: 'Comprehensive engineering solutions for complex construction challenges',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TreePine,
      title: 'Outdoor Development',
      description: 'Landscaping, paving, public spaces, and environmental infrastructure',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Droplets,
      title: 'Hydraulic Works',
      description: 'Water systems, drainage, and water management infrastructure projects',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-800">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive construction and civil engineering services to meet 
            all your infrastructure needs across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -10 }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 relative z-10`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your next construction project?
          </p>
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}