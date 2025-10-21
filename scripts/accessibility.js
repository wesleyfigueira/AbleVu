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
      name: "Restrooms (WCs) ",
      description: "Accessible restrooms make it possible for everyone, including people who use wheelchairs, walkers, or other mobility aids, to use facilities safely and independently. Every location should have at least one accessible restroom, and it should not be limited to a specific gender. The restroom must also be clearly marked with the International Symbol of Accessibility so visitors can find it easily. When checking a restroom, make sure there is enough space to move around, grab bars for support, and sinks and fixtures that are easy to reach and use. Providing accessible restrooms isn’t just about meeting requirements — it’s about ensuring that every visitor feels welcome and included.",
      name2: "Accessible Restroom Features",
      description2:"Accessible restrooms are essential to ensure everyone, including people who use wheelchairs, walkers, or other mobility aids, can use facilities safely and independently. To be fully accessible, restrooms should have doors at least 32 inches (81 cm) wide with handles that are easy to use, such as lever-style or automatic ones. Grab bars should be securely installed beside and behind the toilet to provide stability and support, placed at standard heights for safe use. Sinks need to be reachable from a seated position, with clear space underneath for wheelchair access, and faucets should be simple to operate, ideally lever or sensor-style. The space should allow a minimum turning area of 60 inches (152 cm) so wheelchair users can move comfortably, and pathways to the toilet, sink, and door should remain free of obstacles. If available, an emergency call button or pull cord should be within easy reach of someone using the toilet, clearly marked, and fully functional. Together, these features ensure restrooms are not only compliant but genuinely comfortable and welcoming for all visitors.",
      images: ["https://pressalit.com/media/kmelmqne/accessible-hospital-bathroom-by-pressalit-01.jpg",
        "https://as1.ftcdn.net/jpg/05/29/27/56/1000_F_529275664_zT4tNhQdT7M3Evuor4i7IbVL5xl4PCOG.jpg",
        "https://shower-buddy.com/cdn/shop/articles/showerbuddy-blog-public-restrooms-disabled_520x500_632b3e3c-01a2-4012-99b0-0ca4413e6657.webp?v=1722552463&width=520",
        "https://wpmedia.roomsketcher.com/content/uploads/2021/12/05145422/ada-bathroom.jpg"
      ]
    },
    {
      name: "Visual Accessibility",
      description: "Ensuring that visitors with visual impairments can navigate and access information is essential. A visually accessible environment includes large-print materials such as menus, brochures, and guides, as well as digital content that supports zooming and adjustable font sizes. High-contrast signage should make text easy to read and guide visitors clearly throughout the facility. Additionally, adequate lighting in all areas — including entrances, hallways, restrooms, and seating spaces — helps people distinguish pathways, steps, and key features safely and comfortably.",
      name2: "Braille Signage",
      description2:"Key areas such as doors, elevators, restrooms, and emergency exits should have Braille signage. Signs should be positioned so they are easily readable, including for someone seated in a wheelchair, ensuring all visitors can navigate the space independently and safely.",
      images: ["https://dysegna.com/images/2025/03/01/imagen4.png",
        "https://img.archiexpo.com/images_ae/photo-g/3928-11076038.jpg",
        "https://www.printmag.com/wp-content/uploads/2022/03/277028959_376459537663628_2660108854247643375_n.jpg"
      ]
    },
    {
      name: "Hearing Accessibility",
      description: "Visitors who are deaf or hard of hearing depend on a combination of technology, clear communication, and staff awareness to navigate spaces safely and independently. Ensuring hearing accessibility means providing features such as visual alerts, captioned media, assistive listening systems, and trained staff who know how to communicate effectively. These elements help create an inclusive environment where everyone can fully participate and access information with confidence.",
      name2: "",
      description2:"Creating an inclusive environment for visitors who are deaf or hard of hearing involves providing the right tools, technology, and staff awareness. Key areas such as auditoriums, meeting rooms, and ticket counters should be equipped with assistive listening systems like induction loops or FM devices that are properly maintained and easy to use. Equally important is staff training — team members should know how to communicate effectively through clear speech, written communication, or basic sign language when needed. Finally, all emergency systems must include visual alerts, such as flashing lights, that are clearly visible in public spaces, hallways, and restrooms to ensure everyone’s safety and independence.",
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWldezBBUdSi59LxFRgOXWlOMLvODVWP07g&s",
        "https://nationaldeafcenter.org/wp-content/uploads/2017/09/firealarm-scaled.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKkD2PuQZU7mPzzWHMwoDEM_h6zX461h0x7g&s"
      ]
    },
    {
      name: "Accessibility for Invisible Disabilities",
      description: "Not all disabilities can be seen, but they are just as important to consider. Many visitors may have sensory sensitivities, autism, ADHD, PTSD, or other conditions that affect how they experience a space. Creating an inclusive environment means offering thoughtful accommodations — such as quiet areas, clear signage, predictable layouts, and supportive staff — to help every guest feel comfortable, safe, and welcomed.",
      name2: "Sensory-Friendly Environment",
      description2:"Creating a sensory-friendly environment helps ensure that visitors with sensory sensitivities, autism, or other invisible disabilities can enjoy their experience comfortably. Quiet or low-stimulation areas where guests can take breaks should be clearly marked and easy to access. Noise levels should be managed by limiting background music or loud equipment in public areas.Lighting also plays a key role — harsh or flickering lights can cause discomfort, so soft, natural, or adjustable lighting is preferred in spaces where people spend more time. Strong smells from cleaning products, perfumes, or kitchens should be minimized through good ventilation and scent control. Some places also offer sensory-friendly hours with reduced sound, lighting, and activity levels, giving visitors a calmer and more inclusive experience.",
      images: ["https://businessnow.mt/wp-content/uploads/2022/05/pr220536a-scaled-e1651563788707.jpg",
        "https://suncorpstadium.com.au/adobe/dynamicmedia/deliver/dm-aid--3af4d98f-bfb0-4efa-bf13-7f79d158f37d/quiet-room-suncorp-stadium-plan-your-visit-accessibility.jpg?preferwebp=true&quality=70",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5wpWQwMGpsgN86TVBgznOcHYRMvPcAmtsg&s"
      ]
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
