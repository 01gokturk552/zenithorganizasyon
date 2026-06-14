import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Image as ImageIcon, Video, FileText, Bell } from "lucide-react";

const pressReleases = [
  { title: "Zenith Organizasyon Mega Fest 2024&apos;ü Başarıyla Tamamladı", date: "15 Mart 2024", category: "Basın Bülteni" },
  { title: "Yeni IT Altyapımız Devreye Girdi", date: "1 Mart 2024", category: "Duyuru" },
  { title: "Güvenlik Departmanımız ISO Sertifikası Aldı", date: "20 Şubat 2024", category: "Basın Bülteni" },
];

const announcements = [
  { title: "2024 Yaz Sezonu Ekip Alımları Başladı", date: "10 Haziran 2024" },
  { title: "Yeni Sponsorluk Programımız Hakkında", date: "5 Haziran 2024" },
  { title: "Discord Entegrasyonumuz Tamamlandı", date: "1 Haziran 2024" },
];

export default function MedyaPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-[#0f1f4b] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Medya Merkezi
          </div>
          <h1 className="text-5xl font-black mb-6">Medya & Basın</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Fotoğraf galerisi, video arşivi, basın bültenleri ve duyurular.
          </p>
        </div>
      </section>

      {/* Kategoriler */}
      <section className="py-12 bg-white border-b border-[#0f1f4b]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {[
              { icon: ImageIcon, label: "Fotoğraf Galerisi" },
              { icon: Video, label: "Video Galerisi" },
              { icon: FileText, label: "Basın Bültenleri" },
              { icon: Bell, label: "Duyurular" },
            ].map((cat) => (
              <button
                key={cat.label}
                className="flex items-center gap-2 px-5 py-3 border-2 border-[#0f1f4b] text-[#0f1f4b] rounded-xl font-semibold text-sm hover:bg-[#0f1f4b] hover:text-white transition-all"
              >
                <cat.icon size={16} /> {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fotoğraf Galerisi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#0f1f4b] mb-8">Fotoğraf Galerisi</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-[#0f1f4b]/10 hover:bg-[#0f1f4b]/20 transition-colors cursor-pointer flex items-center justify-center ${
                  i === 0 ? "col-span-2 row-span-2 h-64" : "h-32"
                }`}
              >
                <ImageIcon size={24} className="text-[#0f1f4b]/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Galerisi */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#0f1f4b] mb-8">Video Galerisi</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#0f1f4b] h-40 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Video size={20} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Basın Bültenleri */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#0f1f4b] mb-8">Basın Bültenleri</h2>
          <div className="space-y-4">
            {pressReleases.map((pr) => (
              <div key={pr.title} className="bg-white border border-[#0f1f4b]/10 rounded-2xl p-6 flex items-center justify-between hover:shadow-md transition-all">
                <div>
                  <span className="text-xs font-semibold bg-[#0f1f4b]/5 text-[#0f1f4b] px-3 py-1 rounded-full mb-2 inline-block">
                    {pr.category}
                  </span>
                  <h3 className="font-bold text-[#0f1f4b]">{pr.title}</h3>
                  <p className="text-[#0f1f4b]/50 text-sm mt-1">{pr.date}</p>
                </div>
                <button className="flex-shrink-0 ml-6 flex items-center gap-2 text-[#0f1f4b] font-semibold text-sm border-2 border-[#0f1f4b]/20 px-4 py-2 rounded-xl hover:border-[#0f1f4b] transition-all">
                  <FileText size={16} /> İndir
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duyurular */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#0f1f4b] mb-8">Son Duyurular</h2>
          <div className="space-y-3">
            {announcements.map((a) => (
              <div key={a.title} className="flex items-center gap-4 p-4 border border-[#0f1f4b]/10 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-2 h-2 bg-[#0f1f4b] rounded-full flex-shrink-0" />
                <span className="font-medium text-[#0f1f4b] flex-1">{a.title}</span>
                <span className="text-[#0f1f4b]/40 text-sm flex-shrink-0">{a.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
