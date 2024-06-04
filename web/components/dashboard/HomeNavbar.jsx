"use client";

import { Building2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNav() {
  const pathname = usePathname();

  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/home/landing"
    },

    {
      title: "Getting Started",
      href: "/dashboard/home/getting-started"
    },

    {
      title: "Recent Updates",
      href: "/dashboard/home/recent"
    }
  ]
  return (
    <div className="h-32 header-bg bg-slate-50 mb-2">
        <div className="flex space-x-4 p-4 justify-start ">
            <Building2Icon className="w-10 h-10 bg-white rounded-lg items-center justify-center p-2"/>

            <h2 className="text-lg font-sans py-2 font-semibold">Hello, Welcome !!!</h2>
        </div>

        <nav className="sticky bottom-0 mt-6 flex space-x-4">
          {
            navLinks.map((item, index) => {
              return (
                 <Link key={index} href={item.href} className={`${pathname === item.href? "px-2 pt-2 border-b-2 border-blue-700 font-light font-SofiaExtraLight": "p-2"}`}>{item.title}</Link>
              )
            })
          }
           
        </nav>
    </div>
  );
}