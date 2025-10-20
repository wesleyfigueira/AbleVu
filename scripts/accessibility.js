document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    {
      name: "Parking & Arrival",
      description: "Accessible parking should provide enough spaces (ADA recommends 1 per 25 standard spots), be wide with adjacent striped aisles for wheelchair access, clearly marked with the International Symbol of Accessibility (ideally elevated for visibility), and located close to accessible entrances with a smooth, unobstructed path.",
      name2: "Accessible Entry & Drop-Off",
      description2:"Ensure a safe and accessible drop-off/pick-up area: it should be level, well-lit, ideally covered, and spacious enough for vehicles with lifts or ramps. Curb cuts or ramps must connect parking to entrances with gentle slopes, firm non-slip surfaces, handrails if needed, and level landings for resting.",
      images: ["https://www.shutterstock.com/image-photo/handicapped-parking-signs-on-ground-260nw-2526759901.jpg",
         "https://images.squarespace-cdn.com/content/v1/5a36eb7bd74cffbd7ebfde35/1609006090775-694TB4GGBZCDMM5LNDVL/image-asset.jpeg",
        "https://cdn.prod.website-files.com/6557cc25c4a5cf483dfab5a2/6557cc25c4a5cf483dfab730_20210707-APM-BTLPromo-1dx--3362.jpg",
      "https://cdn.prod.website-files.com/65fb41ba8fabd933e8896549/66083e55ac5d90489e0b2fb5_Compliant-curb-ramp-2.jpeg"]
    },
    {
      name: "",
      description: "",
      name2: "",
      description2:"",
      images: [""]
    },
    {
      name: "",
      description: "",
      name2: "",
      description2:"",
      images: [""]
    },
    {
      name: "",
      description: "",
      name2: "",
      description2:"",
      images: [""]
    },
    {
      name: "",
      description: "",
      name2: "",
      description2:"",
      images: [""]
    },
    {
      name: "",
      description: "",
      name2: "",
      description2:"",
      images: [""]
    },
    {
      name: "",
      description: "",
      name2: "",
      description2:"",
      images: [""]
    },
    {
      name: "",
      description: "",
      name2: "",
      description2:"",
      images: [""]
    }
  ];

  const buttonsContainer = document.querySelector('.buttons-container');
  const sessionContainer = document.querySelector('.session-container');

  // Cria botões
  sections.forEach((sec, idx) => {
    const btn = document.createElement('div');
    btn.className = 'section-btn';
    btn.textContent = sec.name;
    if(idx === 0) btn.classList.add('active');
    buttonsContainer.appendChild(btn);

    btn.addEventListener('click', () => {
      document.querySelectorAll('.section-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSession(sec);
    });
  });

  function renderSession(section) {
    sessionContainer.innerHTML = `
      <div class="session-carousel">
        <button class="carousel-btn prev">&#10094;</button>
        <img src="${section.images[0]}" alt="${section.name}">
        <button class="carousel-btn next">&#10095;</button>
      </div>
      <div class="session-text">
        <h3>${section.name}</h3>
        <p>${section.description}</p>
        <h3>${section.name2}</h3>
        <p>${section.description2}</p>
      </div>
    `;

    const img = sessionContainer.querySelector('.session-carousel img');
    let currentIndex = 0;
    const prevBtn = sessionContainer.querySelector('.prev');
    const nextBtn = sessionContainer.querySelector('.next');

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + section.images.length) % section.images.length;
      img.src = section.images[currentIndex];
    });
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % section.images.length;
      img.src = section.images[currentIndex];
    });
  }

  // Renderiza primeira sessão
  renderSession(sections[0]);

  // Footer ano
  document.getElementById('year').textContent = new Date().getFullYear();
});
