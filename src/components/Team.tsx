import { Briefcase, GraduationCap, Megaphone } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-neutral-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Struktur Organisasi</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Kepengurusan Perusahaan
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-6" />
          <p className="text-neutral-400 max-w-xl mx-auto text-base leading-relaxed">
            PT Ngerti Investasi Indonesia dikelola oleh tim profesional yang berkomitmen terhadap
            kualitas edukasi dan pertumbuhan komunitas.
          </p>
        </div>

        {/* Org chart */}
        <div className="flex flex-col items-center gap-0">

          {/* Direktur Utama */}
          <div className="w-full max-w-sm">
            <div className="relative glass rounded-2xl border border-amber-500/40 p-6 text-center shadow-lg shadow-amber-900/20">
              <div className="absolute top-0 left-0 right-0 h-1 gold-gradient rounded-t-2xl" />
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Briefcase size={20} className="text-neutral-900" />
              </div>
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">Direktur Utama</div>
              <div className="text-white font-display font-semibold text-lg">Lam Syahrizal</div>
            </div>
          </div>

          {/* Connector vertical line */}
          <div className="w-px h-10 bg-amber-500/30" />

          {/* Horizontal connector */}
          <div className="relative w-full max-w-2xl flex items-center justify-center">
            <div className="absolute left-1/4 right-1/4 h-px bg-amber-500/30" />
            <div className="absolute left-1/4 top-0 w-px h-6 bg-amber-500/30" />
            <div className="absolute right-1/4 top-0 w-px h-6 bg-amber-500/30" />
          </div>
          <div className="h-6" />

          {/* Head of Education & Head of Marketing */}
          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 text-center hover:border-amber-500/40 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3">
                <GraduationCap size={18} className="text-amber-400" />
              </div>
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">Head of Education</div>
              <div className="text-white font-display font-semibold text-base leading-snug">M. Rifqi Nursyamsi Adiputra</div>
            </div>

            <div className="glass rounded-2xl p-6 text-center hover:border-amber-500/40 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3">
                <Megaphone size={18} className="text-amber-400" />
              </div>
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">Head of Marketing</div>
              <div className="text-white font-display font-semibold text-base">Izzudin Rafi</div>
            </div>
          </div>

        </div>

        {/* SDM info strip */}
        <div className="mt-12 glass rounded-xl p-5 border border-amber-500/15 text-center">
          <p className="text-neutral-400 text-sm">
            Kami membuka kesempatan untuk{' '}
            <span className="text-amber-400 font-medium">karyawan, magang, volunteer</span>, dan{' '}
            <span className="text-amber-400 font-medium">ambassador</span>.{' '}
            Hubungi kami untuk informasi rekrutmen.
          </p>
        </div>
      </div>
    </section>
  );
}
