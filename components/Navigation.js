'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ navLinks }) {
  const pathname=usePathname()
  return (
    <nav className="flex py-4">

      <ul className="flex py-4 gap-4" >
        
        {navLinks.map((link, index) => (
          <li key={index}>
            {/* Ensure link.href and link.title are defined */}
            <Link className={pathname === link.href ? "underline" : "" } href={link.href || "#"}>{link.title || "Untitled"}</Link>
          </li>
        ))}
      </ul>
      

      <button className="ml-10 my-1 border-2 border-[#6610F2] w-[142px] h-[45px] text-[#6610F2] bg-white rounded-full">Contact us</button>
        
    </nav>
  );
}
