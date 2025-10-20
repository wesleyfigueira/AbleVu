document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    {
      name: "Parking & Arrival",
      description: "Accessible parking should provide enough spaces (ADA recommends 1 per 25 standard spots), be wide with adjacent striped aisles for wheelchair access, clearly marked with the International Symbol of Accessibility (ideally elevated for visibility), and located close to accessible entrances with a smooth, unobstructed path.",
      images: ["https://www.shutterstock.com/image-photo/handicapped-parking-signs-on-ground-260nw-2526759901.jpg",
         "https://nwadacenter.org/sites/adanw/files/images/accessible%20parking%20lot1.jpg",
        "https://cdn.prod.website-files.com/6557cc25c4a5cf483dfab5a2/6557cc25c4a5cf483dfab730_20210707-APM-BTLPromo-1dx--3362.jpg"]
    },
    {
      name: "Entrances & Exits",
      description: "Verify step-free entrances, wide doors, low thresholds and clear signage for accessibility.",
      images: ["image/entrance1.jpg", "image/entrance2.jpg"]
    },
    {
      name: "Restrooms",
      description: "Ensure accessible restrooms with grab bars, turning space, emergency buttons, and sink clearance.",
      images: ["image/restroom1.jpg", "image/restroom2.jpg"]
    },
    {
      name: "Interior Navigation",
      description: "Check pathways, elevators, signage, braille indicators and non-slip surfaces.",
      images: ["image/interior1.jpg", "image/interior2.jpg"]
    },
    {
      name: "Seating & Common Areas",
      description: "Assess accessible seating, armrests, mobility space and waiting areas.",
      images: ["image/common1.jpg", "image/common2.jpg"]
    },
    {
      name: "Visual Accessibility",
      description: "Check for large-print materials, high-contrast signage, Braille labels, and proper lighting.",
      images: ["image/visual1.jpg", "image/visual2.jpg"]
    },
    {
      name: "Hearing Accessibility",
      description: "Look for assistive listening systems, visual alarms, and trained staff for deaf or hard-of-hearing guests.",
      images: ["image/hearing1.jpg", "image/hearing2.jpg"]
    },
    {
      name: "Invisible Disabilities",
      description: "Check sensory-friendly environments, quiet areas, lighting, noise, smells, and available accommodations.",
      images: ["image/invisible1.jpg", "image/invisible2.jpg"]
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
