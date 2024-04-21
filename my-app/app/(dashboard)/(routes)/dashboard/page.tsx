"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Backpack } from "lucide-react";
import { useRouter } from "next/navigation";

const options = [
  {
    label: "Plan Your Trip",
    icon: Backpack,
    color: "text-violet-500",
    bgcolor: "bg-violet-500/10",
    href: "/planner"
  },
  {
    label: "Find image location",
    icon: Backpack,
    color: "text-emerald-500",
    bgcolor: "bg-emerald-500/10",
    href: "/finder"
  },
  {
    label: "Translate in real time",
    icon: Backpack,
    color: "text-pink-500",
    bgcolor: "bg-pink-500/10",
    href: "/translator"
  }
]
const DashbaordPage = () => {
  const router =  useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Explore the Beauty of India</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">Discover the Vibrant Tapestry of India: A Journey Through Its Iconic Landmarks and Hidden Gems</p>
      </div>
      <div className="flex flex-wrap px-4 md:px-20 lg:px-32 gap-4">
            {options.map((option) => (
                <Card onClick={() => router.push(option.href)} key={option.href} 
                    className="flex p-4 border border-black/5 items-center justify-between hover:shadow-md transition cursor-pointer flex-auto min-w-[300px]"
                >
                    <div className="flex items-center gap-x-4">
                        <div className={cn("p-2 w-fit rounded-md", option.bgcolor)}>
                            <option.icon className={cn("w-8 h-8", option.color)} />
                        </div>
                        <div className="font-semibold">
                            {option.label}
                        </div>
                    </div>
                    <ArrowRight className="w-5 h-5" />  
                </Card>
            ))}
        </div>
      
    </div>
  )
  
};

export default DashbaordPage;