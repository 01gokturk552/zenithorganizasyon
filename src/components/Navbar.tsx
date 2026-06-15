"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import AnnouncementBanner from "./AnnouncementBanner";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  {
    label: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
    children: [
      { label: "PR Hizmetleri", href: "/hizmetlerimiz/pr" },
      { label: "Saha Operasyonları", href: "/hizmetlerimiz/saha" },
      { label: "Press & Medya", href: "/hizmetlerimiz/press" },
      { label: "Güvenlik", href: "/hizmetlerimiz/guvenlik" },
      { label: "İnsan Kaynakları", href: "/hizmetlerimiz/ik" },
      { label: "Finans", href: "/hizmetlerimiz/finans" },
      { label: "IT & Dijital", href: "/hizmetlerimiz/it" },
    ],
  },
  {
    label: "Departmanlar",
    href: "/departmanlar",
    children: [
      { label: "PR Departmanı", href: "/departmanlar/pr" },
      { label: "Saha Departmanı", href: "/departmanlar/saha" },
      { label: "Press Departmanı", href: "/departmanlar/press" },
      { label: "Güvenlik Departmanı", href: "/departmanlar/guvenlik" },
      { label: "İK Departmanı", href: "/departmanlar/ik" },
      { label: "Finans Departmanı", href: "/departmanlar/finans" },
      { label: "IT Departmanı", href: "/departmanlar/it" },
    ],
  },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white shadow-[0_2px_20px_rgba(13,27,62,0.08)] border-b border-[#e2e7f0]"
        : "bg-white border-b border-[#e2e7f0]"
    }`}>
      <AnnouncementBanner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-[#0d1b3e] rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-white font-black text-lg tracking-tight">Z</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#1e3373] rounded-full border-2 border-white" />
            </div>
            <div>
              <div className="font-black text-[#0d1b3e] text-xl leading-none tracking-tight">ZENITH</div>
              <div className="text-[#0d1b3e]/40 text-[10px] font-semibold tracking-[0.2em] uppercase mt-0.5">Organizasyon</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-[#0d1b3e]/70 hover:text-[#0d1b3e] rounded-lg hover:bg-[#0d1b3e]/5 transition-all"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown size={13} className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  )}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[#e2e7f0] rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#0d1b3e]/70 hover:text-[#0d1b3e] hover:bg-[#0d1b3e]/5 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0d1b3e]/20 flex-shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/basvuru"
              className="px-4 py-2 text-sm font-semibold text-[#0d1b3e] border border-[#0d1b3e]/20 rounded-xl hover:border-[#0d1b3e] hover:bg-[#0d1b3e]/5 transition-all"
            >
              Başvuru Yap
            </Link>
            <Link
              href="/teklif"
              className="px-4 py-2.5 text-sm font-bold bg-[#0d1b3e] text-white rounded-xl hover:bg-[#152552] shadow-sm hover:shadow-md transition-all"
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#0d1b3e]/5 transition-colors text-[#0d1b3e]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e2e7f0] px-4 py-5 space-y-1 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-4 py-2.5 text-sm font-medium text-[#0d1b3e] hover:bg-[#0d1b3e]/5 rounded-xl"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4 mt-1 space-y-0.5">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-xs text-[#0d1b3e]/60 hover:text-[#0d1b3e] hover:bg-[#0d1b3e]/5 rounded-lg"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 space-y-2 border-t border-[#e2e7f0] mt-4">
            <Link
              href="/basvuru"
              className="block text-center px-4 py-3 text-sm font-semibold border border-[#0d1b3e]/20 text-[#0d1b3e] rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              Başvuru Yap
            </Link>
            <Link
              href="/teklif"
              className="block text-center px-4 py-3 text-sm font-bold bg-[#0d1b3e] text-white rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
