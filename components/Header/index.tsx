"use client"

import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()
  return (
    <header className="bg-">
          <div className='fixed w-full lg:pl-72 h-14 flex border-b bg-white z-20 border-gray-200 '>
            <div className='lg:pl-6 align-middle items-center flex'>
              <span className="capitalize font-semibold text-lg align-middle  ">
                { pathname.split("/")[1] }

              </span>
            </div>
          </div>
        </header>
  )
}

export default Header