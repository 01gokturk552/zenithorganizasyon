import { supabase } from "./supabase";

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
  dept: string;
  date: string;
  status: AppStatus;
};

export async function getApplications(): Promise<Application[]> {
  const { data } = await supabase
    .from("applications")
    .select("*")
    .order("created_at", { ascending: false });
  return (data as Application[]) ?? [];
}

export async function addApplication(
  app: Omit<Application, "id" | "date" | "status">
): Promise<void> {
  await supabase.from("applications").insert({
    ...app,
    id: Date.now().toString(),
    date: new Date().toLocaleDateString("tr-TR"),
    status: "Beklemede",
  });
}

export async function updateApplicationStatus(
  id: string,
  status: AppStatus
): Promise<void> {
  await supabase.from("applications").update({ status }).eq("id", id);
}

export async function deleteApplication(id: string): Promise<void> {
  await supabase.from("applications").delete().eq("id", id);
}
