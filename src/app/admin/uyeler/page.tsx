"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2, Edit2, Search, UserX, X } from "lucide-react";
import { getMembers, addMember, updateMember, deleteMember, type Member } from "@/lib/db";

const depts = ["Tümü", "PR", "Saha", "Press", "Güvenlik", "İK", "Finans", "IT"];

const statusColors: Record<string, string> = {
  "Aktif":  "bg-emerald-50 text-emerald-700 border-emerald-200",
  "İzinli": "bg-amber-50 text-amber-700 border-amber-200",
  "Pasif":  "bg-gray-100 text-gray-500 border-gray-200",
};

export default function AdminUyelerPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept]     = useState("Tümü");
  const [members, setMembers] = useState<Member[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", dept: "PR", role: "", email: "", status: "Aktif" as Member["status"] });
  const [editId, setEditId] = useState<number | null>(null);

  const reload = () => getMembers().then(setMembers);

  useEffect(() => { reload(); }, []);

  const filtered = members.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === "Tümü" || m.dept === dept;
    return matchSearch && matchDept;
  });

  const handleSave = async () => {
    if (!form.name || !form.email) return;
    if (editId !== null) {
      await updateMember(editId, form);
      setEditId(null);
    } else {
      await addMember({ ...form, joined: new Date().toISOString().split("T")[0] });
    }
    await reload();
    setForm({ name: "", dept: "PR", role: "", email: "", status: "Aktif" });
    setShowForm(false);
  };

  const handleEdit = (m: Member) => {
    setForm({ name: m.name, dept: m.dept, role: m.role, email: m.email, status: m.status as Member["status"] });
    setEditId(m.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    await deleteMember(id);
    await reload();
  };

  return (
    <div className="min-h-screen bg-[#f4f6fa]">

      <header className="bg-white border-b border-[#e8ecf3] h-[64px] flex items-center px-6 gap-4">
        <Link href="/admin" className="p-2 hover:bg-[#f4f6fa] rounded-xl transition-colors">
          <ArrowLeft size={18} className="text-[#0d1b3e]/60" />
        </Link>
        <div>
          <p className="text-xs text-[#0d1b3e]/35 font-medium">Admin Panel</p>
          <h1 className="font-black text-[#0d1b3e] text-base leading-none">Üye Yönetimi</h1>
        </div>
        <button
          onClick={() => { setShowForm(true); setEditId(null); setForm({ name: "", dept: "PR", role: "", email: "", status: "Aktif" }); }}
          className="ml-auto flex items-center gap-2 bg-[#0d1b3e] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#152552] transition-all"
        >
          <Plus size={15} /> Üye Ekle
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-7">

        {/* Form */}
        {showForm && (
          <div className="bg-white border border-[#e8ecf3] rounded-2xl p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-[#0d1b3e]">{editId !== null ? "Üyeyi Düzenle" : "Yeni Üye Ekle"}</h3>
              <button onClick={() => setShowForm(false)} className="p-1.5 hover:bg-[#f4f6fa] rounded-lg transition-colors">
                <X size={16} className="text-[#0d1b3e]/40" />
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Ad Soyad *", key: "name",  type: "text",  placeholder: "Ad Soyad" },
                { label: "E-posta *",   key: "email", type: "email", placeholder: "ornek@mail.com" },
                { label: "Rol / Unvan", key: "role",  type: "text",  placeholder: "Koordinatör, Uzman..." },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-xs font-bold text-[#0d1b3e]/40 uppercase tracking-wider mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key as keyof typeof form] as string}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full border border-[#e8ecf3] focus:border-[#0d1b3e]/40 rounded-xl px-4 py-2.5 text-sm text-[#0d1b3e] outline-none bg-white"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e]/40 uppercase tracking-wider mb-1.5">Departman</label>
                <select value={form.dept} onChange={(e) => setForm({ ...form, dept: e.target.value })}
                  className="w-full border border-[#e8ecf3] focus:border-[#0d1b3e]/40 rounded-xl px-4 py-2.5 text-sm text-[#0d1b3e] outline-none bg-white">
                  {depts.slice(1).map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e]/40 uppercase tracking-wider mb-1.5">Durum</label>
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Member["status"] })}
                  className="w-full border border-[#e8ecf3] focus:border-[#0d1b3e]/40 rounded-xl px-4 py-2.5 text-sm text-[#0d1b3e] outline-none bg-white">
                  <option>Aktif</option>
                  <option>İzinli</option>
                  <option>Pasif</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={handleSave} className="bg-[#0d1b3e] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#152552] transition-all">
                {editId !== null ? "Güncelle" : "Kaydet"}
              </button>
              <button onClick={() => setShowForm(false)} className="border border-[#e8ecf3] text-[#0d1b3e]/60 px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#f4f6fa] transition-all">
                İptal
              </button>
            </div>
          </div>
        )}

        {/* Filtreler */}
        <div className="bg-white border border-[#e8ecf3] rounded-2xl p-4 mb-5 flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-48">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0d1b3e]/30" />
            <input type="text" placeholder="Üye ara..." value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-4 py-2.5 text-sm border border-[#e8ecf3] rounded-xl focus:outline-none focus:border-[#0d1b3e]/30 w-full bg-[#f4f6fa] text-[#0d1b3e] placeholder-[#0d1b3e]/30" />
          </div>
          <select value={dept} onChange={(e) => setDept(e.target.value)}
            className="text-sm border border-[#e8ecf3] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#0d1b3e]/30 bg-[#f4f6fa] text-[#0d1b3e]">
            {depts.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>

        {/* Tablo */}
        <div className="bg-white rounded-2xl border border-[#e8ecf3] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e8ecf3] flex items-center justify-between">
            <span className="font-bold text-[#0d1b3e] text-sm">Üyeler</span>
            <span className="text-xs text-[#0d1b3e]/35 font-semibold bg-[#f4f6fa] border border-[#e8ecf3] px-2.5 py-1 rounded-full">
              {filtered.length} kayıt
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-6">
              <div className="w-14 h-14 bg-[#f4f6fa] border border-[#e8ecf3] rounded-2xl flex items-center justify-center mb-4">
                <UserX size={22} className="text-[#0d1b3e]/25" />
              </div>
              <p className="text-[#0d1b3e]/50 font-semibold text-sm mb-1">
                {search || dept !== "Tümü" ? "Aramanızla eşleşen üye bulunamadı" : "Henüz üye eklenmedi"}
              </p>
              <p className="text-[#0d1b3e]/30 text-xs text-center">
                {search || dept !== "Tümü" ? "Farklı filtreler deneyin" : "Sağ üstteki «Üye Ekle» butonunu kullanın"}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e8ecf3] bg-[#f4f6fa]">
                    <th className="text-left px-6 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Üye</th>
                    <th className="text-left px-6 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Departman</th>
                    <th className="text-left px-6 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Rol</th>
                    <th className="text-left px-6 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Durum</th>
                    <th className="text-left px-6 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Katılım</th>
                    <th className="px-6 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f4f6fa]">
                  {filtered.map((m) => (
                    <tr key={m.id} className="hover:bg-[#f9fafc] transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-[#0d1b3e] rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-black text-sm">{m.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="font-bold text-[#0d1b3e] text-sm">{m.name}</div>
                            <div className="text-[#0d1b3e]/35 text-xs">{m.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#0d1b3e]/60">{m.dept}</td>
                      <td className="px-6 py-4 text-sm text-[#0d1b3e]/60">{m.role || "—"}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${statusColors[m.status]}`}>
                          {m.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#0d1b3e]/40">{m.joined}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          <button onClick={() => handleEdit(m)} className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors">
                            <Edit2 size={14} className="text-blue-500" />
                          </button>
                          <button onClick={() => handleDelete(m.id)} className="p-1.5 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 size={14} className="text-red-400" />
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
