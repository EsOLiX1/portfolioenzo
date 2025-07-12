// Données de toutes les galeries
const galleriesData = {
  Accueil: [
    { src: 'imgstage1/Accueil Logiciel/FEN_Accueil.png', alt: 'FEN_Accueil', caption: 'Écran d’accueil de l’application Alizée SMS.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_IMPORTATION_Accueil.png', alt: 'BTN_IMPORTATION_Accueil', caption: 'Ce code permet de passer en paramètre les filtres à la fenêtre tableau des SMS(date et nom du port).' },
    { src: 'imgstage1/Accueil Logiciel/BTN_PORT_Accueil.png', alt: 'BTN_PORT_Accueil', caption: 'Il s’agit juste de la fonction ouvre qui permet d’ouvrir la fenêtre de la liste des ports.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_COMPTA_Accueil.png', alt: 'BTN_COMPTA_Accueil', caption: 'Encore une fois le bouton sert juste à ouvrir une fenêtre qui est celle de la comptabilité mais on y passe en paramètre tous qui servira de filtre.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_SOLDE_Accueil.png', alt: 'BTN_SOLDE_Accueil', caption: 'Juste la fonction ouvre pour la fenêtre des soldes de chaques ports.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_MODELE_MAIL_Accueil.png', alt: 'BTN_MODELE_MAIL_Accueil', caption: 'Juste la fonction ouvre pour la fenêtre des modèles de mail.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_FERMER_Accueil.png', alt: 'BTN_FERMER_Accueil', caption: 'Le code du bouton "Ferme" possède juste la fonction ferme qui permet de fermer une fenêtre.' },

  ],
  TableauSMS: [
    { src: 'imgstage1/SMS Logiciel/FEN_SMS.png', alt: 'FEN_SMS', caption: 'Écran de la fenêtre du tableau des SMS.' },
    { src: 'imgstage1/SMS Logiciel/SAI_RECHDEB_FIN.png', alt: 'SAI_RECHDEB_FIN', caption: 'Voici le code du filtre "période du" "au" il contient juste la fonction RempliTableSQL2 que nous verrons un peu plus tard.' },
    { src: 'imgstage1/SMS Logiciel/COMBO_PORT.png', alt: 'COMBO_PORT', caption: 'Nous avons là le code du menu déroulant permettant de sélectionner un nom de port pour filtrer.' },
    { src: 'imgstage1/SMS Logiciel/BTN_Ajouter.png', alt: 'BTN_Ajouter', caption: 'Le code du bouton ajouter permet juste d’ouvrir et de passer en paramètre le mot "Création" à une fenêtre que nous verrons par la suite qui est fenêtre "fiche des SMS".' },
    { src: 'imgstage1/SMS Logiciel/BTN_Modifier.png', alt: 'BTN_Modifier', caption: 'Le code du bouton du bouton modifier est assez similaire à celui d’ajouter sauf qui oblige l’utilisateur à sélectionner une seule ligne et que le paramètre est "Modif".' },
    { src: 'imgstage1/SMS Logiciel/BTN_Supprimer.png', alt: 'BTN_Supprimer', caption: 'Le code du bouton supprimer est assez simple il exige une seule ligne sélectionner puis il utilise la fonction Hlitrecherche et il Hsupprime.' },
    { src: 'imgstage1/SMS Logiciel/BTN_Importer.png', alt: 'BTN_Importer', caption: 'Le code du bouton importer fais juste un appel à ma fonction importer que nous allons voir dans les procédures globales.' },
    { src: 'imgstage1/SMS Logiciel/Déclaration(1).png', alt: 'Déclaration(1)', caption: 'Voici les déclaration de la fenêtre tableau des SMS.' },
    { src: 'imgstage1/SMS Logiciel/Déclaration(2).png', alt: 'Déclaration(2)', caption: 'Voici les déclaration de la fenêtre tableau des SMS nous avons là les fonction RempliTable.' },
    { src: 'imgstage1/SMS Logiciel/Déclaration(3).png', alt: 'Déclaration(3)', caption: 'Voici les déclaration de la fenêtre tableau des SMS nous avons là les fonction RempliTable.' },
    
  ],

  TableauPorts: [
    { src: 'imgstage1/Ports Logiciel/FEN_Ports.png', alt: 'FEN_Ports', caption: 'Écran de la fenêtre du tableau des Ports.' },
    { src: 'imgstage1/Ports Logiciel/BTN_Ajouter.png', alt: 'BTN_Ajouter', caption: 'Le code du bouton ajouter permet juste d’ouvrir et de passer en paramètre le mot "Création" à une fenêtre que nous verrons par la suite qui est fenêtre "fiche des Ports".' },
    { src: 'imgstage1/Ports Logiciel/BTN_Modifier.png', alt: 'BTN_Modifier', caption: 'Le code du bouton du bouton modifier est assez similaire à celui d’ajouter sauf qui oblige l’utilisateur à sélectionner une seule ligne et que le paramètre est "Modif".' },
    { src: 'imgstage1/Ports Logiciel/BTN_Supprimer.png', alt: 'BTN_Supprimer', caption: 'Le code du bouton supprimer est assez simple il exige une seule ligne sélectionner puis il utilise la fonction Hlitrecherche et il Hsupprime.' },
    { src: 'imgstage1/Ports Logiciel/Déclaration.png', alt: 'Déclaration', caption: 'Voici les déclaration de la fenêtre tableau des Ports.' },
    
  ],
  
  TableauComptabilité: [
    { src: 'imgstage1/Comptabilité Logiciel/FEN_COMPTA.png', alt: 'FEN_COMPTA', caption: 'Écran de la fenêtre du tableau de Comptabilité.' },
    { src: 'imgstage1/Comptabilité Logiciel/SAI_RECHDEB_FIN.png', alt: 'SAI_RECHDEB_FIN', caption: 'Voici le code du filtre "période du" "au" il contient juste la fonction RempliTableSQL2 que nous verrons un peu plus tard.' },
    { src: 'imgstage1/Comptabilité Logiciel/COMBO_PORT.png', alt: 'COMBO_PORT', caption: 'Nous avons là le code du menu déroulant permettant de sélectionner un nom de port pour filtrer.' },
    { src: 'imgstage1/Comptabilité Logiciel/BTN_Ajouter.png', alt: 'BTN_Ajouter', caption: 'Le code du bouton ajouter permet juste d’ouvrir et de passer en paramètre le mot "Création" à une fenêtre que nous verrons par la suite qui est fenêtre "fiche des Comptabilité".' },
    { src: 'imgstage1/Comptabilité Logiciel/BTN_Modifier.png', alt: 'BTN_Modifier', caption: 'Le code du bouton du bouton modifier est assez similaire à celui d’ajouter sauf qui oblige l’utilisateur à sélectionner une seule ligne et que le paramètre est "Modif".' },
    { src: 'imgstage1/Comptabilité Logiciel/BTN_Supprimer.png', alt: 'BTN_Supprimer', caption: 'Le code du bouton supprimer est assez simple il exige une seule ligne sélectionner puis il utilise la fonction Hlitrecherche et il Hsupprime.' },
    { src: 'imgstage1/Comptabilité Logiciel/BTN_Voir les SMS.png', alt: 'BTN_Voir les SMS', caption: 'Le code du bouton "Voir les SMS" permet d’ouvrir la fenêtre tableau des SMS avec les filtres désirés pour avoir juste les SMS d’un port à une date précise.' },
    { src: 'imgstage1/Comptabilité Logiciel/Déclaration(1).png', alt: 'Déclaration(1)', caption: 'Voici les déclaration de la fenêtre tableau des Comptabilité.' },
    { src: 'imgstage1/Comptabilité Logiciel/Déclaration(2).png', alt: 'Déclaration(2)', caption: 'Voici les déclaration de la fenêtre tableau des Comptabilité.' },
    
  ],

  TableauSoldes: [
    { src: 'imgstage1/Solde Logiciel/FEN_Solde_des_Ports.png', alt: 'FEN_Solde_des_Ports', caption: 'Écran de la fenêtre du tableau des Soldes.' },
    { src: 'imgstage1/Solde Logiciel/BTN_COMPTA.png', alt: 'BTN_COMPTA', caption: 'Le code du bouton "Comptabilité" permet d’ouvrir la fenêtre tableau de Comptabilité avec en paramètre le code du port qui permet d’afficher uniquement le port sélectionné' },
    { src: 'imgstage1/Solde Logiciel/BTN_Mail(1).png', alt: 'BTN_Mail(1)', caption: 'Le code du bouton du bouton modifier est assez similaire à celui d’ajouter sauf qui oblige l’utilisateur à sélectionner une seule ligne et que le paramètre est "Modif".' },
    { src: 'imgstage1/Solde Logiciel/BTN_Mail(2).png', alt: 'BTN_Mail(2)', caption: 'Le code du bouton supprimer est assez simple il exige une seule ligne sélectionner puis il utilise la fonction Hlitrecherche et il Hsupprime.' },
    { src: 'imgstage1/Solde Logiciel/Déclaration(1).png', alt: 'Déclaration(1)', caption: 'Voici les déclaration de la fenêtre tableau des Ports.' },
    { src: 'imgstage1/Solde Logiciel/Déclaration(2).png', alt: 'Déclaration(2)', caption: 'Voici les déclaration de la fenêtre tableau des Ports.' },

  ],
  // Ajoute d’autres galeries si besoin
};

