import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Target, Eye, Award, Shield, Users, TrendingUp,
  Lightbulb, CheckSquare, Star, ArrowRight
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Profesyonellik",
    desc: "Her görevi titizlikle planlar, yüksek standartlarda hizmet sunarız.",
  },
  {
    icon: Shield,
    title: "Güvenilirlik",
    desc: "İş ortaklarımızın ve ekip arkadaşlarımızın güvenini en değerli sermayemiz olarak görürüz.",
  },
  {
    icon: CheckSquare,
    title: "Sorumluluk",
    desc: "Üstlendiğimiz her görevi eksiksiz ve zamanında yerine getirmeyi ilke ediniriz.",
  },
  {
    icon: Users,
    title: "Takım Ruhu",
    desc: "Başarının güçlü ekip çalışmasıyla mümkün olduğuna inanırız.",
  },
  {
    icon: Lightbulb,
    title: "Yenilikçilik",
    desc: "Sürekli gelişir, değişen ihtiyaçlara modern çözümler üretiriz.",
  },
  {
    icon: Eye,
    title: "Şeffaflık",
    desc: "Tüm süreçlerimizi açık, anlaşılır ve hesap verebilir bir şekilde yürütürüz.",
  },
  {
    icon: Star,
    title: "Kalite Odaklılık",
    desc: "Her projede en yüksek hizmet kalitesini sunmayı hedefleriz.",
  },
  {
    icon: TrendingUp,
    title: "Sürdürülebilirlik",
    desc: "Uzun vadeli değer yaratan, kalıcı ilişkiler kurarak sektörde iz bırakan bir yapı inşa ediyoruz.",
  },
];

const differentiators = [
  "Yalnızca görev dağıtan değil, süreçleri yöneten bir yapı",
  "Planlama aşamasından saha operasyonlarına tam destek",
  "Medya yönetiminden teknik altyapıya profesyonel yaklaşım",
  "Deneyimli kadro ve güçlü organizasyon yapısı",
  "Her projede maksimum verimlilik ve memnuniyet",
];

const team = [
  { name: "Genel Başkan", role: "Yönetim Kurulu", initial: "G" },
  { name: "PR Başkanı", role: "PR Departmanı", initial: "P" },
  { name: "Saha Başkanı", role: "Saha Departmanı", initial: "S" },
  { name: "Press Başkanı", role: "Press Departmanı", initial: "P" },
  { name: "Güvenlik Başkanı", role: "Güvenlik Departmanı", initial: "G" },
  { name: "İK Başkanı", role: "İnsan Kaynakları", initial: "İ" },
  { name: "Finans Başkanı", role: "Finans Departmanı", initial: "F" },
  { name: "IT Başkanı", role: "IT Departmanı", initial: "I" },
];

