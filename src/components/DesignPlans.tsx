import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2 } from 'lucide-react';

export function DesignPlans() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Images 2D (plans architecturaux)
  const plans2D = [
    {
      src: '/img-2D-1.png',
      title: 'Plan Architectural - Villa Moderne',
      description: 'Conception détaillée d\'une villa moderne avec espaces ouverts et design contemporain'
    },
    {
      src: '/img-2D-2.png',
      title: 'Plan Technique - Complexe Commercial',
      description: 'Plans techniques d\'un complexe commercial avec parking souterrain et espaces commerciaux'
    },
    {
      src: '/img-2D-3.png',
      title: 'Plan Structurel - Immeuble R+5',
      description: 'Plans structurels d\'un immeuble résidentiel de 5 étages avec fondations renforcées'
    }
  ];

  // Images 3D (rendus de construction)
  const renders3D = [
    {
      src: '/img-3D-1.jpg',
      title: 'Rendu 3D - Villa de Luxe',
      description: 'Visualisation 3D d\'une villa de luxe avec piscine et jardin paysager'
    },
    {
      src: '/img-3D-2.jpg',
      title: 'Rendu 3D - Complexe Résidentiel',
      description: 'Rendu architectural d\'un complexe résidentiel moderne avec espaces verts'
    },
    {
      src: '/img-3D-3.jpg',
      title: 'Rendu 3D - Centre Commercial',
      description: 'Visualisation 3D d\'un centre commercial avec architecture contemporaine'
    },
    {
      src: '/img-3D-4.jpg',
      title: 'Rendu 3D - Immeuble de Bureau',
      description: 'Rendu architectural d\'un immeuble de bureaux avec façade en verre'
    },
    {
      src: '/img-3D-5.jpg',
      title: 'Rendu 3D - Résidence Familiale',
      description: 'Visualisation 3D d\'une résidence familiale avec design traditionnel moderne'
    },
    {
      src: '/img-3D-6.jpg',
      title: 'Rendu 3D - Villa Contemporaine',
      description: 'Rendu architectural d\'une villa contemporaine avec toit plat et grandes baies vitrées'
    }
  ];

  const allImages = [...plans2D, ...renders3D];

  const openImageModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsFullscreen(false);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % allImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(allImages[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(allImages[prevIndex].src);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="design-plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-800">
            Réalisation de <span className="text-blue-600">Plans de Conception</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre expertise en conception architecturale avec nos plans 2D détaillés 
            et nos rendus 3D photoréalistes qui transforment vos idées en réalité.
          </p>
        </motion.div>

        {/* Plans 2D */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl mb-8 text-gray-800 text-center">
            Plans Architecturaux <span className="text-orange-500">2D</span>
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nos plans techniques détaillés incluent les vues de face, coupes, élévations 
            et détails constructifs pour une réalisation précise de vos projets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans2D.map((plan, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -10 }}
                onClick={() => openImageModal(plan.src, index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={plan.src}
                    alt={plan.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Plan 2D
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl mb-3 text-gray-800 font-semibold">{plan.title}</h4>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rendu 3D */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl mb-8 text-gray-800 text-center">
            Rendu Architectural <span className="text-green-600">3D</span>
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nos rendus 3D photoréalistes vous permettent de visualiser votre projet 
            avant construction avec une précision exceptionnelle et des détails authentiques.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renders3D.map((render, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -10 }}
                onClick={() => openImageModal(render.src, index + plans2D.length)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={render.src}
                    alt={render.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Rendu 3D
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl mb-3 text-gray-800 font-semibold">{render.title}</h4>
                  <p className="text-gray-600">{render.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl mb-8">Notre Expertise en Chiffres</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg">Plans 2D Réalisés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
              <div className="text-lg">Rendu 3D Créés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg">Satisfaction Client</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal d'image */}
      {selectedImage && (
        <div className={`fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-4'}`}>
          <div className="relative max-w-7xl max-h-full">
            <img
              src={selectedImage}
              alt={allImages[currentImageIndex]?.title}
              className={`max-w-full max-h-full object-contain ${isFullscreen ? 'w-screen h-screen' : ''}`}
            />
            
            {/* Contrôles */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-black hover:text-gray-300 transition-colors"
              title='x'
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-300 transition-colors"
              title='precedent'
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-300 transition-colors"
              title='suivant'
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <button
              onClick={toggleFullscreen}
              className="absolute bottom-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              {isFullscreen ? <Minimize2 className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
            </button>
            
            {/* Informations de l'image */}
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-semibold">{allImages[currentImageIndex]?.title}</h4>
              <p className="text-gray-300">{allImages[currentImageIndex]?.description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {currentImageIndex + 1} / {allImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
