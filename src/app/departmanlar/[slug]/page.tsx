import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Users, Briefcase, CheckCircle } from "lucide-react";

const deptData: Record<string, {
  title: string; desc: string; lead: string;
  services: string[]; structure: string[]; examples: string[];
}> = {
  pr: {
    title: "PR Departmanı",
    desc: "Kurumsal iletişim stratejileri, marka yönetimi ve medya ilişkileri konularında uzman ekibimizle hizmet veriyoruz.",
    lead: "PR Başkanı",
    services: ["Kurumsal iletişim stratejisi", "Medya ilişkileri yönetimi", "Sosyal medya yönetimi", "Kriz iletişimi", "Marka danışmanlığı"],
    structure: ["PR Başkanı", "Medya İlişkileri Koordinatörü", "Sosyal Medya Uzmanı", "İçerik Yazarı", "PR Asistanları"],
    examples: ["Büyük Şirket Lansmanı", "Festival PR Yönetimi", "Kurumsal Kriz Yönetimi"],
  },
  saha: {
    title: "Saha Departmanı",
    desc: "Etkinlik alanı yönetimi, koordinasyon ve operasyonel süreçlerin profesyonel yürütülmesinde uzmanız.",
    lead: "Saha Başkanı",
    services: ["Alan yönetimi", "Ekip koordinasyonu", "Lojistik destek", "Katılımcı yönlendirme", "Operasyonel planlama"],
    structure: ["Saha Başkanı", "Alan Koordinatörleri", "Saha Ekip Liderleri", "Saha Görevlileri"],
    examples: ["3000 Kişilik Konser", "Kurumsal Gala", "Açık Hava Festivali"],
  },
  press: {
    title: "Press Departmanı",
    desc: "Profesyonel fotoğraf, video prodüksiyonu ve medya yönetimi hizmetleri sunuyoruz.",
    lead: "Press Başkanı",
    services: ["Profesyonel fotoğrafçılık", "Video prodüksiyon", "Canlı yayın", "Medya akreditasyonu", "İçerik arşivleme"],
    structure: ["Press Başkanı", "Fotoğrafçılar", "Video Ekibi", "Medya Koordinatörü", "Arşiv Uzmanı"],
    examples: ["Festival Fotoğraf Arşivi", "Belgesel Video Prodüksiyon", "Canlı Yayın Yönetimi"],
  },
  guvenlik: {
    title: "Güvenlik Departmanı",
    desc: "Risk analizi, alan kontrolü ve kapsamlı güvenlik protokolleriyle etkinlik güvenliğini sağlıyoruz.",
    lead: "Güvenlik Başkanı",
    services: ["Risk değerlendirmesi", "Alan güvenliği", "VIP koruma", "Acil eylem planları", "Giriş kontrol"],
    structure: ["Güvenlik Başkanı", "Risk Analisti", "Güvenlik Koordinatörleri", "Güvenlik Personeli"],
    examples: ["Büyük Ölçekli Konser Güvenliği", "VIP Organizasyon", "Festival Alan Kontrolü"],
  },
  ik: {
    title: "İK Departmanı",
    desc: "Personel temin, eğitim ve yönetim süreçlerinde kapsamlı insan kaynakları çözümleri sunuyoruz.",
    lead: "İK Başkanı",
    services: ["Personel temin", "Oryantasyon", "Performans değerlendirme", "Ekip oluşturma", "Mülakat süreçleri"],
    structure: ["İK Başkanı", "İşe Alım Uzmanı", "Eğitim Koordinatörü", "İK Asistanları"],
    examples: ["200 Kişilik Ekip Oluşturma", "Yıllık Eğitim Programı", "Performans Sistemi Kurulumu"],
  },
  finans: {
    title: "Finans Departmanı",
    desc: "Bütçe planlama, sponsorluk yönetimi ve finansal raporlama hizmetleri sunuyoruz.",
    lead: "Finans Başkanı",
    services: ["Bütçe yönetimi", "Sponsorluk takibi", "Mali raporlama", "Finansal planlama", "Sponsorluk dosyaları"],
    structure: ["Finans Başkanı", "Bütçe Analisti", "Sponsorluk Koordinatörü", "Muhasebe Uzmanı"],
    examples: ["1M TL Bütçe Yönetimi", "10 Sponsor Anlaşması", "Yıllık Mali Raporlama"],
  },
  it: {
    title: "IT Departmanı",
    desc: "Web geliştirme, sistem yönetimi ve teknik destek hizmetleriyle dijital dönüşümünüzü sağlıyoruz.",
    lead: "IT Başkanı",
    services: ["Web geliştirme", "Sistem entegrasyonu", "Teknik destek", "Dijital altyapı", "Siber güvenlik"],
    structure: ["IT Başkanı", "Web Geliştiriciler", "Sistem Yöneticisi", "Teknik Destek Uzmanı"],
    examples: ["Organizasyon Web Sitesi", "Online Biletleme Sistemi", "Etkinlik Yönetim Yazılımı"],
  },
};

