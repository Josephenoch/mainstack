import React, { FC } from "react"
import Logo from "@/components/ui/logo"
import Image from "next/image"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"



const Nav = () => {
  return (
    <nav className="w-[calc(100vw-8px)] bg-white z-[99999999] left-1/2 -translate-x-1/2  fixed justify-between rounded-[100px] shadow-[0px_2px_4px_0px_#2D3B430D,_0px_2px_6px_0px_#2D3B430F] h-16 flex items-center pl-6 pr-4">
      <Logo/>
      <ul className="flex items-center space-x-2">
        <NavLinkItem
          text="Home"
          href="home"
          icon="/svg/home.svg"
        />
        <NavLinkItem
          text="Analytics"
          href="analytics"
          icon="/svg/analytics.svg"
        />
        <NavLinkItem
          active
          text="Revenue"
          href="revenue"
          icon="/svg/revenue.svg"
        />
        <NavLinkItem
          text="CRM"
          href="crm"
          icon="/svg/crm.svg"
        />
        <NavLinkItem
          text="Apps"
          icon="/svg/apps.svg"
          dropdownTitle="Link In Bio"
          dropdownContent={[
            {
              title: "Link in Bio",
              description: "Manage your Link in Bio",
            },{
              title: "Store",
              description: "Manage your Store activities",
            },{
              title: "Media Kit",
              description: "Manage your Media Kit",
            },{
              title: "Invoices",
              description: "Manage your Invoices",
            },{
              title: "Booking",
              description: "Manage your Booking",
            }
          ]}
        />
      </ul>

      <div className="flex space-x-4">
        <Image  
          width={20}
          height={20}
          alt="notification icon"
          src="/svg/notifications.svg"
        />
        <Image  
          width={20}
          height={20}
          alt="message icon"
          src="/svg/chat.svg"
        />

      </div>
    </nav>

  )
}

interface NavLinkItemInterface {
  icon: string,
  text: string,
  href?: string,
  active?: boolean,
  dropdownTitle?: string,
  dropdownContent?: DropDownMenuContent[]
}

interface DropDownMenuContent {
  title: string,
  description: string
}

const NavLinkItem:FC<NavLinkItemInterface> = ({
  icon,
  text,
  href,
  active,
  dropdownTitle,
  dropdownContent
}) => {
  if (href)return (
    <li>
      <Link href={href} className={`flex px-4 py-2 space-x-1 text-gray-400 ${active ? "bg-black-300 text-white rounded-[100px] space-x-2" : ""}`}>
          <Image  
            width={20}
            src={icon}
            height={20}
            alt={`${text} icon`}
          />
          <span className="font-semibold ">{text}</span>
      </Link>
    </li>
  )
  if(!href && dropdownContent)return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex px-4 py-2 hover:outline-none hover:rounded-[100px] focus:outline-none hover:bg-black-300 hover:text-white space-x-1 group">
        <Image  
          width={20}
          src={icon}
          height={20}
          alt={`${text} icon`}
        />
        <span className="font-semibold text-gray-400 group-hover:text-white">{text}</span>
        <span className="hidden group-hover:inline">| {dropdownTitle}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[400px] px-4 py-6 bg-white shadow-[0px_6px_6px_0px_#2D3B430D,_0px_6px_6px_0px_#2D3B430F] rounded-2xl space-y-4"
        sideOffset={8} // this ensures it's aligned right under, adjust or remove if not using Radix
        align="start" 
          
      >
        {
          dropdownContent.map(item=>{
            return(
                <DropdownMenuItem className="flex hover:scale-[1.02] hover:shadow-[0px_2px_4px_0px_#2D3B430D,_0px_2px_6px_0px_#2D3B430F] transition-all hover:outline-none p-2 rounded-xl space-x-4">
                  <div className="size-10 flex items-center justify-center border rounded-sm">
                    <div className="size-5 rounded-sm shadow"/>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-black-300">{item.title}</span>
                    <span className="text-sm text-gray-400">{item.description}</span>

                  </div>
                </DropdownMenuItem>
            )
          })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Nav