"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Send } from "lucide-react";

const eventTypes = ["Konser", "Festival", "Kurumsal Etkinlik", "Gala", "Seminer", "Fuar", "Diğer"];
const services = ["PR Hizmetleri", "Saha Operasyonları", "Press Hizmetleri", "Güvenlik", "IT Çözümleri", "Finans Danışmanlığı"];

export default function TeklifPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firma: "", ad: "", email: "", telefon: "",
    etkinlikTipi: "", tarih: "", katilimci: "",
    sehir: "", seciliHizmetler: [] as string[], notlar: "",
  });

  const toggleService = (s: string) => {
    setForm((f) => ({
      ...f,
      seciliHizmetler: f.seciliHizmetler.includes(s)
        ? f.seciliHizmetler.filter((x) => x !== s)
        : [...f.seciliHizmetler, s],
    }));
  };

  if (submitted) {
    return (
      <main>
        <Navbar />
        <section className="min-h-[60vh] flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-black text-[#0f1f4b] mb-4">Teklif Talebiniz Alındı!</h2>
            <p className="text-[#0f1f4b]/60 mb-4">
              Ekibimiz 24 saat içinde sizinle iletişime geçecektir.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <section className="bg-[#0f1f4b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Teklif Al
          </div>
          <h1 className="text-5xl font-black mb-4">Ücretsiz Teklif Alın</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Etkinliğinizin detaylarını paylaşın, size özel fiyat teklifi hazırlayalım.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#0f1f4b]/10 shadow-xl overflow-hidden">
            <div className="bg-[#0f1f4b] px-8 py-6">
              <h2 className="text-white font-black text-xl">Teklif Talep Formu</h2>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="p-8 space-y-6">

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Firma / Kurum Adı</label>
                  <input
                    type="text"
                    value={form.firma}
                    onChange={(e) => setForm({ ...form, firma: e.target.value })}
                    className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                    placeholder="Firma adı"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Yetkili Ad Soyad *</label>
                  <input
                    required
                    type="text"
                    value={form.ad}
                    onChange={(e) => setForm({ ...form, ad: e.target.value })}
                    className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Telefon *</label>
                  <input
                    required
                    type="tel"
                    value={form.telefon}
                    onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                    className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">E-posta *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                    placeholder="email@ornek.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-3">Etkinlik Tipi</label>
                <div className="flex flex-wrap gap-2">
                  {eventTypes.map((et) => (
                    <button
                      key={et}
                      type="button"
                      onClick={() => setForm({ ...form, etkinlikTipi: et })}
                      className={`px-4 py-2 rounded-xl text-sm font-medium border-2 transition-all ${
                        form.etkinlikTipi === et
                          ? "bg-[#0f1f4b] text-white border-[#0f1f4b]"
                          : "border-[#0f1f4b]/20 text-[#0f1f4b] hover:border-[#0f1f4b]"
                      }`}
                    >
                      {et}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Etkinlik Tarihi</label>
                  <input
                    type="date"
                    value={form.tarih}
                    onChange={(e) => setForm({ ...form, tarih: e.target.value })}
                    className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Tahmini Katılımcı Sayısı</label>
                  <input
                    type="number"
                    value={form.katilimci}
                    onChange={(e) => setForm({ ...form, katilimci: e.target.value })}
                    className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                    placeholder="Kişi sayısı"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Etkinlik Şehri</label>
                  <input
                    type="text"
                    value={form.sehir}
                    onChange={(e) => setForm({ ...form, sehir: e.target.value })}
                    className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                    placeholder="Etkinlik şehri"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-3">İhtiyaç Duyulan Hizmetler</label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleService(s)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium border-2 transition-all text-left ${
                        form.seciliHizmetler.includes(s)
                          ? "bg-[#0f1f4b] text-white border-[#0f1f4b]"
                          : "border-[#0f1f4b]/20 text-[#0f1f4b] hover:border-[#0f1f4b]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Ek Notlar</label>
                <textarea
                  rows={3}
                  value={form.notlar}
                  onChange={(e) => setForm({ ...form, notlar: e.target.value })}
                  className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors resize-none"
                  placeholder="Ek bilgi veya özel isteklerinizi belirtin..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#0f1f4b] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1a3278] transition-all"
              >
                <Send size={18} /> Teklif Talep Et
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