export async function generateStaticParams() {
  return Object.keys(deptData).map((slug) => ({ slug }));
}

export default function DepartmentPage({ params }: { params: { slug: string } }) {
  const dept = deptData[params.slug];

  if (!dept) {
    return (
      <main>
        <Navbar />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-[#0f1f4b] mb-4">Departman Bulunamadı</h1>
            <Link href="/departmanlar" className="text-[#0f1f4b] underline">Tüm departmanlar</Link>
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
          <Link href="/departmanlar" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 text-sm transition-colors">
            <ArrowLeft size={16} /> Departmanlar
          </Link>
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Departman
          </div>
          <h1 className="text-5xl font-black mb-4">{dept.title}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{dept.desc}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          {/* Sunulan Hizmetler */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-black text-[#0f1f4b] mb-6">Sunulan Hizmetler</h2>
              <div className="space-y-3">
                {dept.services.map((s) => (
                  <div key={s} className="flex items-center gap-3 p-4 border border-[#0f1f4b]/10 rounded-xl hover:bg-gray-50 transition-colors">
                    <CheckCircle size={18} className="text-[#0f1f4b]" />
                    <span className="font-medium text-[#0f1f4b]">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#0f1f4b] mb-6">Örnek Çalışmalar</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {dept.examples.map((e, i) => (
                  <div key={e} className="bg-[#0f1f4b] text-white rounded-2xl p-5">
                    <div className="text-white/40 text-xs mb-2">Proje #{i + 1}</div>
                    <div className="font-bold text-sm">{e}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ekip Yapısı */}
          <div className="space-y-6">
            <div className="bg-gray-50 border border-[#0f1f4b]/10 rounded-2xl p-6">
              <h2 className="text-lg font-black text-[#0f1f4b] mb-4 flex items-center gap-2">
                <Users size={20} /> Ekip Yapısı
              </h2>
              <ul className="space-y-3">
                {dept.structure.map((s, i) => (
                  <li key={s} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? "bg-[#0f1f4b] text-white" : "bg-[#0f1f4b]/10 text-[#0f1f4b]"}`}>
                      {i + 1}
                    </div>
                    <span className={`text-sm ${i === 0 ? "font-bold text-[#0f1f4b]" : "text-[#0f1f4b]/70"}`}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0f1f4b] rounded-2xl p-6 text-white">
              <Briefcase size={24} className="mb-3 text-white/60" />
              <h3 className="font-bold mb-2">{dept.lead}</h3>
              <p className="text-white/60 text-sm mb-4">Bu departmana katılmak ister misiniz?</p>
              <Link
                href={`/basvuru`}
                className="block text-center bg-white text-[#0f1f4b] px-4 py-3 rounded-xl font-bold text-sm hover:bg-white/90 transition-all"
              >
                Başvuru Yap
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
