// 'use client'
// import '@/styles/globals.scss'
import { anonymousSession } from "@/appwrite/functions";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
}) {
  
  const auth = await anonymousSession();
  // const pathname = usePathname()
  // console.log(params)
  return (
    <div className={"flex flex-col pt-4 px-6"}>
      {children}
    </div>
  );
}
