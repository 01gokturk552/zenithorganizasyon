"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2, Edit2, Eye, EyeOff } from "lucide-react";

const initialAnnouncements = [
  { id: 1, title: "Yeni Sezon Ekip Alımları Başladı", date: "2024-06-10", shown: true, category: "Duyuru" },
  { id: 2, title: "Mega Fest 2024 Tamamlandı", date: "2024-06-05", shown: true, category: "Etkinlik" },
  { id: 3, title: "IT Sistemi Devreye Alındı", date: "2024-06-01", shown: false, category: "Teknoloji" },
];

export default function AdminDuyurularPage() {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", category: "Duyuru", shown: true });

  const toggleShown = (id: number) => {
    setAnnouncements((prev) => prev.map((a) => a.id === id ? { ...a, shown: !a.shown } : a));
  };

  const deleteAnnouncement = (id: number) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
  };

  const addAnnouncement = () => {
    if (!form.title) return;
    setAnnouncements((prev) => [
      { id: Date.now(), title: form.title, date: new Date().toISOString().split("T")[0], shown: form.shown, category: form.category },
      ...prev,
    ]);
    setForm({ title: "", category: "Duyuru", shown: true });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6 gap-4">
        <Link href="/admin" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <ArrowLeft size={20} className="text-[#0f1f4b]" />
        </Link>
        <h1 className="font-black text-[#0f1f4b] text-lg">Duyuru Yönetimi</h1>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-[#0f1f4b] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1a3278] transition-all"
          >
            <Plus size={16} /> Duyuru Ekle
          </button>
        </div>

        {showForm && (
          <div className="bg-white border border-[#0f1f4b]/10 rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-[#0f1f4b] mb-4">Yeni Duyuru</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Duyuru başlığı..."
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0f1f4b]"
              />
              <div className="flex gap-4">
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="border border-[#0f1f4b]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0f1f4b]"
                >
                  {["Duyuru", "Etkinlik", "Teknoloji", "Haberler"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <label className="flex items-center gap-2 text-sm text-[#0f1f4b]/70">
                  <input
                    type="checkbox"
                    checked={form.shown}
                    onChange={(e) => setForm({ ...form, shown: e.target.checked })}
                    className="w-4 h-4 accent-[#0f1f4b]"
                  />
                  Anasayfada Göster
                </label>
              </div>
              <div className="flex gap-3">
                <button onClick={addAnnouncement} className="bg-[#0f1f4b] text-white px-5 py-2 rounded-xl text-sm font-semibold">
                  Kaydet
                </button>
                <button onClick={() => setShowForm(false)} className="border border-[#0f1f4b]/20 text-[#0f1f4b] px-5 py-2 rounded-xl text-sm font-semibold">
                  İptal
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {announcements.map((a) => (
              <div key={a.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${a.shown ? "bg-green-500" : "bg-gray-300"}`} />
                  <div>
                    <div className="font-medium text-[#0f1f4b] text-sm">{a.title}</div>
                    <div className="text-gray-400 text-xs">{a.category} · {a.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleShown(a.id)}
                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    title={a.shown ? "Gizle" : "Göster"}
                  >
                    {a.shown ? <Eye size={14} className="text-green-600" /> : <EyeOff size={14} className="text-gray-400" />}
                  </button>
                  <button className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit2 size={14} className="text-blue-600" />
                  </button>
                  <button
                    onClick={() => deleteAnnouncement(a.id)}
                    className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={14} className="text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
