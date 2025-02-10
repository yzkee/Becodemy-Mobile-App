"use client";
import Link from "next/link";
import React from "react";
interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href: string;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}
const SidebarItem = ({
  icon,
  title,
  isActive,
  href,
  collapsed,
  setCollapsed,
}: Props) => {
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed(!collapsed);
    }
  };

  return (
    <Link href={href} className="my-2 block">
      <div
        className={`flex gap-2 w-full min-h-12 h-full items-center px-[13px] rounded-lg cursor-pointer transition hover:bg-[#2B2F31] ${isActive && "scale-[.98] bg-[#0f3158] fill-blue-200 hover:!bg-[#0f3158d6]"}`}
      >
        {icon}
        <h5 className="text-slate-200 text-lg">{title}</h5>
      </div>
    </Link>
  );
};

export default SidebarItem;
