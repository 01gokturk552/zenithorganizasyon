"use client";
import Link from "next/link";
import { ArrowLeft, Save, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";
import { useStats, type Stat } from "@/components/SiteStats";

export default function AdminIstatistiklerPage() {
  const { stats, saveStats } = useStats();
  const [form, setForm]       = useState<Stat[]>([]);
  const [saved, setSaved]     = useState(false);

  useEffect(() => {
    if (stats.length > 0) setForm(stats);
  }, [stats]);

  const update = (id: string, field: keyof Stat, val: string) => {
    setSaved(false);
    setForm((prev) => prev.map((s) => s.id === id ? { ...s, [field]: val } : s));
  };

  const handleSave = () => {
    saveStats(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = () => {
    const defaults: Stat[] = [
      { id: "etkinlik",  label: "Tamamlanan Etkinlik", value: "0",   suffix: "" },
      { id: "kadro",     label: "Uzman Kadro",          value: "0",   suffix: "" },
      { id: "departman", label: "Departman",             value: "7",   suffix: "" },
      { id: "cozum",     label: "Çözüm Odaklı",          value: "100", suffix: "%" },
    ];
    setForm(defaults);
    saveStats(defaults);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#f4f6fa]">

      <header className="bg-white border-b border-[#e8ecf3] h-[64px] flex items-center px-6 gap-4">
        <Link href="/admin" className="p-2 hover:bg-[#f4f6fa] rounded-xl transition-colors">
          <ArrowLeft size={18} className="text-[#0d1b3e]/60" />
        </Link>
        <div>
          <p className="text-xs text-[#0d1b3e]/35 font-medium">Admin Panel</p>
          <h1 className="font-black text-[#0d1b3e] text-base leading-none">Site İstatistikleri</h1>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 border border-[#e8ecf3] text-[#0d1b3e]/50 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#f4f6fa] transition-all"
          >
            <RotateCcw size={14} /> Sıfırla
          </button>
          <button
            onClick={handleSave}
            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              saved
                ? "bg-emerald-500 text-white"
                : "bg-[#0d1b3e] text-white hover:bg-[#152552]"
            }`}
          >
            <Save size={14} /> {saved ? "Kaydedildi!" : "Kaydet"}
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">

        <div className="bg-white border border-[#e8ecf3] rounded-2xl p-6 mb-6">
          <p className="text-sm text-[#0d1b3e]/50 leading-relaxed">
            Bu sayfa, ana sayfada gösterilen istatistik değerlerini yönetir. Değerleri düzenleyip
            <strong className="text-[#0d1b3e]/70"> Kaydet</strong> butonuna basın — değişiklikler
            anında ana sayfada yansır.
          </p>
        </div>

        <div className="space-y-4">
          {form.length === 0 && (
            <div className="bg-white border border-[#e8ecf3] rounded-2xl p-8 text-center text-[#0d1b3e]/40 text-sm">Yükleniyor...</div>
          )}
          {form.map((s, i) => (
            <div key={s.id} className="bg-white border border-[#e8ecf3] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-[#0d1b3e] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xs">0{i + 1}</span>
                </div>
                <div>
                  <p className="font-black text-[#0d1b3e] text-sm">{s.label}</p>
                  <p className="text-[#0d1b3e]/35 text-xs">
                    Görünüm: <span className="font-bold text-[#0d1b3e]/60">{s.value}{s.suffix}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-widest mb-1.5">
                    Etiket
                  </label>
                  <input
                    type="text"
                    value={s.label}
                    onChange={(e) => update(s.id, "label", e.target.value)}
                    className="w-full border border-[#e8ecf3] focus:border-[#0d1b3e]/30 rounded-xl px-4 py-2.5 text-sm text-[#0d1b3e] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-widest mb-1.5">
                    Değer
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={s.value}
                      onChange={(e) => update(s.id, "value", e.target.value)}
                      placeholder="0"
                      className="flex-1 border border-[#e8ecf3] focus:border-[#0d1b3e]/30 rounded-xl px-4 py-2.5 text-sm text-[#0d1b3e] outline-none font-bold"
                    />
                    <input
                      type="text"
                      value={s.suffix}
                      onChange={(e) => update(s.id, "suffix", e.target.value)}
                      placeholder="+, %"
                      maxLength={2}
                      className="w-16 border border-[#e8ecf3] focus:border-[#0d1b3e]/30 rounded-xl px-3 py-2.5 text-sm text-[#0d1b3e] outline-none text-center font-bold"
                    />
                  </div>
                  <p className="text-[10px] text-[#0d1b3e]/25 mt-1">Değer · Ek (+, %, vb.)</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Önizleme */}
        <div className="mt-8 bg-[#0d1b3e] rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <p className="relative text-white/30 text-[10px] font-black uppercase tracking-widest mb-5">Önizleme</p>
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-5">
            {form.map((s) => (
              <div key={s.id} className="text-center">
                <div className="text-3xl font-black text-white mb-1">{s.value}{s.suffix}</div>
                <div className="text-white/35 text-[10px] uppercase tracking-wider font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-sm ${
              saved ? "bg-emerald-500 text-white" : "bg-[#0d1b3e] text-white hover:bg-[#152552] hover:shadow-md"
            }`}
          >
            <Save size={15} /> {saved ? "Kaydedildi!" : "Değişiklikleri Kaydet"}
          </button>
        </div>

      </main>
    </div>
  );
}
