import { useState } from 'react';
import {
  Palette,
  Video,
  Layers,
  Sparkles,
  ExternalLink,
  Mail,
  MessageCircle,
  Instagram,
  Github,
  Menu,
  X,
  Award,
  CheckCircle2,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'palette' | 'video' | 'layers' | 'sparkles';
}

interface ProjectItem {
  id: string;
  title: string;
  category: 'Graphic Design' | 'Video Editing';
  description: string;
  tools: string[];
  imageUrl: string;
  projectUrl: string;
}

const abudiData = {
  fullName: 'Abdurrahman',
  nickname: 'Abudi',
  tagline: 'Menghadirkan Visual Memukau & Cerita Sinematik untuk Meningkatkan Nilai Bisnis Anda.',
  roles: ['Graphic Designer', 'Video Editor'],
  aboutMe:
    'Hallo, saya Abdurrahman (Abudi). Saya adalah pribadi yang disiplin, bertanggung jawab, dan memiliki semangat tinggi untuk terus belajar. Saya memiliki ketertarikan dalam bidang bisnis, manajemen, dan teknologi. Saya senang mencoba hal baru, mengembangkan kemampuan diri, serta menghadapi tantangan untuk mencapai tujuan.',
  // GANTI NOMOR WA & EMAIL KAMU DI SINI:
  whatsappNumber: '6281234567890',
  email: 'abdurrahman.abudi@email.com',
  socials: {
    instagram: 'https://instagram.com/',
    github: 'https://github.com/',
  },
  services: [
    {
      id: 'srv-1',
      title: 'Brand Identity & Logo Design',
      description: 'Perancangan identitas visual, logo profesional, dan panduan warna yang mencerminkan karakter bisnis Anda.',
      iconName: 'palette',
    },
    {
      id: 'srv-2',
      title: 'Social Media & Marketing Kit',
      description: 'Desain poster promosi, feed Instagram, banner acara, dan materi pemasaran yang menarik perhatian audiens.',
      iconName: 'layers',
    },
    {
      id: 'srv-3',
      title: 'Commercial & Reels Video Editing',
      description: 'Editing video dinamis untuk TikTok, Instagram Reels, dan YouTube dengan transisi halus serta color grading tajam.',
      iconName: 'video',
    },
    {
      id: 'srv-4',
      title: 'Motion Graphics & Highlight Event',
      description: 'Pembuatan video dokumenter kegiatan, aftermovie, dan animasi teks sederhana untuk kebutuhan presentasi maupun branding.',
      iconName: 'sparkles',
    },
  ] as ServiceItem[],
  projects: [
    {
      id: 'prj-1',
      title: 'Rebranding Identitas Visual UMKM Kopi',
      category: 'Graphic Design',
      description: 'Pembuatan logo, desain kemasan cup, dan poster promosi digital untuk meningkatkan daya tarik merek lokal.',
      tools: ['Adobe Illustrator', 'Photoshop'],
      imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
      projectUrl: 'https://drive.google.com/',
    },
    {
      id: 'prj-2',
      title: 'Video Promosi & Cinematic Reels Produk',
      category: 'Video Editing',
      description: 'Editing video vertikal berdurasi 45 detik dengan ritme cepat, sound design, dan color grading sinematik.',
      tools: ['Premiere Pro', 'CapCut Pro'],
      imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      projectUrl: 'https://drive.google.com/',
    },
    {
      id: 'prj-3',
      title: 'Kampanye Konten Carousel Edukasi Bisnis',
      category: 'Graphic Design',
      description: 'Seri 10 slide microblog Instagram dengan tata letak modern dan tipografi yang mudah dibaca.',
      tools: ['Figma', 'Canva Pro'],
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      projectUrl: 'https://drive.google.com/',
    },
    {
      id: 'prj-4',
      title: 'Aftermovie Event & Dokumentasi Sekolah',
      category: 'Video Editing',
      description: 'Kompilasi momen terbaik acara tahunan lengkap dengan motion title dan transisi dinamis.',
      tools: ['Premiere Pro', 'After Effects'],
      imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80',
      projectUrl: 'https://drive.google.com/',
    },
  ] as ProjectItem[],
};

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<'Semua' | 'Graphic Design' | 'Video Editing'>('Semua');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const filteredProjects =
    selectedCategory === 'Semua'
      ? abudiData.projects
      : abudiData.projects.filter((project) => project.category === selectedCategory);

  const renderServiceIcon = (iconName: ServiceItem['iconName']) => {
    const iconProps = { className: 'w-7 h-7 text-rose-400' };
    switch (iconName) {
      case 'palette':
        return <Palette {...iconProps} />;
      case 'video':
        return <Video {...iconProps} />;
      case 'layers':
        return <Layers {...iconProps} />;
      case 'sparkles':
        return <Sparkles {...iconProps} />;
    }
  };

  const whatsappUrl = `https://wa.me/${abudiData.whatsappNumber}?text=${encodeURIComponent(
    `Halo ${abudiData.nickname}, saya tertarik untuk bekerja sama / menggunakan jasa Graphic Design & Video Editing Anda.`
  )}`;

  return (
    <div className="min-h-screen bg-[#1A0508] text-stone-100 font-sans selection:bg-rose-500 selection:text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#1A0508]/90 backdrop-blur-md border-b border-rose-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-2xl font-extrabold tracking-wider">
              <span className="text-white">{abudiData.nickname.toUpperCase()}</span>
              <span className="text-rose-500">.</span>
            </a>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#about" className="hover:text-rose-400 transition-colors">Tentang Saya</a>
              <a href="#services" className="hover:text-rose-400 transition-colors">Layanan</a>
              <a href="#portfolio" className="hover:text-rose-400 transition-colors">Portofolio</a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-linear-to-r from-red-600 via-red-700 to-[#5A0B18] border border-rose-400/50 text-white font-semibold hover:brightness-110 transition-all shadow-lg shadow-red-950/50"
              >
                Sewa Jasa
              </a>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                aria-label="Toggle Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-rose-400 p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2B080D] border-b border-rose-500/20 px-4 pt-2 pb-5 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-200 hover:text-rose-400">Tentang Saya</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-200 hover:text-rose-400">Layanan</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-200 hover:text-rose-400">Portofolio</a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2.5 rounded-lg bg-linear-to-r from-red-600 to-rose-600 text-white font-bold"
            >
              Hubungi Saya via WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden py-24 sm:py-32 bg-linear-to-br from-[#3D0811] via-[#24060B] to-[#1A0508]">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A0B16] border border-rose-400/40 text-rose-200 text-xs sm:text-sm font-medium">
            <Award className="w-4 h-4 text-rose-400" />
            <span>Tersedia untuk Proyek Freelance & Kolaborasi Industri</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Halo, Saya{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-300 via-red-400 to-rose-500">
              {abudiData.fullName}
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-2 items-center text-lg sm:text-xl font-semibold text-rose-300">
            <span>{abudiData.roles[0]}</span>
            <span className="text-red-500">•</span>
            <span>{abudiData.roles[1]}</span>
          </div>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {abudiData.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-linear-to-r from-red-600 to-rose-600 text-white font-bold hover:from-red-500 hover:to-rose-500 transition-all shadow-lg shadow-red-600/30"
            >
              <MessageCircle className="w-5 h-5" />
              Hubungi Saya
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#380912] border border-red-500/50 text-white font-semibold hover:border-rose-400 transition-all"
            >
              Lihat Karya
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-20 bg-[#22060B] border-y border-rose-500/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-rose-400 font-semibold tracking-widest uppercase text-xs mb-2">Profil Singkat</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Tentang Saya</h2>
            <div className="w-20 h-1 bg-linear-to-r from-red-600 to-rose-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="bg-linear-to-br from-[#350911] to-[#24060B] border border-rose-500/25 rounded-3xl p-8 sm:p-10 shadow-xl">
            <p className="text-stone-200 text-lg sm:text-xl leading-relaxed text-center italic">
              &ldquo;{abudiData.aboutMe}&rdquo;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-rose-500/20">
              <div className="flex items-center justify-center gap-2 text-rose-200 font-medium">
                <CheckCircle2 className="w-5 h-5 text-red-500" />
                <span>Disiplin & Tepat Waktu</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-rose-200 font-medium">
                <CheckCircle2 className="w-5 h-5 text-red-500" />
                <span>Berorientasi Bisnis & Solusi</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-rose-200 font-medium">
                <CheckCircle2 className="w-5 h-5 text-red-500" />
                <span>Adaptif terhadap Teknologi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-[#1A0508]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-rose-400 font-semibold tracking-widest uppercase text-xs mb-2">Keahlian & Jasa</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Layanan yang Saya Tawarkan</h2>
            <div className="w-20 h-1 bg-linear-to-r from-red-600 to-rose-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {abudiData.services.map((service) => (
              <div
                key={service.id}
                className="group bg-[#2B070E] border border-red-900/60 hover:border-rose-400/70 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-[#450B16] border border-rose-400/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {renderServiceIcon(service.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-20 bg-[#22060B] border-t border-rose-500/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-rose-400 font-semibold tracking-widest uppercase text-xs mb-2">Hasil Karya</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Portofolio Pilihan</h2>
            <div className="w-20 h-1 bg-linear-to-r from-red-600 to-rose-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {(['Semua', 'Graphic Design', 'Video Editing'] as const).map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-linear-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/25'
                    : 'bg-[#350911] text-stone-300 border border-red-800/50 hover:border-rose-400/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#2D070E] border border-red-900/60 hover:border-rose-400/60 rounded-2xl overflow-hidden shadow-xl transition-all"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#1A0508]/85 text-rose-300 border border-rose-400/40 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-red-900/50">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2.5 py-1 rounded-md bg-red-950/80 text-rose-200 border border-red-700/40"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-400 hover:text-rose-300"
                    >
                      <span>Detail</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT SECTION */}
      <section id="contact" className="py-20 bg-linear-to-b from-[#1A0508] to-[#3B0811]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#2B070E] border-2 border-rose-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Siap Mewujudkan Ide Visual Anda?
            </h2>
            <p className="text-stone-300 max-w-xl mx-auto mb-8 text-base sm:text-lg">
              Diskusikan kebutuhan desain grafis atau editing video bisnis Anda bersama {abudiData.nickname}. Respon cepat dan hasil profesional.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-red-600 to-rose-600 text-white font-bold text-base hover:brightness-110 transition-all shadow-lg shadow-red-600/30"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp Sekarang
              </a>
              <a
                href={`mailto:${abudiData.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-red-950/60 border border-red-500/50 text-white font-semibold hover:border-rose-400 transition-all"
              >
                <Mail className="w-5 h-5 text-rose-400" />
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#140305] border-t border-rose-500/20 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-400 text-sm">
            © {new Date().getFullYear()} <span className="text-rose-400 font-semibold">{abudiData.fullName}</span> ({abudiData.nickname}). All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href={abudiData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-stone-400 hover:text-rose-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={abudiData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-stone-400 hover:text-rose-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;