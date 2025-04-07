import React, { FC, useRef, useState } from 'react'
import Overlay from '../ui/overlay'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu'
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

type PropsType = {
  open: boolean
  onClose: () => void
  transactionTypes: string[]
  transactionStatus: string[]
  selectedTransactionTypeOptions: string[]
  selectedTransactionStatusOptions: string[]
  setSelectedTransactionTypeOptions: (options: string[]) => void
  setSelectedTransactionStatusOptions: (options: string[]) => void
}

const TransactionFilterOverlay: FC<PropsType> = ({
  open,
  onClose,
  transactionTypes,
  transactionStatus,
  selectedTransactionTypeOptions,
  selectedTransactionStatusOptions,
  setSelectedTransactionTypeOptions,
  setSelectedTransactionStatusOptions
}) => {
  const [localSelectedTransactionTypeOptions, setLocalSelectedTransactionTypeOptions] = useState<string[]>([...selectedTransactionTypeOptions])
  const [localSelectedTransactionStatusOptions, setLocalSelectedTransactionStatusOptions] = useState<string[]>([...selectedTransactionStatusOptions])
  const [date, setDate] = useState<Date>()

  const initialState = useRef({
    date: new Date(),
    transactionType: [...selectedTransactionTypeOptions],
    transactionStatus: [...selectedTransactionStatusOptions],
  })

  const isDirty =
    date !== initialState.current.date ||
    localSelectedTransactionTypeOptions.sort().join() !== initialState.current.transactionType.sort().join() ||
    localSelectedTransactionStatusOptions.sort().join() !== initialState.current.transactionStatus.sort().join()

  const handleApply = () => {
    initialState.current = {
      date: date as Date,
      transactionType: [...localSelectedTransactionTypeOptions],
      transactionStatus: [...localSelectedTransactionStatusOptions],
    }

    setSelectedTransactionTypeOptions([...localSelectedTransactionTypeOptions])
    setSelectedTransactionStatusOptions([...localSelectedTransactionStatusOptions])
    onClose()
  }

  const handleClear = () => {
    setDate(initialState.current.date)
    setLocalSelectedTransactionTypeOptions(initialState.current.transactionType)
    setLocalSelectedTransactionStatusOptions(initialState.current.transactionStatus)
  }

  return (
    <Overlay onClick={onClose} blur opacity={20} open={open}>
      <div className="h-[90%] absolute right-10 top-1/2 bg-white -translate-y-1/2 w-[456px] justify-between rounded-[20px] p-6 flex flex-col">
        <div>
          <div className="flex justify-between">
            <p className="text-lg font-bold">Filter</p>
            <Image
              width={34}
              height={34}
              alt="cancel"
              onClick={onClose}
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

          <p className="text-sm font-bold mt-8">Date range</p>
          <div className="flex mt-2 justify-between">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="lg"
                  variant={"outline"}
                  className={cn(
                    "w-[49%] rounded-lg py-0 justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 z-[9999999999]" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  size="lg"
                  className={cn(
                    "w-[49%] rounded-lg py-3 justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 z-[9999999999]" align="start">
                <Calendar
                  initialFocus
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <p className="text-sm font-bold mt-8">Transaction Type</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"outline"}
                  size="lg"
                  className={cn(
                    "w-full rounded-lg py-3 justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  {localSelectedTransactionTypeOptions.length > 0 ? localSelectedTransactionTypeOptions.join(', ') : "Select transaction type"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-2 z-[9999999999] min-w-[var(--radix-dropdown-menu-trigger-width)]" align="start">
                {transactionTypes.map((item) => (
                  <DropdownMenuItem
                    key={item}
                    onClick={() => {
                      const exists = localSelectedTransactionTypeOptions.includes(item)
                      if (exists) {
                        setLocalSelectedTransactionTypeOptions(localSelectedTransactionTypeOptions.filter(i => i !== item))
                      } else {
                        setLocalSelectedTransactionTypeOptions([...localSelectedTransactionTypeOptions, item])
                      }
                    }}
                    className="w-full flex hover:scale-[1.02] hover:shadow-[0px_2px_4px_0px_#2D3B430D,_0px_2px_6px_0px_#2D3B430F] transition-all hover:outline-none p-2 rounded-xl space-x-2"
                  >
                    <div className="size-5 border">
                      {localSelectedTransactionTypeOptions.includes(item) ?
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="/svg/check_button.svg"
                        /> : null
                      }
                    </div>
                    <span className="font-semibold text-black-300">{item}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div>
            <p className="text-sm font-bold mt-8">Transaction Status</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"outline"}
                  size="lg"
                  className={cn(
                    "w-full rounded-lg py-3 justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  {localSelectedTransactionStatusOptions.length > 0 ? localSelectedTransactionStatusOptions.join(', ') : "Select transaction status"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-2 z-[9999999999] min-w-[var(--radix-dropdown-menu-trigger-width)]" align="start">
                {transactionStatus.map((item) => (
                  <DropdownMenuItem
                    key={item}
                    onClick={() => {
                      const exists = localSelectedTransactionStatusOptions.includes(item)
                      if (exists) {
                        setLocalSelectedTransactionStatusOptions(localSelectedTransactionStatusOptions.filter(i => i !== item))
                      } else {
                        setLocalSelectedTransactionStatusOptions([...localSelectedTransactionStatusOptions, item])
                      }
                    }}
                    className="w-full flex hover:scale-[1.02] hover:shadow-[0px_2px_4px_0px_#2D3B430D,_0px_2px_6px_0px_#2D3B430F] transition-all hover:outline-none p-2 rounded-xl space-x-2"
                  >
                    <div className="size-5 border">
                      {localSelectedTransactionStatusOptions.includes(item) ?
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="/svg/check_button.svg"
                        /> : null
                      }
                    </div>
                    <span className="font-semibold text-black-300">{item}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handleClear} className="w-[48%] py-1">Clear</Button>
          <Button disabled={!isDirty} onClick={handleApply} className="w-[48%] py-1">Apply</Button>
        </div>
      </div>
    </Overlay>
  )
}

export default TransactionFilterOverlay
