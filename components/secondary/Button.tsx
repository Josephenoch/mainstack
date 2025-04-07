import Link from "next/link";
import { twMerge } from "tailwind-merge";
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"

interface PropsType extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, 
HTMLButtonElement> {
  href?: string
}

const Button:FC<PropsType> = ({
  href,
  disabled,
  children,
  className: addClasses,
  ...props
}) => {

  


  const className = twMerge(`${disabled ? "cursor-not-allowed opacity-40" :""} font-semibold border border-white bg-black-300 text-white text-sm items-center flex justify-center disabled:hover:scale-100 disabled:active:scale-100 rounded-[100px]  hover:scale-105 active:scale-90 h-[2.8rem] min-w-[130px] space-x-3  transition-all duration-150 shadow-[3px_3px_0px_0px] shadow-grey`, addClasses)

  return href ?  (
  
      <Link href={href} className={className}>
      {children}
      </Link>
   
  ) : (
    <button 
    disabled={disabled}
    className={className}
    {...props}
    >
      {children}
      </button>
  )
}

export default Button