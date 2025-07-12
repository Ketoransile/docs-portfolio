// import Link from "next/link";

// export default function Sidebar({ sectionLinks }: { sectionLinks: any[] }) {
//   return (
//     <aside className="hidden md:flex flex-col w-80 fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-black border-r border-neutral-700 z-50 pl-20">
//       <nav className="flex flex-col gap-1 py-8 px-4 overflow-y-auto">
//         {sectionLinks.map((link) => {
//           const isActive = typeof window !== "undefined" ? window.location.pathname === link.href : false;
//           return (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`flex items-center gap-1 text-lg font-semibold px-4 py-2 rounded transition-colors
//                 ${isActive ? 'text-white bg-zinc-900 font-bold border-l-4 border-blue-600' : 'text-zinc-400 border-l-4 border-transparent'}
//                 hover:text-blue-600 hover:bg-zinc-900`}
//               style={{ fontFamily: 'Inter, var(--font-geist-sans), system-ui, sans-serif', letterSpacing: '-0.01em' }}
//             >
//               {link.icon}
//               <span className="sidebar-link-text">{link.name}</span>
//             </Link>
//           );
//         })}
//       </nav>
//     </aside>
//   );
// } 

'use client'; // Required for using hooks like usePathname

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Sidebar({ sectionLinks }: { sectionLinks: any[] }) {
  // Get the current path using the usePathname hook
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-80 fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-black border-r border-neutral-700 z-50 pl-20">
      <nav className="flex flex-col gap-1 py-8 px-4 overflow-y-auto">
        {sectionLinks.map((link) => {
          // Determine if the current link is active based on the pathname
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-1 text-lg font-semibold px-4 py-2 rounded transition-colors
                ${isActive
                  ? 'text-white bg-neutral-800 '
                  : 'text-zinc-400 '}
                hover:bg-neutral-700`}
              style={{ fontFamily: 'Inter, var(--font-geist-sans), system-ui, sans-serif', letterSpacing: '-0.01em' }}
            >
              {link.icon}
              <span className="sidebar-link-text">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}