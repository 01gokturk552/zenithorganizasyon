"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Users, ClipboardList, UserCheck, LayoutDashboard,
  LogOut, Menu, X, CheckSquare, Calendar, Bell, ChevronRight
} from "lucide-react";

const departments = [
  { id: "pr", label: "PR Başkanı Paneli", href: "/panel/pr" },
  { id: "saha", label: "Saha Başkanı Paneli", href: "/panel/saha" },
  { id: "press", label: "Press Başkanı Paneli", href: "/panel/press" },
  { id: "guvenlik", label: "Güvenlik Başkanı Paneli", href: "/panel/guvenlik" },
  { id: "ik", label: "İK Başkanı Paneli", href: "/panel/ik" },
  { id: "finans", label: "Finans Başkanı Paneli", href: "/panel/finans" },
  { id: "it", label: "IT Başkanı Paneli", href: "/panel/it" },
];

export default function PanelSelectionPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#0f1f4b] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-black text-2xl">Z</span>
          </div>
          <h1 className="text-3xl font-black text-[#0f1f4b] mb-2">Zenith Panel</h1>
          <p className="text-[#0f1f4b]/60">Departman panelinizi seçin</p>
        </div>
        <div className="space-y-3">
          {departments.map((dept) => (
            <Link
              key={dept.id}
              href={dept.href}
              className="flex items-center justify-between bg-white border border-[#0f1f4b]/10 rounded-2xl p-5 hover:border-[#0f1f4b] hover:shadow-md transition-all group"
            >
              <span className="font-bold text-[#0f1f4b]">{dept.label}</span>
              <ChevronRight size={20} className="text-[#0f1f4b]/40 group-hover:text-[#0f1f4b] transition-colors" />
            </Link>
          ))}
          <Link
            href="/admin"
            className="flex items-center justify-between bg-[#0f1f4b] rounded-2xl p-5 hover:bg-[#1a3278] transition-all"
          >
            <span className="font-bold text-white">Admin Paneli</span>
            <ChevronRight size={20} className="text-white/60" />
          </Link>
        </div>
      </div>
    </div>
  );
}
