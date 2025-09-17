import React from 'react';
import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: "What is the average project duration?",
      answer: "Project duration varies depending on scope and complexity. Residential projects typically take 6-12 months, while commercial and infrastructure projects can range from 12-36 months. We provide detailed timelines during the planning phase and keep you updated throughout the process."
    },
    {
      question: "How do I get a quote?",
      answer: "Getting a quote is simple! Contact us through our website form, email, or phone. We'll schedule a consultation to discuss your project requirements, conduct a site visit if needed, and provide you with a detailed, transparent quote within 5-7 business days."
    },
    {
      question: "What guarantees do you offer?",
      answer: "We stand behind our work with comprehensive warranties. Structural work comes with a 10-year guarantee, while finishes and installations are covered for 2-5 years depending on the material. We also provide ongoing maintenance support and rapid response for any issues."
    },
    {
      question: "Where do you operate?",
      answer: "United Construction for Africa operates across multiple African countries, with our headquarters serving as the central hub. We have successfully completed projects in West, East, and Southern Africa. Contact us to discuss your specific location and project requirements."
    },
    {
      question: "Do you handle permits and regulations?",
      answer: "Yes, we manage all necessary permits, licenses, and regulatory compliance for your project. Our team is well-versed in local building codes and regulations across different regions, ensuring your project meets all legal requirements from start to finish."
    },
    {
      question: "What payment terms do you offer?",
      answer: "We offer flexible payment structures typically based on project milestones. Generally, we require a small deposit to begin planning, with subsequent payments tied to completion phases. We accept various payment methods and can discuss terms that work best for your budget and cash flow."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-800">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are some of the most common questions 
            our clients ask about our construction services.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-white border border-gray-200 rounded-lg px-6 py-2 hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:text-blue-600 transition-colors">
                    <span className="text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          className="text-center mt-16 bg-white p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mb-4 text-gray-800">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't see your question answered here? Our team is ready to help with any 
            specific questions about your project.
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact Us Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}