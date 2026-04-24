'use strict';
/* ================================================================
   Piranusa — Main Script
   Version : 1.0.0
   Features: Bilingual i18n, Scroll animations, Counters,
             Mobile nav, Promo bar, FAQ, Navbar scroll
   ================================================================ */

// ── i18n Translations ────────────────────────────────────────────
const translations = {
  id: {
    /* Promo Bar */
    'promo.text': 'Webinar Gratis: Optimalisasi ZWCAD untuk Manufaktur — Jumat, 28 April 2026 · 14:00 WIB',
    /* Navbar */
    'nav.products': 'Produk & Solusi',
    'nav.why':      'Mengapa Kami',
    'nav.training': 'Training',
    'nav.blog':     'Blog',
    'nav.contact':  'Hubungi Kami',
    /* Hero */
    'hero.eyebrow': 'Distributor Resmi CAD & BIM · Indonesia',
    'hero.h1a':     'Tingkatkan Efisiensi Bisnis',
    'hero.h1b':     'dengan Solusi CAD & BIM Terbaik',
    'hero.sub':     'Piranusa adalah distributor resmi ZWCAD, Archicad, dan ZW3D. Kami membantu perusahaan arsitektur dan manufaktur mengoptimalkan desain, memotong biaya lisensi, dan mempercepat alur kerja tanpa kompromi kualitas.',
    'hero.cta1':    'Dapatkan Penawaran Khusus',
    'hero.cta2':    'Eksplorasi Solusi Kami',
    'hero.trust':   'Distributor Resmi  ·  Lisensi Original  ·  Dukungan Teknis Lokal',
    /* Stats */
    'stat.clients.label':   'Klien Aktif',
    'stat.years.label':     'Tahun Berpengalaman',
    'stat.training.label':  'Sesi Training',
    'stat.licenses.label':  'Lisensi Terdeploy',
    /* Clients */
    'clients.title': 'Dipercaya oleh Ratusan Pemimpin Industri di Indonesia',
    /* Products */
    'products.eyebrow': 'Solusi Berdasarkan Industri',
    'products.h2':      'Pilih Solusi Perangkat Lunak Sesuai Industri Anda',
    'products.sub':     'Dua pilar solusi teknologi yang dirancang khusus untuk tantangan unik industri AEC dan Manufaktur di Indonesia.',
    'aec.badge':    'AEC',
    'aec.title':    'Arsitektur & Konstruksi',
    'aec.desc':     'Rangkaian lengkap software BIM dan CAD untuk merancang, memvisualisasikan, dan membangun masa depan yang presisi.',
    'aec.hero':     'Produk Unggulan',
    'aec.add':      'Solusi Tambahan',
    'aec.cta':      'Lihat Solusi AEC',
    'mfg.badge':    'MFG',
    'mfg.title':    'Manufaktur & Desain Produk',
    'mfg.desc':     'Solusi CAD/CAM terintegrasi untuk mempercepat siklus pengembangan produk dari konsep visual hingga produksi massal.',
    'mfg.hero':     'Produk Unggulan',
    'mfg.add':      'Solusi Tambahan',
    'mfg.cta':      'Lihat Solusi Manufaktur',
    /* About */
    'about.eyebrow': 'Mengapa Piranusa?',
    'about.h2':      'Lebih dari Sekadar Distributor, Kami Mitra Inovasi Anda',
    'about.ai':      'PT Piranti Nusantara Teknologi (Piranusa) adalah distributor resmi perangkat lunak desain arsitektur dan manufaktur terkemuka di Indonesia yang berfokus pada efisiensi biaya lisensi dan layanan dukungan purna jual secara lokal.',
    'about.p2':      'Sejak 2012, kami telah mendampingi ratusan perusahaan untuk mengoptimalkan alur kerja desain mereka dengan solusi end-to-end: dari konsultasi, instalasi, implementasi, hingga training dan sertifikasi tim.',
    'about.c1':      'Dukungan Teknis Lokal Berbahasa Indonesia',
    'about.c2':      'Lisensi Perpetual Tersedia (Bayar Sekali, Gunakan Selamanya)',
    'about.c3':      'Tim Ahli Tersertifikasi Resmi dari Principal',
    'about.c4':      'Tersertifikasi ISO 9001:2015',
    'about.principal': 'Principal Resmi Kami',
    'about.cta':     'Pelajari Lebih Lanjut',
    /* Services */
    'services.eyebrow': 'Layanan Kami',
    'services.h2':      'Tingkatkan Kompetensi Tim Melalui Training Resmi',
    'services.sub':     'Investasi software baru hanya bernilai jika tim Anda benar-benar menguasainya. Kami hadir untuk memastikan itu.',
    'svc1.title': 'Training CAD & BIM',
    'svc1.desc':  'Program training bersertifikat untuk software CAD 2D, 3D, dan BIM dengan instruktur tersertifikasi resmi dari principal.',
    'svc2.title': 'Implementasi & Konsultasi',
    'svc2.desc':  'Pendampingan implementasi end-to-end mulai dari analisis kebutuhan hingga sistem berjalan optimal di lingkungan Anda.',
    'svc3.title': 'Sertifikasi Profesional',
    'svc3.desc':  'Sertifikasi resmi kompetensi tim untuk standar profesional industri AEC dan Manufaktur yang diakui internasional.',
    'services.cta': 'Lihat Semua Program Training',
    /* Events */
    'events.eyebrow': 'Event & Promo',
    'events.h2':      'Promo & Event Mendatang',
    'events.sub':     'Ikuti webinar edukasi kami dan manfaatkan penawaran spesial perangkat lunak.',
    'events.all':     'Lihat Semua Event',
    'event1.badge':   'Promo Khusus',
    'event1.title':   'Diskon 20% ZWCAD Professional',
    'event1.desc':    'Dapatkan potongan harga khusus untuk pembelian lisensi perpetual ZWCAD Professional bulan ini. Kuota terbatas.',
    'event1.cta':     'Klaim Promo →',
    'event2.badge':   'Webinar',
    'event2.title':   'Optimalisasi 3D Modeling di ZW3D',
    'event2.date':    'Jumat, 28 April 2026 · 14:00 WIB via Zoom',
    'event2.cta':     'Daftar Gratis →',
    'event3.badge':   'Roadshow',
    'event3.title':   'Archicad BIM Workshop – Surabaya',
    'event3.desc':    'Tingkatkan efisiensi kolaborasi tim arsitek Anda dalam sesi tatap muka bersama pakar Graphisoft Indonesia.',
    'event3.cta':     'Cek Jadwal →',
    /* Blog */
    'blog.eyebrow': 'Insight & Pengetahuan',
    'blog.h2':      'Insight & Berita Terbaru',
    'blog.sub':     'Tips, tutorial, dan update teknologi desain langsung dari pakar kami.',
    'blog.all':     'Baca Semua Artikel',
    'blog1.cat':    'Berita Industri',
    'blog1.title':  'ZWCAD 2026 Resmi Dirilis dengan Fitur AI Assistant',
    'blog1.cta':    'Baca selengkapnya →',
    'blog2.cat':    'Tutorial',
    'blog2.date':   '12 April 2026',
    'blog2.title':  'Cara Render Realistis Cepat Menggunakan Chaos Enscape',
    'blog3.cat':    'Tips & Trik',
    'blog3.date':   '05 April 2026',
    'blog3.title':  '5 Tips Manajemen Layer Efisien di Software CAD',
    'blog4.cat':    'Insight Bisnis',
    'blog4.date':   '28 Maret 2026',
    'blog4.title':  'Perbandingan Hemat Biaya: Lisensi Perpetual vs Subscription',
    /* Testimonials */
    'testi.eyebrow': 'Klien Bicara',
    'testi.h2':      'Apa Kata Klien Tentang Piranusa?',
    'testi.sub':     'Cerita nyata dari profesional yang telah mentransformasi produktivitas bisnis mereka.',
    'testi1.quote':  '"Beralih ke ZWCAD melalui Piranusa menghemat anggaran IT perusahaan kami secara signifikan. Tim support mereka sangat responsif dan benar-benar menguasai produknya."',
    'testi1.name':   'Budi Santoso',
    'testi1.role':   'IT Manager, PT Karya Bangun Nusantara',
    'testi2.quote':  '"Training Archicad BIM dari Piranusa mengubah cara kerja tim arsitek kami sepenuhnya. Produktivitas naik drastis dalam 3 bulan pertama implementasi."',
    'testi2.name':   'Anisa Rahmawati',
    'testi2.role':   'Lead Architect, Studio Arsitek Maju',
    'testi3.quote':  '"ZW3D sangat membantu proses pengembangan produk kami. Piranusa memberikan implementasi yang mulus dan dukungan teknis lokal yang tidak pernah mengecewakan."',
    'testi3.name':   'Hendra Kusuma',
    'testi3.role':   'Engineering Manager, PT Manufaktur Prima',
    /* Video Testimonial */
    'vtesti.eyebrow': 'Cerita Sukses Klien',
    'vtesti.h2':      'Dengar Langsung dari Mereka',
    'vtesti.sub':     'Klien kami berbagi pengalaman nyata menggunakan solusi Piranusa dalam pekerjaan sehari-hari.',
    'vtesti1.quote':  '"Migrasi ke ZWCAD dari AutoCAD selesai dalam dua minggu. Tim Piranusa support kami dari awal sampai akhir."',
    'vtesti1.name':   'Rudi Wijaya',
    'vtesti1.role':   'CAD Manager, PT Bangun Prima',
    'vtesti2.quote':  '"Training BIM Archicad dari Piranusa mengubah cara kerja studio kami. Sekarang semua drawing sudah parametrik dan terkoordinasi."',
    'vtesti2.name':   'Sari Purnama',
    'vtesti2.role':   'Principal Architect, Forma Studio',
    'vtesti3.quote':  '"ZW3D menggantikan software lama kami dengan harga jauh lebih terjangkau. Cycle time desain produk turun 40%."',
    'vtesti3.name':   'Fajar Nugroho',
    'vtesti3.role':   'Product Engineer, PT Cipta Mekanikal',
    /* FAQ */
    'faq.eyebrow': 'Pertanyaan Umum',
    'faq.h2':      'Pertanyaan yang Sering Diajukan',
    'faq1.q':  'Apakah Piranusa menyediakan dukungan teknis lokal di Indonesia setelah pembelian?',
    'faq1.a':  'Ya. Piranusa menyediakan tim dukungan teknis berbahasa Indonesia yang siap membantu via telepon, email, dan kunjungan on-site. Kami memiliki SLA respons cepat untuk klien korporat, memastikan operasional Anda tidak terganggu.',
    'faq2.q':  'Apa keuntungan lisensi perpetual ZWCAD dibandingkan software CAD berlangganan?',
    'faq2.a':  'Lisensi perpetual ZWCAD memberikan kepemilikan penuh dengan pembayaran sekali. Anda tidak terikat biaya berlangganan tahunan yang terus meningkat. Dalam jangka 3 tahun, efisiensi biaya lisensi perpetual vs berlangganan bisa mencapai 40-60% lebih hemat untuk tim berukuran sedang.',
    'faq3.q':  'Apakah Piranusa menyediakan layanan training dan sertifikasi untuk tim perusahaan?',
    'faq3.a':  'Tentu. Kami menyediakan program training CAD 2D, 3D, BIM, dan rendering bersertifikat resmi dari principal. Training tersedia dalam format in-house (di lokasi klien), online, maupun di fasilitas training kami di Jakarta. Sertifikat yang diterbitkan diakui oleh principal internasional.',
    'faq4.q':  'Bagaimana proses transisi dari software CAD lama ke produk dari Piranusa?',
    'faq4.a':  'Kami mengelola seluruh proses migrasi: mulai dari audit kebutuhan, pengujian kompatibilitas data, konversi file, instalasi terpusat, hingga training tim. ZWCAD secara khusus dirancang kompatibel penuh dengan format DWG standar industri, sehingga tidak ada kehilangan data selama transisi.',
    /* Contact */
    'contact.eyebrow': 'Mulai Konsultasi',
    'contact.h2':      'Siap Mengoptimalkan Produktivitas Tim Anda?',
    'contact.sub':     'Hubungi konsultan kami hari ini untuk mendapatkan free trial, demo produk, atau penawaran harga khusus.',
    'contact.name':    'Nama Lengkap',
    'contact.email':   'Email Perusahaan',
    'contact.wa':      'Nomor WhatsApp',
    'contact.industry':'Pilih Industri / Kebutuhan',
    'contact.opt0':    'Pilih Kebutuhan Anda',
    'contact.opt1':    'Solusi AEC (Arsitektur & Konstruksi)',
    'contact.opt2':    'Solusi Manufaktur (MFG)',
    'contact.opt3':    'Training & Sertifikasi',
    'contact.opt4':    'Konsultasi Umum',
    'contact.cta':     'Minta Penawaran Sekarang',
    'contact.privacy': '🔒 Data privasi Anda aman bersama kami. Kami merespons dalam 1×24 jam kerja.',
    /* Footer */
    'footer.desc':     'Mitra teknologi terpercaya untuk industri AEC dan Manufaktur di Indonesia sejak 2012.',
    'footer.products': 'Produk',
    'footer.company':  'Perusahaan',
    'footer.contact':  'Kontak',
    'footer.about':    'Tentang Kami',
    'footer.training': 'Layanan Training',
    'footer.career':   'Karir',
    'footer.privacy':  'Kebijakan Privasi',
    'footer.rights':   '© 2026 PT Piranti Nusantara Teknologi. Hak cipta dilindungi.',
  },
  en: {
    /* Promo Bar */
    'promo.text': 'Free Webinar: Optimizing ZWCAD for Manufacturing — Friday, April 28, 2026 · 2:00 PM WIB',
    /* Navbar */
    'nav.products': 'Products & Solutions',
    'nav.why':      'Why Us',
    'nav.training': 'Training',
    'nav.blog':     'Blog',
    'nav.contact':  'Contact Us',
    /* Hero */
    'hero.eyebrow': 'Authorized CAD & BIM Distributor · Indonesia',
    'hero.h1a':     'Boost Your Business Efficiency',
    'hero.h1b':     'with the Best CAD & BIM Solutions',
    'hero.sub':     'Piranusa is the authorized distributor of ZWCAD, Archicad, and ZW3D. We help architecture and manufacturing companies optimize design, cut license costs, and accelerate workflows without compromising quality.',
    'hero.cta1':    'Get a Special Offer',
    'hero.cta2':    'Explore Our Solutions',
    'hero.trust':   'Authorized Distributor  ·  Original Licenses  ·  Local Technical Support',
    /* Stats */
    'stat.clients.label':   'Active Clients',
    'stat.years.label':     'Years of Experience',
    'stat.training.label':  'Training Sessions',
    'stat.licenses.label':  'Licenses Deployed',
    /* Clients */
    'clients.title': 'Trusted by Hundreds of Industry Leaders in Indonesia',
    /* Products */
    'products.eyebrow': 'Industry-Based Solutions',
    'products.h2':      'Choose Software Solutions for Your Industry',
    'products.sub':     'Two technology solution pillars designed specifically for the unique challenges of the AEC and Manufacturing industries.',
    'aec.badge':    'AEC',
    'aec.title':    'Architecture & Construction',
    'aec.desc':     'A complete suite of BIM and CAD software to design, visualize, and build the future with precision.',
    'aec.hero':     'Hero Products',
    'aec.add':      'Additional Solutions',
    'aec.cta':      'View AEC Solutions',
    'mfg.badge':    'MFG',
    'mfg.title':    'Manufacturing & Product Design',
    'mfg.desc':     'Integrated CAD/CAM solutions to accelerate product development cycles from visual concept to mass production.',
    'mfg.hero':     'Hero Products',
    'mfg.add':      'Additional Solutions',
    'mfg.cta':      'View Manufacturing Solutions',
    /* About */
    'about.eyebrow': 'Why Piranusa?',
    'about.h2':      'More Than a Distributor — We Are Your Innovation Partner',
    'about.ai':      'PT Piranti Nusantara Teknologi (Piranusa) is the leading authorized distributor of architectural and manufacturing design software in Indonesia, focused on license cost efficiency and local after-sales support services.',
    'about.p2':      'Since 2012, we have guided hundreds of companies in optimizing their design workflows with end-to-end solutions: from consulting, installation, and implementation, to team training and certification.',
    'about.c1':      'Local Technical Support in Indonesian',
    'about.c2':      'Perpetual Licenses Available (Pay Once, Use Forever)',
    'about.c3':      'Officially Certified Experts from Principals',
    'about.c4':      'ISO 9001:2015 Certified',
    'about.principal': 'Our Authorized Principals',
    'about.cta':     'Learn More',
    /* Services */
    'services.eyebrow': 'Our Services',
    'services.h2':      'Enhance Team Competency Through Official Training',
    'services.sub':     'New software investment only has value if your team truly masters it. We are here to ensure that happens.',
    'svc1.title': 'CAD & BIM Training',
    'svc1.desc':  'Certified training programs for 2D CAD, 3D, and BIM software with officially certified instructors from the principal.',
    'svc2.title': 'Implementation & Consulting',
    'svc2.desc':  'End-to-end implementation assistance from needs analysis to fully optimized systems in your environment.',
    'svc3.title': 'Professional Certification',
    'svc3.desc':  'Official team competency certification for internationally recognized professional standards in AEC and Manufacturing.',
    'services.cta': 'View All Training Programs',
    /* Events */
    'events.eyebrow': 'Events & Promos',
    'events.h2':      'Upcoming Promos & Events',
    'events.sub':     'Join our educational webinars and take advantage of special software offers.',
    'events.all':     'View All Events',
    'event1.badge':   'Special Promo',
    'event1.title':   '20% Discount on ZWCAD Professional',
    'event1.desc':    'Get a special discount on ZWCAD Professional perpetual license purchases this month. Limited slots available.',
    'event1.cta':     'Claim Promo →',
    'event2.badge':   'Webinar',
    'event2.title':   '3D Modeling Optimization in ZW3D',
    'event2.date':    'Friday, April 28, 2026 · 2:00 PM WIB via Zoom',
    'event2.cta':     'Register Free →',
    'event3.badge':   'Roadshow',
    'event3.title':   'Archicad BIM Workshop – Surabaya',
    'event3.desc':    'Boost your architecture team collaboration in a face-to-face session with Graphisoft Indonesia experts.',
    'event3.cta':     'Check Schedule →',
    /* Blog */
    'blog.eyebrow': 'Insights & Knowledge',
    'blog.h2':      'Latest Insights & News',
    'blog.sub':     'Tips, tutorials, and design technology updates directly from our experts.',
    'blog.all':     'Read All Articles',
    'blog1.cat':    'Industry News',
    'blog1.title':  'ZWCAD 2026 Officially Launched with AI Assistant Feature',
    'blog1.cta':    'Read more →',
    'blog2.cat':    'Tutorial',
    'blog2.date':   'April 12, 2026',
    'blog2.title':  'How to Create Realistic Renders Quickly Using Chaos Enscape',
    'blog3.cat':    'Tips & Tricks',
    'blog3.date':   'April 5, 2026',
    'blog3.title':  '5 Tips for Efficient Layer Management in CAD Software',
    'blog4.cat':    'Business Insight',
    'blog4.date':   'March 28, 2026',
    'blog4.title':  'Cost Comparison: Perpetual License vs Subscription',
    /* Testimonials */
    'testi.eyebrow': 'Clients Speak',
    'testi.h2':      'What Clients Say About Piranusa?',
    'testi.sub':     'Real stories from professionals who have transformed their business productivity.',
    'testi1.quote':  '"Switching to ZWCAD through Piranusa significantly saved our company\'s IT budget. Their support team is very responsive and truly masters the product."',
    'testi1.name':   'Budi Santoso',
    'testi1.role':   'IT Manager, PT Karya Bangun Nusantara',
    'testi2.quote':  '"Piranusa\'s Archicad BIM training completely changed the way our architect team works. Productivity increased dramatically within the first 3 months of implementation."',
    'testi2.name':   'Anisa Rahmawati',
    'testi2.role':   'Lead Architect, Studio Arsitek Maju',
    'testi3.quote':  '"ZW3D greatly helps our product development process. Piranusa provided a seamless implementation and local technical support that never disappoints."',
    'testi3.name':   'Hendra Kusuma',
    'testi3.role':   'Engineering Manager, PT Manufaktur Prima',
    /* Video Testimonial */
    'vtesti.eyebrow': 'Client Success Stories',
    'vtesti.h2':      'Hear It Directly from Them',
    'vtesti.sub':     'Our clients share their real experience using Piranusa solutions in their daily work.',
    'vtesti1.quote':  '"We migrated from AutoCAD to ZWCAD in two weeks. Piranusa supported us every step of the way."',
    'vtesti1.name':   'Rudi Wijaya',
    'vtesti1.role':   'CAD Manager, PT Bangun Prima',
    'vtesti2.quote':  '"Piranusa\'s Archicad BIM training transformed how our studio works. All drawings are now parametric and coordinated."',
    'vtesti2.name':   'Sari Purnama',
    'vtesti2.role':   'Principal Architect, Forma Studio',
    'vtesti3.quote':  '"ZW3D replaced our old software at a much more affordable price. Product design cycle time dropped by 40%."',
    'vtesti3.name':   'Fajar Nugroho',
    'vtesti3.role':   'Product Engineer, PT Cipta Mekanikal',
    /* FAQ */
    'faq.eyebrow': 'Common Questions',
    'faq.h2':      'Frequently Asked Questions',
    'faq1.q':  'Does Piranusa provide local technical support in Indonesia after purchase?',
    'faq1.a':  'Yes. Piranusa provides an Indonesian-speaking technical support team ready to help via phone, email, and on-site visits. We have a fast-response SLA for corporate clients, ensuring your operations are not disrupted.',
    'faq2.q':  'What are the advantages of a ZWCAD perpetual license compared to subscription-based CAD software?',
    'faq2.a':  'A ZWCAD perpetual license provides full ownership with a one-time payment. You are not tied to annual subscription fees that keep increasing. Over 3 years, the cost efficiency of perpetual vs subscription can reach 40-60% savings for medium-sized teams.',
    'faq3.q':  'Does Piranusa provide training and certification services for our company team?',
    'faq3.a':  'Absolutely. We provide certified 2D CAD, 3D, BIM, and rendering training programs from official principals. Training is available in in-house (at client\'s location), online, and at our training facility in Jakarta formats. Certificates issued are recognized by international principals.',
    'faq4.q':  'What is the process for transitioning from our old CAD software to Piranusa products?',
    'faq4.a':  'We manage the entire migration process: from needs auditing, data compatibility testing, file conversion, centralized installation, to team training. ZWCAD is specifically designed to be fully compatible with the industry-standard DWG format, so there is no data loss during transition.',
    /* Contact */
    'contact.eyebrow': 'Start Consultation',
    'contact.h2':      'Ready to Optimize Your Team\'s Productivity?',
    'contact.sub':     'Contact our consultants today for a free trial, product demo, or special pricing for your company.',
    'contact.name':    'Full Name',
    'contact.email':   'Company Email',
    'contact.wa':      'WhatsApp Number',
    'contact.industry':'Select Industry / Need',
    'contact.opt0':    'Select Your Need',
    'contact.opt1':    'AEC Solution (Architecture & Construction)',
    'contact.opt2':    'Manufacturing Solution (MFG)',
    'contact.opt3':    'Training & Certification',
    'contact.opt4':    'General Consultation',
    'contact.cta':     'Request a Quote Now',
    'contact.privacy': '🔒 Your privacy data is safe with us. We respond within 1×24 business hours.',
    /* Footer */
    'footer.desc':     'Trusted technology partner for the AEC and Manufacturing industries in Indonesia since 2012.',
    'footer.products': 'Products',
    'footer.company':  'Company',
    'footer.contact':  'Contact',
    'footer.about':    'About Us',
    'footer.training': 'Training Services',
    'footer.career':   'Careers',
    'footer.privacy':  'Privacy Policy',
    'footer.rights':   '© 2026 PT Piranti Nusantara Teknologi. All rights reserved.',
  }
};

