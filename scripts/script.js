document.addEventListener('DOMContentLoaded', () => {
  const content = {
    heroTitle: "Welcome to the AbleVu Contributor Program",
    heroSubtitle: "Help destinations showcase accessibility and inclusion — and get rewarded for each validated visit.",
    mission: "At AbleVu, our mission is to empower travelers by providing reliable accessibility information about hotels, restaurants, attractions, and destinations. When accessibility is prioritized, everyone benefits — from local businesses to travelers everywhere.",
    
    // Replaced list with a single paragraph
    contributorMission: "As an AbleVu Contributor, you play a vital role in shaping a more inclusive world of travel. Your mission is to visit and assess local establishments — from hotels and restaurants to attractions and public spaces — and accurately document their accessibility features. Every verified detail you share helps businesses recognize the value of accessibility and gives travelers the confidence to explore with ease. Together, we’re building the world’s most trusted accessibility database, where every contribution brings us closer to a future where everyone can go anywhere.",

    process: [
      { title: "Step 1: Visit the Establishment", body: "Introduce yourself as an AbleVu Contributor. Focus on accessibility details (entrances, restrooms, seating, parking, signage, etc.) and take clear notes and pictures." },
      { title: "Step 2: Report Your Visit", body: "Submit all collected information through the AbleVu Contributor Portal. Ensure details are accurate and complete." },
      { title: "Step 3: Establishment Follow-up", body: "AbleVu sends an email to the establishment with instructions to activate their profile. Once activated, the listing goes live." },
      { title: "Step 4: Payment", body: "After the establishment activates its profile, you will receive your $100 payment for that validated visit." }
    ],

    bestPractices: [
      "1 - Always be professional and courteous",
      "2 - Stay focused on accessibility and inclusion",
      "3 - Keep conversations with staff simple and respectful",
      "4 - Respect the establishment’s space and customers",
      "5 - Double-check your information before submission"
    ],

    impact: [
      "1 - Travelers gain confidence when choosing accessible destinations",
      "2 - Businesses gain visibility and inclusion recognition",
      "3 - Communities grow stronger through accessibility awareness"
    ]
  };

  // Hero
  document.getElementById('heroTitle').textContent = content.heroTitle;
  document.getElementById('heroSubtitle').textContent = content.heroSubtitle;

  // Mission
  document.getElementById('missionText').textContent = content.mission;

  // Contributor Mission (now a paragraph, not a list)
  const cmText = document.getElementById('contributorMissionText');
  cmText.textContent = content.contributorMission;

  // Process Carousel
  const processContainer = document.getElementById('processSteps');
  const carouselWrapper = document.createElement('div');
  carouselWrapper.className = 'carousel-wrapper';
  const slidesWrapper = document.createElement('div');
  slidesWrapper.className = 'carousel-slides';

  content.process.forEach((step) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = `<h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.body)}</p>`;
    slidesWrapper.appendChild(slide);
  });

  const prevBtn = document.createElement('button');
  prevBtn.className = 'carousel-btn prev';
  prevBtn.innerHTML = '&#10094;';
  const nextBtn = document.createElement('button');
  nextBtn.className = 'carousel-btn next';
  nextBtn.innerHTML = '&#10095;';

  carouselWrapper.appendChild(slidesWrapper);
  carouselWrapper.appendChild(prevBtn);
  carouselWrapper.appendChild(nextBtn);
  processContainer.appendChild(carouselWrapper);

  let currentSlide = 0;
  const slides = slidesWrapper.querySelectorAll('.carousel-slide');
  slides.forEach((s, i) => (s.style.display = i === 0 ? 'block' : 'none'));

  function showSlide(index) {
    slides.forEach((s, i) => (s.style.display = i === index ? 'block' : 'none'));
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Best Practices
  const bp = document.getElementById('bestPractices');
  content.bestPractices.forEach((p) => {
    const li = document.createElement('li');
    li.textContent = p;
    bp.appendChild(li);
  });

  // Impact
  const impact = document.getElementById('impactList');
  content.impact.forEach((i) => {
    const li = document.createElement('li');
    li.textContent = i;
    impact.appendChild(li);
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Nav toggle
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.style.display = expanded ? 'none' : 'flex';
  });

  // Escape HTML helper
  function escapeHtml(unsafe) {
    return unsafe
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }
});
