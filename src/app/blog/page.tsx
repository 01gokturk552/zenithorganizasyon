import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";

const posts = [
  {
    id: "1",
    title: "Yeni Sezon Ekip Alımları Başladı",
    excerpt: "2024 yaz sezonuna hazırlanıyoruz. Tüm departmanlarımız için yeni ekip üyeleri arıyoruz. Başvuru için son tarih 30 Haziran.",
    category: "Duyuru",
    date: "10 Haziran 2024",
    readTime: "3 dk",
  },
  {
    id: "2",
    title: "Mega Fest 2024 Başarıyla Tamamlandı",
    excerpt: "5.000 kişinin katıldığı büyük festivalimiz başarıyla sona erdi. Tüm departmanlarımızın koordineli çalışması etkinliği kusursuz kıldı.",
    category: "Etkinlik",
    date: "5 Haziran 2024",
    readTime: "5 dk",
  },
  {
    id: "3",
    title: "IT Departmanı Yeni Sistemlerini Devreye Aldı",
    excerpt: "Discord entegrasyonu, online görev takip sistemi ve dijital kimlik kartları artık aktif. Bu sistemler operasyonel verimliliği %40 artıracak.",
    category: "Teknoloji",
    date: "1 Haziran 2024",
    readTime: "4 dk",
  },
  {
    id: "4",
    title: "Güvenlik Departmanımız Sertifikasını Aldı",
    excerpt: "Güvenlik süreçlerimizdeki kalite standardımız uluslararası sertifika ile belgelendi. Müşterilerimize en yüksek güvenlik garantisini sunuyoruz.",
    category: "Haberler",
    date: "25 Mayıs 2024",
    readTime: "3 dk",
  },
  {
    id: "5",
    title: "Organizasyon Sektöründe Dijital Dönüşüm",
    excerpt: "Sektör hızla değişiyor. Biz bu dönüşümün öncüsü olarak dijital altyapımızı sürekli güçlendiriyoruz.",
    category: "Sektör",
    date: "20 Mayıs 2024",
    readTime: "7 dk",
  },
  {
    id: "6",
    title: "Yeni Sponsor Anlaşmalarımız",
    excerpt: "2024 yılında 3 yeni büyük sponsorla anlaşma imzaladık. Büyümeye devam ediyoruz.",
    category: "Haberler",
    date: "15 Mayıs 2024",
    readTime: "4 dk",
  },
];

const categories = ["Tümü", "Duyuru", "Etkinlik", "Teknoloji", "Haberler", "Sektör"];

const categoryColors: Record<string, string> = {
  "Duyuru": "bg-blue-50 text-blue-700 border-blue-200",
  "Etkinlik": "bg-green-50 text-green-700 border-green-200",
  "Teknoloji": "bg-purple-50 text-purple-700 border-purple-200",
  "Haberler": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Sektör": "bg-indigo-50 text-indigo-700 border-indigo-200",
};

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

      {/* Posts */}
      <section className="py-16 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className={`group rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all ${
                  i === 0
                    ? "bg-[#0d1b3e] border-[#0d1b3e] md:col-span-2 lg:col-span-1"
                    : "bg-white border-[#e2e7f0] hover:border-[#0d1b3e]/15"
                }`}
              >
                <div className={`h-32 flex items-center justify-center ${i === 0 ? "bg-white/5" : "bg-[#0d1b3e]/4"}`}>
                  <span className={`font-black text-6xl ${i === 0 ? "text-white/10" : "text-[#0d1b3e]/8"}`}>{post.id}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                      i === 0 ? "bg-white/10 text-white/60 border-white/10" : categoryColors[post.category] || "bg-gray-50 text-gray-600 border-gray-200"
                    }`}>
                      {post.category}
                    </span>
                    <span className={`text-xs ${i === 0 ? "text-white/30" : "text-[#0d1b3e]/30"}`}>{post.readTime}</span>
                  </div>
                  <h2 className={`font-bold text-lg leading-snug mb-3 ${i === 0 ? "text-white" : "text-[#0d1b3e]"} group-hover:opacity-80 transition-opacity`}>
                    {post.title}
                  </h2>
                  <p className={`text-sm leading-relaxed mb-5 ${i === 0 ? "text-white/50" : "text-[#0d1b3e]/50"}`}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-1.5 text-xs ${i === 0 ? "text-white/30" : "text-[#0d1b3e]/30"}`}>
                      <Calendar size={11} /> {post.date}
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-1.5 ${
                      i === 0 ? "text-white/50 group-hover:text-white" : "text-[#0d1b3e]/40 group-hover:text-[#0d1b3e]"
                    }`}>
                      Oku <ArrowUpRight size={13} />
                    </div>
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
