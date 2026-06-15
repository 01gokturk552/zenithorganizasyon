"use client";
import { useEffect, useState } from "react";
import { getStats, saveStats, DEFAULT_STATS, type Stat } from "@/lib/db";

export type { Stat };

export function useStats() {
  const [stats, setStats] = useState<Stat[]>(DEFAULT_STATS);

  useEffect(() => {
    getStats().then(setStats);
  }, []);

  const save = async (newStats: Stat[]): Promise<boolean> => {
    setStats(newStats);
    return saveStats(newStats);
  };

  return { stats, saveStats: save };
}

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
