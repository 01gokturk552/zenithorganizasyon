"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Upload, CheckCircle, User, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const departments = [
  { id: "pr", label: "PR Departmanı" },
  { id: "saha", label: "Saha Departmanı" },
  { id: "press", label: "Press Departmanı" },
  { id: "guvenlik", label: "Güvenlik Departmanı" },
  { id: "ik", label: "İnsan Kaynakları" },
  { id: "finans", label: "Finans Departmanı" },
  { id: "it", label: "IT Departmanı" },
];

export default function BasvuruPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    ad: "", soyad: "", yas: "", sehir: "", telefon: "",
    email: "", discord: "", deneyim: "", departman: "", cv: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <h2 className="text-3xl font-black text-[#0f1f4b] mb-4">Başvurunuz Alındı!</h2>
            <p className="text-[#0f1f4b]/60 mb-8">
              Başvurunuz başarıyla iletildi. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#0f1f4b]/5 text-[#0f1f4b] px-4 py-2 rounded-full text-sm font-semibold">
              Durum: Beklemede
            </div>
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
            Başvuru Sistemi
          </div>
          <h1 className="text-5xl font-black mb-4">Zenith Ekibine Katıl</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Profesyonel ekibimizin bir parçası olmak için başvuru formunu doldurun.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#0f1f4b]/10 shadow-xl overflow-hidden">
            <div className="bg-[#0f1f4b] px-8 py-6">
              <h2 className="text-white font-black text-xl">Genel Başvuru Formu</h2>
              <p className="text-white/60 text-sm mt-1">Tüm alanları eksiksiz doldurun.</p>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Kişisel Bilgiler */}
              <div>
                <h3 className="font-bold text-[#0f1f4b] mb-4 flex items-center gap-2">
                  <User size={18} /> Kişisel Bilgiler
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Ad *</label>
                    <input
                      required
                      type="text"
                      value={form.ad}
                      onChange={(e) => setForm({ ...form, ad: e.target.value })}
                      className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Soyad *</label>
                    <input
                      required
                      type="text"
                      value={form.soyad}
                      onChange={(e) => setForm({ ...form, soyad: e.target.value })}
                      className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                      placeholder="Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Yaş *</label>
                    <input
                      required
                      type="number"
                      min="16"
                      max="65"
                      value={form.yas}
                      onChange={(e) => setForm({ ...form, yas: e.target.value })}
                      className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                      placeholder="Yaşınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2 flex items-center gap-1">
                      <MapPin size={14} /> Şehir *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.sehir}
                      onChange={(e) => setForm({ ...form, sehir: e.target.value })}
                      className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                      placeholder="Şehriniz"
                    />
                  </div>
                </div>
              </div>

              {/* İletişim */}
              <div>
                <h3 className="font-bold text-[#0f1f4b] mb-4 flex items-center gap-2">
                  <Phone size={18} /> İletişim Bilgileri
                </h3>
                <div className="space-y-4">
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
                  <div>
                    <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2 flex items-center gap-1">
                      <Mail size={14} /> E-posta *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Discord Kullanıcı Adı</label>
                    <input
                      type="text"
                      value={form.discord}
                      onChange={(e) => setForm({ ...form, discord: e.target.value })}
                      className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                      placeholder="kullanıcıadı#0000"
                    />
                  </div>
                </div>
              </div>

              {/* Deneyim */}
              <div>
                <h3 className="font-bold text-[#0f1f4b] mb-4 flex items-center gap-2">
                  <MessageSquare size={18} /> Deneyim
                </h3>
                <textarea
                  value={form.deneyim}
                  onChange={(e) => setForm({ ...form, deneyim: e.target.value })}
                  rows={4}
                  className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors resize-none"
                  placeholder="İlgili deneyimlerinizi, yeteneklerinizi ve neden Zenith&apos;e katılmak istediğinizi anlatın..."
                />
              </div>

              {/* Departman Seçimi */}
              <div>
                <h3 className="font-bold text-[#0f1f4b] mb-4">Başvurmak İstediğiniz Departman *</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      type="button"
                      onClick={() => setForm({ ...form, departman: dept.id })}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold border-2 transition-all text-left ${
                        form.departman === dept.id
                          ? "bg-[#0f1f4b] text-white border-[#0f1f4b]"
                          : "border-[#0f1f4b]/20 text-[#0f1f4b] hover:border-[#0f1f4b]"
                      }`}
                    >
                      {dept.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CV Yükleme */}
              <div>
                <h3 className="font-bold text-[#0f1f4b] mb-4 flex items-center gap-2">
                  <Upload size={18} /> CV Yükleme
                </h3>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#0f1f4b]/30 rounded-xl cursor-pointer hover:border-[#0f1f4b] hover:bg-[#0f1f4b]/2 transition-all">
                  <div className="flex flex-col items-center justify-center">
                    <Upload size={24} className="text-[#0f1f4b]/40 mb-2" />
                    <p className="text-sm text-[#0f1f4b]/60 font-medium">
                      {form.cv ? form.cv.name : "CV dosyanızı sürükleyin veya tıklayın"}
                    </p>
                    <p className="text-xs text-[#0f1f4b]/40 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setForm({ ...form, cv: e.target.files?.[0] || null })}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0f1f4b] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1a3278] transition-all"
              >
                Başvuruyu Gönder
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
