import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Megaphone, Users, Camera, Shield, Briefcase, DollarSign, Monitor, ArrowUpRight } from "lucide-react";

const departments = [
  { icon: Megaphone, code: "01", title: "PR Departmanı",       desc: "Kurumsal iletişim, marka yönetimi ve medya ilişkileri alanında uzman ekibimiz.", href: "/departmanlar/pr" },
  { icon: Users,     code: "02", title: "Saha Departmanı",     desc: "Alan yönetimi, koordinasyon ve operasyonel süreçlerin yürütülmesi.",            href: "/departmanlar/saha" },
  { icon: Camera,    code: "03", title: "Press Departmanı",    desc: "Fotoğraf, video prodüksiyonu ve medya yönetimi hizmetleri.",                    href: "/departmanlar/press" },
  { icon: Shield,    code: "04", title: "Güvenlik Departmanı", desc: "Risk analizi, alan kontrolü ve güvenlik protokollerinin uygulanması.",           href: "/departmanlar/guvenlik" },
  { icon: Briefcase, code: "05", title: "İK Departmanı",       desc: "Personel yönetimi, eğitim ve ekip oluşturma süreçleri.",                        href: "/departmanlar/ik" },
  { icon: DollarSign,code: "06", title: "Finans Departmanı",   desc: "Bütçe yönetimi, sponsorluk takibi ve finansal planlama.",                       href: "/departmanlar/finans" },
  { icon: Monitor,   code: "07", title: "IT Departmanı",       desc: "Web geliştirme, sistem yönetimi ve teknik destek çözümleri.",                   href: "/departmanlar/it" },
];

export default function DepartmanlarPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="relative bg-[#0d1b3e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e3373] rounded-full blur-[120px] opacity-25 translate-x-1/3 -translate-y-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">Departmanlar</p>
          <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-6 max-w-3xl">
            7 Uzman<br />
            <span className="text-white/35">Departman</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            Her departmanımız, kendi alanında uzmanlaşmış ekipler ve güçlü liderlik yapısıyla
            etkinliklerinize profesyonel destek sağlar.
          </p>
        </div>
        <div className="h-10 bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 right-0" />
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((dept, i) => (
              <Link
                key={dept.code}
                href={dept.href}
                className={`group rounded-3xl border p-8 transition-all hover:shadow-xl hover:-translate-y-0.5 ${
                  i === 0
                    ? "bg-[#0d1b3e] border-[#0d1b3e] text-white lg:col-span-2"
                    : "bg-white border-[#e2e7f0] hover:border-[#0d1b3e]/20"
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    i === 0 ? "bg-white/12" : "bg-[#0d1b3e]/7"
                  }`}>
                    <dept.icon size={22} className={i === 0 ? "text-white" : "text-[#0d1b3e]"} />
                  </div>
                  <span className={`text-xs font-black ${i === 0 ? "text-white/20" : "text-[#0d1b3e]/15"}`}>
                    {dept.code}
                  </span>
                </div>

                <h2 className={`text-xl font-black mb-2 ${i === 0 ? "text-white" : "text-[#0d1b3e]"}`}>
                  {dept.title}
                </h2>
                <p className={`text-sm leading-relaxed mb-8 ${i === 0 ? "text-white/55" : "text-[#0d1b3e]/55"}`}>
                  {dept.desc}
                </p>

                <div className="flex items-center justify-end">
                  <div className={`flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2 ${
                    i === 0 ? "text-white/60 group-hover:text-white" : "text-[#0d1b3e]/40 group-hover:text-[#0d1b3e]"
                  }`}>
                    İncele <ArrowUpRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
