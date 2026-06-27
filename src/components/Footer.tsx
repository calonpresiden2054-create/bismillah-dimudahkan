// Footer component

const links = {
  Perusahaan: ['Tentang Kami', 'Visi & Misi', 'Tim', 'Program'],
  Layanan: ['Webinar & Seminar', 'Kelas Investasi', 'Membership', 'Mentoring'],
  Legal: ['Kebijakan Privasi', 'Syarat & Ketentuan', 'Disclaimer Investasi'],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/WhatsApp_Image_2026-06-25_at_20.20.52.jpeg"
                alt="Ngerti Investasi"
                className="w-9 h-9 rounded-lg object-cover shadow-lg"
              />
              <div className="leading-none">
                <span className="block text-sm font-semibold text-amber-400 tracking-wide">Ngerti</span>
                <span className="block text-xs text-neutral-400 tracking-widest uppercase">Investasi</span>
              </div>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              Platform edukasi investasi dan literasi keuangan terdepan di Indonesia.
            </p>
            <p className="text-amber-400/70 text-xs italic font-display">
              "Belajar Investasi dari Nol Sampai Paham."
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-neutral-500 text-sm hover:text-amber-400 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs">
            &copy; 2026 PT Ngerti Investasi Indonesia. Bandung, Jawa Barat.
          </p>
          <p className="text-neutral-700 text-xs text-center">
            Materi edukasi bukan merupakan rekomendasi investasi. Kami tidak mengelola dana masyarakat.
          </p>
        </div>
      </div>
    </footer>
  );
}
