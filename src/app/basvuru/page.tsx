"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Upload, CheckCircle, User, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { addApplication } from "@/lib/applications";

const departments = [
  { id: "pr", label: "PR DepartmanÄ±" },
  { id: "saha", label: "Saha DepartmanÄ±" },
  { id: "press", label: "Press DepartmanÄ±" },
  { id: "guvenlik", label: "GÃ¼venlik DepartmanÄ±" },
  { id: "ik", label: "Ä°nsan KaynaklarÄ±" },
  { id: "finans", label: "Finans DepartmanÄ±" },
  { id: "it", label: "IT DepartmanÄ±" },
];

export default function BasvuruPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    ad: "", soyad: "", yas: "", sehir: "", telefon: "",
    email: "", discord: "", deneyim: "", departman: "", cv: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addApplication({
      ad:       form.ad,
      soyad:    form.soyad,
      yas:      form.yas,
      sehir:    form.sehir,
      telefon:  form.telefon,
      email:    form.email,
      discord:  form.discord,
      deneyim:  form.deneyim,
      dept:     form.departman,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main>
        <Navbar />
        <section className="min-h-[60vh] flex items-center justify-center bg-[#f8f9fc]">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-black text-[#0d1b3e] mb-4">BaÅŸvurunuz AlÄ±ndÄ±!</h2>
            <p className="text-[#0d1b3e]/60 mb-8">
              BaÅŸvurunuz baÅŸarÄ±yla iletildi. Ekibimiz en kÄ±sa sÃ¼rede sizinle iletiÅŸime geÃ§ecektir.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#0d1b3e]/5 text-[#0d1b3e] px-4 py-2 rounded-full text-sm font-semibold">
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

      <section className="bg-[#0d1b3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            BaÅŸvuru Sistemi
          </div>
          <h1 className="text-5xl font-black mb-4">Zenith Ekibine KatÄ±l</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Profesyonel ekibimizin bir parÃ§asÄ± olmak iÃ§in baÅŸvuru formunu doldurun.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#0d1b3e]/10 shadow-xl overflow-hidden">
            <div className="bg-[#0d1b3e] px-8 py-6">
              <h2 className="text-white font-black text-xl">Genel BaÅŸvuru Formu</h2>
              <p className="text-white/60 text-sm mt-1">TÃ¼m alanlarÄ± eksiksiz doldurun.</p>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* KiÅŸisel Bilgiler */}
              <div>
                <h3 className="font-bold text-[#0d1b3e] mb-4 flex items-center gap-2">
                  <User size={18} /> KiÅŸisel Bilgiler
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0d1b3e]/70 mb-2">Ad *</label>
                    <input
                      required
                      type="text"
                      value={form.ad}
                      onChange={(e) => setForm({ ...form, ad: e.target.value })}
                      className="w-full border border-[#0d1b3e]/20 rounded-xl px-4 py-3 text-sm text-[#0d1b3e] focus:outline-none focus:border-[#0d1b3e] transition-colors"
                      placeholder="AdÄ±nÄ±z"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d1b3e]/70 mb-2">Soyad *</label>
                    <input
                      required
                      type="text"
                      value={form.soyad}
                      onChange={(e) => setForm({ ...form, soyad: e.target.value })}
                      className="w-full border border-[#0d1b3e]/20 rounded-xl px-4 py-3 text-sm text-[#0d1b3e] focus:outline-none focus:border-[#0d1b3e] transition-colors"
                      placeholder="SoyadÄ±nÄ±z"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d1b3e]/70 mb-2">YaÅŸ *</label>
                    <input
                      required
                      type="number"
                      min="16"
                      max="65"
                      value={form.yas}
                      onChange={(e) => setForm({ ...form, yas: e.target.value })}
                      className="w-full border border-[#0d1b3e]/20 rounded-xl px-4 py-3 text-sm text-[#0d1b3e] focus:outline-none focus:border-[#0d1b3e] transition-colors"
                      placeholder="YaÅŸÄ±nÄ±z"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d1b3e]/70 mb-2 flex items-center gap-1">
                      <MapPin size={14} /> Åehir *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.sehir}
                      onChange={(e) => setForm({ ...form, sehir: e.target.value })}
                      className="w-full border border-[#0d1b3e]/20 rounded-xl px-4 py-3 text-sm text-[#0d1b3e] focus:outline-none focus:border-[#0d1b3e] transition-colors"
                      placeholder="Åehriniz"
                    />
                  </div>
                </div>
              </div>

              {/* Ä°letiÅŸim */}
              <div>
                <h3 className="font-bold text-[#0d1b3e] mb-4 flex items-center gap-2">
                  <Phone size={18} /> Ä°letiÅŸim Bilgileri
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0d1b3e]/70 mb-2">Telefon *</label>
                    <input
                      required
                      type="tel"
                      value={form.telefon}
                      onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                      className="w-full border border-[#0d1b3e]/20 rounded-xl px-4 py-3 text-sm text-[#0d1b3e] focus:outline-none focus:border-[#0d1b3e] transition-colors"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d1b3e]/70 mb-2 flex items-center gap-1">
                      <Mail size={14} /> E-posta *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-[#0d1b3e]/20 rounded-xl px-4 py-3 text-sm text-[#0d1b3e] focus:outline-none focus:border-[#0d1b3e] transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d1b3e]/70 mb-2">Discord KullanÄ±cÄ± AdÄ±</label>
                    <input
                      type="text"
                      value={form.discord}
                      onChange={(e) => setForm({ ...form, discord: e.target.value })}
                      className="w-full border border-[#0d1b3e]/20 rounded-xl px-4 py-3 text-sm text-[#0d1b3e] focus:outline-none focus:border-[#0d1b3e] transition-colors"
                      placeholder="kullanÄ±cÄ±adÄ±#0000"
                    />
                  </div>
                </div>
              </div>

              {/* Deneyim */}
              <div>
                <h3 className="font-bold text-[#0d1b3e] mb-4 flex items-center gap-2">
                  <MessageSquare size={18} /> Deneyim
                </h3>
                <textarea
                  value={form.deneyim}
                  onChange={(e) => setForm({ ...form, deneyim: e.target.value })}
                  rows={4}
                  className="w-full border border-[#0d1b3e]/20 rounded-xl px-4 py-3 text-sm text-[#0d1b3e] focus:outline-none focus:border-[#0d1b3e] transition-colors resize-none"
                  placeholder="Ä°lgili deneyimlerinizi, yeteneklerinizi ve neden Zenith&apos;e katÄ±lmak istediÄŸinizi anlatÄ±n..."
                />
              </div>

              {/* Departman SeÃ§imi */}
              <div>
                <h3 className="font-bold text-[#0d1b3e] mb-4">BaÅŸvurmak Ä°stediÄŸiniz Departman *</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      type="button"
                      onClick={() => setForm({ ...form, departman: dept.id })}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold border-2 transition-all text-left ${
                        form.departman === dept.id
                          ? "bg-[#0d1b3e] text-white border-[#0d1b3e]"
                          : "border-[#0d1b3e]/20 text-[#0d1b3e] hover:border-[#0d1b3e]"
                      }`}
                    >
                      {dept.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CV YÃ¼kleme */}
              <div>
                <h3 className="font-bold text-[#0d1b3e] mb-4 flex items-center gap-2">
                  <Upload size={18} /> CV YÃ¼kleme
                </h3>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#0d1b3e]/30 rounded-xl cursor-pointer hover:border-[#0d1b3e] hover:bg-[#0d1b3e]/2 transition-all">
                  <div className="flex flex-col items-center justify-center">
                    <Upload size={24} className="text-[#0d1b3e]/40 mb-2" />
                    <p className="text-sm text-[#0d1b3e]/60 font-medium">
                      {form.cv ? form.cv.name : "CV dosyanÄ±zÄ± sÃ¼rÃ¼kleyin veya tÄ±klayÄ±n"}
                    </p>
                    <p className="text-xs text-[#0d1b3e]/40 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
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
                className="w-full bg-[#0d1b3e] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#152552] transition-all"
              >
                BaÅŸvuruyu GÃ¶nder
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
