"use client";
import Link from "next/link";
import { ArrowLeft, Users, FileText, Bell, TrendingUp, BarChart2, Download } from "lucide-react";
import { useStats } from "@/components/SiteStats";

const departments = ["PR", "Saha", "Press", "Güvenlik", "İK", "Finans", "IT"];

const statusList = [
  { label: "Beklemede",          color: "bg-amber-400",   dot: "bg-amber-400" },
  { label: "İnceleniyor",        color: "bg-blue-400",    dot: "bg-blue-400" },
  { label: "Mülakat Aşamasında", color: "bg-purple-400",  dot: "bg-purple-400" },
  { label: "Kabul Edildi",       color: "bg-emerald-400", dot: "bg-emerald-400" },
  { label: "Reddedildi",         color: "bg-red-400",     dot: "bg-red-400" },
];

export default function AdminRaporlarPage() {
  const { stats } = useStats();

  const etkinlik  = stats.find((s) => s.id === "etkinlik")?.value  ?? "0";
  const kadro     = stats.find((s) => s.id === "kadro")?.value     ?? "0";
  const dept      = stats.find((s) => s.id === "departman")?.value ?? "7";

  return (
    <div className="min-h-screen bg-[#f4f6fa]">

      <header className="bg-white border-b border-[#e8ecf3] h-[64px] flex items-center px-6 gap-4">
        <Link href="/admin" className="p-2 hover:bg-[#f4f6fa] rounded-xl transition-colors">
          <ArrowLeft size={18} className="text-[#0d1b3e]/60" />
        </Link>
        <div>
          <p className="text-xs text-[#0d1b3e]/35 font-medium">Admin Panel</p>
          <h1 className="font-black text-[#0d1b3e] text-base leading-none">Raporlar</h1>
        </div>
        <button className="ml-auto flex items-center gap-2 border border-[#e8ecf3] text-[#0d1b3e]/50 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#f4f6fa] transition-all">
          <Download size={14} /> PDF İndir
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-7 space-y-6">

        {/* Genel Özet */}
        <div>
          <p className="text-xs font-black text-[#0d1b3e]/35 uppercase tracking-widest mb-4">Genel Özet</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: FileText,    label: "Tamamlanan Etkinlik", value: etkinlik,  color: "bg-blue-50 text-blue-600",    dot: "bg-blue-200" },
              { icon: Users,       label: "Uzman Kadro",          value: kadro,     color: "bg-emerald-50 text-emerald-600", dot: "bg-emerald-200" },
              { icon: BarChart2,   label: "Departman",            value: dept,      color: "bg-purple-50 text-purple-600",dot: "bg-purple-200" },
              { icon: Bell,        label: "Toplam Başvuru",       value: "0",       color: "bg-amber-50 text-amber-600",  dot: "bg-amber-200" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-[#e8ecf3] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                  <span className="text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">{s.label}</span>
                </div>
                <div className={`w-9 h-9 ${s.color.split(" ")[0]} rounded-xl flex items-center justify-center mb-3`}>
                  <s.icon size={17} className={s.color.split(" ")[1]} />
                </div>
                <div className="text-3xl font-black text-[#0d1b3e]">{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Departman Dağılımı */}
          <div className="bg-white border border-[#e8ecf3] rounded-2xl">
            <div className="px-6 py-4 border-b border-[#e8ecf3] flex items-center justify-between">
              <h3 className="font-bold text-[#0d1b3e] text-sm">Departman Başına Üye</h3>
              <Link href="/admin/uyeler" className="text-xs text-[#0d1b3e]/35 hover:text-[#0d1b3e] transition-colors font-semibold">
                Üyelere Git →
              </Link>
            </div>
            <div className="p-6 space-y-4">
              {departments.map((d) => (
                <div key={d}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-[#0d1b3e]/70">{d}</span>
                    <span className="text-xs font-bold text-[#0d1b3e]/35">0 üye</span>
                  </div>
                  <div className="h-2 bg-[#f4f6fa] rounded-full overflow-hidden border border-[#e8ecf3]">
                    <div className="h-full w-0 bg-[#0d1b3e]/20 rounded-full" />
                  </div>
                </div>
              ))}
              <p className="text-xs text-[#0d1b3e]/25 text-center pt-2">
                Üyeler eklendikçe grafik güncellenir.
              </p>
            </div>
          </div>

          {/* Başvuru Durum Dağılımı */}
          <div className="bg-white border border-[#e8ecf3] rounded-2xl">
            <div className="px-6 py-4 border-b border-[#e8ecf3] flex items-center justify-between">
              <h3 className="font-bold text-[#0d1b3e] text-sm">Başvuru Durumları</h3>
              <Link href="/admin/basvurular" className="text-xs text-[#0d1b3e]/35 hover:text-[#0d1b3e] transition-colors font-semibold">
                Başvurulara Git →
              </Link>
            </div>
            <div className="p-6 space-y-3">
              {statusList.map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-2.5 h-2.5 rounded-full ${s.dot}`} />
                    <span className="text-sm text-[#0d1b3e]/60 font-medium">{s.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 bg-[#f4f6fa] rounded-full overflow-hidden border border-[#e8ecf3]">
                      <div className="h-full w-0 rounded-full" style={{ background: "currentColor" }} />
                    </div>
                    <span className="text-xs font-bold text-[#0d1b3e]/30 w-4 text-right">0</span>
                  </div>
                </div>
              ))}
              <p className="text-xs text-[#0d1b3e]/25 text-center pt-3">
                Başvurular geldikçe grafik güncellenir.
              </p>
            </div>
          </div>
        </div>

        {/* Site İstatistikleri */}
        <div className="bg-white border border-[#e8ecf3] rounded-2xl">
          <div className="px-6 py-4 border-b border-[#e8ecf3] flex items-center justify-between">
            <h3 className="font-bold text-[#0d1b3e] text-sm">Site İstatistikleri (Ana Sayfa)</h3>
            <Link href="/admin/istatistikler" className="text-xs text-[#0d1b3e]/35 hover:text-[#0d1b3e] transition-colors font-semibold">
              Düzenle →
            </Link>
          </div>
          <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.id} className="text-center bg-[#f4f6fa] border border-[#e8ecf3] rounded-2xl p-5">
                <div className="text-3xl font-black text-[#0d1b3e] mb-1">{s.value}{s.suffix}</div>
                <div className="text-xs text-[#0d1b3e]/35 font-semibold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hızlı Linkler */}
        <div className="bg-white border border-[#e8ecf3] rounded-2xl">
          <div className="px-6 py-4 border-b border-[#e8ecf3]">
            <h3 className="font-bold text-[#0d1b3e] text-sm">Hızlı Yönetim</h3>
          </div>
          <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: "Başvurular",    href: "/admin/basvurular",    icon: FileText },
              { label: "Üyeler",        href: "/admin/uyeler",         icon: Users },
              { label: "Duyurular",     href: "/admin/duyurular",      icon: Bell },
              { label: "İstatistikler", href: "/admin/istatistikler",  icon: TrendingUp },
              { label: "Ayarlar",       href: "/admin/ayarlar",        icon: BarChart2 },
              { label: "Ana Sayfa",     href: "/",                     icon: TrendingUp },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-[#e8ecf3] hover:border-[#0d1b3e]/20 hover:bg-[#f4f6fa] transition-all text-center group"
              >
                <l.icon size={18} className="text-[#0d1b3e]/40 group-hover:text-[#0d1b3e] transition-colors" />
                <span className="text-xs font-bold text-[#0d1b3e]/50 group-hover:text-[#0d1b3e] transition-colors">{l.label}</span>
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
