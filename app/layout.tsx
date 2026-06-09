import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "글로벌파트너팀 | Wanted Lab",
  description: "글로벌 시장과 HR 비즈니스를 연결하는 파트너십 전문 팀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}
