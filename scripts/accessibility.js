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
      name: "Entrances & Exits",
      description: "Ensure there is at least one step-free entrance with smooth ramps, automatic or wide easy-to-open doors. If steps exist, a nearby gentle, non-slip ramp should be available with clear signage. All accessible entrances must be clearly marked with the International Symbol of Accessibility, and if the main entrance isn’t accessible, provide visible signs directing visitors to the nearest accessible entry.",
      name2: "Entrance Accessibility",
      description2:"Ensure that all doors provide sufficient space for wheelchair access, with a minimum width of 32 inches (about 81 cm), and that they can open fully without any obstacles blocking the entry or approach. Door thresholds should be as low as possible—ideally under ½ inch (1.3 cm)—or designed with a beveled edge or built-in ramp to allow smooth, safe passage for all users. Additionally, consider other accessibility needs: install lever-style handles for those with limited grip strength, ensure adequate lighting for people with low vision, and provide clear, high-contrast signage to help visitors with visual or cognitive impairments navigate safely.",
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIhahcAbuVLT6Qfjp-lGYz_0TRQKtiAk2Dg&s","https://www.nls.uk/media/eu2lmctz/causewayside-accessible-entrance.jpg?width=575&height=324&v=1dbd08b3bb96940","https://www.braillesigns.ie/cdn/shop/products/accessibleentrance.jpg?v=1644921487",
        "https://www.shutterstock.com/image-photo/concret-ramp-way-stainless-steel-600nw-790582078.jpg",
        "https://images.squarespace-cdn.com/content/v1/5ff35f1f66ff7d7193618f28/fdf81a59-a807-4486-8061-9ca9f00afb66/Blog+image+2.jpg"
      ]
    },
    {
      name: "Interior Navigation ",
      description: "Inside the establishment, visitors should be able to move around safely and independently. Ensure that hallways and pathways are at least 36 inches (91 cm) wide to accommodate wheelchairs and other mobility devices. Routes should be clear of obstacles, clutter, or furniture, well-lit, and easy to follow, connecting all key areas such as entrances, seating, restrooms, and exits. The layout should also consider the needs of individuals with visual or sensory sensitivities, supporting safe and comfortable navigation for everyone.",
      name2: "Flooring, Elevators & Lifts",
      description2:"Floors should be smooth, stable, and non-slip, especially in wet areas like lobbies or restrooms. Avoid surfaces that could cause difficulties, such as loose rugs, uneven tiles, or thick carpets. Where possible, include color contrasts or tactile indicators to help guide people with visual impairments.In multi-story buildings, ensure that a working elevator or lift is available for public use. Elevators should have buttons at reachable heights, Braille or tactile markings, and audible floor announcements. The area in front of the elevator should be clear and spacious enough to allow wheelchair turning and safe navigation.",
      images: ["https://eu-images.contentstack.com/v3/assets/blt7b94604c32d7613d/blt51b474b4cac96a87/6672d234e2f7bda587145c15/SBX20240216-Inclusive-Stores-Front-of-House-Mural_copy.jpeg?width=1280&auto=webp&quality=80&format=jpg&disable=upscale",
        "https://static01.nyt.com/images/2021/08/17/dining/17rest-contento2/merlin_193089546_bf03cc04-529a-4948-bb36-6dbb9a1b5a05-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        "https://cdn.broadsheet.com.au/cache/be/0d/be0d782eea310d75e32b48ff3f165b0a.jpg",
        "https://www.ascension-lift.com/wp-content/uploads/2023/07/Earls-Kitchen-2_SMALL.jpg"
      ]
    },
    {
      name: "Seating & Common Areas",
      description: "Comfortable and inclusive seating arrangements are essential for making all guests feel welcome. Contributors should verify that seating areas — including dining spaces, lounges, lobbies, and waiting rooms — accommodate people with a variety of mobility needs. Accessible seating should include tables with adequate knee clearance (at least 27 inches high, 30 inches wide, and 19 inches deep) to allow wheelchair users to sit comfortably. Ensure that these seats and tables are located on accessible routes without steps or narrow passages and that accessible seating is available in all main areas, such as restaurants, meeting rooms, and event spaces.",
      name2: "Seating Comfort and Sensory-Friendly Areas",
      description2:"Seating areas should provide comfort and accessibility for all guests. Chairs with armrests can help individuals sit and stand safely, so it’s ideal to offer a mix of seating options both with and without armrests. Waiting and lounge areas must have enough space for wheelchair maneuvering, firm and stable seating surfaces, and clear, well-lit, accessible routes.For guests with sensory sensitivities, including those with autism or other invisible disabilities, quiet, low-stimulation areas are essential. These spaces should feature low noise levels (away from busy entrances or crowded areas), soft or natural lighting, comfortable seating (chairs, benches, or cushions), minimal visual clutter, privacy through partitions or enclosed corners, and clear signage indicating that the space is available for breaks. Such accommodations help visitors decompress, reduce stress, and navigate the environment comfortably.",
      images: ["https://cdn.prod.website-files.com/65cc7c4ab3bb8e1d5c60105a/65dd540a1c85fee7c33c9244_b9cda-contento-accessible-restaurant-te-inline2-210609.jpeg",
        "https://lh4.googleusercontent.com/proxy/yV9wV0Xm3Fz0t3HHPCocfAFMEp6I1oFRSqy4sfHn0WTKka0OvnfoiSlpU-Yr35ouqr5SDAnpJ4-f6mc0yZjLI0pq7U6SE4THaTHi2RE385IUNz5X0AenSw8Hr9bPsRGVWssao4xQVFy2-DE",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGm7PLXYgmzYvamCyUjDGazJfmNqzj5MhJQ&s",
        "https://images.fastcompany.com/image/upload/f_webp,q_auto,c_fit/wp-cms/uploads/2018/03/p-1-the-nba-just-created-the-worldand8217s-first-autism-friendly-store-Sensory-Room.jpg"
      ]
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
