import { MapPin, Mail, Instagram, MessageCircle, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'Gagal mengirim pesan.');
      }

      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Hubungi Kami</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Mari Terhubung
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-6" />
          <p className="text-neutral-400 max-w-xl mx-auto text-base leading-relaxed">
            Tertarik bergabung atau ingin tahu lebih lanjut? Hubungi kami dan mulai perjalanan investasimu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="font-display text-xl font-semibold text-white mb-6">Informasi Kontak</h3>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-neutral-900" />
                  </div>
                  <div>
                    <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">Lokasi</div>
                    <p className="text-neutral-300 text-sm">Kabupaten Bandung, Provinsi Jawa Barat, Indonesia</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-neutral-900" />
                  </div>
                  <div>
                    <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">Email</div>
                    <a
                      href="mailto:ngertiinvestasi.com@gmail.com"
                      className="text-neutral-300 text-sm hover:text-amber-400 transition-colors"
                    >
                      ngertiinvestasi.com@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                    <Instagram size={16} className="text-neutral-900" />
                  </div>
                  <div>
                    <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">Instagram</div>
                    <p className="text-neutral-300 text-sm">@ngertiinvestasi.id</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={16} className="text-neutral-900" />
                  </div>
                  <div>
                    <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/6289676692578"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-300 text-sm hover:text-amber-400 transition-colors"
                    >
                      089676692578
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-amber-500/5 border border-amber-500/15 text-center">
                <p className="text-neutral-400 text-xs">
                  Kami membuka kesempatan untuk karyawan, magang, volunteer, dan ambassador.
                  Hubungi kami untuk informasi lebih lanjut.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold text-white mb-6">Kirim Pesan</h3>

            {sent ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <Send size={20} className="text-neutral-900" />
                </div>
                <h4 className="text-white font-semibold mb-2">Pesan Terkirim!</h4>
                <p className="text-neutral-400 text-sm">Terima kasih! Kami akan segera menghubungi Anda.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs text-neutral-400 font-medium mb-2 uppercase tracking-wider">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/60 border border-neutral-700 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-400 font-medium mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/60 border border-neutral-700 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    placeholder="email@contoh.com"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-400 font-medium mb-2 uppercase tracking-wider">Pesan</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/60 border border-neutral-700 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-xs">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl gold-gradient text-neutral-900 font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-amber-900/30 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <Send size={15} />
                  )}
                  {loading ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
