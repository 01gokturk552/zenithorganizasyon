"use client";
import { useEffect, useState } from "react";

export type Stat = {
  id: string;
  label: string;
  value: string;
  suffix: string;
};

const DEFAULT_STATS: Stat[] = [
  { id: "etkinlik",  label: "Tamamlanan Etkinlik", value: "0",   suffix: "" },
  { id: "kadro",     label: "Uzman Kadro",          value: "0",   suffix: "" },
  { id: "departman", label: "Departman",             value: "7",   suffix: "" },
  { id: "cozum",     label: "Çözüm Odaklı",          value: "100", suffix: "%" },
];

const STORAGE_KEY = "zenith_site_stats";

export function useStats() {
  const [stats, setStats] = useState<Stat[]>(DEFAULT_STATS);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setStats(JSON.parse(saved));
    } catch {
      // localStorage erişilemiyorsa varsayılanlar kullanılır
    }
  }, []);

  const saveStats = (newStats: Stat[]) => {
    setStats(newStats);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
    } catch {
      // ignore
    }
  };

  return { stats, saveStats };
}

/* ── HERO GRID (hero bölümü sağı) ── */
export function HeroStats() {
  const { stats } = useStats();

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((s, i) => (
        <div
          key={s.id}
          className={`rounded-2xl p-7 border ${
            i === 0
              ? "bg-white text-[#0d1b3e] border-white col-span-2"
              : "bg-white/6 border-white/10 text-white"
          }`}
        >
          <div className={`text-4xl font-black mb-1.5 ${i === 0 ? "text-[#0d1b3e]" : "text-white"}`}>
            {s.value}{s.suffix}
          </div>
          <div className={`text-sm font-medium ${i === 0 ? "text-[#0d1b3e]/50" : "text-white/50"}`}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── DARK BAND (orta lacivert şerit) ── */
export function StatsBand() {
  const { stats } = useStats();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((s) => (
        <div key={s.id} className="text-center">
          <div className="text-5xl font-black text-white mb-2">
            {s.value}{s.suffix}
          </div>
          <div className="text-white/35 text-xs uppercase tracking-widest font-semibold">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
