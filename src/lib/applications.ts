export type AppStatus =
  | "Beklemede"
  | "İnceleniyor"
  | "Mülakat Aşamasında"
  | "Kabul Edildi"
  | "Reddedildi";

export type Application = {
  id: string;
  ad: string;
  soyad: string;
  yas: string;
  sehir: string;
  telefon: string;
  email: string;
  discord: string;
  deneyim: string;
  dept: string;        // "pr" | "saha" | "press" | "guvenlik" | "ik" | "finans" | "it"
  date: string;
  status: AppStatus;
};

const KEY = "zenith_applications";

export function getApplications(): Application[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Application[]) : [];
  } catch {
    return [];
  }
}

export function saveApplications(apps: Application[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(apps));
  } catch { /* ignore */ }
}

export function addApplication(app: Omit<Application, "id" | "date" | "status">): Application {
  const newApp: Application = {
    ...app,
    id: Date.now().toString(),
    date: new Date().toLocaleDateString("tr-TR"),
    status: "Beklemede",
  };
  const all = getApplications();
  saveApplications([newApp, ...all]);
  return newApp;
}

export function updateApplicationStatus(id: string, status: AppStatus): void {
  const all = getApplications();
  saveApplications(all.map((a) => (a.id === id ? { ...a, status } : a)));
}

export function deleteApplication(id: string): void {
  saveApplications(getApplications().filter((a) => a.id !== id));
}
