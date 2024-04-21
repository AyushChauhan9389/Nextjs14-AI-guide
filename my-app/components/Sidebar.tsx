"use client";

import { cn } from "@/lib/utils";
import { Backpack, ColumnsIcon, LayoutDashboard, MapPin, Pin, Voicemail, icons } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({weight: "400", subsets: ["latin"]});

const routes = [
    {
        label: "Dashboard",
        icons: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Trip Planner(AI)",
        icons: Backpack,
        href: "/planner",
        color: "text-violet-500"
    },
    {
        label: "Photo Location Search",
        icons: MapPin,
        href: "/finder",
        color: "text-pink-700"
    },
    {
        label: "Real time voice translate",
        icons: Voicemail,
        href: "/translator",
        color: "text-emerald-700"
    }
]
const Sidebar = () => {
    const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
            <div className="relative w-8 h-8 mr-4">
                <Image fill alt="logo" src="/logo.png"></Image>
            </div>
            <h1 className={cn("text-2xl font-bold", montserrat.className)}>Travl.ai</h1>
        </Link>
        <div className="space-y-1">
            {routes.map((route) => (
                <Link href={route.href} key={route.href} className={cn("text-sm group flex p-3 w-full  justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10  rounded-lg  transition", pathname === route.href ? "text-white bg-white/10" : " text-zinc-400")}>
                    <div className="flex items-center flex-1">
                        <route.icons className={cn("h-5 w-5 mr-3", route.color)} />
                        {route.label}
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;