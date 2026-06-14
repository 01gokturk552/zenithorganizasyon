"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard, Users, Eye, EyeOff,
  ArrowLeft, ChevronRight, LogIn,
  Megaphone, Camera, Shield, Briefcase, DollarSign, Monitor
} from "lucide-react";

type Role = "admin" | "dept" | null;
type Step = "role" | "dept-select" | "login";

const departments = [
  { id: "pr",       label: "PR Departmanı",       icon: Megaphone,      color: "bg-blue-50 border-blue-200 text-blue-700" },
  { id: "saha",     label: "Saha Departmanı",      icon: Users,          color: "bg-green-50 border-green-200 text-green-700" },
  { id: "press",    label: "Press Departmanı",     icon: Camera,         color: "bg-purple-50 border-purple-200 text-purple-700" },
  { id: "guvenlik", label: "Güvenlik Departmanı",  icon: Shield,         color: "bg-red-50 border-red-200 text-red-700" },
  { id: "ik",       label: "İK Departmanı",        icon: Briefcase,      color: "bg-yellow-50 border-yellow-200 text-yellow-700" },
  { id: "finans",   label: "Finans Departmanı",    icon: DollarSign,     color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { id: "it",       label: "IT Departmanı",        icon: Monitor,        color: "bg-indigo-50 border-indigo-200 text-indigo-700" },
];

// Demo credentials — gerçek projede backend ile değiştirilmeli
const CREDENTIALS: Record<string, { pass: string; redirect: string }> = {
  admin:    { pass: "zenith2024",  redirect: "/admin" },
  pr:       { pass: "pr2024",      redirect: "/panel/pr" },
  saha:     { pass: "saha2024",    redirect: "/panel/saha" },
  press:    { pass: "press2024",   redirect: "/panel/press" },
  guvenlik: { pass: "guvenlik24",  redirect: "/panel/guvenlik" },
  ik:       { pass: "ik2024",      redirect: "/panel/ik" },
  finans:   { pass: "finans2024",  redirect: "/panel/finans" },
  it:       { pass: "it2024",      redirect: "/panel/it" },
};

export default function GirisPage() {
  const router = useRouter();

  const [step, setStep]             = useState<Step>("role");
  const [role, setRole]             = useState<Role>(null);
  const [selectedDept, setSelected] = useState<string>("");
  const [username, setUsername]     = useState("");
  const [password, setPassword]     = useState("");
  const [showPass, setShowPass]     = useState(false);
  const [error, setError]           = useState("");
  const [loading, setLoading]       = useState(false);

  const handleRoleSelect = (r: Role) => {
    setRole(r);
    setError("");
    if (r === "admin") setStep("login");
    else setStep("dept-select");
  };

  const handleDeptSelect = (deptId: string) => {
    setSelected(deptId);
    setError("");
    setStep("login");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const key = role === "admin" ? "admin" : selectedDept;
    const cred = CREDENTIALS[key];

    setTimeout(() => {
      if (username === key && password === cred?.pass) {
        router.push(cred.redirect);
      } else {
        setError("Kullanıcı adı veya şifre hatalı.");
        setLoading(false);
      }
    }, 700);
  };

  const currentDeptInfo = departments.find((d) => d.id === selectedDept);

  const goBack = () => {
    setError("");
    if (step === "login" && role === "dept") setStep("dept-select");
    else { setStep("role"); setRole(null); setSelected(""); }
    setUsername(""); setPassword("");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex flex-col">

      {/* Top bar */}
      <header className="h-[70px] bg-white border-b border-[#e2e7f0] flex items-center px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-[#0d1b3e] rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-base">Z</span>
          </div>
          <div>
            <div className="font-black text-[#0d1b3e] text-base leading-none tracking-tight">ZENITH</div>
            <div className="text-[#0d1b3e]/35 text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5">Organizasyon</div>
          </div>
        </Link>
        <div className="ml-auto">
          <Link href="/" className="flex items-center gap-1.5 text-sm text-[#0d1b3e]/50 hover:text-[#0d1b3e] transition-colors">
            <ArrowLeft size={15} /> Siteye Dön
          </Link>
        </div>
      </header>

      {/* Main */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">

          {/* Card */}
          <div className="bg-white rounded-3xl border border-[#e2e7f0] shadow-xl overflow-hidden">

            {/* Card Header */}
            <div className="bg-[#0d1b3e] px-8 pt-8 pb-10 relative overflow-hidden">
              {/* BG pattern */}
              <div className="absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/5 rounded-full" />

              <div className="relative">
                {step !== "role" && (
                  <button
                    onClick={goBack}
                    className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs font-medium mb-5 transition-colors"
                  >
                    <ArrowLeft size={13} /> Geri
                  </button>
                )}

                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-5">
                  {["role", "dept-select", "login"].map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                        step === s
                          ? "bg-white text-[#0d1b3e]"
                          : ["role", "dept-select", "login"].indexOf(step) > i
                          ? "bg-white/30 text-white"
                          : "bg-white/10 text-white/30"
                      }`}>
                        {i + 1}
                      </div>
                      {i < 2 && (
                        <div className={`w-6 h-px transition-all ${
                          ["role", "dept-select", "login"].indexOf(step) > i ? "bg-white/30" : "bg-white/10"
                        }`} />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-white/10 border border-white/15 rounded-2xl flex items-center justify-center">
                    <LogIn size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                      {step === "role" ? "Adım 1" : step === "dept-select" ? "Adım 2" : "Adım 3"}
                    </p>
                    <h1 className="text-white font-black text-xl leading-tight">
                      {step === "role"
                        ? "Personel Girişi"
                        : step === "dept-select"
                        ? "Departman Seçin"
                        : role === "admin"
                        ? "Admin Girişi"
                        : `${currentDeptInfo?.label ?? ""} Girişi`}
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="px-8 py-8">

              {/* ── STEP 1: ROL SEÇİMİ ── */}
              {step === "role" && (
                <div className="space-y-3">
                  <p className="text-[#0d1b3e]/50 text-sm mb-6">
                    Sisteme erişmek için rolünüzü seçin.
                  </p>

                  {/* Admin Card */}
                  <button
                    onClick={() => handleRoleSelect("admin")}
                    className="w-full group flex items-center gap-4 p-5 rounded-2xl border-2 border-[#0d1b3e]/10 hover:border-[#0d1b3e] bg-white hover:bg-[#0d1b3e] transition-all text-left"
                  >
                    <div className="w-12 h-12 bg-[#0d1b3e]/7 group-hover:bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <LayoutDashboard size={22} className="text-[#0d1b3e] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-[#0d1b3e] group-hover:text-white text-base transition-colors">Yönetici (Admin)</div>
                      <div className="text-[#0d1b3e]/45 group-hover:text-white/60 text-xs mt-0.5 transition-colors">
                        Tüm sisteme tam erişim · Dashboard & Raporlar
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-[#0d1b3e]/25 group-hover:text-white/60 flex-shrink-0 transition-colors" />
                  </button>

                  {/* Dept Head Card */}
                  <button
                    onClick={() => handleRoleSelect("dept")}
                    className="w-full group flex items-center gap-4 p-5 rounded-2xl border-2 border-[#0d1b3e]/10 hover:border-[#0d1b3e] bg-white hover:bg-[#0d1b3e] transition-all text-left"
                  >
                    <div className="w-12 h-12 bg-[#0d1b3e]/7 group-hover:bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <Users size={22} className="text-[#0d1b3e] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-[#0d1b3e] group-hover:text-white text-base transition-colors">Departman Başkanı</div>
                      <div className="text-[#0d1b3e]/45 group-hover:text-white/60 text-xs mt-0.5 transition-colors">
                        Kendi departmanı · Üyeler, görevler, başvurular
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-[#0d1b3e]/25 group-hover:text-white/60 flex-shrink-0 transition-colors" />
                  </button>
                </div>
              )}

              {/* ── STEP 2: DEPARTMAN SEÇİMİ ── */}
              {step === "dept-select" && (
                <div>
                  <p className="text-[#0d1b3e]/50 text-sm mb-6">
                    Başkanlık ettiğiniz departmanı seçin.
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {departments.map((dept) => (
                      <button
                        key={dept.id}
                        onClick={() => handleDeptSelect(dept.id)}
                        className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl border-2 border-[#e2e7f0] hover:border-[#0d1b3e] bg-white hover:bg-[#0d1b3e] transition-all"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${dept.color} group-hover:bg-white/15 group-hover:border-white/20 transition-colors`}>
                          <dept.icon size={18} className="group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-xs font-bold text-[#0d1b3e] group-hover:text-white text-center leading-tight transition-colors">
                          {dept.label.replace(" Departmanı", "")}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── STEP 3: GİRİŞ FORMU ── */}
              {step === "login" && (
                <form onSubmit={handleLogin} className="space-y-5">
                  <p className="text-[#0d1b3e]/50 text-sm mb-2">
                    Kullanıcı adı ve şifrenizi girin.
                  </p>

                  {/* Role badge */}
                  <div className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border ${
                    role === "admin"
                      ? "bg-[#0d1b3e]/5 border-[#0d1b3e]/15"
                      : currentDeptInfo
                      ? `${currentDeptInfo.color} opacity-80`
                      : ""
                  }`}>
                    {role === "admin"
                      ? <LayoutDashboard size={16} className="text-[#0d1b3e]/60" />
                      : currentDeptInfo && <currentDeptInfo.icon size={16} />
                    }
                    <span className="text-xs font-bold">
                      {role === "admin" ? "Yönetici (Admin) Girişi" : currentDeptInfo?.label}
                    </span>
                  </div>

                  {/* Username */}
                  <div>
                    <label className="block text-xs font-bold text-[#0d1b3e]/50 uppercase tracking-wider mb-2">
                      Kullanıcı Adı
                    </label>
                    <input
                      required
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder={role === "admin" ? "admin" : selectedDept}
                      className="w-full border-2 border-[#e2e7f0] focus:border-[#0d1b3e] rounded-xl px-4 py-3 text-sm text-[#0d1b3e] placeholder-[#0d1b3e]/25 outline-none transition-colors bg-white"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-xs font-bold text-[#0d1b3e]/50 uppercase tracking-wider mb-2">
                      Şifre
                    </label>
                    <div className="relative">
                      <input
                        required
                        type={showPass ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full border-2 border-[#e2e7f0] focus:border-[#0d1b3e] rounded-xl px-4 py-3 pr-12 text-sm text-[#0d1b3e] placeholder-[#0d1b3e]/25 outline-none transition-colors bg-white"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#0d1b3e]/30 hover:text-[#0d1b3e]/60 transition-colors"
                      >
                        {showPass ? <EyeOff size={17} /> : <Eye size={17} />}
                      </button>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#0d1b3e] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#152552] transition-all shadow-sm hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Giriş yapılıyor...
                      </>
                    ) : (
                      <>
                        <LogIn size={16} /> Giriş Yap
                      </>
                    )}
                  </button>

                  <p className="text-center text-[#0d1b3e]/30 text-xs">
                    Şifrenizi mi unuttunuz?{" "}
                    <span className="text-[#0d1b3e]/60 font-semibold cursor-pointer hover:text-[#0d1b3e] transition-colors">
                      Yönetici ile iletişime geçin
                    </span>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Bottom info */}
          <p className="text-center text-[#0d1b3e]/30 text-xs mt-6 leading-relaxed">
            Bu alan yalnızca Zenith Organizasyon personeline özeldir.<br />
            Ekibe katılmak için{" "}
            <Link href="/basvuru" className="text-[#0d1b3e]/60 font-semibold hover:text-[#0d1b3e] transition-colors underline underline-offset-2">
              başvuru yapın.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
