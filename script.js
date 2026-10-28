const root = document.documentElement;
const themeSelect = document.getElementById('theme-select');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const langBtn = document.getElementById('lang-btn');
const langBtnText = document.getElementById('lang-btn-text');

/* ========================================================
   i18n Translations (Arabic & English)
   ======================================================== */
const translations = {
  ar: {
    pageTitle: "بيجاد خالد | مبرمج ناشئ وصانع المستقبل",
    pageDesc: "بيجاد خالد مبرمج ناشئ شغوف بتعلم HTML وتطوير الويب والذكاء الاصطناعي وبناء مشاريع المستقبل.",
    navHome: "الرئيسية",
    navAbout: "من أنا",
    navJourney: "مسيرتي",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navInterests: "الاهتمامات",
    navGoals: "الأهداف",
    navContact: "تواصل معي",
    heroEyebrow: "مبرمج ناشئ وصانع المستقبل",
    heroTitle: "بيجاد خالد",
    heroLead: "مبرمج ناشئ شغوف بعالم البرمجة والذكاء الاصطناعي، أتعلم باستمرار وأسعى لبناء مواقع متكاملة ومشاريع برمجية قوية ومميزة.",
    heroBtnExplore: "استكشف مسيرتي",
    heroBtnProjects: "شاهد مشاريعي",
    heroDetail2: "التركيز على HTML و CSS و JavaScript و Python",
    heroDetail3: "بناء الأفكار وتجربة الذكاء الاصطناعي",
    heroTag1: "HTML",
    heroTag2: "ذكاء اصطناعي",
    heroTag3: "المستقبل",
    aboutEyebrow: "من أنا",
    aboutHeading: "في بداية مسيرة طموحة وملهمة",
    aboutP1: "أنا <strong>بيجاد</strong>، عمري 14 عاماً. مبرمج طموح أعشق التقنية، التجربة، وبناء الأفكار والحلول البرمجية.",
    aboutP2: "شغوف بعالم البرمجة والذكاء الاصطناعي، وهدفي التطوير المستمر وبناء مواقع إلكترونية متكاملة للناس وحلول رقمية حقيقية، واستكشاف مجالات الذكاء الاصطناعي بعمق.",
    aboutFutureTitle: "ما أطمح للوصول إليه",
    aboutFuture1: "بناء مواقع إلكترونية حقيقية ومنتجات كاملة",
    aboutFuture2: "إنشاء مشاريع ذكية تحل مشكلات واقعية",
    aboutFuture3: "إتقان لغات برمجية متعددة ومطلوبة",
    aboutFuture4: "تطوير مهاراتي بعمق في الذكاء الاصطناعي والويب",
    journeyEyebrow: "مسيرتي في البرمجة",
    journeyHeading: "من أولى الخطوات نحو طموحات كبرى",
    timelineLabel1: "نقطة الانطلاق",
    timelineTitle1: "بداية رحلة البرمجة",
    timelineDesc1: "بدأت بتعلم الأساسيات وفهم كيفية بناء البرمجيات والمواقع من الصفر.",
    timelineLabel2: "لغة HTML",
    timelineTitle2: "تأسيس قاعدة صلبة ومتقنة",
    timelineDesc2: "اكتسبت فهماً عميقاً وقوياً لهيكلة صفحات الويب باستخدام HTML.",
    timelineLabel4: "التجربة والتطبيق",
    timelineTitle4: "أفكار جديدة واستكشاف الذكاء الاصطناعي",
    timelineDesc4: "العمل على مشروع الذكاء الاصطناعي التجريبي XOVA AI والذي منحني دروساً قيمة وحافزاً كبيراً للتطور.",
    timelineLabel5: "الخطوات القادمة",
    timelineTitle5: "تعلم CSS و JavaScript و Python و C++",
    timelineDesc5: "التوسع في الأدوات واللغات اللازمة لبناء مواقع متطورة ومشاريع برمجية ضخمة.",
    timelineLabel6: "المستقبل",
    timelineTitle6: "بناء مواقع كاملة ومنتجات ذكية قوية",
    timelineDesc6: "الانطلاق نحو أهداف كبرى في تطوير الويب والذكاء الاصطناعي وصناعة الحلول الرقمية.",
    skillsEyebrow: "المهارات التقنية",
    skillsHeading: "ما أتقنه الآن وخريطة التعلم القادمة",
    skillsGroup1: "المعرفة الحالية",
    skillsGroup2: "الأدوات وبيئات العمل",
    skillsGroup3: "أتعلمها حالياً",
    projectsEyebrow: "المشاريع",
    projectsHeading: "تجارب برمجية وخبرات واقعية",
    projectTag: "ذكاء اصطناعي / تجريبي",
    projectBadge: "مشروع تجريبي",
    projectTitle: "XOVA AI",
    projectDesc: "تجربة طموحة قمت بها لبناء نظام ذكاء اصطناعي باسم XOVA AI؛ خضت خلالها تحديات برمجية أكسبتني خبرات قيمة وشغفاً مضاعفاً لمواصلة التعلم والتطوير وبناء مشاريع أكبر.",
    projectMeta1: "تجربة تعليمية مميزة",
    projectMeta2: "استكشاف الذكاء الاصطناعي",
    interestsEyebrow: "الاهتمامات",
    interestsHeading: "شغفي خارج نطاق البرمجة",
    interestProg: "البرمجة",
    interestTagProg: "شغف وتطوير",
    interestFootball: "كرة القدم",
    interestTagFootball: "نشاط وتحدي",
    interestSwim: "السباحة",
    interestTagSwim: "لياقة وتركيز",
    interestGaming: "ألعاب الفيديو",
    interestTagGaming: "تفكير استراتيجي",
    interestFreeFire: "فري فاير",
    interestTagFreeFire: "حماس ومنافسة",
    goalsEyebrow: "أهدافي المستقبلية",
    goalsHeading: "خطط طموحة ورؤية واعدة للمستقبل",
    goal1: "الهندسة الميكانيكية",
    goal2: "الدراسة في إيطاليا",
    goal3: "العمل في سويسرا",
    goal4: "تعلم لغات متعددة",
    goal5: "بناء مواقع إلكترونية متكاملة",
    goal6: "ابتكار مشاريع برمجية قوية",
    goal7: "استكشاف أسرار الذكاء الاصطناعي",
    contactEyebrow: "تواصل معي",
    contactHeading: "لنصنع معاً شيئاً مميزاً وذا قيمة",
    contactLead: "ما زلت في مقتبل رحلتي، لكنني جاد في التعلم والتجربة والتحسين المستمر، ومستعد للتعاون والفرص المستقبلية لتقديم أفضل ما لدي.",
    contactWhatsapp: "واتساب",
    contactEmail: "البريد الإلكتروني",
    hireBadge: "متاح لإنشاء المواقع",
    hireHeading: "أنا جاهز لعمل المواقع وتواصل معي من خلال هنا",
    hireDesc: "إذا كان لديك فكرة أو عمل وتريد موقعاً إلكترونياً احترافياً وسريعاً، يسعدني التعاون معك وتحويل فكرتك إلى واقع أنيق بأحدث تقنيات الويب.",
    chatWhatsapp: "تواصل معي عبر واتساب",
    sendEmail: "مراسلتي عبر البريد",
    footerCopy: "© 2026 بيجاد خالد",
    footerSub: "مبرمج ناشئ يصنع مستقبله بالتعلم المستمر والإصرار والعمل الجاد.",
    themeLight: "فاتح",
    themeDark: "داكن",
    themeSystem: "تلقائي",
    switchBtnLabel: "English"
  },
  en: {
    pageTitle: "Begad Khaled | Young Programmer & Future Builder",
    pageDesc: "Begad Khaled is a young programmer passionate about learning HTML, web development, AI, and building future projects.",
    navHome: "Home",
    navAbout: "About",
    navJourney: "Journey",
    navSkills: "Skills",
    navProjects: "Projects",
    navInterests: "Interests",
    navGoals: "Goals",
    navContact: "Contact",
    heroEyebrow: "Young Programmer & Future Builder",
    heroTitle: "Begad Khaled",
    heroLead: "A young programmer passionate about programming and artificial intelligence, currently learning and working toward building complete websites and powerful projects.",
    heroBtnExplore: "Explore My Journey",
    heroBtnProjects: "View My Projects",
    heroDetail2: "Focused on HTML, CSS, JavaScript, Python",
    heroDetail3: "Building ideas and experimenting with AI",
    heroTag1: "HTML",
    heroTag2: "AI",
    heroTag3: "Future",
    aboutEyebrow: "About Me",
    aboutHeading: "At the start of an ambitious journey",
    aboutP1: "I am <strong>Begad</strong>, 14 years old. An ambitious young programmer who loves technology, experimenting, and building software ideas.",
    aboutP2: "Passionate about programming and artificial intelligence. My goal is continuous improvement, crafting complete websites for people, and exploring the world of AI deeply.",
    aboutFutureTitle: "What I want to become",
    aboutFuture1: "Build real websites and complete products",
    aboutFuture2: "Create projects that solve real problems",
    aboutFuture3: "Learn multiple programming languages",
    aboutFuture4: "Grow my skills in AI and web development",
    journeyEyebrow: "Programming Journey",
    journeyHeading: "From beginner steps to bigger ambitions",
    timelineLabel1: "Starting Point",
    timelineTitle1: "Beginning the programming journey",
    timelineDesc1: "Started learning the basics and exploring how software is built.",
    timelineLabel2: "HTML",
    timelineTitle2: "Developing a strong foundation",
    timelineDesc2: "Built a good understanding of HTML and the structure of web pages.",
    timelineLabel4: "Experimentation",
    timelineTitle4: "Trying new ideas and AI exploration",
    timelineDesc4: "Worked on an experimental AI project called XOVA AI, which taught valuable lessons and motivated further growth.",
    timelineLabel5: "Next Steps",
    timelineTitle5: "Learning CSS, JavaScript, Python, and C++",
    timelineDesc5: "Expanding the skills needed to build more advanced websites and larger projects.",
    timelineLabel6: "Future",
    timelineTitle6: "Building complete websites and powerful products",
    timelineDesc6: "Moving toward bigger goals in web development, AI, and future digital projects.",
    skillsEyebrow: "Skills",
    skillsHeading: "Current knowledge and future learning path",
    skillsGroup1: "Current Knowledge",
    skillsGroup2: "Tools",
    skillsGroup3: "Currently Learning",
    projectsEyebrow: "Projects",
    projectsHeading: "Experiments and learning experiences",
    projectTag: "AI / Experimental",
    projectBadge: "Experimental Project",
    projectTitle: "XOVA AI",
    projectDesc: "Begad previously worked on an experimental AI project called XOVA AI. It provided valuable lessons in software architecture and AI, motivating him to keep learning and building bigger projects.",
    projectMeta1: "Learning experience",
    projectMeta2: "AI exploration",
    interestsEyebrow: "Interests",
    interestsHeading: "Life beyond code",
    interestProg: "Programming",
    interestTagProg: "Passion & Code",
    interestFootball: "Football",
    interestTagFootball: "Energy & Teamwork",
    interestSwim: "Swimming",
    interestTagSwim: "Fitness & Focus",
    interestGaming: "Gaming",
    interestTagGaming: "Strategy & Fun",
    interestFreeFire: "Free Fire",
    interestTagFreeFire: "Thrill & Speed",
    goalsEyebrow: "Future Goals",
    goalsHeading: "Ambitious plans for the future",
    goal1: "Mechanical Engineering",
    goal2: "Study in Italy",
    goal3: "Work in Switzerland",
    goal4: "Learn multiple languages",
    goal5: "Build complete websites",
    goal6: "Create powerful projects",
    goal7: "Explore AI",
    contactEyebrow: "Contact",
    contactHeading: "Let’s build something meaningful",
    contactLead: "I am still building my journey, but I am serious about learning, experimenting, and improving. I am open to future opportunities to learn and collaborate as I grow.",
    contactWhatsapp: "WhatsApp",
    contactEmail: "Email",
    hireBadge: "Available for Projects",
    hireHeading: "I am ready to build websites — contact me from here!",
    hireDesc: "If you have an idea or need a modern, fast, and responsive website, I would love to collaborate with you and bring your ideas to life.",
    chatWhatsapp: "Chat on WhatsApp",
    sendEmail: "Send an Email",
    footerCopy: "© 2026 Begad Khaled",
    footerSub: "Young programmer building a future through learning and persistence.",
    themeLight: "Light",
    themeDark: "Dark",
    themeSystem: "System",
    switchBtnLabel: "العربية"
  }
};

