/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
"use client";
import { cn } from "@/lib/utils";
import {
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  const pathname = usePathname();
  return (
    <div
      className={cn(
        " w-full  flex rounded-none md:hidden h-16 gap-4  sm:gap-10 items-center justify-between  max-md:bg-none bg-neutral-200 dark:bg-neutral-900 p-2  px-4",
        className
      )}
    >
      {items.map((item) => (
        <div
          className="flex flex-col items-center justify-center"
          key={item.title}
        >
          <IconContainer mouseX={mouseX} key={item.title} {...item} />
          <h1
            className={`text-xs ${
              pathname === item.href
                ? "text-black dark:text-white"
                : "text-neutral-400"
            }`}
          >
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  );
};
const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <div
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end  rounded-full bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link href={href}>
      <div
        ref={ref}
        style={{ width: width.get(), height: height.get() }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-none  md:bg-gray-200 md:dark:bg-neutral-800 flex items-center justify-center relative"
      >
        {hovered && (
          <div
            className="hidden md:flex px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
          >
            {title}
          </div>
        )}
        <div
          style={{ width: widthIcon.get(), height: heightIcon.get() }}
          className={`flex items-center justify-center max-md:bg-none ${
            pathname === href
              ? "text-black dark:text-white"
              : "text-neutral-500"
          }`}
        >
          {icon}
        </div>
      </div>
    </Link>
  );
}
