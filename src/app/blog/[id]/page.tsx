import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const posts: Record<string, { title: string; category: string; date: string; content: string }> = {
  "1": {
    title: "Yeni Sezon Ekip Alımları Başladı",
    category: "Duyuru",
    date: "10 Haziran 2024",
    content: `2024 yaz sezonuna hazırlık kapsamında tüm departmanlarımız için yeni ekip üyeleri arıyoruz.

PR, Saha, Press, Güvenlik, İnsan Kaynakları, Finans ve IT departmanlarımızda açık pozisyonlar bulunmaktadır.

Başvuru koşulları:
- 18 yaş ve üzeri
- Takım çalışmasına yatkın
- Sorumluluk sahibi
- Etkinlik deneyimi (tercih sebebidir)

Başvurularınızı website üzerinden yapabilirsiniz.`,
  },
  "2": {
    title: "Büyük Fest Organizasyonu Tamamlandı",
    category: "Etkinlik",
    date: "5 Haziran 2024",
    content: `5000 kişinin katıldığı büyük festival organizasyonumuz başarıyla tamamlandı.

Tüm departmanlarımızın koordineli çalışması sayesinde etkinlik kusursuz geçti. PR ekibimiz medya ilişkilerini, saha ekibimiz alan yönetimini, güvenlik ekibimiz ise tüm katılımcıların güvenliğini sağladı.

Müşterimiz %100 memnuniyet ifade etti. Tüm Zenith ekibine teşekkürler!`,
  },
  "3": {
    title: "IT Departmanı Yeni Sistemlerini Devreye Aldı",
    category: "Teknoloji",
    date: "1 Haziran 2024",
    content: `IT departmanımız uzun süredir geliştirdiği yeni sistemleri devreye aldı.

Yeni sistemler:
- Discord entegrasyonu: Anlık bildirimler ve ekip iletişimi
- Online görev takip sistemi: Gerçek zamanlı proje yönetimi
- Dijital kimlik kartları: QR kodlu üye kartı sistemi
- Otomatik yedekleme: Bulut tabanlı veri yönetimi

Bu sistemler Zenith'in operasyonel verimliliğini %40 artıracak.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((id) => ({ id }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = posts[params.id];

  if (!post) {
    return (
      <main>
        <Navbar />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-[#0f1f4b] mb-4">Yazı Bulunamadı</h1>
            <Link href="/blog" className="text-[#0f1f4b] underline">Blog&apos;a dön</Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <section className="bg-[#0f1f4b] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 text-sm transition-colors">
            <ArrowLeft size={16} /> Blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
              <Tag size={14} /> {post.category}
            </span>
            <span className="text-white/40 text-sm flex items-center gap-1">
              <Calendar size={14} /> {post.date}
            </span>
          </div>
          <h1 className="text-4xl font-black">{post.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((para, i) => (
              <p key={i} className="text-[#0f1f4b]/70 leading-relaxed mb-6 whitespace-pre-line">{para}</p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-[#0f1f4b]/10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#0f1f4b] font-semibold text-sm hover:text-[#1a3278] transition-colors">
              <ArrowLeft size={16} /> Tüm yazılara dön
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
