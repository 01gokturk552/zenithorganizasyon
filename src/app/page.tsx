import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight, Megaphone, Users, Camera, Shield,
  Briefcase, DollarSign, Monitor, CheckCircle,
  ChevronRight, ArrowUpRight
} from "lucide-react";
import { HeroStats, StatsBand } from "@/components/SiteStats";

const services = [
  { icon: Megaphone, title: "PR", label: "Halkla İlişkiler", desc: "Kurumsal iletişim stratejisi ve medya yönetimi.", href: "/hizmetlerimiz/pr" },
  { icon: Users, title: "Saha", label: "Operasyonlar", desc: "Alan yönetimi, koordinasyon ve lojistik destek.", href: "/hizmetlerimiz/saha" },
  { icon: Camera, title: "Press", label: "Basın & Medya", desc: "Fotoğraf, video prodüksiyon ve medya yönetimi.", href: "/hizmetlerimiz/press" },
  { icon: Shield, title: "Güvenlik", label: "Risk Yönetimi", desc: "Alan kontrolü, risk analizi ve güvenlik protokolleri.", href: "/hizmetlerimiz/guvenlik" },
  { icon: Briefcase, title: "İK", label: "İnsan Kaynakları", desc: "Personel temin, eğitim ve ekip yönetimi.", href: "/hizmetlerimiz/ik" },
  { icon: DollarSign, title: "Finans", label: "Finansal Yönetim", desc: "Bütçe planlaması ve sponsorluk süreçleri.", href: "/hizmetlerimiz/finans" },
  { icon: Monitor, title: "IT", label: "Dijital Çözümler", desc: "Web geliştirme, sistem yönetimi ve teknik destek.", href: "/hizmetlerimiz/it" },
];

const whyUs = [
  "Profesyonel ve eğitimli ekipler",
  "Güçlü operasyonel koordinasyon",
  "Kurumsal çalışma disiplini",
  "Hızlı ve etkili iletişim",
  "Modern teknolojik altyapı",
  "Şeffaf ve sürdürülebilir yönetim anlayışı",
  "Uçtan uca organizasyon desteği",
];


