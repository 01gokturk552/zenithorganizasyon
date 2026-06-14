"use client";
import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard, Users, FileText, Bell, Settings, LogOut,
  Search, Menu, X, BarChart2, ChevronRight, Plus,
  FileX, UserX, InboxIcon, ArrowUpRight, Shield,
  Megaphone, Camera, Briefcase, DollarSign, Monitor
} from "lucide-react";

const navGroups = [
  {
    label: "Genel",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/admin", active: true },
      { icon: BarChart2, label: "Raporlar", href: "/admin/raporlar" },
    ],
  },
  {
    label: "Yönetim",
    items: [
      { icon: FileText, label: "Başvurular", href: "/admin/basvurular", badge: 0 },
      { icon: Users, label: "Üyeler", href: "/admin/uyeler" },
      { icon: Bell, label: "Duyurular", href: "/admin/duyurular" },
    ],
  },
  {
    label: "Departmanlar",
    items: [
      { icon: Megaphone, label: "PR", href: "/panel/pr" },
      { icon: Users, label: "Saha", href: "/panel/saha" },
      { icon: Camera, label: "Press", href: "/panel/press" },
      { icon: Shield, label: "Güvenlik", href: "/panel/guvenlik" },
      { icon: Briefcase, label: "İK", href: "/panel/ik" },
      { icon: DollarSign, label: "Finans", href: "/panel/finans" },
      { icon: Monitor, label: "IT", href: "/panel/it" },
    ],
  },
  {
    label: "Sistem",
    items: [
      { icon: Settings, label: "Ayarlar", href: "/admin/ayarlar" },
    ],
  },
];

