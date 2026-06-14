"use client";
import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard, Users, FileText, Bell, Settings, LogOut,
  TrendingUp, Clock, CheckCircle, XCircle, Eye, Search,
  ChevronDown, Menu, X, BarChart2, UserCheck, AlertCircle
} from "lucide-react";

const mockApplications = [
  { id: 1, name: "Ali Yılmaz", dept: "PR", date: "2024-06-10", status: "Beklemede" },
  { id: 2, name: "Ayşe Kaya", dept: "IT", date: "2024-06-09", status: "İnceleniyor" },
  { id: 3, name: "Mehmet Çelik", dept: "Saha", date: "2024-06-08", status: "Mülakat Aşamasında" },
  { id: 4, name: "Fatma Demir", dept: "Press", date: "2024-06-07", status: "Kabul Edildi" },
  { id: 5, name: "Emre Arslan", dept: "Güvenlik", date: "2024-06-06", status: "Reddedildi" },
  { id: 6, name: "Zeynep Şahin", dept: "Finans", date: "2024-06-05", status: "Beklemede" },
];

const statusColors: Record<string, string> = {
  "Beklemede": "bg-yellow-100 text-yellow-800",
  "İnceleniyor": "bg-blue-100 text-blue-800",
  "Mülakat Aşamasında": "bg-purple-100 text-purple-800",
  "Kabul Edildi": "bg-green-100 text-green-800",
  "Reddedildi": "bg-red-100 text-red-800",
};

const deptStats = [
  { dept: "PR", count: 12, active: 8 },
  { dept: "Saha", count: 18, active: 15 },
  { dept: "Press", count: 6, active: 5 },
  { dept: "Güvenlik", count: 10, active: 9 },
  { dept: "İK", count: 4, active: 4 },
  { dept: "Finans", count: 3, active: 3 },
  { dept: "IT", count: 7, active: 6 },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin", active: true },
  { icon: FileText, label: "Başvurular", href: "/admin/basvurular" },
  { icon: Users, label: "Üyeler", href: "/admin/uyeler" },
  { icon: Bell, label: "Duyurular", href: "/admin/duyurular" },
  { icon: BarChart2, label: "Raporlar", href: "/admin/raporlar" },
  { icon: Settings, label: "Ayarlar", href: "/admin/ayarlar" },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const filtered = mockApplications.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.dept.toLowerCase().includes(search.toLowerCase());
    const matchStatus = selectedStatus === "all" || a.status === selectedStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-16"} bg-[#0f1f4b] text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between h-16 border-b border-white/10">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0f1f4b] font-black text-sm">Z</span>
              </div>
              <span className="font-black text-sm">Admin Panel</span>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                item.active ? "bg-white/20 text-white" : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon size={18} />
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-white/10">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/60 hover:bg-white/10 hover:text-white transition-all w-full">
            <LogOut size={18} />
            {sidebarOpen && <span className="text-sm font-medium">Çıkış Yap</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
          <h1 className="font-black text-[#0f1f4b] text-lg">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#0f1f4b] w-52"
              />
            </div>
            <div className="w-9 h-9 bg-[#0f1f4b] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: FileText, label: "Toplam Başvuru", value: "248", change: "+12", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: UserCheck, label: "Aktif Üye", value: "50", change: "+3", color: "text-green-600", bg: "bg-green-50" },
              { icon: Clock, label: "Bekleyen", value: "18", change: "-2", color: "text-yellow-600", bg: "bg-yellow-50" },
              { icon: TrendingUp, label: "Bu Ay Başvuru", value: "34", change: "+8", color: "text-purple-600", bg: "bg-purple-50" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <stat.icon size={20} className={stat.color} />
                </div>
                <div className="text-2xl font-black text-[#0f1f4b] mb-1">{stat.value}</div>
                <div className="text-gray-500 text-xs mb-1">{stat.label}</div>
                <div className={`text-xs font-semibold ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                  {stat.change} bu hafta
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Başvurular Tablosu */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-[#0f1f4b]">Son Başvurular</h2>
                <div className="flex items-center gap-2">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#0f1f4b] appearance-none"
                  >
                    <option value="all">Tüm Durumlar</option>
                    <option value="Beklemede">Beklemede</option>
                    <option value="İnceleniyor">İnceleniyor</option>
                    <option value="Mülakat Aşamasında">Mülakat</option>
                    <option value="Kabul Edildi">Kabul Edildi</option>
                    <option value="Reddedildi">Reddedildi</option>
                  </select>
                  <ChevronDown size={14} className="text-gray-400 -ml-6 pointer-events-none" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Ad Soyad</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Dept.</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Tarih</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Durum</th>
                      <th className="px-5 py-3" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filtered.map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-3 text-sm font-medium text-[#0f1f4b]">{app.name}</td>
                        <td className="px-5 py-3 text-sm text-gray-500">{app.dept}</td>
                        <td className="px-5 py-3 text-sm text-gray-500">{app.date}</td>
                        <td className="px-5 py-3">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[app.status]}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors" title="İncele">
                              <Eye size={14} className="text-blue-600" />
                            </button>
                            <button className="p-1.5 hover:bg-green-50 rounded-lg transition-colors" title="Onayla">
                              <CheckCircle size={14} className="text-green-600" />
                            </button>
                            <button className="p-1.5 hover:bg-red-50 rounded-lg transition-colors" title="Reddet">
                              <XCircle size={14} className="text-red-500" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-5 border-t border-gray-100">
                <Link href="/admin/basvurular" className="text-xs font-semibold text-[#0f1f4b] hover:text-[#1a3278] transition-colors">
                  Tüm başvuruları görüntüle →
                </Link>
              </div>
            </div>

            {/* Dept İstatistikleri */}
            <div className="bg-white rounded-2xl border border-gray-100">
              <div className="p-5 border-b border-gray-100">
                <h2 className="font-bold text-[#0f1f4b]">Departman Üyeleri</h2>
              </div>
              <div className="p-5 space-y-4">
                {deptStats.map((d) => (
                  <div key={d.dept}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-[#0f1f4b]">{d.dept}</span>
                      <span className="text-xs text-gray-500">{d.active}/{d.count}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0f1f4b] rounded-full transition-all"
                        style={{ width: `${(d.active / d.count) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 border-t border-gray-100">
                <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                  <AlertCircle size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-yellow-800">18 bekleyen başvuru</p>
                    <p className="text-xs text-yellow-600 mt-0.5">Değerlendirme gerekiyor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