// ── State ────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('piranusa-lang') || 'id';

// ── i18n Engine ──────────────────────────────────────────────────
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('piranusa-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = translations[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const val = translations[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = translations[lang][key];
    if (val !== undefined) el.placeholder = val;
  });

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

// ── Navbar scroll effect ─────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('main-nav');
  const bar = document.getElementById('promo-bar');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('navbar-scrolled', window.scrollY > 30);
    if (bar && !bar.dataset.dismissed) {
      bar.classList.toggle('promo-scroll-hidden', window.scrollY > 5);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Mobile menu ──────────────────────────────────────────────────
function initMobileMenu() {
  const btn  = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    const icon = btn.querySelector('[data-lucide]');
    if (icon) {
      icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
      lucide.createIcons({ nodes: [icon] });
    }
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Promo bar dismiss ────────────────────────────────────────────
function initPromoBar() {
  const bar = document.getElementById('promo-bar');
  const btn = document.getElementById('promo-close');
  if (!bar || !btn) return;

  btn.addEventListener('click', () => {
    bar.dataset.dismissed = '1';
    bar.style.transition = 'transform 0.35s ease, opacity 0.25s ease';
    bar.style.transform  = 'translateY(-100%)';
    bar.style.opacity    = '0';
    bar.style.pointerEvents = 'none';
    setTimeout(() => bar.remove(), 380);
  });
}

// ── Counter animation ────────────────────────────────────────────
function animateCounter(el) {
  const target   = parseInt(el.dataset.counter, 10);
  const suffix   = el.dataset.counterSuffix || '';
  const duration = 2200;
  const startTs  = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startTs) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target).toLocaleString('id-ID') + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = '1';
        animateCounter(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('[data-counter]').forEach(el => io.observe(el));
}

// ── Scroll-reveal animations ─────────────────────────────────────
function initScrollAnimations() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-animate], [data-animate-stagger]').forEach(el => io.observe(el));
}

