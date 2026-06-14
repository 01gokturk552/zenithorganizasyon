"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Users, ClipboardList, CheckSquare,
  LogOut, ArrowLeft, UserCheck, UserX, Clock,
  Plus, Trash2, Edit2
} from "lucide-react";

const deptInfo: Record<string, { title: string }> = {
  pr: { title: "PR" },
  saha: { title: "Saha" },
  press: { title: "Press" },
  guvenlik: { title: "Güvenlik" },
  ik: { title: "İK" },
  finans: { title: "Finans" },
  it: { title: "IT" },
};

const mockMembers = [
  { id: 1, name: "Ali Yılmaz", role: "Koordinatör", status: "Aktif", joined: "2024-01-15" },
  { id: 2, name: "Ayşe Kaya", role: "Uzman", status: "Aktif", joined: "2024-02-20" },
  { id: 3, name: "Mehmet Çelik", role: "Asistan", status: "İzinli", joined: "2024-03-10" },
  { id: 4, name: "Fatma Demir", role: "Uzman", status: "Aktif", joined: "2024-01-05" },
];

const mockTasks = [
  { id: 1, title: "Etkinlik koordinasyon planı hazırla", assignee: "Ali Yılmaz", due: "2024-06-20", status: "Devam Ediyor" },
  { id: 2, title: "Haftalık rapor oluştur", assignee: "Ayşe Kaya", due: "2024-06-15", status: "Tamamlandı" },
  { id: 3, title: "Ekip toplantısı organize et", assignee: "Mehmet Çelik", due: "2024-06-18", status: "Bekliyor" },
];

const mockApplications = [
  { id: 1, name: "Zeynep Arslan", date: "2024-06-10", status: "Beklemede" },
  { id: 2, name: "Emre Şahin", date: "2024-06-08", status: "Mülakat" },
];

const taskStatusColors: Record<string, string> = {
  "Devam Ediyor": "bg-blue-100 text-blue-800",
  "Tamamlandı": "bg-green-100 text-green-800",
  "Bekliyor": "bg-yellow-100 text-yellow-800",
};

type Tab = "members" | "tasks" | "applications";

export default function DeptPanel({ dept }: { dept: string }) {
  const [activeTab, setActiveTab] = useState<Tab>("members");
  const info = deptInfo[dept] || { title: dept.toUpperCase() };

  const tabs: { id: Tab; label: string; icon: typeof Users }[] = [
    { id: "members", label: "Üyeler", icon: Users },
    { id: "tasks", label: "Görevler", icon: CheckSquare },
    { id: "applications", label: "Başvurular", icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#0f1f4b] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/panel" className="p-2 hover:bg-white/10 rounded-xl transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center">
                <span className="text-[#0f1f4b] font-black text-sm">Z</span>
              </div>
              <div>
                <div className="font-black text-sm">{info.title} Başkanı Paneli</div>
                <div className="text-white/50 text-xs">Zenith Organizasyon</div>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
            <LogOut size={16} /> Çıkış
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, label: "Toplam Üye", value: mockMembers.length, color: "bg-blue-50 text-blue-600" },
            { icon: UserCheck, label: "Aktif Üye", value: mockMembers.filter(m => m.status === "Aktif").length, color: "bg-green-50 text-green-600" },
            { icon: CheckSquare, label: "Açık Görev", value: mockTasks.filter(t => t.status !== "Tamamlandı").length, color: "bg-yellow-50 text-yellow-600" },
            { icon: Clock, label: "Bekleyen Başvuru", value: mockApplications.length, color: "bg-purple-50 text-purple-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color.split(" ")[0]}`}>
                <stat.icon size={18} className={stat.color.split(" ")[1]} />
              </div>
              <div className="text-2xl font-black text-[#0f1f4b] mb-1">{stat.value}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-1 mb-6 bg-white rounded-2xl border border-gray-100 p-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 flex-1 justify-center py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-[#0f1f4b] text-white"
                  : "text-[#0f1f4b]/60 hover:text-[#0f1f4b]"
              }`}
            >
              <tab.icon size={16} /> {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100">
          {activeTab === "members" && (
            <>
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-[#0f1f4b]">Ekip Üyeleri</h2>
                <button className="flex items-center gap-2 bg-[#0f1f4b] text-white px-4 py-2 rounded-xl text-sm font-semibold">
                  <Plus size={14} /> Üye Ekle
                </button>
              </div>
              <div className="divide-y divide-gray-50">
                {mockMembers.map((m) => (
                  <div key={m.id} className="flex items-center justify-between px-5 py-4 hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#0f1f4b] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{m.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-medium text-[#0f1f4b] text-sm">{m.name}</div>
                        <div className="text-gray-400 text-xs">{m.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${m.status === "Aktif" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}>
                        {m.status}
                      </span>
                      <button className="p-1.5 hover:bg-blue-50 rounded-lg"><Edit2 size={14} className="text-blue-600" /></button>
                      <button className="p-1.5 hover:bg-red-50 rounded-lg"><Trash2 size={14} className="text-red-500" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "tasks" && (
            <>
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-[#0f1f4b]">Görev Listesi</h2>
                <button className="flex items-center gap-2 bg-[#0f1f4b] text-white px-4 py-2 rounded-xl text-sm font-semibold">
                  <Plus size={14} /> Görev Ekle
                </button>
              </div>
              <div className="divide-y divide-gray-50">
                {mockTasks.map((t) => (
                  <div key={t.id} className="flex items-center justify-between px-5 py-4 hover:bg-gray-50">
                    <div>
                      <div className="font-medium text-[#0f1f4b] text-sm mb-1">{t.title}</div>
                      <div className="text-gray-400 text-xs">Atanan: {t.assignee} · Bitiş: {t.due}</div>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${taskStatusColors[t.status]}`}>
                      {t.status}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "applications" && (
            <>
              <div className="p-5 border-b border-gray-100">
                <h2 className="font-bold text-[#0f1f4b]">Departman Başvuruları</h2>
              </div>
              <div className="divide-y divide-gray-50">
                {mockApplications.map((a) => (
                  <div key={a.id} className="flex items-center justify-between px-5 py-4 hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#0f1f4b]/10 rounded-full flex items-center justify-center">
                        <span className="text-[#0f1f4b] font-bold text-sm">{a.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-medium text-[#0f1f4b] text-sm">{a.name}</div>
                        <div className="text-gray-400 text-xs">{a.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-yellow-100 text-yellow-800">{a.status}</span>
                      <button className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1">
                        <UserCheck size={12} /> Kabul
                      </button>
                      <button className="text-xs bg-red-50 text-red-700 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1">
                        <UserX size={12} /> Reddet
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
