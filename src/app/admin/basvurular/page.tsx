"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, Search, Eye, CheckCircle, XCircle,
  MessageSquare, Download, Users, FileX
} from "lucide-react";

type Application = {
  id: number;
  name: string;
  dept: string;
  date: string;
  status: string;
  email: string;
  city: string;
};

const statusColors: Record<string, string> = {
  "Beklemede": "bg-amber-50 text-amber-700 border-amber-200",
  "İnceleniyor": "bg-blue-50 text-blue-700 border-blue-200",
  "Mülakat Aşamasında": "bg-purple-50 text-purple-700 border-purple-200",
  "Kabul Edildi": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Reddedildi": "bg-red-50 text-red-700 border-red-200",
};

const depts = ["Tümü", "PR", "Saha", "Press", "Güvenlik", "İK", "Finans", "IT"];
const statuses = ["Tümü", "Beklemede", "İnceleniyor", "Mülakat Aşamasında", "Kabul Edildi", "Reddedildi"];

export default function AdminBasvurularPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("Tümü");
  const [status, setStatus] = useState("Tümü");
  const [selected, setSelected] = useState<number[]>([]);
  const [applications] = useState<Application[]>([]);

  const filtered = applications.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === "Tümü" || a.dept === dept;
    const matchStatus = status === "Tümü" || a.status === status;
    return matchSearch && matchDept && matchStatus;
  });

  const toggleSelect = (id: number) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#f4f6fa]">

      <header className="bg-white border-b border-[#e8ecf3] h-[64px] flex items-center px-6 gap-4">
        <Link href="/admin" className="p-2 hover:bg-[#f4f6fa] rounded-xl transition-colors">
          <ArrowLeft size={18} className="text-[#0d1b3e]/60" />
        </Link>
        <div>
          <p className="text-xs text-[#0d1b3e]/35 font-medium">Admin Panel</p>
          <h1 className="font-black text-[#0d1b3e] text-base leading-none">Başvuru Yönetimi</h1>
        </div>
        <button className="ml-auto flex items-center gap-2 border border-[#e8ecf3] text-[#0d1b3e]/60 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#f4f6fa] transition-all">
          <Download size={15} /> CSV İndir
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-7">

        {/* Filtreler */}
        <div className="bg-white border border-[#e8ecf3] rounded-2xl p-4 mb-5 flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-48">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0d1b3e]/30" />
            <input
              type="text"
              placeholder="İsim veya e-posta ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-4 py-2.5 text-sm border border-[#e8ecf3] rounded-xl focus:outline-none focus:border-[#0d1b3e]/30 w-full bg-[#f4f6fa] text-[#0d1b3e] placeholder-[#0d1b3e]/30"
            />
          </div>
          <select
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            className="text-sm border border-[#e8ecf3] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#0d1b3e]/30 bg-[#f4f6fa] text-[#0d1b3e]"
          >
            {depts.map((d) => <option key={d}>{d}</option>)}
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="text-sm border border-[#e8ecf3] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#0d1b3e]/30 bg-[#f4f6fa] text-[#0d1b3e]"
          >
            {statuses.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        {/* Toplu işlemler */}
        {selected.length > 0 && (
          <div className="bg-[#0d1b3e] rounded-xl px-5 py-3.5 mb-4 flex items-center justify-between">
            <span className="text-white text-sm font-semibold">{selected.length} başvuru seçildi</span>
            <div className="flex gap-2">
              <button className="bg-emerald-500 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-emerald-600 transition-colors flex items-center gap-1.5">
                <CheckCircle size={13} /> Onayla
              </button>
              <button className="bg-red-500 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors flex items-center gap-1.5">
                <XCircle size={13} /> Reddet
              </button>
              <button className="bg-blue-500 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors flex items-center gap-1.5">
                <Users size={13} /> Departmana Aktar
              </button>
            </div>
          </div>
        )}

        {/* Tablo */}
        <div className="bg-white rounded-2xl border border-[#e8ecf3] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e8ecf3] flex items-center justify-between">
            <span className="font-bold text-[#0d1b3e] text-sm">Başvurular</span>
            <span className="text-xs text-[#0d1b3e]/35 font-semibold bg-[#f4f6fa] border border-[#e8ecf3] px-2.5 py-1 rounded-full">
              {filtered.length} kayıt
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-6">
              <div className="w-14 h-14 bg-[#f4f6fa] border border-[#e8ecf3] rounded-2xl flex items-center justify-center mb-4">
                <FileX size={22} className="text-[#0d1b3e]/25" />
              </div>
              <p className="text-[#0d1b3e]/50 font-semibold text-sm mb-1">
                {search || dept !== "Tümü" || status !== "Tümü"
                  ? "Filtrelerle eşleşen başvuru bulunamadı"
                  : "Henüz başvuru alınmadı"}
              </p>
              <p className="text-[#0d1b3e]/30 text-xs text-center max-w-xs leading-relaxed">
                {search || dept !== "Tümü" || status !== "Tümü"
                  ? "Farklı filtreler deneyin"
                  : <>Siteye gelen başvurular burada görünecek. Başvuru formu{" "}<Link href="/basvuru" className="underline hover:text-[#0d1b3e]/50" target="_blank">/basvuru</Link> adresinde.</>}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e8ecf3] bg-[#f4f6fa]">
                    <th className="w-12 px-5 py-3">
                      <input
                        type="checkbox"
                        onChange={(e) => setSelected(e.target.checked ? filtered.map((a) => a.id) : [])}
                        className="w-4 h-4 accent-[#0d1b3e]"
                      />
                    </th>
                    <th className="text-left px-5 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Ad Soyad</th>
                    <th className="text-left px-5 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">E-posta</th>
                    <th className="text-left px-5 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Şehir</th>
                    <th className="text-left px-5 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Departman</th>
                    <th className="text-left px-5 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Tarih</th>
                    <th className="text-left px-5 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Durum</th>
                    <th className="px-5 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f4f6fa]">
                  {filtered.map((app) => (
                    <tr key={app.id} className="hover:bg-[#f9fafc] transition-colors">
                      <td className="px-5 py-3">
                        <input
                          type="checkbox"
                          checked={selected.includes(app.id)}
                          onChange={() => toggleSelect(app.id)}
                          className="w-4 h-4 accent-[#0d1b3e]"
                        />
                      </td>
                      <td className="px-5 py-3 font-bold text-[#0d1b3e] text-sm">{app.name}</td>
                      <td className="px-5 py-3 text-[#0d1b3e]/50 text-sm">{app.email}</td>
                      <td className="px-5 py-3 text-[#0d1b3e]/50 text-sm">{app.city}</td>
                      <td className="px-5 py-3 text-[#0d1b3e]/50 text-sm">{app.dept}</td>
                      <td className="px-5 py-3 text-[#0d1b3e]/40 text-sm">{app.date}</td>
                      <td className="px-5 py-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${statusColors[app.status] || ""}`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-1.5">
                          <button className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors" title="İncele">
                            <Eye size={14} className="text-blue-500" />
                          </button>
                          <button className="p-1.5 hover:bg-emerald-50 rounded-lg transition-colors" title="Onayla">
                            <CheckCircle size={14} className="text-emerald-500" />
                          </button>
                          <button className="p-1.5 hover:bg-red-50 rounded-lg transition-colors" title="Reddet">
                            <XCircle size={14} className="text-red-400" />
                          </button>
                          <button className="p-1.5 hover:bg-[#f4f6fa] rounded-lg transition-colors" title="Not Ekle">
                            <MessageSquare size={14} className="text-[#0d1b3e]/30" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
