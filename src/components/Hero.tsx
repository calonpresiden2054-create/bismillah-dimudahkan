import { ArrowRight, TrendingUp, Users, BookOpen } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '30+', label: 'Member 2026' },
  { icon: BookOpen, value: '10+', label: 'Program Edukasi' },
  { icon: Users, value: '3', label: 'Tim Profesional' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Investment background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/70 to-neutral-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-neutral-950/60" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-amber-500/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-400 text-xs font-medium tracking-widest uppercase">
            Platform Edukasi Investasi Indonesia
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto">
          <span className="text-white">Belajar Investasi</span>
          <br />
          <span className="text-gold-gradient">dari Nol Sampai Paham.</span>
        </h1>

        <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          PT Ngerti Investasi Indonesia hadir untuk meningkatkan literasi keuangan masyarakat
          melalui edukasi yang objektif, terstruktur, dan berbasis data.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="#programs"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl gold-gradient text-neutral-900 font-semibold text-sm hover:opacity-90 transition-all shadow-xl shadow-amber-900/40"
          >
            Lihat Program
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass border border-neutral-700 text-neutral-200 font-semibold text-sm hover:border-amber-500/50 hover:text-amber-400 transition-all"
          >
            Tentang Kami
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass rounded-xl px-6 py-5 text-center">
              <Icon size={20} className="text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold font-display text-white">{value}</div>
              <div className="text-xs text-neutral-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
    </section>
  );
}