export default function HomePage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-[#0d1b3e] text-white overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Glow accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1e3373] rounded-full blur-[120px] opacity-40 translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#152552] rounded-full blur-[100px] opacity-50 -translate-x-1/3 translate-y-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-white/8 border border-white/15 rounded-full px-4 py-2 mb-10">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-white/80 font-medium">Profesyonel Organizasyon Çözümleri</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-6">
                Etkinliğinizi
                <br />
                <span className="text-white/35">Zirveye</span>
                <br />
                <span>Taşıyoruz.</span>
              </h1>
              <p className="text-white/55 text-lg leading-relaxed max-w-lg mb-10">
                Zenith Organizasyon, etkinlik ve organizasyon sektöründe güvenilirliği, profesyonelliği
                ve yenilikçi yaklaşımıyla öne çıkan lider çözüm ortağınızdır.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/teklif"
                  className="flex items-center gap-2 bg-white text-[#0d1b3e] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-white/92 shadow-lg hover:shadow-xl transition-all"
                >
                  Teklif Al <ArrowRight size={16} />
                </Link>
                <Link
                  href="/hakkimizda"
                  className="flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  Bizi Tanıyın
                </Link>
              </div>
            </div>

            {/* Stats grid — Admin panelinden yönetilir */}
            <HeroStats />
          </div>
        </div>

        {/* Bottom fade */}
        <div className="h-12 bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 right-0" />
      </section>

      {/* ── HİZMETLER ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-bold text-[#0d1b3e]/40 uppercase tracking-widest mb-3">Hizmetlerimiz</p>
              <h2 className="text-4xl font-black text-[#0d1b3e] leading-tight">
                7 Departmanda<br />Tam Kapsam
              </h2>
            </div>
            <Link href="/hizmetlerimiz" className="flex items-center gap-2 text-sm font-semibold text-[#0d1b3e]/60 hover:text-[#0d1b3e] transition-colors group">
              Tüm Hizmetler <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className={`group p-6 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                  i === 0
                    ? "bg-[#0d1b3e] text-white border-[#0d1b3e] lg:row-span-2 flex flex-col justify-between"
                    : "bg-white border-[#e2e7f0] hover:border-[#0d1b3e]/30"
                }`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    i === 0 ? "bg-white/10" : "bg-[#0d1b3e]/5 group-hover:bg-[#0d1b3e] transition-colors"
                  }`}>
                    <s.icon size={20} className={i === 0 ? "text-white" : "text-[#0d1b3e] group-hover:text-white transition-colors"} />
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${i === 0 ? "text-white/40" : "text-[#0d1b3e]/40"}`}>
                    {s.title}
                  </div>
                  <h3 className={`font-bold text-lg mb-2 ${i === 0 ? "text-white" : "text-[#0d1b3e]"}`}>{s.label}</h3>
                  <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/55" : "text-[#0d1b3e]/55"}`}>{s.desc}</p>
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold mt-5 ${i === 0 ? "text-white/70 group-hover:text-white" : "text-[#0d1b3e]/50 group-hover:text-[#0d1b3e]"} transition-colors`}>
                  İncele <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEDEN ZENİTH ── */}
      <section className="py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs font-bold text-[#0d1b3e]/40 uppercase tracking-widest mb-3">Neden Zenith?</p>
              <h2 className="text-4xl font-black text-[#0d1b3e] mb-6 leading-tight">
                Yalnızca personel değil;<br />güven, kalite ve çözüm
              </h2>
              <p className="text-[#0d1b3e]/60 leading-relaxed mb-8 text-base">
                Sektördeki deneyimimiz, güçlü organizasyon yapımız ve çözüm odaklı yaklaşımımızla
                etkinliklerinize yalnızca personel değil, profesyonel bir operasyon desteği sunuyoruz.
                PR, Operasyon, Basın ve Medya, Güvenlik, İnsan Kaynakları, Finans ve Bilgi Teknolojileri
                alanlarında oluşturduğumuz uzman ekiplerimiz sayesinde ihtiyaç duyduğunuz tüm
                süreçleri tek çatı altında yönetiyoruz.
              </p>
              <p className="text-[#0d1b3e]/60 leading-relaxed mb-10 text-sm italic border-l-3 border-[#0d1b3e]/20 pl-4">
                &ldquo;Çünkü biz, organizasyonlara personel değil; güven, kalite ve çözüm sunuyoruz.&rdquo;
              </p>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 bg-[#0d1b3e] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#152552] transition-all shadow-sm"
              >
                Daha Fazla Bilgi <ArrowRight size={15} />
              </Link>
            </div>

            <div className="space-y-3">
              {whyUs.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-white border border-[#e2e7f0] rounded-xl px-5 py-4 hover:border-[#0d1b3e]/30 hover:shadow-sm transition-all"
                >
                  <div className="w-7 h-7 bg-[#0d1b3e] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-[#0d1b3e] font-medium text-sm">{item}</span>
                  <span className="ml-auto text-[#0d1b3e]/20 text-xs font-bold">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── İSTATİSTİKLER ── */}
      <section className="py-20 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBand />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#f8f9fc] border-t border-[#e2e7f0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold text-[#0d1b3e]/35 uppercase tracking-widest mb-5">İletişime Geçin</p>
          <h2 className="text-4xl font-black text-[#0d1b3e] mb-5 leading-tight">
            Etkinliğinizi Birlikte<br />Planlayalım
          </h2>
          <p className="text-[#0d1b3e]/55 mb-10 max-w-lg mx-auto leading-relaxed">
            Profesyonel ekibimiz etkinliğinizin planlama aşamasından sona kadar yanınızda.
            Ücretsiz teklif almak için hemen iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/teklif" className="flex items-center gap-2 bg-[#0d1b3e] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#152552] shadow-sm hover:shadow-lg transition-all">
              Teklif Al <ArrowRight size={17} />
            </Link>
            <Link href="/basvuru" className="flex items-center gap-2 border-2 border-[#0d1b3e]/15 text-[#0d1b3e] px-8 py-4 rounded-xl font-bold hover:border-[#0d1b3e] transition-all">
              Ekibe Katıl
            </Link>
            <Link href="/iletisim" className="flex items-center gap-2 text-[#0d1b3e]/60 hover:text-[#0d1b3e] px-6 py-4 rounded-xl font-semibold text-sm transition-colors">
              İletişim →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
