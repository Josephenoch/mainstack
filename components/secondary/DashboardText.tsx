import Image from 'next/image'
import { title } from 'process'
import React, { FC } from 'react'

interface DashboardTextInterface {
  title: string,
  amount: number,
}

const DashboardText:FC<DashboardTextInterface> = ({
  title,
  amount,
}) => {
  return (
    <div className="space-y-2 w-full">
      <div className="flex justify-between items-start">
        <span className="text-sm font-semibold text-[#56616B]">{title}</span>
        <Image
          alt="arrow"
          width={20}
          height={20}
          src="/svg/info.svg"
        />
      </div>
      <p className="text-2xl font-bold"> USD {amount.toLocaleString()}</p>
    </div>
  )
}

export default DashboardText