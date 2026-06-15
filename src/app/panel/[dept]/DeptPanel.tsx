"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users, ClipboardList, CheckSquare, LogOut, ArrowLeft,
  UserCheck, UserX, Clock, Plus, Trash2, Edit2,
  UserX as UserXIcon, ListX, InboxIcon
} from "lucide-react";
import {
  getApplications, updateApplicationStatus, deleteApplication,
  type Application, type AppStatus
} from "@/lib/applications";

const deptInfo: Record<string, { title: string }> = {
  pr:       { title: "PR" },
  saha:     { title: "Saha" },
  press:    { title: "Press" },
  guvenlik: { title: "Güvenlik" },
  ik:       { title: "İK" },
  finans:   { title: "Finans" },
  it:       { title: "IT" },
};

const statusColors: Record<string, string> = {
  "Beklemede":          "bg-amber-50 text-amber-700 border-amber-200",
  "İnceleniyor":        "bg-blue-50 text-blue-700 border-blue-200",
  "Mülakat Aşamasında": "bg-purple-50 text-purple-700 border-purple-200",
  "Kabul Edildi":       "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Reddedildi":         "bg-red-50 text-red-700 border-red-200",
};

const taskStatusColors: Record<string, string> = {
  "Devam Ediyor": "bg-blue-50 text-blue-700 border-blue-200",
  "Tamamlandı":   "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Bekliyor":     "bg-amber-50 text-amber-700 border-amber-200",
};

type Tab = "members" | "tasks" | "applications";
type Member = { id: number; name: string; role: string; status: string };
type Task   = { id: number; title: string; assignee: string; due: string; status: string };

