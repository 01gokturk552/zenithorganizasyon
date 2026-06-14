"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function IletisimPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ ad: "", email: "", konu: "", mesaj: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      <section className="bg-[#0f1f4b] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            İletişim
          </div>
          <h1 className="text-5xl font-black mb-6">Bizimle İletişime Geçin</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Sorularınız, teklif talepleriniz veya iş birliği teklifleriniz için bize yazın.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          {/* İletişim Bilgileri */}
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Adres", content: "İstanbul, Türkiye" },
              { icon: Phone, title: "Telefon", content: "+90 (XXX) XXX XX XX" },
              { icon: Mail, title: "E-posta", content: "info@zenithorganizasyon.com" },
              { icon: Clock, title: "Çalışma Saatleri", content: "Pzt-Cuma: 09:00 - 18:00" },
            ].map((info) => (
              <div key={info.title} className="bg-white border border-[#0f1f4b]/10 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0f1f4b] rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0f1f4b] mb-1">{info.title}</h3>
                  <p className="text-[#0f1f4b]/60 text-sm">{info.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* İletişim Formu */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white border border-[#0f1f4b]/10 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-[#0f1f4b] mb-3">Mesajınız İletildi!</h3>
                <p className="text-[#0f1f4b]/60">En kısa sürede sizinle iletişime geçeceğiz.</p>
              </div>
            ) : (
              <div className="bg-white border border-[#0f1f4b]/10 rounded-3xl overflow-hidden">
                <div className="bg-[#0f1f4b] px-8 py-6">
                  <h2 className="text-white font-black text-xl">Mesaj Gönderin</h2>
                </div>
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Ad Soyad *</label>
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
                    <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Konu *</label>
                    <input
                      required
                      type="text"
                      value={form.konu}
                      onChange={(e) => setForm({ ...form, konu: e.target.value })}
                      className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors"
                      placeholder="Mesajınızın konusu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f1f4b]/70 mb-2">Mesaj *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.mesaj}
                      onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                      className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm text-[#0f1f4b] focus:outline-none focus:border-[#0f1f4b] transition-colors resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#0f1f4b] text-white py-4 rounded-xl font-bold hover:bg-[#1a3278] transition-all"
                  >
                    <Send size={18} /> Gönder
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