const quickActions = [
  { label: "Duyuru Ekle", href: "/admin/duyurular", icon: Bell, color: "bg-blue-50 text-blue-700 border-blue-100" },
  { label: "Üye Ekle", href: "/admin/uyeler", icon: Users, color: "bg-green-50 text-green-700 border-green-100" },
  { label: "Başvuruları İncele", href: "/admin/basvurular", icon: FileText, color: "bg-purple-50 text-purple-700 border-purple-100" },
  { label: "Blog Yazısı", href: "/blog", icon: ArrowUpRight, color: "bg-orange-50 text-orange-700 border-orange-100" },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#f4f6fa] flex">

      {/* ── SİDEBAR ── */}
      <aside className={`${sidebarOpen ? "w-60" : "w-[68px]"} bg-[#0d1b3e] text-white transition-all duration-300 flex flex-col flex-shrink-0`}>

        {/* Logo */}
        <div className={`h-[64px] flex items-center border-b border-white/8 px-4 gap-3 ${!sidebarOpen && "justify-center"}`}>
          <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-[#0d1b3e] font-black text-sm">Z</span>
          </div>
          {sidebarOpen && (
            <div className="min-w-0">
              <div className="font-black text-sm leading-none">ZENITH</div>
              <div className="text-white/30 text-[9px] font-bold tracking-[0.15em] uppercase mt-0.5">Admin Panel</div>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-1.5 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0 ${sidebarOpen ? "ml-auto" : "hidden"}`}
          >
            <X size={15} className="text-white/60" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-2 overflow-y-auto space-y-5">
          {navGroups.map((group) => (
            <div key={group.label}>
              {sidebarOpen && (
                <p className="text-white/25 text-[10px] font-black uppercase tracking-widest px-3 mb-1.5">
                  {group.label}
                </p>
              )}
              <div className="space-y-0.5">
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${
                      "active" in item && item.active
                        ? "bg-white/15 text-white"
                        : "text-white/50 hover:bg-white/8 hover:text-white/90"
                    } ${!sidebarOpen && "justify-center"}`}
                    title={!sidebarOpen ? item.label : undefined}
                  >
                    <item.icon size={16} className="flex-shrink-0" />
                    {sidebarOpen && (
                      <span className="text-sm font-medium flex-1">{item.label}</span>
                    )}
                    {sidebarOpen && "badge" in item && item.badge === 0 && (
                      <span className="text-[10px] font-bold bg-white/10 text-white/40 px-1.5 py-0.5 rounded-full">0</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Collapse + Logout */}
        <div className="p-2 border-t border-white/8 space-y-1">
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-full flex items-center justify-center p-2.5 rounded-xl text-white/40 hover:bg-white/8 hover:text-white/70 transition-all"
            >
              <Menu size={16} />
            </button>
          )}
          <Link
            href="/giris"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/40 hover:bg-white/8 hover:text-red-300 transition-all ${!sidebarOpen && "justify-center"}`}
            title={!sidebarOpen ? "Çıkış Yap" : undefined}
          >
            <LogOut size={16} className="flex-shrink-0" />
            {sidebarOpen && <span className="text-sm font-medium">Çıkış Yap</span>}
          </Link>
        </div>
      </aside>

      {/* ── ANA İÇERİK ── */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">

        {/* Topbar */}
        <header className="bg-white border-b border-[#e8ecf3] h-[64px] flex items-center px-6 gap-4 flex-shrink-0">
          {!sidebarOpen && (
            <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-[#f4f6fa] rounded-xl transition-colors">
              <Menu size={18} className="text-[#0d1b3e]/60" />
            </button>
          )}
          <div>
            <p className="text-xs text-[#0d1b3e]/35 font-medium">Zenith Organizasyon</p>
            <h1 className="font-black text-[#0d1b3e] text-base leading-none">Dashboard</h1>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0d1b3e]/30" />
              <input
                type="text"
                placeholder="Ara..."
                className="pl-8 pr-4 py-2 text-sm border border-[#e8ecf3] rounded-xl focus:outline-none focus:border-[#0d1b3e]/30 w-48 bg-[#f4f6fa] text-[#0d1b3e] placeholder-[#0d1b3e]/30"
              />
            </div>
            <div className="w-9 h-9 bg-[#0d1b3e] rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-sm">A</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">

          {/* Hoş geldin */}
          <div className="mb-7">
            <h2 className="text-xl font-black text-[#0d1b3e]">Hoş geldiniz 👋</h2>
            <p className="text-[#0d1b3e]/45 text-sm mt-0.5">Zenith Organizasyon yönetim paneli</p>
          </div>

          {/* İstatistik kartları */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Toplam Başvuru", value: "0", sub: "Henüz başvuru yok", color: "text-[#0d1b3e]", dot: "bg-[#0d1b3e]/20" },
              { label: "Aktif Üye", value: "0", sub: "Üye eklenmedi", color: "text-emerald-600", dot: "bg-emerald-200" },
              { label: "Bekleyen", value: "0", sub: "İşlem gerekmiyor", color: "text-amber-600", dot: "bg-amber-200" },
              { label: "Duyuru", value: "0", sub: "Duyuru eklenmedi", color: "text-purple-600", dot: "bg-purple-200" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl border border-[#e8ecf3] p-5">
                <div className={`flex items-center gap-2 mb-3`}>
                  <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                  <span className="text-xs font-bold text-[#0d1b3e]/40 uppercase tracking-wider">{s.label}</span>
                </div>
                <div className={`text-3xl font-black ${s.color} mb-1`}>{s.value}</div>
                <div className="text-[#0d1b3e]/35 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-5">

            {/* Son Başvurular — Boş durum */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-[#e8ecf3] flex flex-col">
              <div className="px-6 py-4 border-b border-[#e8ecf3] flex items-center justify-between">
                <h3 className="font-bold text-[#0d1b3e] text-sm">Son Başvurular</h3>
                <Link
                  href="/admin/basvurular"
                  className="flex items-center gap-1 text-xs font-semibold text-[#0d1b3e]/40 hover:text-[#0d1b3e] transition-colors"
                >
                  Tümünü Gör <ChevronRight size={13} />
                </Link>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-16 px-6">
                <div className="w-14 h-14 bg-[#f4f6fa] border border-[#e8ecf3] rounded-2xl flex items-center justify-center mb-4">
                  <FileX size={22} className="text-[#0d1b3e]/25" />
                </div>
                <p className="text-[#0d1b3e]/50 font-semibold text-sm mb-1">Henüz başvuru yok</p>
                <p className="text-[#0d1b3e]/30 text-xs text-center max-w-xs leading-relaxed">
                  Siteye gelen başvurular burada listelenecek. Başvuru formu <Link href="/basvuru" className="underline hover:text-[#0d1b3e]/50">/basvuru</Link> adresinde.
                </p>
              </div>
            </div>

            {/* Sağ kolon */}
            <div className="space-y-5">

              {/* Hızlı İşlemler */}
              <div className="bg-white rounded-2xl border border-[#e8ecf3]">
                <div className="px-5 py-4 border-b border-[#e8ecf3]">
                  <h3 className="font-bold text-[#0d1b3e] text-sm">Hızlı İşlemler</h3>
                </div>
                <div className="p-4 grid grid-cols-2 gap-2.5">
                  {quickActions.map((a) => (
                    <Link
                      key={a.label}
                      href={a.href}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl border text-center transition-all hover:-translate-y-0.5 hover:shadow-sm ${a.color}`}
                    >
                      <a.icon size={16} />
                      <span className="text-xs font-bold leading-tight">{a.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Departman Durumu */}
              <div className="bg-white rounded-2xl border border-[#e8ecf3]">
                <div className="px-5 py-4 border-b border-[#e8ecf3]">
                  <h3 className="font-bold text-[#0d1b3e] text-sm">Departman Üyeleri</h3>
                </div>
                <div className="p-4 space-y-3">
                  {["PR", "Saha", "Press", "Güvenlik", "İK", "Finans", "IT"].map((dept) => (
                    <div key={dept} className="flex items-center justify-between">
                      <span className="text-sm text-[#0d1b3e]/60 font-medium">{dept}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-[#f4f6fa] rounded-full overflow-hidden">
                          <div className="h-full w-0 bg-[#0d1b3e]/20 rounded-full" />
                        </div>
                        <span className="text-xs text-[#0d1b3e]/30 w-6 text-right">0</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 pb-4">
                  <div className="flex items-start gap-3 bg-[#f4f6fa] border border-[#e8ecf3] rounded-xl p-3">
                    <UserX size={14} className="text-[#0d1b3e]/30 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-[#0d1b3e]/50">Henüz üye eklenmedi</p>
                      <Link href="/admin/uyeler" className="text-xs text-[#0d1b3e]/30 hover:text-[#0d1b3e]/60 transition-colors underline">
                        Üye ekle →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Site Linkleri */}
              <div className="bg-white rounded-2xl border border-[#e8ecf3]">
                <div className="px-5 py-4 border-b border-[#e8ecf3]">
                  <h3 className="font-bold text-[#0d1b3e] text-sm">Site Sayfaları</h3>
                </div>
                <div className="p-3 space-y-1">
                  {[
                    { label: "Ana Sayfa", href: "/" },
                    { label: "Hakkımızda", href: "/hakkimizda" },
                    { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
                    { label: "Referanslar", href: "/referanslar" },
                    { label: "Blog", href: "/blog" },
                    { label: "Başvuru Formu", href: "/basvuru" },
                  ].map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-sm text-[#0d1b3e]/55 hover:bg-[#f4f6fa] hover:text-[#0d1b3e] transition-all group"
                    >
                      {l.label}
                      <ArrowUpRight size={13} className="text-[#0d1b3e]/20 group-hover:text-[#0d1b3e]/50 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
