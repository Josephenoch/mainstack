import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react"
import { twMerge } from "tailwind-merge";

interface PropsType{
  className?: string
}

const Button:FC<PropsType> = ({
  className: addedClasses
}) => {
  const className = twMerge(`relative size-9`, addedClasses)

  return (
    <Link className={className} href="/">
      <Image
        layout="fill"
        alt="mainstack logo"
        src="/svg/mainstack-logo.svg"
      />
    </Link>
  )
}

export default Button