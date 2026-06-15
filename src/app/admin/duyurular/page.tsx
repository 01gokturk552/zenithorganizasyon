"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2, Edit2, Eye, EyeOff, X, BellOff } from "lucide-react";
import {
  getAnnouncements, addAnnouncement, updateAnnouncement, deleteAnnouncement,
  type Announcement,
} from "@/lib/db";

const categories = ["Duyuru", "Etkinlik", "Teknoloji", "Haberler", "Sektör"];

const categoryColors: Record<string, string> = {
  "Duyuru":    "bg-blue-50 text-blue-700 border-blue-200",
  "Etkinlik":  "bg-green-50 text-green-700 border-green-200",
  "Teknoloji": "bg-purple-50 text-purple-700 border-purple-200",
  "Haberler":  "bg-amber-50 text-amber-700 border-amber-200",
  "Sektör":    "bg-indigo-50 text-indigo-700 border-indigo-200",
};

export default function AdminDuyurularPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({ title: "", content: "", category: "Duyuru", shown: true });

  const reload = () => getAnnouncements().then(setAnnouncements);

  useEffect(() => { reload(); }, []);

  const resetForm = () => {
    setForm({ title: "", content: "", category: "Duyuru", shown: true });
    setEditId(null);
    setShowForm(false);
  };

  const handleSave = async () => {
    if (!form.title.trim()) return;
    if (editId !== null) {
      await updateAnnouncement(editId, form);
    } else {
      await addAnnouncement({ ...form, date: new Date().toLocaleDateString("tr-TR") });
    }
    await reload();
    resetForm();
  };

  const handleEdit = (a: Announcement) => {
    setForm({ title: a.title, content: a.content, category: a.category, shown: a.shown });
    setEditId(a.id);
    setShowForm(true);
  };

  const toggleShown = async (id: number, current: boolean) => {
    await updateAnnouncement(id, { shown: !current });
    await reload();
  };

  const handleDelete = async (id: number) => {
    await deleteAnnouncement(id);
    await reload();
  };

  const visibleCount = announcements.filter((a) => a.shown).length;

  return (
    <div className="min-h-screen bg-[#f4f6fa]">

      <header className="bg-white border-b border-[#e8ecf3] h-[64px] flex items-center px-6 gap-4">
        <Link href="/admin" className="p-2 hover:bg-[#f4f6fa] rounded-xl transition-colors">
          <ArrowLeft size={18} className="text-[#0d1b3e]/60" />
        </Link>
        <div>
          <p className="text-xs text-[#0d1b3e]/35 font-medium">Admin Panel</p>
          <h1 className="font-black text-[#0d1b3e] text-base leading-none">Duyuru Yönetimi</h1>
        </div>
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="ml-auto flex items-center gap-2 bg-[#0d1b3e] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#152552] transition-all"
        >
          <Plus size={15} /> Duyuru Ekle
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-7">

        {/* Özet */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Toplam",  value: announcements.length,                         color: "text-[#0d1b3e]" },
            { label: "Yayında", value: visibleCount,                                 color: "text-emerald-600" },
            { label: "Gizli",   value: announcements.length - visibleCount,          color: "text-[#0d1b3e]/40" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-[#e8ecf3] rounded-2xl p-4 text-center">
              <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-xs text-[#0d1b3e]/35 font-medium mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bilgi notu */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 mb-5 text-xs text-blue-700 font-medium">
          Yayında işaretlenen duyurular sitenin üst kısmında bir banner olarak ziyaretçilere gösterilir.
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-white border border-[#e8ecf3] rounded-2xl p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-[#0d1b3e]">{editId !== null ? "Duyuruyu Düzenle" : "Yeni Duyuru"}</h3>
              <button onClick={resetForm} className="p-1.5 hover:bg-[#f4f6fa] rounded-lg transition-colors">
                <X size={16} className="text-[#0d1b3e]/40" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e]/40 uppercase tracking-wider mb-1.5">Başlık *</label>
                <input
                  type="text"
                  placeholder="Duyuru başlığı..."
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full border border-[#e8ecf3] focus:border-[#0d1b3e]/30 rounded-xl px-4 py-2.5 text-sm text-[#0d1b3e] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e]/40 uppercase tracking-wider mb-1.5">İçerik (opsiyonel)</label>
                <textarea
                  placeholder="Kısa açıklama..."
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  rows={2}
                  className="w-full border border-[#e8ecf3] focus:border-[#0d1b3e]/30 rounded-xl px-4 py-2.5 text-sm text-[#0d1b3e] outline-none resize-none"
                />
              </div>
              <div className="flex gap-4 flex-wrap">
                <div>
                  <label className="block text-xs font-bold text-[#0d1b3e]/40 uppercase tracking-wider mb-1.5">Kategori</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="border border-[#e8ecf3] focus:border-[#0d1b3e]/30 rounded-xl px-4 py-2.5 text-sm text-[#0d1b3e] outline-none bg-white"
                  >
                    {categories.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="flex items-end">
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.shown}
                      onChange={(e) => setForm({ ...form, shown: e.target.checked })}
                      className="w-4 h-4 accent-[#0d1b3e]"
                    />
                    <span className="text-sm text-[#0d1b3e]/60 font-medium">Sitede Yayınla</span>
                  </label>
                </div>
              </div>
              <div className="flex gap-3 pt-1">
                <button onClick={handleSave} className="bg-[#0d1b3e] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#152552] transition-all">
                  {editId !== null ? "Güncelle" : "Yayınla"}
                </button>
                <button onClick={resetForm} className="border border-[#e8ecf3] text-[#0d1b3e]/60 px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#f4f6fa] transition-all">
                  İptal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Liste */}
        <div className="bg-white rounded-2xl border border-[#e8ecf3] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e8ecf3]">
            <span className="font-bold text-[#0d1b3e] text-sm">Duyurular</span>
          </div>

          {announcements.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-6">
              <div className="w-14 h-14 bg-[#f4f6fa] border border-[#e8ecf3] rounded-2xl flex items-center justify-center mb-4">
                <BellOff size={22} className="text-[#0d1b3e]/25" />
              </div>
              <p className="text-[#0d1b3e]/50 font-semibold text-sm mb-1">Henüz duyuru eklenmedi</p>
              <p className="text-[#0d1b3e]/30 text-xs text-center">
                "Duyuru Ekle" butonunu kullanarak ilk duyuruyu oluşturun.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#f4f6fa]">
              {announcements.map((a) => (
                <div key={a.id} className="flex items-start justify-between px-6 py-4 hover:bg-[#f9fafc] transition-colors gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${a.shown ? "bg-emerald-400" : "bg-gray-300"}`} />
                    <div className="min-w-0">
                      <div className="font-semibold text-[#0d1b3e] text-sm">{a.title}</div>
                      {a.content && (
                        <div className="text-[#0d1b3e]/40 text-xs mt-0.5 line-clamp-1">{a.content}</div>
                      )}
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${categoryColors[a.category] ?? "bg-gray-50 text-gray-600 border-gray-200"}`}>
                          {a.category}
                        </span>
                        <span className="text-[#0d1b3e]/25 text-xs">{a.date}</span>
                        {!a.shown && <span className="text-[10px] font-bold text-[#0d1b3e]/25">· Gizli</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => toggleShown(a.id, a.shown)}
                      className="p-1.5 hover:bg-[#f4f6fa] rounded-lg transition-colors"
                      title={a.shown ? "Gizle" : "Yayınla"}
                    >
                      {a.shown
                        ? <Eye size={14} className="text-emerald-500" />
                        : <EyeOff size={14} className="text-[#0d1b3e]/30" />}
                    </button>
                    <button onClick={() => handleEdit(a)} className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit2 size={14} className="text-blue-500" />
                    </button>
                    <button onClick={() => handleDelete(a.id)} className="p-1.5 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={14} className="text-red-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
