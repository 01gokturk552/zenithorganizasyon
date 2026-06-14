import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KullanimSartlariPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-[#0f1f4b] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black">Kullanım Şartları</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {[
            { title: "Genel Şartlar", content: "Bu web sitesini kullanarak aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Sitemizi düzenli olarak ziyaret ederek güncel şartları takip etmenizi öneririz." },
            { title: "Fikri Mülkiyet", content: "Web sitemizde yer alan tüm içerikler (metin, görsel, logo, tasarım vb.) Zenith Organizasyon&apos;a ait olup izinsiz kullanımı yasaktır." },
            { title: "Sorumluluk Reddi", content: "Sitemizin kullanımından doğabilecek doğrudan veya dolaylı zararlardan Zenith Organizasyon sorumlu tutulamaz." },
            { title: "Değişiklikler", content: "Bu kullanım şartlarını önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutarız." },
          ].map((section) => (
            <div key={section.title} className="border border-[#0f1f4b]/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#0f1f4b] mb-3">{section.title}</h3>
              <p className="text-[#0f1f4b]/70 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
