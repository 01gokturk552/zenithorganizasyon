import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenith Organizasyon | Profesyonel Etkinlik Yönetimi",
  description: "Zenith Organizasyon - PR, Saha, Press, Güvenlik ve daha fazla hizmetle profesyonel etkinlik yönetimi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="bg-white text-[#0f1f4b] min-h-full">{children}</body>
    </html>
  );
}
