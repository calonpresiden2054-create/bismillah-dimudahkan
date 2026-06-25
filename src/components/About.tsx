import { Eye, Target } from 'lucide-react';

const missions = [
  'Menyediakan pendidikan investasi yang mudah dipahami oleh seluruh lapisan masyarakat.',
  'Meningkatkan literasi keuangan nasional melalui media digital dan komunitas.',
  'Menyediakan materi edukasi yang objektif, terstruktur, dan berbasis data.',
  'Membangun ekosistem pembelajaran investasi yang berintegritas.',
  'Menciptakan sumber daya manusia yang memahami investasi secara menyeluruh.',
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Tentang Kami</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Visi & Misi Perusahaan
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Vision */}
          <div className="relative group">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Eye size={22} className="text-neutral-900" />
                </div>
                <div>
                  <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Visi</span>
                  <h3 className="text-white font-semibold text-lg font-display">Visi Perusahaan</h3>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed text-base">
                Menjadi platform edukasi investasi dan literasi keuangan terdepan di Indonesia yang mampu
                meningkatkan kualitas pengambilan keputusan keuangan masyarakat secara berkelanjutan.
              </p>

              <div className="mt-8 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-amber-300 text-sm italic font-display">
                  "Belajar Investasi dari Nol Sampai Paham."
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="relative group">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Target size={22} className="text-neutral-900" />
                </div>
                <div>
                  <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Misi</span>
                  <h3 className="text-white font-semibold text-lg font-display">Misi Perusahaan</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {missions.map((mission, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 w-5 h-5 rounded-full gold-gradient flex-shrink-0 flex items-center justify-center text-neutral-900 text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-neutral-300 text-sm leading-relaxed">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Company identity strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Nama', value: 'PT Ngerti Investasi Indonesia' },
            { label: 'Bidang', value: 'Pendidikan Nonformal & Literasi Investasi' },
            { label: 'Lokasi', value: 'Bandung, Jawa Barat' },
            { label: 'Berdiri', value: '3 Juni 2026' },
          ].map(({ label, value }) => (
            <div key={label} className="glass rounded-xl p-4 text-center">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">{label}</div>
              <div className="text-white text-sm font-medium leading-snug">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
