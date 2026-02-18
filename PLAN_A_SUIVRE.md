# PLAN À SUIVRE - Site Boucherie Rogé

Ce document résume l'état actuel du projet et les étapes pour le prendre en main.

## 🚀 Lancer le site

Pour voir le site sur votre ordinateur :

1. Ouvrez un terminal dans le dossier `Boucherie Rogé`.
2. Lancez la commande : `npm run dev`
3. Ouvrez votre navigateur sur `http://localhost:3000`

## 🖼️ Images (En Attente)

Actuellement, le site utilise des placeholders/zones de couleur car la génération d'images a échoué (limite de capacité).
Il faudra ajouter vos propres photos ou en générer de nouvelles plus tard.

**Emplacements des images à ajouter dans `public/images/` :**
- `hero-bg.jpg` (Image d'accueil, format large)
- `about-bg.jpg` (Image page À Propos)
- `contact-bg.jpg` (Image page Contact)

## ✍️ Modifier le contenu

- **Menu & Pied de page** : 
  - `src/components/Header.js` (Liens menu)
  - `src/components/Footer.js` (Horaires, Adresse)
  
- **Page Accueil** : `src/app/page.js`
- **Page À Propos** : `src/app/a-propos/page.js`
- **Page Contact** : `src/app/contact/page.js`

## 🎨 Couleurs & Style

Les couleurs sont définies dans `src/app/globals.css`.
- Rouge principal : `--primary-red`
- Gris ardoise : `--secondary-slate`
- Or/Bronze : `--accent-gold`

## 📞 Coordonnées Intégrées
- Adresse : Rue du Fenouil, 34230 Paulhan
- Téléphone : 06 17 16 16 99
- Horaires : Mardi-Samedi (7h30-12h30 / 15h30-19h30), Dimanche (Matin).

---
*Généré par IAtelier.ch*
