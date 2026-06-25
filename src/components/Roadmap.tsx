const milestones = [
  {
    year: '2026',
    title: 'Fondasi & Brand Awareness',
    desc: 'Membangun brand awareness, webinar rutin, pengembangan komunitas, dan membership. Menargetkan 100 member aktif dan memperkuat produk edukasi.',
    active: true,
  },
  {
    year: '2027',
    title: 'Platform Digital',
    desc: 'Meluncurkan platform pembelajaran digital dan program online yang terintegrasi.',
    active: false,
  },
  {
    year: '2028',
    title: 'Pertumbuhan & Diversifikasi',
    desc: 'Meningkatkan jumlah member dan diversifikasi produk edukasi investasi.',
    active: false,
  },
  {
    year: '2029',
    title: 'Ekspansi Nasional',
    desc: 'Ekspansi ke seluruh wilayah Indonesia dan membangun kemitraan strategis.',
    active: false,
  },
  {
    year: '2030',
    title: 'Platform Terdepan',
    desc: 'Menjadi salah satu platform edukasi investasi yang komprehensif terbesar dan paling terpercaya di Indonesia.',
    active: false,
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Rencana Strategis</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Roadmap 2026–2030
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-6" />
          <p className="text-neutral-400 max-w-xl mx-auto text-base leading-relaxed">
            Rencana jangka panjang kami untuk menjadi platform edukasi investasi terdepan di Indonesia.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Line */}
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-neutral-800">
            <div className="h-full w-[10%] gold-gradient" />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {milestones.map(({ year, title, desc, active }, i) => (
              <div key={i} className="relative pt-4">
                {/* Dot */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      active
                        ? 'gold-gradient border-amber-400 shadow-lg shadow-amber-500/50'
                        : 'bg-neutral-800 border-neutral-600'
                    }`}
                  >
                    {active && <div className="w-2 h-2 rounded-full bg-neutral-900" />}
                  </div>
                </div>

                <div
                  className={`glass rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 ${
                    active ? 'border-amber-500/40' : 'hover:border-amber-500/20'
                  }`}
                >
                  <div
                    className={`text-xs font-bold tracking-widest uppercase mb-2 ${
                      active ? 'text-amber-400' : 'text-neutral-500'
                    }`}
                  >
                    {year}
                  </div>
                  <h3 className={`font-semibold text-sm mb-2 leading-snug ${active ? 'text-white' : 'text-neutral-300'}`}>
                    {title}
                  </h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
                  {active && (
                    <span className="inline-block mt-3 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs">
                      Sedang Berjalan
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-neutral-800" />

          <div className="space-y-6">
            {milestones.map(({ year, title, desc, active }, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div
                  className={`absolute -left-8 top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    active
                      ? 'gold-gradient border-amber-400 shadow-lg shadow-amber-500/40'
                      : 'bg-neutral-800 border-neutral-600'
                  }`}
                >
                  {active && <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />}
                </div>

                <div
                  className={`glass rounded-xl p-5 ${
                    active ? 'border-amber-500/40' : ''
                  }`}
                >
                  <div
                    className={`text-xs font-bold tracking-widest uppercase mb-1 ${
                      active ? 'text-amber-400' : 'text-neutral-500'
                    }`}
                  >
                    {year}
                  </div>
                  <h3 className={`font-semibold text-sm mb-2 ${active ? 'text-white' : 'text-neutral-300'}`}>
                    {title}
                  </h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
                  {active && (
                    <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs">
                      Sedang Berjalan
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
