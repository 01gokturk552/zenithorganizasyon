import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KVKKPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-[#0f1f4b] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black">KVKK Aydınlatma Metni</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2 className="text-xl font-black text-[#0f1f4b] mb-4">Kişisel Verilerin Korunması Hakkında Bilgilendirme</h2>
          <p className="text-[#0f1f4b]/70 leading-relaxed mb-6">
            Zenith Organizasyon olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında
            kişisel verilerinizin güvenliğine büyük önem vermekteyiz.
          </p>
          <h3 className="text-lg font-bold text-[#0f1f4b] mb-3">Veri Sorumlusu</h3>
          <p className="text-[#0f1f4b]/70 leading-relaxed mb-6">
            Zenith Organizasyon, kişisel verilerinizin işlenmesinde veri sorumlusu sıfatıyla hareket etmektedir.
          </p>
          <h3 className="text-lg font-bold text-[#0f1f4b] mb-3">Toplanan Kişisel Veriler</h3>
          <ul className="text-[#0f1f4b]/70 space-y-2 mb-6">
            <li>Ad, soyad, yaş, şehir bilgileri</li>
            <li>İletişim bilgileri (telefon, e-posta)</li>
            <li>Mesleki deneyim bilgileri</li>
            <li>CV ve özgeçmiş bilgileri</li>
          </ul>
          <h3 className="text-lg font-bold text-[#0f1f4b] mb-3">Verilerin İşlenme Amaçları</h3>
          <p className="text-[#0f1f4b]/70 leading-relaxed mb-6">
            Kişisel verileriniz; başvuru süreçlerinin yürütülmesi, iletişimin sağlanması ve
            yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.
          </p>
          <h3 className="text-lg font-bold text-[#0f1f4b] mb-3">Haklarınız</h3>
          <p className="text-[#0f1f4b]/70 leading-relaxed">
            KVKK&apos;nın 11. maddesi kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme,
            işlenmişse bilgi talep etme, düzeltilmesini isteme ve silinmesini talep etme haklarına sahipsiniz.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
