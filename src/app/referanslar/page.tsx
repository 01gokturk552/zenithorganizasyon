import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Award } from "lucide-react";

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
          <p className="text-white/50 text-lg leading-relaxed max-w-xl">
            Tamamladığımız organizasyonlar, iş ortaklarımız ve müşteri görüşleri yakında burada yer alacak.
          </p>
        </div>
        <div className="h-10 bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 right-0" />
      </section>

      {/* Boş durum */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-[#f8f9fc] border border-[#e2e7f0] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Award size={26} className="text-[#0d1b3e]/20" />
          </div>
          <h2 className="text-2xl font-black text-[#0d1b3e] mb-3">Referanslar Yakında</h2>
          <p className="text-[#0d1b3e]/40 leading-relaxed text-sm max-w-md mx-auto mb-10">
            Tamamladığımız etkinlikler, müşteri görüşleri ve iş ortaklarımız bu sayfada yayınlanacak.
            Organizasyonlarımız büyüdükçe bu sayfa güncellenecek.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/teklif"
              className="flex items-center gap-2 bg-[#0d1b3e] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#152552] transition-all"
            >
              Teklif Al
            </Link>
            <Link
              href="/iletisim"
              className="flex items-center gap-2 border border-[#0d1b3e]/15 text-[#0d1b3e] px-6 py-3 rounded-xl font-semibold text-sm hover:border-[#0d1b3e] transition-all"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
