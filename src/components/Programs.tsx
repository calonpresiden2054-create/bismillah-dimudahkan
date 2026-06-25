import { Check, Users, Clock, MessageCircle, GraduationCap, ArrowRight } from 'lucide-react';

const mentoringBenefits = [
  'Pertemuan online/offline 2 jam per hari',
  'Diajarkan dari nol sampai paham semua instrumen investasi',
  'Dibimbing sampai menemukan profil risiko sendiri',
  'Diajarkan cara mendaftar sampai menggunakan aplikasi',
  'Diajarkan analisa mendalam (fundamental & teknikal)',
  'Diajarkan teknik investasi (value, growth, dll.)',
  'Konsultasi intensif harian (akses terbuka)',
  'Akses eksklusif channel Telegram VIP (insight & update)',
  'Dan benefit lainnya!',
];

const investClassBenefits = [
  'Ilmu Investasi dari Nol sampai Paham',
  'Sertifikat Peserta',
  'E-Book Eksklusif',
  'Insight Channel Eksklusif',
  'Komunitas Investor',
];

const instruments = ['Deposito', 'Obligasi', 'Reksadana', 'Saham', 'Crypto', 'Dan Lainnya'];

export default function Programs() {
  const waLink = 'https://wa.me/6289676692578';

  return (
    <section id="programs" className="py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Program Aktif</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Program yang Sedang Dibuka
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-6" />
          <p className="text-neutral-400 max-w-xl mx-auto text-base leading-relaxed">
            Dua program unggulan kami kini terbuka untuk umum. Mulai perjalanan investasimu bersama kami sekarang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Program 1: Mentoring Private */}
          <div className="relative group glass rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

            <div className="p-8 flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Users size={22} className="text-neutral-900" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-1">
                    Sedang Dibuka
                  </span>
                  <h3 className="text-white font-display font-bold text-xl leading-snug">
                    Mentoring Private<br />1 on 1 Selama 2 Bulan
                  </h3>
                </div>
              </div>

              {/* Instruments */}
              <div className="mb-5">
                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Materi yang Diajarkan</p>
                <div className="flex flex-wrap gap-2">
                  {instruments.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-amber-500/8 border border-amber-500/20 text-amber-300 text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6 flex-1">
                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Benefit Mentoring</p>
                <ul className="space-y-2">
                  {mentoringBenefits.map((b) => (
                    <li key={b} className="flex gap-2.5 items-start">
                      <Check size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-300 text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-4 mb-6">
                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Paket Coaching Intensive Private 1 on 1 (2 Bulan)</p>
                <div className="flex items-end gap-3">
                  <span className="text-neutral-500 text-sm line-through">Rp1.999.000</span>
                </div>
                <div className="text-amber-400 font-display font-bold text-3xl mt-1">Rp1.499.000</div>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full flex items-center justify-center gap-2 py-3.5 rounded-xl gold-gradient text-neutral-900 font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-amber-900/30"
              >
                <MessageCircle size={16} />
                Daftar via WhatsApp
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Program 2: Invest Class */}
          <div className="relative group glass rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400" />

            <div className="p-8 flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                  <GraduationCap size={22} className="text-neutral-900" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-1">
                    Sedang Dibuka
                  </span>
                  <h3 className="text-white font-display font-bold text-xl leading-snug">
                    Invest Class
                  </h3>
                </div>
              </div>

              {/* Date badge */}
              <div className="flex items-center gap-2 mb-5 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <Clock size={15} className="text-amber-400 flex-shrink-0" />
                <span className="text-amber-300 text-sm font-semibold">27 – 30 Juli 2026</span>
              </div>

              {/* Benefits */}
              <div className="mb-6 flex-1">
                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Yang Akan Kamu Dapatkan</p>
                <ul className="space-y-2">
                  {investClassBenefits.map((b) => (
                    <li key={b} className="flex gap-2.5 items-start">
                      <Check size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-300 text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-4 mb-6">
                <div className="flex items-end gap-3">
                  <span className="text-neutral-500 text-sm line-through">Rp149.000</span>
                </div>
                <div className="text-amber-400 font-display font-bold text-3xl mt-1">Rp99.000</div>
                <p className="text-neutral-500 text-xs mt-1">*Untuk 10 orang tercepat</p>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full flex items-center justify-center gap-2 py-3.5 rounded-xl gold-gradient text-neutral-900 font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-amber-900/30"
              >
                <MessageCircle size={16} />
                Daftar via WhatsApp
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-10 glass rounded-xl p-6 border border-amber-500/20 text-center">
          <p className="text-neutral-300 text-sm mb-3">
            Ada pertanyaan tentang program kami? Tim kami siap membantu.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors"
          >
            <MessageCircle size={15} />
            Hubungi kami di WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
