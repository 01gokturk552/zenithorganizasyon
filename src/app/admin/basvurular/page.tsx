"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, Search, Filter, Eye, CheckCircle, XCircle,
  MessageSquare, Download, Users
} from "lucide-react";

const allApplications = [
  { id: 1, name: "Ali Yılmaz", dept: "PR", date: "2024-06-10", status: "Beklemede", email: "ali@mail.com", city: "İstanbul" },
  { id: 2, name: "Ayşe Kaya", dept: "IT", date: "2024-06-09", status: "İnceleniyor", email: "ayse@mail.com", city: "Ankara" },
  { id: 3, name: "Mehmet Çelik", dept: "Saha", date: "2024-06-08", status: "Mülakat Aşamasında", email: "mehmet@mail.com", city: "İzmir" },
  { id: 4, name: "Fatma Demir", dept: "Press", date: "2024-06-07", status: "Kabul Edildi", email: "fatma@mail.com", city: "Bursa" },
  { id: 5, name: "Emre Arslan", dept: "Güvenlik", date: "2024-06-06", status: "Reddedildi", email: "emre@mail.com", city: "Adana" },
  { id: 6, name: "Zeynep Şahin", dept: "Finans", date: "2024-06-05", status: "Beklemede", email: "zeynep@mail.com", city: "Konya" },
  { id: 7, name: "Burak Kara", dept: "İK", date: "2024-06-04", status: "İnceleniyor", email: "burak@mail.com", city: "İstanbul" },
  { id: 8, name: "Selin Yıldız", dept: "IT", date: "2024-06-03", status: "Beklemede", email: "selin@mail.com", city: "İzmir" },
];

const statusColors: Record<string, string> = {
  "Beklemede": "bg-yellow-100 text-yellow-800",
  "İnceleniyor": "bg-blue-100 text-blue-800",
  "Mülakat Aşamasında": "bg-purple-100 text-purple-800",
  "Kabul Edildi": "bg-green-100 text-green-800",
  "Reddedildi": "bg-red-100 text-red-800",
};

const depts = ["Tümü", "PR", "IT", "Saha", "Press", "Güvenlik", "Finans", "İK"];
const statuses = ["Tümü", "Beklemede", "İnceleniyor", "Mülakat Aşamasında", "Kabul Edildi", "Reddedildi"];

export default function AdminBasvurularPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("Tümü");
  const [status, setStatus] = useState("Tümü");
  const [selected, setSelected] = useState<number[]>([]);

  const filtered = allApplications.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.email.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === "Tümü" || a.dept === dept;
    const matchStatus = status === "Tümü" || a.status === status;
    return matchSearch && matchDept && matchStatus;
  });

  const toggleSelect = (id: number) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6 gap-4">
        <Link href="/admin" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <ArrowLeft size={20} className="text-[#0f1f4b]" />
        </Link>
        <h1 className="font-black text-[#0f1f4b] text-lg">Başvuru Yönetimi</h1>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-1 min-w-52">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="İsim veya e-posta ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#0f1f4b] w-full"
              />
            </div>
            <select
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              className="text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#0f1f4b]"
            >
              {depts.map((d) => <option key={d}>{d}</option>)}
            </select>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#0f1f4b]"
            >
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm hover:border-[#0f1f4b] transition-colors">
              <Download size={14} /> CSV İndir
            </button>
          </div>
        </div>

        {/* Toplu işlemler */}
        {selected.length > 0 && (
          <div className="bg-[#0f1f4b] rounded-xl p-4 mb-4 flex items-center justify-between">
            <span className="text-white text-sm font-semibold">{selected.length} başvuru seçildi</span>
            <div className="flex gap-3">
              <button className="bg-green-500 text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Toplu Onayla
              </button>
              <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                Toplu Reddet
              </button>
              <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-1">
                <Users size={14} /> Departmana Aktar
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <span className="font-bold text-[#0f1f4b]">Başvurular ({filtered.length})</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="w-12 px-5 py-3">
                    <input
                      type="checkbox"
                      onChange={(e) => setSelected(e.target.checked ? filtered.map(a => a.id) : [])}
                      className="w-4 h-4 accent-[#0f1f4b]"
                    />
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Ad Soyad</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">E-posta</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Şehir</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Departman</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Tarih</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Durum</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3">
                      <input
                        type="checkbox"
                        checked={selected.includes(app.id)}
                        onChange={() => toggleSelect(app.id)}
                        className="w-4 h-4 accent-[#0f1f4b]"
                      />
                    </td>
                    <td className="px-5 py-3 font-medium text-[#0f1f4b] text-sm">{app.name}</td>
                    <td className="px-5 py-3 text-gray-500 text-sm">{app.email}</td>
                    <td className="px-5 py-3 text-gray-500 text-sm">{app.city}</td>
                    <td className="px-5 py-3 text-gray-500 text-sm">{app.dept}</td>
                    <td className="px-5 py-3 text-gray-500 text-sm">{app.date}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[app.status]}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors" title="İncele">
                          <Eye size={14} className="text-blue-600" />
                        </button>
                        <button className="p-1.5 hover:bg-green-50 rounded-lg transition-colors" title="Onayla">
                          <CheckCircle size={14} className="text-green-600" />
                        </button>
                        <button className="p-1.5 hover:bg-red-50 rounded-lg transition-colors" title="Reddet">
                          <XCircle size={14} className="text-red-500" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors" title="Not Ekle">
                          <MessageSquare size={14} className="text-gray-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
