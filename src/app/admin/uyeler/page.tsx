"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2, Edit2, Search, UserCheck } from "lucide-react";

const allMembers = [
  { id: 1, name: "Ali Yılmaz", dept: "PR", role: "Koordinatör", email: "ali@mail.com", status: "Aktif", joined: "2024-01-15" },
  { id: 2, name: "Ayşe Kaya", dept: "IT", role: "Geliştirici", email: "ayse@mail.com", status: "Aktif", joined: "2024-02-20" },
  { id: 3, name: "Mehmet Çelik", dept: "Saha", role: "Koordinatör", email: "mehmet@mail.com", status: "İzinli", joined: "2024-03-10" },
  { id: 4, name: "Fatma Demir", dept: "Press", role: "Fotoğrafçı", email: "fatma@mail.com", status: "Aktif", joined: "2024-01-05" },
  { id: 5, name: "Emre Arslan", dept: "Güvenlik", role: "Personel", email: "emre@mail.com", status: "Aktif", joined: "2024-04-01" },
  { id: 6, name: "Zeynep Şahin", dept: "Finans", role: "Analist", email: "zeynep@mail.com", status: "Aktif", joined: "2024-02-15" },
  { id: 7, name: "Burak Kara", dept: "İK", role: "Uzman", email: "burak@mail.com", status: "Pasif", joined: "2023-12-01" },
];

const depts = ["Tümü", "PR", "IT", "Saha", "Press", "Güvenlik", "Finans", "İK"];

export default function AdminUyelerPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("Tümü");
  const [members, setMembers] = useState(allMembers);

  const filtered = members.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === "Tümü" || m.dept === dept;
    return matchSearch && matchDept;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6 gap-4">
        <Link href="/admin" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <ArrowLeft size={20} className="text-[#0f1f4b]" />
        </Link>
        <h1 className="font-black text-[#0f1f4b] text-lg">Üye Yönetimi</h1>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6 flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-52">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Üye ara..."
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
          <button className="flex items-center gap-2 bg-[#0f1f4b] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1a3278] transition-all">
            <Plus size={14} /> Üye Ekle
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <span className="font-bold text-[#0f1f4b]">Üyeler ({filtered.length})</span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Üye</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Departman</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Rol</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Durum</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Katılım</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((m) => (
                <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#0f1f4b] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{m.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-medium text-[#0f1f4b] text-sm">{m.name}</div>
                        <div className="text-gray-400 text-xs">{m.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">{m.dept}</td>
                  <td className="px-5 py-3 text-sm text-gray-500">{m.role}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      m.status === "Aktif" ? "bg-green-100 text-green-800" :
                      m.status === "İzinli" ? "bg-yellow-100 text-yellow-800" :
                      "bg-gray-100 text-gray-600"
                    }`}>
                      {m.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">{m.joined}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1.5">
                      <button className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 size={14} className="text-blue-600" />
                      </button>
                      <button className="p-1.5 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={14} className="text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
