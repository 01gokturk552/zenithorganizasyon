"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Share2, AtSign, Link2, PlayCircle, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

type Settings = {
  email: string;
  telefon: string;
  adres: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  youtube: string;
};

const DEFAULTS: Settings = {
  email:     "info@zenithorganizasyon.com",
  telefon:   "+90 (XXX) XXX XX XX",
  adres:     "İstanbul, Türkiye",
  instagram: "",
  twitter:   "",
  linkedin:  "",
  youtube:   "",
};

const footerLinks = {
  "Kurumsal": [
    { label: "Hakkımızda",  href: "/hakkimizda" },
    { label: "Departmanlar", href: "/departmanlar" },
    { label: "Referanslar", href: "/referanslar" },
    { label: "Blog",        href: "/blog" },
    { label: "İletişim",   href: "/iletisim" },
  ],
  "Hizmetler": [
    { label: "PR Hizmetleri",      href: "/hizmetlerimiz/pr" },
    { label: "Saha Operasyonları", href: "/hizmetlerimiz/saha" },
    { label: "Press & Medya",      href: "/hizmetlerimiz/press" },
    { label: "Güvenlik",           href: "/hizmetlerimiz/guvenlik" },
    { label: "IT & Dijital",       href: "/hizmetlerimiz/it" },
  ],
  "Çalışmak İster misiniz?": [
    { label: "Genel Başvuru",    href: "/basvuru" },
    { label: "Teklif Al",        href: "/teklif" },
    { label: "Medya Merkezi",    href: "/medya" },
    { label: "KVKK",             href: "/kvkk" },
    { label: "Gizlilik Politikası", href: "/gizlilik" },
  ],
};

export default function Footer() {
  const [s, setS] = useState<Settings>(DEFAULTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("zenith_site_settings");
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Settings>;
        setS({ ...DEFAULTS, ...parsed });
      }
    } catch { /* ignore */ }
  }, []);

  const socials = [
    { icon: Share2,      label: "Instagram",  href: s.instagram || "#" },
    { icon: AtSign,      label: "Twitter / X", href: s.twitter   || "#" },
    { icon: Link2,       label: "LinkedIn",    href: s.linkedin  || "#" },
    { icon: PlayCircle,  label: "YouTube",     href: s.youtube   || "#" },
  ];

  return (
    <footer className="bg-[#0d1b3e] text-white">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Birlikte çalışalım</p>
            <h2 className="text-2xl font-black">Etkinliğiniz için teklif alın</h2>
          </div>
          <div className="flex gap-3">
            <Link
              href="/teklif"
              className="flex items-center gap-2 bg-white text-[#0d1b3e] px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/90 transition-all"
            >
              Teklif Al <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/basvuru"
              className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Başvuru Yap
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-[#0d1b3e] font-black text-xl">Z</span>
              </div>
              <div>
                <div className="font-black text-xl tracking-tight leading-none">ZENITH</div>
                <div className="text-white/40 text-[10px] font-semibold tracking-[0.2em] uppercase mt-0.5">Organizasyon</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              Etkinlik, zirve, konferans ve organizasyonlarda ihtiyaç duyulan insan kaynağını ve operasyonel desteği profesyonel standartlarda sağlıyoruz.
            </p>
            <div className="space-y-3">
              {s.telefon && (
                <a href={`tel:${s.telefon}`} className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors">
                  <Phone size={15} /> {s.telefon}
                </a>
              )}
              {s.email && (
                <a href={`mailto:${s.email}`} className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors">
                  <Mail size={15} /> {s.email}
                </a>
              )}
              {s.adres && (
                <div className="flex items-center gap-3 text-white/50 text-sm">
                  <MapPin size={15} /> {s.adres}
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all"
                >
                  <social.icon size={15} className="text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">{group}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/55 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Zenith Organizasyon. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "KVKK",             href: "/kvkk" },
              { label: "Gizlilik",         href: "/gizlilik" },
              { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="text-white/30 hover:text-white/60 text-xs transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
