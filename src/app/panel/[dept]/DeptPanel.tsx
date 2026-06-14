"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Users, ClipboardList, CheckSquare,
  LogOut, ArrowLeft, UserCheck, UserX, Clock,
  Plus, Trash2, Edit2, UserX as UserXIcon, ListX, InboxIcon
} from "lucide-react";

const deptInfo: Record<string, { title: string }> = {
  pr:       { title: "PR" },
  saha:     { title: "Saha" },
  press:    { title: "Press" },
  guvenlik: { title: "Güvenlik" },
  ik:       { title: "İK" },
  finans:   { title: "Finans" },
  it:       { title: "IT" },
};

const taskStatusColors: Record<string, string> = {
  "Devam Ediyor": "bg-blue-50 text-blue-700 border-blue-200",
  "Tamamlandı":   "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Bekliyor":     "bg-amber-50 text-amber-700 border-amber-200",
};

type Tab = "members" | "tasks" | "applications";

type Member = { id: number; name: string; role: string; status: string; joined: string };
type Task   = { id: number; title: string; assignee: string; due: string; status: string };
type Application = { id: number; name: string; date: string; status: string };

export default function DeptPanel({ dept }: { dept: string }) {
  const [activeTab, setActiveTab]         = useState<Tab>("members");
  const [members, setMembers]             = useState<Member[]>([]);
  const [tasks, setTasks]                 = useState<Task[]>([]);
  const [applications, setApplications]   = useState<Application[]>([]);

  const info = deptInfo[dept] || { title: dept.toUpperCase() };

  const tabs: { id: Tab; label: string; icon: typeof Users }[] = [
    { id: "members",      label: "Üyeler",     icon: Users },
    { id: "tasks",        label: "Görevler",   icon: CheckSquare },
    { id: "applications", label: "Başvurular", icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen bg-[#f4f6fa]">
      <header className="bg-[#0d1b3e] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/panel" className="p-2 hover:bg-white/10 rounded-xl transition-colors">
              <ArrowLeft size={18} />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center">
                <span className="text-[#0d1b3e] font-black text-sm">Z</span>
              </div>
              <div>
                <div className="font-black text-sm">{info.title} Başkanı Paneli</div>
                <div className="text-white/40 text-xs">Zenith Organizasyon</div>
              </div>
            </div>
          </div>
          <Link href="/giris" className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
            <LogOut size={15} /> Çıkış
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users,       label: "Toplam Üye",       value: members.length,                                      dot: "bg-blue-200" },
            { icon: UserCheck,   label: "Aktif Üye",        value: members.filter(m => m.status === "Aktif").length,    dot: "bg-emerald-200" },
            { icon: CheckSquare, label: "Açık Görev",       value: tasks.filter(t => t.status !== "Tamamlandı").length, dot: "bg-amber-200" },
            { icon: Clock,       label: "Bekleyen Başvuru", value: applications.length,                                  dot: "bg-purple-200" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-[#e8ecf3] p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                <span className="text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">{s.label}</span>
              </div>
              <div className="text-2xl font-black text-[#0d1b3e]">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 mb-5 bg-white rounded-2xl border border-[#e8ecf3] p-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 flex-1 justify-center py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-[#0d1b3e] text-white"
                  : "text-[#0d1b3e]/50 hover:text-[#0d1b3e]"
              }`}
            >
              <tab.icon size={15} /> {tab.label}
            </button>
          ))}
        </div>

        {/* İçerik */}
        <div className="bg-white rounded-2xl border border-[#e8ecf3] overflow-hidden">

          {/* ÜYELER */}
          {activeTab === "members" && (
            <>
              <div className="px-5 py-4 border-b border-[#e8ecf3] flex items-center justify-between">
                <h2 className="font-bold text-[#0d1b3e] text-sm">Ekip Üyeleri</h2>
                <button className="flex items-center gap-2 bg-[#0d1b3e] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#152552] transition-all">
                  <Plus size={13} /> Üye Ekle
                </button>
              </div>
              {members.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                  <div className="w-12 h-12 bg-[#f4f6fa] border border-[#e8ecf3] rounded-2xl flex items-center justify-center mb-3">
                    <UserXIcon size={20} className="text-[#0d1b3e]/20" />
                  </div>
                  <p className="text-[#0d1b3e]/45 font-semibold text-sm">Henüz üye eklenmedi</p>
                  <p className="text-[#0d1b3e]/25 text-xs mt-1">Admin panelinden veya yukarıdan üye ekleyebilirsiniz.</p>
                </div>
              ) : (
                <div className="divide-y divide-[#f4f6fa]">
                  {members.map((m) => (
                    <div key={m.id} className="flex items-center justify-between px-5 py-4 hover:bg-[#f9fafc] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-[#0d1b3e] rounded-xl flex items-center justify-center">
                          <span className="text-white font-black text-sm">{m.name.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-bold text-[#0d1b3e] text-sm">{m.name}</div>
                          <div className="text-[#0d1b3e]/35 text-xs">{m.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${m.status === "Aktif" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-gray-100 text-gray-500 border-gray-200"}`}>
                          {m.status}
                        </span>
                        <button className="p-1.5 hover:bg-blue-50 rounded-lg"><Edit2 size={13} className="text-blue-500" /></button>
                        <button
                          onClick={() => setMembers(prev => prev.filter(x => x.id !== m.id))}
                          className="p-1.5 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 size={13} className="text-red-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* GÖREVLER */}
          {activeTab === "tasks" && (
            <>
              <div className="px-5 py-4 border-b border-[#e8ecf3] flex items-center justify-between">
                <h2 className="font-bold text-[#0d1b3e] text-sm">Görev Listesi</h2>
                <button className="flex items-center gap-2 bg-[#0d1b3e] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#152552] transition-all">
                  <Plus size={13} /> Görev Ekle
                </button>
              </div>
              {tasks.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                  <div className="w-12 h-12 bg-[#f4f6fa] border border-[#e8ecf3] rounded-2xl flex items-center justify-center mb-3">
                    <ListX size={20} className="text-[#0d1b3e]/20" />
                  </div>
                  <p className="text-[#0d1b3e]/45 font-semibold text-sm">Henüz görev eklenmedi</p>
                  <p className="text-[#0d1b3e]/25 text-xs mt-1">Yukarıdaki butonu kullanarak görev oluşturun.</p>
                </div>
              ) : (
                <div className="divide-y divide-[#f4f6fa]">
                  {tasks.map((t) => (
                    <div key={t.id} className="flex items-center justify-between px-5 py-4 hover:bg-[#f9fafc] transition-colors">
                      <div>
                        <div className="font-bold text-[#0d1b3e] text-sm mb-1">{t.title}</div>
                        <div className="text-[#0d1b3e]/35 text-xs">Atanan: {t.assignee} · Bitiş: {t.due}</div>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${taskStatusColors[t.status] || ""}`}>
                        {t.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* BAŞVURULAR */}
          {activeTab === "applications" && (
            <>
              <div className="px-5 py-4 border-b border-[#e8ecf3]">
                <h2 className="font-bold text-[#0d1b3e] text-sm">Departman Başvuruları</h2>
              </div>
              {applications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                  <div className="w-12 h-12 bg-[#f4f6fa] border border-[#e8ecf3] rounded-2xl flex items-center justify-center mb-3">
                    <InboxIcon size={20} className="text-[#0d1b3e]/20" />
                  </div>
                  <p className="text-[#0d1b3e]/45 font-semibold text-sm">Bekleyen başvuru yok</p>
                  <p className="text-[#0d1b3e]/25 text-xs mt-1">Departmanınıza yönlendirilen başvurular burada görünecek.</p>
                </div>
              ) : (
                <div className="divide-y divide-[#f4f6fa]">
                  {applications.map((a) => (
                    <div key={a.id} className="flex items-center justify-between px-5 py-4 hover:bg-[#f9fafc] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-[#0d1b3e]/8 rounded-xl flex items-center justify-center">
                          <span className="text-[#0d1b3e] font-black text-sm">{a.name.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-bold text-[#0d1b3e] text-sm">{a.name}</div>
                          <div className="text-[#0d1b3e]/35 text-xs">{a.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2.5 py-1 rounded-full font-bold border bg-amber-50 text-amber-700 border-amber-200">{a.status}</span>
                        <button
                          onClick={() => setApplications(prev => prev.filter(x => x.id !== a.id))}
                          className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                        >
                          <UserCheck size={12} /> Kabul
                        </button>
                        <button
                          onClick={() => setApplications(prev => prev.filter(x => x.id !== a.id))}
                          className="text-xs bg-red-50 text-red-700 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 border border-red-200 hover:bg-red-100 transition-colors"
                        >
                          <UserX size={12} /> Reddet
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
