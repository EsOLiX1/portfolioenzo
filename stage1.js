// Données de toutes les galeries
const galleriesData = {
  Accueil: [
    { src: 'imgstage1/Accueil Logiciel/FEN_Accueil.png', alt: 'FEN_Accueil', caption: 'Description de la photo 1 : Travail sur le projet A.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_IMPORTATION_Accueil.png', alt: 'BTN_IMPORTATION_Accueil', caption: 'Description de la photo 2 : Réunion d’équipe.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_PORT_Accueil.png', alt: 'BTN_PORT_Accueil', caption: 'Description de la photo 3 : Codage et tests.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_COMPTA_Accueil.png', alt: 'BTN_COMPTA_Accueil', caption: 'Description de la photo 4 : Présentation finale.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_SOLDE_Accueil.png', alt: 'BTN_SOLDE_Accueil', caption: 'Description de la photo 5 : Retour d’expérience.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_MODELE_MAIL_Accueil.png', alt: 'BTN_MODELE_MAIL_Accueil', caption: 'Description de la photo 5 : Retour d’expérience.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_FERMER_Accueil.png', alt: 'BTN_FERMER_Accueil', caption: 'Description de la photo 5 : Retour d’expérience.' },

  ],
  stage2: [
    { src: 'images/stage2-1.jpg', alt: 'Photo 1', caption: 'Description de la photo 1 : Analyse initiale.' },
    { src: 'images/stage2-2.jpg', alt: 'Photo 2', caption: 'Description de la photo 2 : Prototype développé.' },
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
      <div class="stage-lightbox-content">
        <button class="stage-lightbox-close" aria-label="Fermer la galerie">&times;</button>
        <img class="stage-lightbox-image" src="" alt="" />
        <div class="stage-lightbox-caption"></div>
        <div class="stage-lightbox-controls">
          <button class="prev-btn" aria-label="Image précédente">Précédent</button>
          <button class="next-btn" aria-label="Image suivante">Suivant</button>
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
