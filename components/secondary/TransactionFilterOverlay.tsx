import React from 'react'
import Overlay from '../ui/overlay'
import Image from 'next/image'
import { Button } from '../ui/button'

const TransactionFilterOverlay = () => {
  return (
    <Overlay blur opacity={20}  open>
      <div className="h-[90%] absolute right-10 top-1/2 bg-white -translate-y-1/2 w-[456px] rounded-[20px] p-6">
        <div className="flex justify-between">
          <p className="text-lg font-bold">Filter</p>
          <Image
            width={34}
            height={34}
            alt="cancel"
            src="svg/cancel.svg"
            className="cursor-pointer"
          />
        </div>

        <div className='flex flex-wrap justify-between'>
          <Button 
            size="sm" 
            variant="outline" 
            className="text-xs font-semibold bg-none border border-[#EFF1F6] py-1 mt-4"
          >
            <span>Today</span>
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="text-xs font-semibold bg-none border border-[#EFF1F6] py-1 mt-4"
          >
            <span>Last 7 days</span>
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="text-xs font-semibold bg-none border border-[#EFF1F6] py-1 mt-4"
          >
            <span>This month</span>
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="text-xs font-semibold bg-none border border-[#EFF1F6] py-1 mt-4"
          >
            <span>Last 3 months</span>
          </Button>
        </div>
      </div>
    </Overlay>
  )
}

export default TransactionFilterOverlay