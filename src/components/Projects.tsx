import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Modern Commercial Complex',
      category: 'Commercial Building',
      image: 'https://images.unsplash.com/photo-1667604579449-14298726118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTgwODQzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A state-of-the-art 15-story commercial complex featuring modern architecture and sustainable building practices.',
      completion: '2024'
    },
    {
      title: 'Highway Infrastructure Project',
      category: 'Road Construction',
      image: 'https://images.unsplash.com/photo-1740986188931-09f3e9797d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY29uc3RydWN0aW9uJTIwYWZyaWNhfGVufDF8fHx8MTc1ODEwODM1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: '50km highway construction project connecting major cities, enhancing regional transportation infrastructure.',
      completion: '2023'
    },
    {
      title: 'Residential Villa Complex',
      category: 'Residential',
      image: '/Project-3.jpg',
      description: 'Luxury residential complex with 200 modern villas, featuring contemporary design and eco-friendly materials.',
      completion: '2024'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Amina Hassan',
      position: 'Project Director, Ministry of Infrastructure',
      content: 'United Construction for Africa delivered our highway project on time and within budget. Their professionalism and quality of work exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      position: 'CEO, Johnson Properties',
      content: 'The commercial complex they built for us is a masterpiece. The attention to detail and modern construction techniques were impressive.',
      rating: 5
    },
    {
      name: 'Fatima Al-Rashid',
      position: 'Regional Development Manager',
      content: 'Working with United Construction was a pleasure. They understood our vision and brought it to life with exceptional craftsmanship.',
      rating: 5
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Project Portfolio */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-800">
            Our <span className="text-blue-600">Project</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent projects that showcase our commitment to excellence 
            and innovation in construction and civil engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -10 }}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {project.completion}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-800">
            Client <span className="text-orange-500">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            working with United Construction for Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              
              <div>
                <h4 className="text-gray-800 mb-1">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}