import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MapPin, Users, Star } from "lucide-react";

const completedEvents = [
  { name: "Mega Fest 2024", date: "Mart 2024", location: "İstanbul", attendees: "5.000+", category: "Festival" },
  { name: "Kurumsal Gala Gecesi", date: "Şubat 2024", location: "Ankara", attendees: "800", category: "Gala" },
  { name: "Teknoloji Zirvesi", date: "Ocak 2024", location: "İzmir", attendees: "2.000", category: "Konferans" },
  { name: "Yılbaşı Organizasyonu", date: "Aralık 2023", location: "İstanbul", attendees: "1.200", category: "Sosyal" },
  { name: "Açık Hava Müzik Festivali", date: "Ekim 2023", location: "Bursa", attendees: "8.000+", category: "Festival" },
  { name: "Sanat & Tasarım Sergisi", date: "Eylül 2023", location: "İstanbul", attendees: "3.000", category: "Sergi" },
  { name: "Liderlik Zirvesi", date: "Ağustos 2023", location: "Ankara", attendees: "500", category: "Zirve" },
  { name: "Kurumsal Eğitim Kampı", date: "Temmuz 2023", location: "Antalya", attendees: "350", category: "Çalıştay" },
  { name: "Spor Organizasyonu", date: "Haziran 2023", location: "İstanbul", attendees: "2.500", category: "Spor" },
];

const categoryColors: Record<string, string> = {
  "Festival": "bg-purple-50 text-purple-700 border-purple-200",
  "Gala": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Konferans": "bg-blue-50 text-blue-700 border-blue-200",
  "Sosyal": "bg-green-50 text-green-700 border-green-200",
  "Sergi": "bg-pink-50 text-pink-700 border-pink-200",
  "Zirve": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Çalıştay": "bg-orange-50 text-orange-700 border-orange-200",
  "Spor": "bg-teal-50 text-teal-700 border-teal-200",
};

const testimonials = [
  {
    quote: "Zenith Organizasyon ekibi ile çalışmak gerçekten bir zevkti. Her detay titizlikle planlandı, hiçbir aksaklık yaşamadık.",
    author: "Ahmet Yılmaz",
    role: "Etkinlik Direktörü",
    company: "XYZ Şirketi",
  },
  {
    quote: "Profesyonellik ve güvenilirlik konusunda sektörün en iyisi. PR'dan güvenliğe her şey mükemmeldi. Kesinlikle tavsiye ediyoruz.",
    author: "Ayşe Kara",
    role: "Genel Müdür Yardımcısı",
    company: "ABC Holding",
  },
  {
    quote: "5000 kişilik festivalimiz kusursuz geçti. Saha ekibi muhteşemdi, press departmanı harika fotoğraflar çekti. Teşekkürler.",
    author: "Mehmet Demir",
    role: "Etkinlik Organizatörü",
    company: "Mega Events",
  },
];

const partners = [
  { name: "Şirket A", type: "İş Ortağı" },
  { name: "Şirket B", type: "Sponsor" },
  { name: "Şirket C", type: "Medya Ortağı" },
  { name: "Şirket D", type: "İş Ortağı" },
  { name: "Şirket E", type: "Sponsor" },
  { name: "Şirket F", type: "Medya Ortağı" },
  { name: "Şirket G", type: "İş Ortağı" },
  { name: "Şirket H", type: "Sponsor" },
];

export default function ReferanslarPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="relative bg-[#0d1b3e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e3373] rounded-full blur-[120px] opacity-25 translate-x-1/3 -translate-y-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">Referanslar</p>
          <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-6 max-w-3xl">
            Başarı<br />
            <span className="text-white/35">Hikayelerimiz</span>
          </h1>
          <div className="flex flex-wrap gap-8 mt-8">
            {[
              { value: "500+", label: "Tamamlanan Etkinlik" },
              { value: "50K+", label: "Toplam Katılımcı" },
              { value: "30+", label: "İş Ortağı" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-white">{s.value}</div>
                <div className="text-white/40 text-sm mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-10 bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 right-0" />
      </section>

      {/* Tamamlanan Organizasyonlar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold text-[#0d1b3e]/35 uppercase tracking-widest mb-3">Portföy</p>
            <h2 className="text-3xl font-black text-[#0d1b3e]">Tamamlanan Organizasyonlar</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedEvents.map((event, i) => (
              <div
                key={event.name}
                className={`rounded-2xl border p-6 hover:shadow-md transition-all ${
                  i === 0 ? "bg-[#0d1b3e] border-[#0d1b3e] text-white" : "bg-white border-[#e2e7f0] hover:border-[#0d1b3e]/20"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                    i === 0 ? "bg-white/10 text-white/60 border-white/10" : categoryColors[event.category] || "bg-gray-50 text-gray-600 border-gray-200"
                  }`}>
                    {event.category}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={10} className={i === 0 ? "fill-white/60 text-white/60" : "fill-yellow-400 text-yellow-400"} />
                    ))}
                  </div>
                </div>
                <h3 className={`font-bold text-lg mb-4 ${i === 0 ? "text-white" : "text-[#0d1b3e]"}`}>{event.name}</h3>
                <div className="space-y-2">
                  <div className={`flex items-center gap-2 text-sm ${i === 0 ? "text-white/50" : "text-[#0d1b3e]/50"}`}>
                    <MapPin size={13} /> {event.location} · {event.date}
                  </div>
                  <div className={`flex items-center gap-2 text-sm ${i === 0 ? "text-white/50" : "text-[#0d1b3e]/50"}`}>
                    <Users size={13} /> {event.attendees} katılımcı
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Görüşler */}
      <section className="py-20 bg-[#f8f9fc] border-y border-[#e2e7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#0d1b3e]/35 uppercase tracking-widest mb-3">Müşteri Görüşleri</p>
            <h2 className="text-3xl font-black text-[#0d1b3e]">Ne Diyorlar?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white border border-[#e2e7f0] rounded-2xl p-8 hover:shadow-md transition-all">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[#0d1b3e]/65 text-[15px] leading-[1.85] mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0d1b3e] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-sm">{t.author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#0d1b3e] text-sm">{t.author}</div>
                    <div className="text-[#0d1b3e]/40 text-xs">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İş Ortakları */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#0d1b3e]/35 uppercase tracking-widest mb-3">Ortaklıklar</p>
            <h2 className="text-3xl font-black text-[#0d1b3e]">İş Ortaklarımız & Sponsorlarımız</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((p) => (
              <div key={p.name} className="border border-[#e2e7f0] rounded-2xl p-6 text-center hover:border-[#0d1b3e]/20 hover:shadow-sm transition-all">
                <div className="w-14 h-14 bg-[#0d1b3e]/5 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-[#0d1b3e]/40 font-black text-xl">{p.name.charAt(p.name.length - 1)}</span>
                </div>
                <div className="font-bold text-[#0d1b3e] text-sm mb-1">{p.name}</div>
                <div className="text-[#0d1b3e]/35 text-xs">{p.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d1b3e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Siz de Referanslarımız Arasında Yer Alın</h2>
          <p className="text-white/50 mb-8 text-[15px]">Etkinliğiniz için hemen teklif alın.</p>
          <Link href="/teklif" className="inline-flex items-center gap-2 bg-white text-[#0d1b3e] px-7 py-3.5 rounded-xl font-bold hover:bg-white/90 transition-all">
            Teklif Al
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
