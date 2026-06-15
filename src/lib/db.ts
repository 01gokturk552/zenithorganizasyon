import { supabase } from "./supabase";

// ─── STATS ──────────────────────────────────────────────────────────────────
export type Stat = { id: string; label: string; value: string; suffix: string };

export const DEFAULT_STATS: Stat[] = [
  { id: "etkinlik",  label: "Tamamlanan Etkinlik", value: "0",   suffix: "" },
  { id: "kadro",     label: "Uzman Kadro",          value: "0",   suffix: "" },
  { id: "departman", label: "Departman",             value: "7",   suffix: "" },
  { id: "cozum",     label: "Çözüm Odaklı",         value: "100", suffix: "%" },
];

export async function getStats(): Promise<Stat[]> {
  const { data } = await supabase.from("stats").select("*");
  if (!data || data.length === 0) return DEFAULT_STATS;
  return data as Stat[];
}

export async function saveStats(stats: Stat[]): Promise<void> {
  await supabase.from("stats").upsert(stats, { onConflict: "id" });
}

// ─── SETTINGS ───────────────────────────────────────────────────────────────
export type Settings = {
  siteAdi: string;
  slogan: string;
  email: string;
  telefon: string;
  adres: string;
  calismaGun: string;
  calismaSaat: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  youtube: string;
};

export const DEFAULT_SETTINGS: Settings = {
  siteAdi:     "Zenith Organizasyon",
  slogan:      "Etkinliğinizi Zirveye Taşıyoruz.",
  email:       "",
  telefon:     "",
  adres:       "",
  calismaGun:  "Pazartesi – Cuma",
  calismaSaat: "09:00 – 18:00",
  instagram:   "",
  twitter:     "",
  linkedin:    "",
  youtube:     "",
};

export async function getSettings(): Promise<Settings> {
  const { data } = await supabase.from("settings").select("*");
  if (!data || data.length === 0) return DEFAULT_SETTINGS;
  return data.reduce(
    (acc, { key, value }: { key: string; value: string }) => ({ ...acc, [key]: value }),
    { ...DEFAULT_SETTINGS }
  ) as Settings;
}

export async function saveSettings(settings: Settings): Promise<void> {
  const rows = Object.entries(settings).map(([key, value]) => ({ key, value }));
  await supabase.from("settings").upsert(rows, { onConflict: "key" });
}

// ─── ANNOUNCEMENTS ───────────────────────────────────────────────────────────
export type Announcement = {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
  shown: boolean;
};

export async function getAnnouncements(): Promise<Announcement[]> {
  const { data } = await supabase
    .from("announcements")
    .select("*")
    .order("created_at", { ascending: false });
  return (data as Announcement[]) ?? [];
}

export async function addAnnouncement(item: Omit<Announcement, "id">): Promise<void> {
  await supabase.from("announcements").insert(item);
}

export async function updateAnnouncement(id: number, updates: Partial<Announcement>): Promise<void> {
  await supabase.from("announcements").update(updates).eq("id", id);
}

export async function deleteAnnouncement(id: number): Promise<void> {
  await supabase.from("announcements").delete().eq("id", id);
}

// ─── MEMBERS ─────────────────────────────────────────────────────────────────
export type Member = {
  id: number;
  name: string;
  dept: string;
  role: string;
  email: string;
  status: string;
  joined: string;
};

export async function getMembers(): Promise<Member[]> {
  const { data } = await supabase
    .from("members")
    .select("*")
    .order("created_at", { ascending: false });
  return (data as Member[]) ?? [];
}

export async function addMember(item: Omit<Member, "id">): Promise<void> {
  await supabase.from("members").insert(item);
}

export async function updateMember(id: number, updates: Partial<Member>): Promise<void> {
  await supabase.from("members").update(updates).eq("id", id);
}

export async function deleteMember(id: number): Promise<void> {
  await supabase.from("members").delete().eq("id", id);
}
