import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { StatsBand } from "@/components/SiteStats";

const services = [
  {
    id: "pr",
    title: "Halkla İlişkiler",
    subtitle: "PR & Kurumsal İletişim",
    desc: "Kurumsal iletişim stratejisi, medya yönetimi ve marka bilinirliği süreçlerinde profesyonel destek.",
    href: "/hizmetlerimiz/pr",
    bg: "from-[#0a1628] to-[#0d1b3e]",
    accent: "#1e3373",
    num: "01",
  },
  {
    id: "saha",
    title: "Saha Operasyonları",
    subtitle: "Alan Yönetimi & Lojistik",
    desc: "Etkinlik alanı koordinasyonu, personel sevk ve operasyonel lojistik süreçlerin eksiksiz yönetimi.",
    href: "/hizmetlerimiz/saha",
    bg: "from-[#1a2a1a] to-[#243524]",
    accent: "#2d4a2d",
    num: "02",
  },
  {
    id: "press",
    title: "Press & Medya",
    subtitle: "Basın, Fotoğraf & Video",
    desc: "Profesyonel fotoğraf ve video prodüksiyon, basın bülteni ve medya ilişkileri yönetimi.",
    href: "/hizmetlerimiz/press",
    bg: "from-[#1a1020] to-[#2a1535]",
    accent: "#3d1f52",
    num: "03",
  },
  {
    id: "guvenlik",
    title: "Güvenlik",
    subtitle: "Risk Yönetimi & Alan Kontrolü",
    desc: "Alan kontrolü, risk analizi, akreditasyon ve kapsamlı güvenlik protokollerinin uygulanması.",
    href: "/hizmetlerimiz/guvenlik",
    bg: "from-[#0f0f0f] to-[#1a1a1a]",
    accent: "#2a2a2a",
    num: "04",
  },
  {
    id: "ik",
    title: "İnsan Kaynakları",
    subtitle: "Personel & Ekip Yönetimi",
    desc: "Nitelikli personel temini, eğitim programları ve etkinlik ekiplerinin profesyonel yönetimi.",
    href: "/hizmetlerimiz/ik",
    bg: "from-[#0d1a2a] to-[#122035]",
    accent: "#1a3050",
    num: "05",
  },
  {
    id: "it",
    title: "IT & Dijital",
    subtitle: "Teknoloji & Sistem Çözümleri",
    desc: "Web altyapısı, dijital kayıt sistemleri, teknik destek ve etkinlik teknolojileri entegrasyonu.",
    href: "/hizmetlerimiz/it",
    bg: "from-[#0a1520] to-[#0f2030]",
    accent: "#154060",
    num: "06",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
            backgroundSize: "80px 80px"
          }} />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #1e3373 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #152552 0%, transparent 70%)" }} />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-8">
              Profesyonel Organizasyon Çözümleri
            </p>
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-[1.0] tracking-tight mb-8">
              Etkinliğinizi<br />
              <span className="text-white/25">Zirveye</span><br />
              Taşıyoruz.
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mb-12">
              Etkinlik ve organizasyon sektöründe güvenilirliği, profesyonelliği ve
              yenilikçi yaklaşımıyla öne çıkan lider çözüm ortağınız.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/teklif"
                className="inline-flex items-center gap-2.5 bg-white text-[#0a1628] px-8 py-4 font-bold text-sm hover:bg-white/92 transition-all">
                Teklif Al <ArrowRight size={16} />
              </Link>
              <Link href="/hakkimizda"
                className="inline-flex items-center gap-2.5 border border-white/20 text-white px-8 py-4 font-semibold text-sm hover:border-white/50 hover:bg-white/5 transition-all">
                Kurumu Tanıyın
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/8" />
      </section>

      {/* ── HİZMETLER BAŞLIK ── */}
      <section className="bg-white border-b border-[#e8ecf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[#0d1b3e]/35 text-xs font-bold uppercase tracking-[0.25em] mb-3">Hizmetlerimiz</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0d1b3e] leading-tight">
              7 Departmanda<br />Uçtan Uca Destek
            </h2>
          </div>
          <Link href="/hizmetlerimiz"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d1b3e]/50 hover:text-[#0d1b3e] transition-colors group self-start md:self-end">
            Tüm Hizmetler <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── HİZMET KARTLARI (tugva tarzı büyük kartlar) ── */}
      <section className="bg-white">
        <div className="divide-y divide-[#e8ecf3]">
          {services.map((s) => (
            <Link key={s.id} href={s.href} className="block group relative overflow-hidden">
              <div className={`bg-gradient-to-br ${s.bg} relative min-h-[420px] flex flex-col justify-between p-10 lg:p-16`}>
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                  }} />
                {/* Hover accent */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 80% 50%, ${s.accent}88 0%, transparent 60%)` }} />

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  <div>
                    <span className="text-white/20 text-7xl font-black leading-none select-none">{s.num}</span>
                  </div>
                  <div className="w-12 h-12 border border-white/15 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/10 transition-all">
                    <ChevronRight size={18} className="text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>

                {/* Bottom */}
                <div className="relative">
                  <p className="text-white/35 text-xs font-bold uppercase tracking-[0.25em] mb-3">{s.subtitle}</p>
                  <h3 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">{s.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed max-w-xl">{s.desc}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-white/60 group-hover:text-white text-sm font-semibold transition-colors border-b border-white/20 group-hover:border-white pb-0.5">
                    İncele <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── NEDEN ZENİTH ── */}
      <section className="bg-[#f8f9fc] border-t border-[#e8ecf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-[#0d1b3e]/35 text-xs font-bold uppercase tracking-[0.25em] mb-5">Neden Zenith?</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0d1b3e] leading-tight mb-8">
                Yalnızca personel değil;<br />güven, kalite ve çözüm.
              </h2>
              <p className="text-[#0d1b3e]/55 leading-relaxed mb-6 text-base">
                Sektördeki deneyimimiz, güçlü organizasyon yapımız ve çözüm odaklı yaklaşımımızla
                etkinliklerinize yalnızca personel değil, profesyonel bir operasyon desteği sunuyoruz.
              </p>
              <p className="text-[#0d1b3e]/55 leading-relaxed mb-10 text-base">
                PR, Operasyon, Basın ve Medya, Güvenlik, İnsan Kaynakları, Finans ve Bilgi Teknolojileri
                alanlarında oluşturduğumuz uzman ekiplerimiz sayesinde ihtiyaç duyduğunuz tüm
                süreçleri tek çatı altında yönetiyoruz.
              </p>
              <Link href="/hakkimizda"
                className="inline-flex items-center gap-2 bg-[#0d1b3e] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#152552] transition-colors">
                Kurumu Tanıyın <ArrowRight size={15} />
              </Link>
            </div>

            <div className="space-y-0 border border-[#e8ecf3] divide-y divide-[#e8ecf3]">
              {[
                "Profesyonel ve eğitimli ekipler",
                "Güçlü operasyonel koordinasyon",
                "Kurumsal çalışma disiplini",
                "Hızlı ve etkili iletişim",
                "Modern teknolojik altyapı",
                "Şeffaf ve sürdürülebilir yönetim anlayışı",
                "Uçtan uca organizasyon desteği",
              ].map((item, i) => (
                <div key={item} className="flex items-center justify-between px-6 py-5 bg-white hover:bg-[#f4f6fa] transition-colors group">
                  <div className="flex items-center gap-4">
                    <span className="text-[#0d1b3e]/20 text-xs font-black w-5">0{i + 1}</span>
                    <span className="text-[#0d1b3e] font-medium text-sm">{item}</span>
                  </div>
                  <ChevronRight size={14} className="text-[#0d1b3e]/20 group-hover:text-[#0d1b3e]/60 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── İSTATİSTİKLER ── */}
      <section className="bg-[#0a1628] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <StatsBand />
        </div>
      </section>

      {/* ── BAŞVURU CTA ── */}
      <section className="bg-white border-t border-[#e8ecf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0d1b3e]/35 text-xs font-bold uppercase tracking-[0.25em] mb-5">İletişime Geçin</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0d1b3e] leading-tight">
                Etkinliğinizi Birlikte<br />Planlayalım.
              </h2>
            </div>
            <div>
              <p className="text-[#0d1b3e]/55 leading-relaxed mb-10 text-base">
                Profesyonel ekibimiz etkinliğinizin planlama aşamasından sona kadar yanınızda.
                Ücretsiz teklif almak için hemen iletişime geçin.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/teklif"
                  className="inline-flex items-center gap-2 bg-[#0d1b3e] text-white px-8 py-4 font-bold text-sm hover:bg-[#152552] transition-colors">
                  Teklif Al <ArrowRight size={16} />
                </Link>
                <Link href="/basvuru"
                  className="inline-flex items-center gap-2 border border-[#0d1b3e]/20 text-[#0d1b3e] px-8 py-4 font-bold text-sm hover:border-[#0d1b3e] transition-colors">
                  Ekibe Katıl
                </Link>
                <Link href="/iletisim"
                  className="inline-flex items-center gap-2 text-[#0d1b3e]/50 hover:text-[#0d1b3e] px-4 py-4 font-semibold text-sm transition-colors">
                  İletişim →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
