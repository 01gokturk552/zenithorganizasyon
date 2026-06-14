import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GizlilikPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-[#0f1f4b] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black">Gizlilik Politikası</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {[
              {
                title: "Çerezler (Cookies)",
                content: "Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır. Tarayıcınızın ayarları üzerinden çerez tercihlerinizi yönetebilirsiniz."
              },
              {
                title: "Veri Güvenliği",
                content: "Kişisel verileriniz, endüstri standardı şifreleme yöntemleri kullanılarak korunmaktadır. Verileriniz yetkisiz erişime karşı güvence altındadır."
              },
              {
                title: "Üçüncü Taraflarla Paylaşım",
                content: "Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmamaktadır."
              },
              {
                title: "Veri Saklama Süresi",
                content: "Kişisel verileriniz, amacın gerektirdiği süre boyunca saklanmakta ve sonrasında güvenli biçimde imha edilmektedir."
              },
            ].map((section) => (
              <div key={section.title} className="border-l-4 border-[#0f1f4b] pl-6">
                <h3 className="text-lg font-bold text-[#0f1f4b] mb-3">{section.title}</h3>
                <p className="text-[#0f1f4b]/70 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