export default function HakkimizdaPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-[#0d1b3e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e3373] rounded-full blur-[120px] opacity-30 translate-x-1/3 -translate-y-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">Hakkımızda</p>
          <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-8 max-w-3xl">
            Zenith Organizasyon<br />
            <span className="text-white/35">Kimdir?</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            Etkinlik, zirve, çalıştay, konferans ve sosyal organizasyonlarda ihtiyaç duyulan
            insan kaynağını, operasyonel desteği ve teknik altyapıyı profesyonel standartlarda
            sağlayan köklü ve güvenilir çözüm ortağınız.
          </p>
        </div>
        <div className="h-10 bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 right-0" />
      </section>

      {/* ── MİSYON & VİZYON ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Misyon */}
            <div className="bg-[#0d1b3e] rounded-3xl p-10 text-white">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white/35 text-xs font-bold uppercase tracking-widest">01</p>
                  <h2 className="text-xl font-black">Misyonumuz</h2>
                </div>
              </div>
              <p className="text-white/65 leading-[1.85] text-[15px]">
                Zenith Organizasyon olarak misyonumuz; etkinlik, zirve, çalıştay, konferans ve sosyal
                organizasyonlarda ihtiyaç duyulan <strong className="text-white/90">insan kaynağını, operasyonel desteği ve teknik altyapıyı</strong>{" "}
                profesyonel standartlarda sağlayarak iş ortaklarımıza güvenilir, sürdürülebilir ve
                yüksek kaliteli çözümler sunmaktır.
              </p>
              <div className="h-px bg-white/10 my-7" />
              <p className="text-white/55 leading-[1.85] text-[14px]">
                Her projede disiplinli çalışma anlayışımız, güçlü ekip yapımız ve çözüm odaklı
                yaklaşımımızla etkinliklerin başarıya ulaşmasına katkı sağlamayı hedefliyoruz.
              </p>
            </div>

            {/* Vizyon */}
            <div className="bg-[#f8f9fc] border border-[#e2e7f0] rounded-3xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#0d1b3e]/8 rounded-2xl flex items-center justify-center">
                  <Eye size={24} className="text-[#0d1b3e]" />
                </div>
                <div>
                  <p className="text-[#0d1b3e]/30 text-xs font-bold uppercase tracking-widest">02</p>
                  <h2 className="text-xl font-black text-[#0d1b3e]">Vizyonumuz</h2>
                </div>
              </div>
              <p className="text-[#0d1b3e]/65 leading-[1.85] text-[15px]">
                Etkinlik ve organizasyon sektöründe <strong className="text-[#0d1b3e]/90">güvenilirliği, profesyonelliği ve yenilikçi
                yaklaşımıyla</strong> öne çıkan; ulusal ve uluslararası ölçekte tercih edilen lider
                organizasyon ve operasyon çözüm ortağı olmak.
              </p>
              <div className="h-px bg-[#0d1b3e]/8 my-7" />
              <p className="text-[#0d1b3e]/55 leading-[1.85] text-[14px]">
                Sürekli gelişen yapımızla sektöre yön veren, güçlü ekipler yetiştiren ve hizmet
                kalitesiyle örnek gösterilen bir marka haline gelmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FARKIMIZI HİSSEDİN ── */}
      <section className="py-20 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">Farkımızı Hissedin</p>
              <h2 className="text-4xl font-black text-white mb-6 leading-tight">
                Süreçleri yöneten,<br />değer katan yapı
              </h2>
              <p className="text-white/55 leading-relaxed mb-6 text-[15px]">
                Zenith Organizasyon olarak farkımız; yalnızca görev dağıtan değil, <strong className="text-white/80">süreçleri yöneten</strong>{" "}
                bir yapı olmamızdır. Etkinliğin planlama aşamasından saha operasyonlarına, medya
                yönetiminden teknik altyapıya kadar her adımda profesyonel yaklaşımımızla yanınızda
                yer alırız.
              </p>
              <p className="text-white/45 leading-relaxed text-sm italic border-l-2 border-white/20 pl-5">
                Deneyimli kadromuz, güçlü organizasyon yapımız ve kalite odaklı hizmet anlayışımız
                sayesinde her projede maksimum verimlilik ve memnuniyet sağlamayı amaçlıyoruz.
              </p>
            </div>
            <div className="space-y-3">
              {differentiators.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/6 border border-white/10 rounded-xl px-5 py-4">
                  <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white/60 text-xs font-black">0{i + 1}</span>
                  </div>
                  <span className="text-white/75 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEMEL DEĞERLER ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-[#0d1b3e]/35 uppercase tracking-widest mb-4">Değerlerimiz</p>
            <h2 className="text-4xl font-black text-[#0d1b3e] mb-4">Bizi Biz Yapan Değerler</h2>
            <p className="text-[#0d1b3e]/50 max-w-xl mx-auto text-[15px] leading-relaxed">
              Her projede ve her kararımızda rehberlik eden temel ilkelerimiz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`group rounded-2xl p-7 border transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                  i === 0
                    ? "bg-[#0d1b3e] text-white border-[#0d1b3e]"
                    : "bg-white border-[#e2e7f0] hover:border-[#0d1b3e]/20"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  i === 0 ? "bg-white/12" : "bg-[#0d1b3e]/6 group-hover:bg-[#0d1b3e] transition-colors"
                }`}>
                  <v.icon size={18} className={i === 0 ? "text-white" : "text-[#0d1b3e] group-hover:text-white transition-colors"} />
                </div>
                <h3 className={`font-bold text-base mb-2 ${i === 0 ? "text-white" : "text-[#0d1b3e]"}`}>{v.title}</h3>
                <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/55" : "text-[#0d1b3e]/55"}`}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LİDERLİK KADROSU ── */}
      <section className="py-24 bg-[#f8f9fc] border-t border-[#e2e7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#0d1b3e]/35 uppercase tracking-widest mb-4">Yapımız</p>
            <h2 className="text-4xl font-black text-[#0d1b3e] mb-4">Departman Başkanlarımız</h2>
            <p className="text-[#0d1b3e]/50 max-w-xl mx-auto text-[15px]">
              7 departmanımızın her birinde uzman liderler etkinliğinizi yönetiyor.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-[#e2e7f0] rounded-2xl p-6 text-center hover:border-[#0d1b3e]/20 hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 bg-[#0d1b3e] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#152552] transition-colors">
                  <span className="text-white font-black text-lg">{member.initial}</span>
                </div>
                <h3 className="font-bold text-[#0d1b3e] text-sm mb-1">{member.name}</h3>
                <p className="text-[#0d1b3e]/40 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white border-t border-[#e2e7f0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#0d1b3e] mb-4">
            Hizmetlerimizi Keşfedin
          </h2>
          <p className="text-[#0d1b3e]/50 mb-8 text-[15px]">
            7 departmanımızın sunduğu kapsamlı hizmetler hakkında detaylı bilgi alın.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/hizmetlerimiz" className="flex items-center gap-2 bg-[#0d1b3e] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#152552] transition-all">
              Hizmetlerimiz <ArrowRight size={15} />
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
