import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileText } from "lucide-react";

const categories = ["Tümü", "Duyuru", "Etkinlik", "Teknoloji", "Haberler", "Sektör"];

export default function BlogPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="relative bg-[#0d1b3e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">Blog</p>
          <h1 className="text-5xl font-black leading-[1.08] tracking-tight mb-5">
            Haberler &<br /><span className="text-white/35">Duyurular</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-xl">
            Organizasyon dünyasından haberler, ekip güncellemeleri ve sektör gelişmeleri.
          </p>
        </div>
        <div className="h-10 bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 right-0" />
      </section>

      {/* Kategori filtresi */}
      <section className="py-8 bg-white border-b border-[#e2e7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                  i === 0
                    ? "bg-[#0d1b3e] text-white border-[#0d1b3e]"
                    : "border-[#e2e7f0] text-[#0d1b3e]/60 hover:border-[#0d1b3e]/30 hover:text-[#0d1b3e]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Boş durum */}
      <section className="py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center py-16">
            <div className="w-16 h-16 bg-white border border-[#e2e7f0] rounded-2xl flex items-center justify-center mb-5 shadow-sm">
              <FileText size={26} className="text-[#0d1b3e]/20" />
            </div>
            <h3 className="font-bold text-[#0d1b3e] text-lg mb-2">Henüz yayın eklenmedi</h3>
            <p className="text-[#0d1b3e]/40 text-sm max-w-sm leading-relaxed mb-8">
              Haberler ve duyurular burada yayınlanacak. Yakında içeriklerimiz eklenecek.
            </p>
            <Link
              href="/"
              className="flex items-center gap-2 border border-[#0d1b3e]/15 text-[#0d1b3e] px-6 py-2.5 rounded-xl font-semibold text-sm hover:border-[#0d1b3e] transition-all"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
