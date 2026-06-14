import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

const serviceData: Record<string, {
  title: string; hero: string; desc: string;
  features: string[]; process: string[];
}> = {
  pr: {
    title: "PR Hizmetleri",
    hero: "Kurumsal İletişimde Mükemmellik",
    desc: "Markanızı doğru kitleye doğru mesajla ulaştırıyoruz. PR departmanımız, etkinliklerinizin görünürlüğünü artırmak için kapsamlı stratejiler geliştirir.",
    features: ["Kurumsal iletişim stratejisi", "Medya ilişkileri yönetimi", "Sosyal medya stratejisi", "Kriz iletişimi", "Basın bülteni hazırlama", "Marka konumlandırma"],
    process: ["İhtiyaç analizi", "Strateji geliştirme", "İçerik üretimi", "Medya dağıtımı", "Sonuç raporlama"],
  },
  saha: {
    title: "Saha Operasyonları",
    hero: "Kusursuz Alan Yönetimi",
    desc: "Etkinlik alanınızı en verimli şekilde yönetiyor, her detayı planlıyor ve koordinasyonu sağlıyoruz.",
    features: ["Alan yönetimi ve planlaması", "Ekip koordinasyonu", "Lojistik destek", "Katılımcı yönlendirme", "Teknik destek", "Acil müdahale planı"],
    process: ["Alan keşfi", "Plan hazırlama", "Ekip briefing", "Operasyon yürütme", "Değerlendirme"],
  },
  press: {
    title: "Press Hizmetleri",
    hero: "Profesyonel Medya Hizmetleri",
    desc: "Etkinliklerinizin her anını en profesyonel şekilde kayıt altına alıyor, medya yönetimini eksiksiz yapıyoruz.",
    features: ["Profesyonel fotoğrafçılık", "Video prodüksiyon", "Drone çekimleri", "Canlı yayın", "Medya akreditasyonu", "Dijital arşivleme"],
    process: ["Brifing ve planlama", "Teknik hazırlık", "Çekim operasyonu", "Post-prodüksiyon", "Teslim"],
  },
  guvenlik: {
    title: "Güvenlik Hizmetleri",
    hero: "Güvenli Etkinlikler",
    desc: "Risk analizinden alan kontrolüne, VIP korumadan acil müdahaleye kadar kapsamlı güvenlik hizmetleri.",
    features: ["Risk değerlendirmesi", "Alan güvenliği", "Giriş kontrol sistemi", "VIP koruma", "Acil eylem planları", "Güvenlik personel eğitimi"],
    process: ["Risk analizi", "Plan hazırlama", "Personel yerleşimi", "Operasyon yürütme", "Olay raporlama"],
  },
  ik: {
    title: "İnsan Kaynakları Hizmetleri",
    hero: "Doğru Ekip, Başarılı Etkinlik",
    desc: "Etkinliğiniz için en uygun personeli buluyor, eğitim veriyor ve yönetim süreçlerini yürütüyoruz.",
    features: ["Personel temin", "Oryantasyon ve eğitim", "Vardiya planlaması", "Performans takibi", "Özlük işlemleri", "Ekip motivasyonu"],
    process: ["İhtiyaç belirleme", "Aday havuzu oluşturma", "Mülakat süreci", "Eğitim", "Görev başlangıcı"],
  },
  finans: {
    title: "Finans Hizmetleri",
    hero: "Mali Yönetimde Şeffaflık",
    desc: "Bütçe planlamasından sponsorluk yönetimine, gelir gider takibinden mali raporlamaya kadar finans hizmetleri.",
    features: ["Bütçe planlaması", "Sponsorluk yönetimi", "Gelir-gider takibi", "Mali raporlama", "Finansal analiz", "Sponsorluk dosyası hazırlama"],
    process: ["Bütçe belirleme", "Kaynak planlama", "Takip sistemi kurulumu", "Operasyon sürecinde takip", "Mali rapor"],
  },
  it: {
    title: "IT ve Dijital Çözümler",
    hero: "Dijital Dönüşümünüzün Öncüsü",
    desc: "Web geliştirme, sistem entegrasyonu ve teknik destek ile etkinliklerinizi dijital çağa taşıyoruz.",
    features: ["Web sitesi geliştirme", "Mobil uygulama", "Online biletleme sistemi", "Canlı yayın altyapısı", "Sistem yönetimi", "7/24 teknik destek"],
    process: ["Sistem analizi", "Teknik tasarım", "Geliştirme", "Test", "Canlıya alma ve destek"],
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];

  if (!service) {
    return (
      <main>
        <Navbar />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-[#0f1f4b] mb-4">Hizmet Bulunamadı</h1>
            <Link href="/hizmetlerimiz" className="text-[#0f1f4b] underline">Tüm hizmetler</Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <section className="bg-[#0f1f4b] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/hizmetlerimiz" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 text-sm transition-colors">
            <ArrowLeft size={16} /> Hizmetlerimiz
          </Link>
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            {service.title}
          </div>
          <h1 className="text-5xl font-black mb-4">{service.hero}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{service.desc}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-black text-[#0f1f4b] mb-8">Neler Sunuyoruz?</h2>
            <div className="space-y-4">
              {service.features.map((f) => (
                <div key={f} className="flex items-center gap-3 p-4 border border-[#0f1f4b]/10 rounded-xl">
                  <CheckCircle size={18} className="text-[#0f1f4b] flex-shrink-0" />
                  <span className="font-medium text-[#0f1f4b]">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0f1f4b] mb-8">Sürecimiz</h2>
            <div className="space-y-4">
              {service.process.map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#0f1f4b] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-sm">{i + 1}</span>
                  </div>
                  <div className="flex-1 p-4 border border-[#0f1f4b]/10 rounded-xl">
                    <span className="font-medium text-[#0f1f4b]">{step}</span>
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="absolute left-5 mt-10 w-0.5 h-4 bg-[#0f1f4b]/20" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 bg-[#0f1f4b] rounded-2xl p-6 text-white">
              <h3 className="font-black text-xl mb-2">Bu Hizmet Hakkında Teklif Alın</h3>
              <p className="text-white/60 text-sm mb-4">Etkinliğiniz için özel fiyat teklifi hazırlayalım.</p>
              <Link
                href="/teklif"
                className="block text-center bg-white text-[#0f1f4b] px-4 py-3 rounded-xl font-bold hover:bg-white/90 transition-all"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
