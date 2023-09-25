"use client";

import { menus, MenuItem } from "@/lib/menus";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

const SideNav = (props) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="fixed top-0 z-20 border-r border-white min-h-screen flex flex-col lg:w-72 bg-gray-100">
      <div className="p-4 h-14 lg:auto flex items-center text-2xl font-extrabold">POSify</div>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 ': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-2 px-4">
          {menus.map((item: MenuItem, index: any) => (
            // <p key={index}>{item.name}</p>
            <NavItem item={item} key={index} close={() => {}} />
          ))}
        </nav>

      </div>
    </div>
  );
};

const NavItem = ({
  item,
  close,
}: {
  item: MenuItem;
  close: () => false | void;
}) => {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;
  return (
    <Link
      href={item.slug}
      onClick={close}
      className={clsx(
        "rounded-lg flex gap-2 items-center px-3 py-3 font-medium hover:bg-amber-200 ",
        {
          " hover:bg-gray-800": !isActive,
          " bg-amber-500": isActive,
        }
      )}
    >
      {item.icon}
      {item.name}
    </Link>
  );
};

export default SideNav;
