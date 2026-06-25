import { Shield, Star, BookOpen, Eye, Leaf } from 'lucide-react';

const values = [
  {
    icon: Shield,
    name: 'Integritas',
    desc: 'Menjalankan seluruh kegiatan usaha secara jujur dan bertanggung jawab.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Star,
    name: 'Profesionalisme',
    desc: 'Memberikan layanan terbaik kepada anggota, peserta, dan mitra.',
    color: 'from-amber-400 to-amber-500',
  },
  {
    icon: BookOpen,
    name: 'Edukatif',
    desc: 'Mengutamakan pendidikan dan literasi dibandingkan spekulasi.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Eye,
    name: 'Transparansi',
    desc: 'Menyampaikan informasi secara terbuka dan dapat dipertanggungjawabkan.',
    color: 'from-amber-600 to-yellow-600',
  },
  {
    icon: Leaf,
    name: 'Keberlanjutan',
    desc: 'Membangun perusahaan yang memberikan manfaat jangka panjang.',
    color: 'from-amber-500 to-yellow-400',
  },
];

export default function Values() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/3 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Nilai-Nilai Kami</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Landasan Perusahaan
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map(({ icon: Icon, name, desc, color }, i) => (
            <div
              key={i}
              className="group glass rounded-2xl p-6 text-center hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-900/30 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={24} className="text-neutral-900" />
              </div>
              <h3 className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">{name}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
