import { Video, Monitor, GraduationCap, Users, BookOpen, Globe, UserCheck, MessageCircle, BarChart2 } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Webinar & Seminar',
    desc: 'Sesi edukasi investasi live bersama para ahli yang dapat diikuti dari mana saja.',
  },
  {
    icon: Monitor,
    title: 'Pelatihan Online & Offline',
    desc: 'Program pelatihan terstruktur dalam format digital maupun tatap muka langsung.',
  },
  {
    icon: GraduationCap,
    title: 'Kelas Investasi',
    desc: 'Kelas khusus dari level dasar hingga mahir dengan kurikulum yang telah terstandarisasi.',
  },
  {
    icon: Users,
    title: 'Program Membership',
    desc: 'Akses eksklusif ke materi, komunitas, dan program edukasi melalui program keanggotaan.',
  },
  {
    icon: BookOpen,
    title: 'Modul & E-Book',
    desc: 'Publikasi materi edukasi investasi dalam bentuk modul dan e-book yang komprehensif.',
  },
  {
    icon: Globe,
    title: 'Media Edukasi Digital',
    desc: 'Konten edukasi berbasis media sosial dan platform digital untuk jangkauan lebih luas.',
  },
  {
    icon: UserCheck,
    title: 'Program Mentoring',
    desc: 'Bimbingan personal dari mentor berpengalaman untuk akselerasi pemahaman investasi.',
  },
  {
    icon: MessageCircle,
    title: 'Komunitas Pembelajaran',
    desc: 'Ekosistem komunitas investor yang saling mendukung dan berbagi pengetahuan.',
  },
  {
    icon: BarChart2,
    title: 'Riset & Publikasi',
    desc: 'Penelitian dan publikasi analisis ekonomi serta investasi yang objektif dan berbasis data.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Program & Layanan</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Apa yang Kami Tawarkan
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-6" />
          <p className="text-neutral-400 max-w-xl mx-auto text-base leading-relaxed">
            Berbagai program edukasi investasi yang dirancang untuk memenuhi kebutuhan belajar
            seluruh lapisan masyarakat Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="group relative glass rounded-2xl p-6 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/50 transition-all duration-500 rounded-t-2xl" />
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:gold-gradient group-hover:border-transparent transition-all duration-300">
                <Icon size={20} className="text-amber-400 group-hover:text-neutral-900 transition-colors duration-300" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 glass rounded-xl p-5 border border-amber-500/20 text-center">
          <p className="text-neutral-400 text-sm">
            <span className="text-amber-400 font-semibold">Penting:</span>{' '}
            Seluruh materi edukasi kami bersifat informatif dan bukan merupakan rekomendasi beli atau jual.
            Kami tidak mengelola dana investasi masyarakat dan tidak menjanjikan keuntungan investasi tertentu.
          </p>
        </div>
      </div>
    </section>
  );
}