// Pour chaque galerie sur la page
document.querySelectorAll('.stage-gallery').forEach(galleryEl => {
  const galleryId = galleryEl.dataset.galleryId;
  const images = galleriesData[galleryId];
  let currentIndex = 0;

  // Crée la lightbox dans le DOM si elle n'existe pas déjà
  let lightbox = document.getElementById(`lightbox-${galleryId}`);
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = `lightbox-${galleryId}`;
    lightbox.className = 'stage-lightbox';
    lightbox.innerHTML = `
      <div class='stage-lightbox-content'>
        <button class='stage-lightbox-close' aria-label='Fermer la galerie'>&times;</button>
        <img class='stage-lightbox-image' src='' alt='' />
        <div class='stage-lightbox-caption'></div>
        <div class='stage-lightbox-controls'>
          <button class='prev-btn' aria-label='Image précédente'>Précédent</button>
          <button class='next-btn' aria-label='Image suivante'>Suivant</button>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const btn = galleryEl.querySelector('.stage-gallery-button');
  const imgEl = lightbox.querySelector('.stage-lightbox-image');
  const captionEl = lightbox.querySelector('.stage-lightbox-caption');
  const closeBtn = lightbox.querySelector('.stage-lightbox-close');
  const prevBtn = lightbox.querySelector('.prev-btn');
  const nextBtn = lightbox.querySelector('.next-btn');

  function showImage(index) {
    const img = images[index];
    imgEl.src = img.src;
    imgEl.alt = img.alt;
    captionEl.textContent = img.caption;
    currentIndex = index;
  }

  btn.addEventListener('click', () => {
    showImage(0);
    lightbox.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
});
