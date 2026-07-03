"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Newpro Starter
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Docs
          </Link>
          
          <ThemeToggle />
          
          <Button size="sm">Sign In</Button>
        </div>
      </div>
    </nav>
  );
}