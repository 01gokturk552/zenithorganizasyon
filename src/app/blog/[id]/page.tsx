import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="w-14 h-14 bg-[#0d1b3e]/5 border border-[#e2e7f0] rounded-2xl flex items-center justify-center mb-5">
        <span className="text-[#0d1b3e]/25 font-black text-xl">?</span>
      </div>
      <h1 className="text-2xl font-black text-[#0d1b3e] mb-2">Yazı Bulunamadı</h1>
      <p className="text-[#0d1b3e]/40 text-sm mb-8 max-w-xs leading-relaxed">
        Bu blog yazısı henüz yayınlanmadı veya kaldırıldı.
      </p>
      <Link
        href="/blog"
        className="flex items-center gap-2 bg-[#0d1b3e] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#152552] transition-all"
      >
        <ArrowLeft size={15} /> Blog&apos;a Dön
      </Link>
    </div>
  );
}
