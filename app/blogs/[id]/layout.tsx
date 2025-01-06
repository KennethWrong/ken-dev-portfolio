import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import RecentBlogs from "@/components/blog/RecentBlogs";

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
    <>
      <Navbar />
      {children}
      <RecentBlogs />
    </>
  );
}
