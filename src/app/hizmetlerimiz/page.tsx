import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Megaphone, Users, Camera, Shield, Briefcase, DollarSign, Monitor, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    code: "01",
    title: "PR Hizmetleri",
    subtitle: "Halkla İlişkiler & Kurumsal İletişim",
    desc: "Kurumsal iletişim stratejileri, marka yönetimi ve medya ilişkileri konularında kapsamlı PR hizmetleri sunuyoruz.",
    features: ["Kurumsal iletişim stratejisi", "Medya ilişkileri yönetimi", "Kriz iletişimi", "Sosyal medya yönetimi", "Marka konumlandırma"],
    href: "/hizmetlerimiz/pr",
  },
  {
    icon: Users,
    code: "02",
    title: "Saha Operasyonları",
    subtitle: "Alan Yönetimi & Koordinasyon",
    desc: "Etkinlik alanı yönetimi, koordinasyon ve operasyonel süreçlerin profesyonel şekilde yürütülmesi.",
    features: ["Alan yönetimi & planlaması", "Ekip koordinasyonu", "Lojistik destek", "Katılımcı yönlendirme", "Operasyonel planlama"],
    href: "/hizmetlerimiz/saha",
  },
  {
    icon: Camera,
    code: "03",
    title: "Press Hizmetleri",
    subtitle: "Basın & Medya Yönetimi",
    desc: "Fotoğraf ve video prodüksiyonu, medya yönetimi ve dijital içerik üretimi hizmetleri.",
    features: ["Profesyonel fotoğrafçılık", "Video prodüksiyon", "Canlı yayın", "Medya akreditasyonu", "İçerik arşivleme"],
    href: "/hizmetlerimiz/press",
  },
  {
    icon: Shield,
    code: "04",
    title: "Güvenlik Hizmetleri",
    subtitle: "Risk Yönetimi & Alan Güvenliği",
    desc: "Risk analizi, alan kontrolü ve kapsamlı güvenlik protokolleri ile etkinlik güvenliğini sağlıyoruz.",
    features: ["Risk değerlendirmesi", "Alan güvenliği", "VIP koruma", "Acil eylem planları", "Giriş kontrol"],
    href: "/hizmetlerimiz/guvenlik",
  },
  {
    icon: Briefcase,
    code: "05",
    title: "İnsan Kaynakları",
    subtitle: "Personel Yönetimi & Ekip Oluşturma",
    desc: "Personel temin, eğitim ve yönetim süreçlerinde kapsamlı insan kaynakları çözümleri sunuyoruz.",
    features: ["Personel temin", "Oryantasyon", "Performans değerlendirme", "Ekip oluşturma", "Mülakat süreçleri"],
    href: "/hizmetlerimiz/ik",
  },
  {
    icon: DollarSign,
    code: "06",
    title: "Finans Hizmetleri",
    subtitle: "Bütçe & Sponsorluk Yönetimi",
    desc: "Bütçe planlama, sponsorluk yönetimi ve finansal raporlama hizmetleri.",
    features: ["Bütçe yönetimi", "Sponsorluk takibi", "Mali raporlama", "Finansal planlama", "Sponsorluk dosyaları"],
    href: "/hizmetlerimiz/finans",
  },
  {
    icon: Monitor,
    code: "07",
    title: "IT & Dijital Çözümler",
    subtitle: "Teknoloji & Dijital Altyapı",
    desc: "Web geliştirme, sistem yönetimi ve teknik destek ile dijital dönüşümünüzü sağlıyoruz.",
    features: ["Web geliştirme", "Sistem entegrasyonu", "Teknik destek", "Dijital altyapı", "Siber güvenlik"],
    href: "/hizmetlerimiz/it",
  },
];

export default function HizmetlerimizPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0d1b3e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e3373] rounded-full blur-[120px] opacity-25 translate-x-1/3 -translate-y-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">Hizmetlerimiz</p>
          <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-6 max-w-3xl">
            Tek Çatı Altında<br />
            <span className="text-white/35">Tam Kapsam</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            7 uzman departmanımızla etkinliğinizin planlama aşamasından sonuna kadar her detayı
            titizlikle yönetiyoruz.
          </p>
        </div>
        <div className="h-10 bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 right-0" />
      </section>

      {/* Hizmetler Listesi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {services.map((service, i) => (
            <div
              key={service.code}
              className={`group rounded-3xl border transition-all hover:shadow-xl ${
                i % 3 === 0
                  ? "bg-[#0d1b3e] border-[#0d1b3e] text-white"
                  : "bg-white border-[#e2e7f0] hover:border-[#0d1b3e]/20"
              }`}
            >
              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-5 gap-8 items-start">
                  {/* Left */}
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                        i % 3 === 0 ? "bg-white/12" : "bg-[#0d1b3e]/7"
                      }`}>
                        <service.icon size={22} className={i % 3 === 0 ? "text-white" : "text-[#0d1b3e]"} />
                      </div>
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-widest ${i % 3 === 0 ? "text-white/30" : "text-[#0d1b3e]/30"}`}>
                          {service.code}
                        </span>
                        <h2 className={`text-2xl font-black ${i % 3 === 0 ? "text-white" : "text-[#0d1b3e]"}`}>
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <p className={`text-sm font-semibold mb-3 ${i % 3 === 0 ? "text-white/40" : "text-[#0d1b3e]/40"}`}>
                      {service.subtitle}
                    </p>
                    <p className={`leading-relaxed mb-6 text-[15px] ${i % 3 === 0 ? "text-white/60" : "text-[#0d1b3e]/60"}`}>
                      {service.desc}
                    </p>
                    <Link
                      href={service.href}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                        i % 3 === 0
                          ? "bg-white text-[#0d1b3e] hover:bg-white/90"
                          : "bg-[#0d1b3e] text-white hover:bg-[#152552]"
                      }`}
                    >
                      Detaylı İncele <ArrowUpRight size={15} />
                    </Link>
                  </div>

                  {/* Right - Features */}
                  <div className="md:col-span-2">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${i % 3 === 0 ? "text-white/25" : "text-[#0d1b3e]/25"}`}>
                      Kapsam
                    </p>
                    <ul className="space-y-2.5">
                      {service.features.map((f) => (
                        <li key={f} className={`flex items-center gap-3 text-sm ${i % 3 === 0 ? "text-white/65" : "text-[#0d1b3e]/65"}`}>
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i % 3 === 0 ? "bg-white/40" : "bg-[#0d1b3e]/30"}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f8f9fc] border-t border-[#e2e7f0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#0d1b3e] mb-4">Hizmet Almak İster misiniz?</h2>
          <p className="text-[#0d1b3e]/50 mb-8 text-[15px]">
            Etkinliğiniz için ücretsiz teklif alın veya ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/teklif" className="flex items-center gap-2 bg-[#0d1b3e] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#152552] transition-all">
              Teklif Al <ArrowUpRight size={15} />
            </Link>
            <Link href="/iletisim" className="flex items-center gap-2 border border-[#0d1b3e]/15 text-[#0d1b3e] px-6 py-3 rounded-xl font-semibold text-sm hover:border-[#0d1b3e] transition-all">
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