export default function DeptPanel({ dept }: { dept: string }) {
  const [activeTab, setActiveTab] = useState<Tab>("applications");
  const [members, setMembers]     = useState<Member[]>([]);
  const [tasks, setTasks]         = useState<Task[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);

  const info = deptInfo[dept] || { title: dept.toUpperCase() };

  useEffect(() => {
    getApplications().then((all) => setApplications(all.filter((a) => a.dept === dept)));
  }, [dept]);

  const handleStatus = async (id: string, status: AppStatus) => {
    await updateApplicationStatus(id, status);
    setApplications((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  const handleDelete = async (id: string) => {
    await deleteApplication(id);
    setApplications((prev) => prev.filter((a) => a.id !== id));
  };

  const tabs: { id: Tab; label: string; icon: typeof Users }[] = [
    { id: "applications", label: "Başvurular", icon: ClipboardList },
    { id: "members",      label: "Üyeler",     icon: Users },
    { id: "tasks",        label: "Görevler",   icon: CheckSquare },
  ];

  const pendingCount = applications.filter((a) => a.status === "Beklemede").length;

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
            { icon: Users,       label: "Toplam Üye",       value: members.length,      dot: "bg-blue-200" },
            { icon: UserCheck,   label: "Aktif Üye",        value: members.filter(m => m.status === "Aktif").length, dot: "bg-emerald-200" },
            { icon: CheckSquare, label: "Açık Görev",       value: tasks.filter(t => t.status !== "Tamamlandı").length, dot: "bg-amber-200" },
            { icon: Clock,       label: "Bekleyen Başvuru", value: pendingCount,         dot: "bg-purple-200" },
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
              className={`flex items-center gap-2 flex-1 justify-center py-2.5 rounded-xl text-sm font-bold transition-all relative ${
                activeTab === tab.id
                  ? "bg-[#0d1b3e] text-white"
                  : "text-[#0d1b3e]/50 hover:text-[#0d1b3e]"
              }`}
            >
              <tab.icon size={15} /> {tab.label}
              {tab.id === "applications" && pendingCount > 0 && (
                <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id ? "bg-white/20 text-white" : "bg-[#0d1b3e] text-white"
                }`}>
                  {pendingCount}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-[#e8ecf3] overflow-hidden">

          {/* BAŞVURULAR */}
          {activeTab === "applications" && (
            <>
              <div className="px-5 py-4 border-b border-[#e8ecf3] flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-[#0d1b3e] text-sm">{info.title} Departmanı Başvuruları</h2>
                  {applications.length > 0 && (
                    <p className="text-[#0d1b3e]/35 text-xs mt-0.5">{applications.length} başvuru · {pendingCount} beklemede</p>
                  )}
                </div>
              </div>

              {applications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                  <div className="w-12 h-12 bg-[#f4f6fa] border border-[#e8ecf3] rounded-2xl flex items-center justify-center mb-3">
                    <InboxIcon size={20} className="text-[#0d1b3e]/20" />
                  </div>
                  <p className="text-[#0d1b3e]/45 font-semibold text-sm">Henüz başvuru yok</p>
                  <p className="text-[#0d1b3e]/25 text-xs mt-1 max-w-xs">
                    {info.title} departmanına yapılan başvurular burada görünecek.
                    Başvurular <Link href="/basvuru" className="underline hover:text-[#0d1b3e]/50">/basvuru</Link> sayfasından geliyor.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#f4f6fa]">
                  {applications.map((a) => (
                    <div key={a.id} className="px-5 py-4 hover:bg-[#f9fafc] transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="w-10 h-10 bg-[#0d1b3e]/8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-[#0d1b3e] font-black text-sm">{a.ad.charAt(0)}</span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-[#0d1b3e] text-sm">{a.ad} {a.soyad}</div>
                            <div className="flex flex-wrap gap-2 mt-1">
                              <span className="text-[#0d1b3e]/35 text-xs">{a.email}</span>
                              {a.sehir && <span className="text-[#0d1b3e]/25 text-xs">· {a.sehir}</span>}
                              {a.discord && <span className="text-[#0d1b3e]/25 text-xs">· {a.discord}</span>}
                            </div>
                            {a.deneyim && (
                              <p className="text-[#0d1b3e]/40 text-xs mt-1.5 line-clamp-2 leading-relaxed">{a.deneyim}</p>
                            )}
                            <div className="flex items-center gap-2 mt-2">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColors[a.status]}`}>
                                {a.status}
                              </span>
                              <span className="text-[#0d1b3e]/25 text-xs">{a.date}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          {a.status === "Beklemede" && (
                            <>
                              <button
                                onClick={() => handleStatus(a.id, "İnceleniyor")}
                                className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg font-bold border border-blue-200 hover:bg-blue-100 transition-colors"
                              >
                                İncele
                              </button>
                              <button
                                onClick={() => handleStatus(a.id, "Kabul Edildi")}
                                className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg font-bold border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center gap-1"
                              >
                                <UserCheck size={12} /> Kabul
                              </button>
                              <button
                                onClick={() => handleStatus(a.id, "Reddedildi")}
                                className="text-xs bg-red-50 text-red-700 px-3 py-1.5 rounded-lg font-bold border border-red-200 hover:bg-red-100 transition-colors flex items-center gap-1"
                              >
                                <UserX size={12} /> Reddet
                              </button>
                            </>
                          )}
                          {a.status === "İnceleniyor" && (
                            <>
                              <button
                                onClick={() => handleStatus(a.id, "Mülakat Aşamasında")}
                                className="text-xs bg-purple-50 text-purple-700 px-3 py-1.5 rounded-lg font-bold border border-purple-200 hover:bg-purple-100 transition-colors"
                              >
                                Mülakata Al
                              </button>
                              <button
                                onClick={() => handleStatus(a.id, "Kabul Edildi")}
                                className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg font-bold border border-emerald-200 hover:bg-emerald-100 transition-colors"
                              >
                                Kabul
                              </button>
                              <button
                                onClick={() => handleStatus(a.id, "Reddedildi")}
                                className="text-xs bg-red-50 text-red-700 px-3 py-1.5 rounded-lg font-bold border border-red-200 hover:bg-red-100 transition-colors"
                              >
                                Reddet
                              </button>
                            </>
                          )}
                          {(a.status === "Kabul Edildi" || a.status === "Reddedildi" || a.status === "Mülakat Aşamasında") && (
                            <button
                              onClick={() => handleStatus(a.id, "Beklemede")}
                              className="text-xs border border-[#e8ecf3] text-[#0d1b3e]/40 px-3 py-1.5 rounded-lg font-bold hover:bg-[#f4f6fa] transition-colors"
                            >
                              Geri Al
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(a.id)}
                            className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={13} className="text-red-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

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
                  <p className="text-[#0d1b3e]/25 text-xs mt-1">Admin panelinden üye ekleyebilirsiniz.</p>
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
                        <button onClick={() => setMembers(prev => prev.filter(x => x.id !== m.id))} className="p-1.5 hover:bg-red-50 rounded-lg">
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
                </div>
              ) : (
                <div className="divide-y divide-[#f4f6fa]">
                  {tasks.map((t) => (
                    <div key={t.id} className="flex items-center justify-between px-5 py-4 hover:bg-[#f9fafc]">
                      <div>
                        <div className="font-bold text-[#0d1b3e] text-sm">{t.title}</div>
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

        </div>
      </div>
    </div>
  );
}
