import emailjs from '@emailjs/browser';

// Configuration EmailJS
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_se6rh7e';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_94u7kmx';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'auQuqZJZbMm6ier0T';

// Debug: afficher les variables d'environnement
console.log('Environment variables:', {
  SERVICE_ID: EMAILJS_SERVICE_ID,
  TEMPLATE_ID: EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: EMAILJS_PUBLIC_KEY
});

// Vérifier que les variables d'environnement sont définies
if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.error('EmailJS configuration missing. Please check your .env file.');
  console.error('Required variables: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY');
}

// Initialiser EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  // Vérifier que la configuration EmailJS est complète
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.error('EmailJS not properly configured. Please check your .env file.');
    return false;
  }

  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      project_type: data.projectType,
      message: data.message,
      to_email: 'uca@gmail.com', // Votre email de réception
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
