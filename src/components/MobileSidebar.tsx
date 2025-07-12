"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";

export default function MobileSidebar({ sectionLinks }: { sectionLinks: any[] }) {
  const pathname = usePathname();

  return (
    <Drawer shouldScaleBackground={false}>
      {/* Hamburger Button as DrawerTrigger */}
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden h-9 w-9 p-0"
          aria-label="Open mobile menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-0 max-w-[320px] w-full left-0 top-0 bottom-0 fixed rounded-none border-none shadow-2xl bg-background flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0">
          <Link href="/" className="flex items-center gap-2" passHref legacyBehavior>
            <DrawerClose asChild>
              <a className="font-extrabold text-xl tracking-tight text-foreground">abdi.dev</a>
            </DrawerClose>
          </Link>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 p-0"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </DrawerClose>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="px-6 pt-4 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground select-none">
            Navigation
          </div>
          <nav className="flex flex-col gap-1 px-2 pb-2">
            {sectionLinks && sectionLinks.length > 0 ? (
              sectionLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <DrawerClose asChild key={link.name}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-lg font-semibold px-4 py-2 rounded transition-colors
                        ${isActive
                          ? 'text-white bg-neutral-800 border-l-4 border-blue-600'
                          : 'text-zinc-400 border-l-4 border-transparent'
                        }
                        hover:bg-neutral-700`}
                      style={{ fontFamily: 'Inter, var(--font-geist-sans), system-ui, sans-serif', letterSpacing: '-0.01em' }}
                    >
                      {link.icon}
                      <span className="sidebar-link-text">{link.name}</span>
                    </Link>
                  </DrawerClose>
                );
              })
            ) : (
              <div className="text-zinc-400 text-center py-4">No navigation links found</div>
            )}
          </nav>
        </div>

        {/* Footer */}
        <div className="border-t border-border px-6 py-4 flex items-center justify-between gap-4 flex-shrink-0 bg-background">
          <a
            href="https://github.com/Ketoransile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-blue-600 transition-colors text-base font-semibold"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>
        </div>
      </DrawerContent>
    </Drawer>
  );
} 