/* ========================================================
   Language Switching Logic
   ======================================================== */
const applyLanguage = (lang) => {
  const currentLang = (lang === 'en' || lang === 'ar') ? lang : 'ar';
  const dict = translations[currentLang] || translations.ar;

  root.setAttribute('lang', currentLang);
  root.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  localStorage.setItem('lang', currentLang);

  if (dict.pageTitle) {
    document.title = dict.pageTitle;
  }

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.pageDesc) {
    metaDesc.setAttribute('content', dict.pageDesc);
  }

  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update HTML nodes (with <strong>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  if (langBtnText) {
    langBtnText.textContent = dict.switchBtnLabel;
  }
};

const detectInitialLanguage = () => {
  const saved = localStorage.getItem('lang');
  if (saved === 'en' || saved === 'ar') {
    return saved;
  }
  return 'ar';
};

const initialLang = detectInitialLanguage();
applyLanguage(initialLang);

if (langBtn) {
  langBtn.addEventListener('click', () => {
    const current = root.getAttribute('lang') || 'ar';
    const nextLang = current === 'ar' ? 'en' : 'ar';
    applyLanguage(nextLang);
  });
}

/* ========================================================
   Theme Logic
   ======================================================== */
const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const applyTheme = (mode) => {
  const resolvedMode = mode === 'system' ? getSystemTheme() : mode;
  root.setAttribute('data-theme', resolvedMode);
  localStorage.setItem('theme', mode);

  if (themeSelect) {
    themeSelect.value = mode;
  }
};

const detectInitialTheme = () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light' || saved === 'system') {
    return saved;
  }
  return 'system';
};

applyTheme(detectInitialTheme());

if (themeSelect) {
  themeSelect.addEventListener('change', (event) => {
    applyTheme(event.target.value);
  });
}

const colorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
colorSchemeMedia.addEventListener('change', () => {
  if (localStorage.getItem('theme') === 'system') {
    applyTheme('system');
  }
});

/* ========================================================
   Scroll Reveal Animation
   ======================================================== */
const matchesReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealItems = document.querySelectorAll('.reveal');

if (matchesReduceMotion.matches) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

/* ========================================================
   Mobile Menu Toggle
   ======================================================== */
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
