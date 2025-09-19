# Configuration EmailJS

## 📧 Comment configurer EmailJS pour votre formulaire de contact

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez votre service email (Gmail, Outlook, etc.)

### 2. Configuration du service
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Ajoutez votre service email (Gmail recommandé)
3. Notez votre **Service ID**

### 3. Créer un template
1. Allez dans "Email Templates"
2. Créez un nouveau template avec ces variables :
   ```
   From: {{from_name}} ({{from_email}})
   Phone: {{phone}}
   Project Type: {{project_type}}
   
   Message:
   {{message}}
   ```
3. Notez votre **Template ID**

### 4. Obtenir la clé publique
1. Allez dans "Account" > "General"
2. Notez votre **Public Key**

### 5. Créer le fichier .env
Créez un fichier `.env` à la racine de votre projet avec :
```env
VITE_EMAILJS_SERVICE_ID=votre_service_id_ici
VITE_EMAILJS_TEMPLATE_ID=votre_template_id_ici
VITE_EMAILJS_PUBLIC_KEY=votre_public_key_ici
```

**Important :** Les variables doivent commencer par `VITE_` pour être accessibles côté client dans Vite.

### 6. Tester le formulaire
1. Démarrez votre application : `npm run dev`
2. Allez sur la page Contact
3. Remplissez et envoyez le formulaire
4. Vérifiez que l'email arrive dans votre boîte de réception

## 🎯 Avantages d'EmailJS
- ✅ Gratuit jusqu'à 200 emails/mois
- ✅ Pas besoin de serveur backend
- ✅ Configuration simple
- ✅ Sécurisé
- ✅ Compatible avec tous les hébergeurs

## 🔧 Alternatives
Si vous préférez d'autres solutions :
- **Netlify Forms** (si vous déployez sur Netlify)
- **Formspree** (similaire à EmailJS)
- **Backend personnalisé** avec Node.js + Nodemailer