// ── FAQ accordion (one open at a time) ──────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('.faq-item[open]').forEach(other => {
          if (other !== item) other.removeAttribute('open');
        });
      }
    });
  });
}

// ── Contact form (prevent default, show toast) ───────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = currentLang === 'id' ? 'Mengirim...' : 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = currentLang === 'id' ? '✓ Pesan Terkirim!' : '✓ Message Sent!';
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-success');
      form.reset();
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-success');
      }, 3500);
    }, 1200);
  });
}

// ── Rotating hero word ───────────────────────────────────────────
function initRotatingWords() {
  const el = document.getElementById('hero-rotating-word');
  if (!el) return;
  const words = ['Terbaik', 'Terpercaya', 'Termudah', 'Terlengkap', 'Terdepan'];
  let idx = 0;

  const swap = () => {
    el.style.animation = 'word-slide-out 0.4s ease forwards';
    setTimeout(() => {
      idx = (idx + 1) % words.length;
      el.textContent = words[idx];
      el.style.animation = 'word-slide-in 0.45s ease forwards';
    }, 400);
  };

  setInterval(swap, 3200);
}

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initNavbar();
  initMobileMenu();
  initPromoBar();
  initCounters();
  initScrollAnimations();
  initFAQ();
  initContactForm();
  initRotatingWords();

  // Apply saved / default language
  setLanguage(currentLang);

  // Language toggle buttons
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});
