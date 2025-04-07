import { Transaction } from '@/types/transaction.type'
import { format } from 'date-fns'
import Image from 'next/image'
import React, { FC } from 'react'

interface TransactionItemInterface {
  data: Transaction
}

const TransactionItem:FC<TransactionItemInterface> = ({
  data
}) => {

  const statusColor = {
    pending: 'text-[#A77A07]',
    completed: 'text-[#00B74D]',
    failed: 'text-[#FF3E3E]',
    successful: 'text-[#0EA163]',
  }[data.status]

  return (
    <div className="flex justify-between items-center px-2">
      <div className="flex space-x-2">
        <div className={`size-12 rounded-full flex items-center justify-center ${data.type === "deposit" ? 'bg-[#E3FCF2]' : 'bg-[#F9E3E0]'}`}>
          <Image
            width={20}  
            height={20}
            alt={data.type}
            src={`/svg/${data.type === "deposit" ? 'call_received' : 'call_made'}.svg`}
          />
        </div>
        <div className="flex flex-col justify-between py-1">
          <p className="text-sm font-semibold">{data.metadata?.product_name ?? data.type}</p>
          {
            data.metadata?.name ? 
              <p className="text-xs">{data.metadata?.name}</p> :
              <p className={`text-xs capitalize ${statusColor}`}>{data.status}</p>
          }
        </div>
      </div>
      <div className="flex flex-col justify-between py-1 items-end">
          <p className="text-sm font-semibold text-black-300">USD {data.amount}</p>
          <p className="text-xs">{format(new Date(data.date), "MMM d, yyyy")}</p>
      </div>
    </div>
  )
}

export default TransactionItem