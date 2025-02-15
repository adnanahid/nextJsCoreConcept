"use client"; // Ensure this is a Client Component

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const isDashboard = pathname.includes("dashboard");

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false); // Prevents hydration errors

  useEffect(() => {
    setIsClient(true); // Mark that we are now on the client

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (isDashboard || !isClient) return null; // Prevents mismatch during SSR

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-base-100 shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">NextJs</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal space-x-5 tracking-widest">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/meals">Meals</Link>
            <Link href="/menus">Menus</Link>
            <Link href="/addmenu">Add Menus</Link>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-sm">Login</a>
        </div>
      </div>
    </div>
  );
}
