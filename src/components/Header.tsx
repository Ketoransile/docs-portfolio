"use client"

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

export default function Header({ navLinks, sectionLinks }: { navLinks: any[]; sectionLinks: any[] }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return(
    <header className="w-full fixed top-0 left-0 w-full h-14 z-30 bg-black/70 backdrop-blur border-b border-neutral-700 shadow-lg flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-32 text-foreground" style={{ fontFamily: 'Inter, var(--font-outfit), system-ui, sans-serif' }}>
  
      <div className="flex items-center gap-2 sm:gap-4">
        <MobileSidebar sectionLinks={sectionLinks} />
        <Link href="/" className="flex items-center gap-2 sm:gap-8">
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-foreground flex items-center gap-2">
            <span className="-ml-2 mr-1 text-base sm:text-lg">↗</span> abdi.dev
          </span>
        </Link>
      </div>
      
      <nav className="flex items-center gap-0 text-muted-foreground text-base font-medium h-full">
        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-0">
          {navLinks.filter(link => link.name !== "Blog").map((link, idx) => (
            <React.Fragment key={link.name}>
              {idx !== 0 && <span className="mx-2 h-6 w-px bg-zinc-800" aria-hidden="true" />}
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors flex items-center px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {link.name} {link.icon}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="hover:text-blue-600 transition-colors px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {link.name}
                </Link>
              )}
            </React.Fragment>
          ))}
          <span className="mx-2 h-6 w-px bg-zinc-800" aria-hidden="true" />
        </div>
        
        {/* Search - Available on all screen sizes */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-2 sm:px-3 py-1.5 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-blue-600 hover:border-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-w-[140px] sm:min-w-[180px] md:min-w-[350px]"
            aria-label="Open command dialog"
          >
            <Search className="h-4 w-4" />
            <span className="flex-1 text-left text-xs sm:text-sm">Search sections...</span>
            <kbd className="hidden md:inline-flex bg-zinc-800 text-zinc-300 pointer-events-none items-center gap-1 rounded px-1.5 font-mono text-[10px] font-medium opacity-100 select-none ml-2">
              <span className="text-xs">⌘</span>J
            </kbd>
          </button>
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Sections">
                {sectionLinks.map((link) => (
                  <CommandItem key={link.name} onSelect={() => { setOpen(false); window.location.href = link.href; }}>
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </div>
        
        {/* Desktop GitHub - Hidden on mobile */}
        <div className="hidden md:flex items-center">
          <span className="mx-2 h-6 w-px bg-zinc-800" aria-hidden="true" />
          <a href="https://github.com/Ketoransile" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-blue-600 text-xl p-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <FaGithub />
          </a>
        </div>
      </nav>
    </header>
  );
} 