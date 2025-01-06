import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kenneth Wong Hon Nam | Software Engineer",
  description: "Kenneth's digital portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
