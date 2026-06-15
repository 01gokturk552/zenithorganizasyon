"use client";
import Link from "next/link";
import { ArrowLeft, Save, RotateCcw, Globe, Phone, Mail, MapPin, Clock, Share2, AtSign, Link2, PlayCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { type Settings, DEFAULT_SETTINGS as DEFAULT } from "@/lib/db";

type FieldProps = {
  label: string;
  placeholder?: string;
  icon?: React.ElementType;
  type?: string;
  value: string;
  onChange: (val: string) => void;
};

function Field({ label, placeholder, icon: Icon, type = "text", value, onChange }: FieldProps) {
  return (
    <div>
      <label className="block text-[10px] font-black text-[#0d1b3e]/35 uppercase tracking-widest mb-1.5">{label}</label>
      <div className="relative">
        {Icon && <Icon size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0d1b3e]/25" />}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full border border-[#e8ecf3] focus:border-[#0d1b3e]/30 rounded-xl py-2.5 text-sm text-[#0d1b3e] outline-none placeholder-[#0d1b3e]/20 ${Icon ? "pl-9 pr-4" : "px-4"}`}
        />
      </div>
    </div>
  );
}

export default function AdminAyarlarPage() {
  const [form, setForm]   = useState<Settings>(DEFAULT);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    import("@/lib/db").then(({ getSettings }) => getSettings().then(setForm));
  }, []);

  const update = (key: keyof Settings, val: string) => {
    setSaved(false);
    setForm((prev) => ({ ...prev, [key]: val }));
  };

  const handleSave = async () => {
    const { saveSettings } = await import("@/lib/db");
    await saveSettings(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = async () => {
    const { saveSettings } = await import("@/lib/db");
    await saveSettings(DEFAULT);
    setForm(DEFAULT);
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
          <h1 className="font-black text-[#0d1b3e] text-base leading-none">Site Ayarları</h1>
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
              saved ? "bg-emerald-500 text-white" : "bg-[#0d1b3e] text-white hover:bg-[#152552]"
            }`}
          >
            <Save size={14} /> {saved ? "Kaydedildi!" : "Kaydet"}
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8 space-y-5">

        {/* Genel Bilgiler */}
        <section className="bg-white border border-[#e8ecf3] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#0d1b3e] rounded-xl flex items-center justify-center">
              <Globe size={15} className="text-white" />
            </div>
            <h2 className="font-black text-[#0d1b3e] text-sm">Genel Bilgiler</h2>
          </div>
          <div className="space-y-4">
            <Field label="Site Adı"  placeholder="Zenith Organizasyon"              value={form.siteAdi}  onChange={(v) => update("siteAdi", v)} />
            <Field label="Slogan"    placeholder="Etkinliğinizi Zirveye Taşıyoruz." value={form.slogan}   onChange={(v) => update("slogan", v)} />
          </div>
        </section>

        {/* İletişim Bilgileri */}
        <section className="bg-white border border-[#e8ecf3] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#0d1b3e] rounded-xl flex items-center justify-center">
              <Phone size={15} className="text-white" />
            </div>
            <h2 className="font-black text-[#0d1b3e] text-sm">İletişim Bilgileri</h2>
          </div>
          <div className="space-y-4">
            <Field label="E-posta"  placeholder="info@zenithorganizasyon.com" icon={Mail}   type="email" value={form.email}       onChange={(v) => update("email", v)} />
            <Field label="Telefon"  placeholder="+90 5XX XXX XX XX"           icon={Phone}              value={form.telefon}     onChange={(v) => update("telefon", v)} />
            <Field label="Adres"    placeholder="Şehir, Türkiye"              icon={MapPin}             value={form.adres}       onChange={(v) => update("adres", v)} />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Çalışma Günleri" placeholder="Pzt – Cum"    icon={Clock} value={form.calismaGun}  onChange={(v) => update("calismaGun", v)} />
              <Field label="Çalışma Saati"   placeholder="09:00 – 18:00" icon={Clock} value={form.calismaSaat} onChange={(v) => update("calismaSaat", v)} />
            </div>
          </div>
        </section>

        {/* Sosyal Medya */}
        <section className="bg-white border border-[#e8ecf3] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#0d1b3e] rounded-xl flex items-center justify-center">
              <Share2 size={15} className="text-white" />
            </div>
            <h2 className="font-black text-[#0d1b3e] text-sm">Sosyal Medya</h2>
          </div>
          <div className="space-y-4">
            <Field label="Instagram"   placeholder="https://instagram.com/..." icon={Share2}     value={form.instagram} onChange={(v) => update("instagram", v)} />
            <Field label="X / Twitter" placeholder="https://twitter.com/..."   icon={AtSign}     value={form.twitter}   onChange={(v) => update("twitter", v)} />
            <Field label="LinkedIn"    placeholder="https://linkedin.com/..."   icon={Link2}      value={form.linkedin}  onChange={(v) => update("linkedin", v)} />
            <Field label="YouTube"     placeholder="https://youtube.com/..."    icon={PlayCircle} value={form.youtube}   onChange={(v) => update("youtube", v)} />
          </div>
        </section>

        {/* Önizleme */}
        <section className="bg-[#0d1b3e] border border-[#0d1b3e] rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <p className="relative text-white/30 text-[10px] font-black uppercase tracking-widest mb-4">Önizleme</p>
          <div className="relative">
            <div className="font-black text-white text-xl mb-1">{form.siteAdi || "Zenith Organizasyon"}</div>
            <div className="text-white/40 text-sm mb-5">{form.slogan || "—"}</div>
            <div className="flex flex-wrap gap-5 text-white/40 text-xs">
              {form.email   && <span className="flex items-center gap-1.5"><Mail   size={11} /> {form.email}</span>}
              {form.telefon && <span className="flex items-center gap-1.5"><Phone  size={11} /> {form.telefon}</span>}
              {form.adres   && <span className="flex items-center gap-1.5"><MapPin size={11} /> {form.adres}</span>}
            </div>
            {(form.instagram || form.twitter || form.linkedin || form.youtube) && (
              <div className="flex gap-3 mt-4">
                {form.instagram && <span className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center"><Share2     size={13} className="text-white/60" /></span>}
                {form.twitter   && <span className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center"><AtSign     size={13} className="text-white/60" /></span>}
                {form.linkedin  && <span className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center"><Link2      size={13} className="text-white/60" /></span>}
                {form.youtube   && <span className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center"><PlayCircle size={13} className="text-white/60" /></span>}
              </div>
            )}
          </div>
        </section>

        <div className="flex justify-end">
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
