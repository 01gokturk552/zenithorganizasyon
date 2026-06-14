"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft, Search, Eye, CheckCircle, XCircle,
  MessageSquare, Download, Users, FileX
} from "lucide-react";
import {
  getApplications, updateApplicationStatus, deleteApplication,
  type Application, type AppStatus
} from "@/lib/applications";

const statusColors: Record<string, string> = {
  "Beklemede":          "bg-amber-50 text-amber-700 border-amber-200",
  "İnceleniyor":        "bg-blue-50 text-blue-700 border-blue-200",
  "Mülakat Aşamasında": "bg-purple-50 text-purple-700 border-purple-200",
  "Kabul Edildi":       "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Reddedildi":         "bg-red-50 text-red-700 border-red-200",
};

const deptLabels: Record<string, string> = {
  pr: "PR", saha: "Saha", press: "Press",
  guvenlik: "Güvenlik", ik: "İK", finans: "Finans", it: "IT",
};

const depts    = ["Tümü", "PR", "Saha", "Press", "Güvenlik", "İK", "Finans", "IT"];
const statuses = ["Tümü", "Beklemede", "İnceleniyor", "Mülakat Aşamasında", "Kabul Edildi", "Reddedildi"];

export default function AdminBasvurularPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [search, setSearch]   = useState("");
  const [dept, setDept]       = useState("Tümü");
  const [status, setStatus]   = useState("Tümü");
  const [selected, setSelected] = useState<string[]>([]);
  const [detail, setDetail]   = useState<Application | null>(null);

  useEffect(() => {
    setApplications(getApplications());
  }, []);

  const filtered = applications.filter((a) => {
    const fullName = `${a.ad} ${a.soyad}`.toLowerCase();
    const matchSearch = fullName.includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase());
    const matchDept   = dept   === "Tümü" || deptLabels[a.dept] === dept;
    const matchStatus = status === "Tümü" || a.status === status;
    return matchSearch && matchDept && matchStatus;
  });

  const toggleSelect = (id: string) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const handleStatus = (id: string, s: AppStatus) => {
    updateApplicationStatus(id, s);
    setApplications(getApplications());
    if (detail?.id === id) setDetail((d) => d ? { ...d, status: s } : null);
  };

  const handleDelete = (id: string) => {
    deleteApplication(id);
    setApplications(getApplications());
    setSelected((prev) => prev.filter((x) => x !== id));
    if (detail?.id === id) setDetail(null);
  };

  const bulkStatus = (s: AppStatus) => {
    selected.forEach((id) => updateApplicationStatus(id, s));
    setApplications(getApplications());
    setSelected([]);
  };

  const downloadCSV = () => {
    const header = "Ad,Soyad,E-posta,Şehir,Telefon,Discord,Departman,Tarih,Durum";
    const rows = filtered.map((a) =>
      [a.ad, a.soyad, a.email, a.sehir, a.telefon, a.discord,
       deptLabels[a.dept] || a.dept, a.date, a.status].join(",")
    );
    const blob = new Blob([[header, ...rows].join("\n")], { type: "text/csv;charset=utf-8;" });
    const url  = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = "basvurular.csv"; link.click();
    URL.revokeObjectURL(url);
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
        <button
          onClick={downloadCSV}
          className="ml-auto flex items-center gap-2 border border-[#e8ecf3] text-[#0d1b3e]/60 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#f4f6fa] transition-all"
        >
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
          <select value={dept}   onChange={(e) => setDept(e.target.value)}
            className="text-sm border border-[#e8ecf3] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#0d1b3e]/30 bg-[#f4f6fa] text-[#0d1b3e]">
            {depts.map((d) => <option key={d}>{d}</option>)}
          </select>
          <select value={status} onChange={(e) => setStatus(e.target.value)}
            className="text-sm border border-[#e8ecf3] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#0d1b3e]/30 bg-[#f4f6fa] text-[#0d1b3e]">
            {statuses.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        {/* Toplu işlemler */}
        {selected.length > 0 && (
          <div className="bg-[#0d1b3e] rounded-xl px-5 py-3.5 mb-4 flex items-center justify-between">
            <span className="text-white text-sm font-semibold">{selected.length} başvuru seçildi</span>
            <div className="flex gap-2">
              <button onClick={() => bulkStatus("Kabul Edildi")}
                className="bg-emerald-500 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-emerald-600 transition-colors flex items-center gap-1.5">
                <CheckCircle size={13} /> Toplu Onayla
              </button>
              <button onClick={() => bulkStatus("Reddedildi")}
                className="bg-red-500 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors flex items-center gap-1.5">
                <XCircle size={13} /> Toplu Reddet
              </button>
              <button onClick={() => bulkStatus("İnceleniyor")}
                className="bg-blue-500 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors flex items-center gap-1.5">
                <Users size={13} /> İncelemeye Al
              </button>
            </div>
          </div>
        )}

        <div className={`grid gap-5 ${detail ? "lg:grid-cols-3" : ""}`}>

          {/* Tablo */}
          <div className={detail ? "lg:col-span-2" : ""}>
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
                      ? "Filtrelerle eşleşen başvuru yok"
                      : "Henüz başvuru alınmadı"}
                  </p>
                  <p className="text-[#0d1b3e]/30 text-xs text-center max-w-xs">
                    {!(search || dept !== "Tümü" || status !== "Tümü") && (
                      <>Başvuru formu <Link href="/basvuru" className="underline" target="_blank">/basvuru</Link> adresinde.</>
                    )}
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#e8ecf3] bg-[#f4f6fa]">
                        <th className="w-10 px-4 py-3">
                          <input type="checkbox"
                            onChange={(e) => setSelected(e.target.checked ? filtered.map((a) => a.id) : [])}
                            className="w-4 h-4 accent-[#0d1b3e]" />
                        </th>
                        <th className="text-left px-4 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Ad Soyad</th>
                        <th className="text-left px-4 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Şehir</th>
                        <th className="text-left px-4 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Dept.</th>
                        <th className="text-left px-4 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Tarih</th>
                        <th className="text-left px-4 py-3 text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-wider">Durum</th>
                        <th className="px-4 py-3" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f4f6fa]">
                      {filtered.map((app) => (
                        <tr key={app.id} className={`hover:bg-[#f9fafc] transition-colors ${detail?.id === app.id ? "bg-[#f4f6fa]" : ""}`}>
                          <td className="px-4 py-3">
                            <input type="checkbox" checked={selected.includes(app.id)}
                              onChange={() => toggleSelect(app.id)} className="w-4 h-4 accent-[#0d1b3e]" />
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-bold text-[#0d1b3e] text-sm">{app.ad} {app.soyad}</div>
                            <div className="text-[#0d1b3e]/35 text-xs">{app.email}</div>
                          </td>
                          <td className="px-4 py-3 text-[#0d1b3e]/50 text-sm">{app.sehir || "—"}</td>
                          <td className="px-4 py-3 text-[#0d1b3e]/50 text-sm">{deptLabels[app.dept] || app.dept}</td>
                          <td className="px-4 py-3 text-[#0d1b3e]/40 text-sm">{app.date}</td>
                          <td className="px-4 py-3">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${statusColors[app.status] || ""}`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1">
                              <button onClick={() => setDetail(detail?.id === app.id ? null : app)}
                                className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors" title="Detay">
                                <Eye size={14} className="text-blue-500" />
                              </button>
                              <button onClick={() => handleStatus(app.id, "Kabul Edildi")}
                                className="p-1.5 hover:bg-emerald-50 rounded-lg transition-colors" title="Onayla">
                                <CheckCircle size={14} className="text-emerald-500" />
                              </button>
                              <button onClick={() => handleStatus(app.id, "Reddedildi")}
                                className="p-1.5 hover:bg-red-50 rounded-lg transition-colors" title="Reddet">
                                <XCircle size={14} className="text-red-400" />
                              </button>
                              <button onClick={() => handleDelete(app.id)}
                                className="p-1.5 hover:bg-red-50 rounded-lg transition-colors" title="Sil">
                                <MessageSquare size={14} className="text-[#0d1b3e]/25" />
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
          </div>

          {/* Detay paneli */}
          {detail && (
            <div className="bg-white rounded-2xl border border-[#e8ecf3] p-6 h-fit">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="font-black text-[#0d1b3e] text-base">{detail.ad} {detail.soyad}</h3>
                  <p className="text-[#0d1b3e]/35 text-xs mt-0.5">{detail.date} · {deptLabels[detail.dept]}</p>
                </div>
                <button onClick={() => setDetail(null)} className="text-[#0d1b3e]/30 hover:text-[#0d1b3e] text-xs font-bold transition-colors">✕</button>
              </div>

              <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${statusColors[detail.status]}`}>
                {detail.status}
              </span>

              <div className="mt-5 space-y-3 text-sm">
                {[
                  { label: "E-posta",  val: detail.email },
                  { label: "Telefon",  val: detail.telefon },
                  { label: "Şehir",    val: detail.sehir },
                  { label: "Yaş",      val: detail.yas },
                  { label: "Discord",  val: detail.discord },
                ].filter((r) => r.val).map((r) => (
                  <div key={r.label}>
                    <span className="text-[10px] font-black text-[#0d1b3e]/30 uppercase tracking-wider">{r.label}</span>
                    <p className="text-[#0d1b3e]/70 font-medium mt-0.5">{r.val}</p>
                  </div>
                ))}
                {detail.deneyim && (
                  <div>
                    <span className="text-[10px] font-black text-[#0d1b3e]/30 uppercase tracking-wider">Deneyim</span>
                    <p className="text-[#0d1b3e]/60 text-xs mt-1 leading-relaxed">{detail.deneyim}</p>
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-2">
                <button onClick={() => handleStatus(detail.id, "Kabul Edildi")}
                  className="w-full bg-emerald-500 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors">
                  Kabul Et
                </button>
                <button onClick={() => handleStatus(detail.id, "Mülakat Aşamasında")}
                  className="w-full bg-purple-500 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-purple-600 transition-colors">
                  Mülakata Al
                </button>
                <button onClick={() => handleStatus(detail.id, "Reddedildi")}
                  className="w-full bg-red-500 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-red-600 transition-colors">
                  Reddet
                </button>
                <button onClick={() => handleDelete(detail.id)}
                  className="w-full border border-[#e8ecf3] text-[#0d1b3e]/40 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#f4f6fa] transition-colors">
                  Sil
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
