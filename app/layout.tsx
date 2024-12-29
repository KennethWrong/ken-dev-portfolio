import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kenneth Wong Hon Nam | Software Engineer",
  description: "Kenneth's digital portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="font-['Raleway'] scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
