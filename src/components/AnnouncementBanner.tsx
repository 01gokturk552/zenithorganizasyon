"use client";
import { useEffect, useState } from "react";
import { X, Bell } from "lucide-react";

type Announcement = {
  id: number;
  title: string;
  content: string;
  category: string;
  shown: boolean;
};

const categoryStyle: Record<string, string> = {
  "Duyuru":    "bg-blue-600",
  "Etkinlik":  "bg-emerald-600",
  "Teknoloji": "bg-purple-600",
  "Haberler":  "bg-amber-600",
  "Sektör":    "bg-indigo-600",
};

export default function AnnouncementBanner() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [dismissed, setDismissed] = useState<number[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("zenith_announcements");
      if (raw) setItems(JSON.parse(raw));
    } catch { /* ignore */ }
    try {
      const d = sessionStorage.getItem("zenith_dismissed");
      if (d) setDismissed(JSON.parse(d));
    } catch { /* ignore */ }
  }, []);

  const dismiss = (id: number) => {
    const next = [...dismissed, id];
    setDismissed(next);
    try { sessionStorage.setItem("zenith_dismissed", JSON.stringify(next)); } catch { /* ignore */ }
  };

  const visible = items.filter((a) => a.shown && !dismissed.includes(a.id));
  if (visible.length === 0) return null;

  const current = visible[0];

  return (
    <div className={`${categoryStyle[current.category] ?? "bg-[#0d1b3e]"} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-3">
        <Bell size={13} className="text-white/70 flex-shrink-0" />
        <p className="text-sm flex-1 min-w-0 truncate">
          <span className="font-bold mr-2">{current.category}:</span>
          {current.title}
          {current.content && (
            <span className="text-white/70 ml-2 text-xs hidden sm:inline">— {current.content}</span>
          )}
        </p>
        {visible.length > 1 && (
          <span className="text-white/50 text-xs font-semibold flex-shrink-0 hidden sm:block">
            +{visible.length - 1} daha
          </span>
        )}
        <button
          onClick={() => dismiss(current.id)}
          className="p-1 rounded hover:bg-white/20 transition-colors flex-shrink-0"
          aria-label="Kapat"
        >
          <X size={13} />
        </button>
      </div>
    </div>
  );
}
