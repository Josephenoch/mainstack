import { Chart, DashboardText, TransactionFilterOverlay, TransactionItem } from "@/components/secondary";
import { Button } from "@/components/ui/button";
import { SystemLayout } from "@/layout";
import { fetchTransactionRequest } from "@/requests/transaction.request";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Home() {

  const {data, isLoading} = useQuery({
    queryKey: ["get-chart-data"],
    queryFn: fetchTransactionRequest
  })
  const [filterModalOpen, setFilterModal] = useState(false)
  const [selectedTransactionTypeOptions, setSelectedTransactionTypeOptions] = useState<string[]>([])
  const [selectedTransactionStatusOptions, setSelectedTransactionStatusOptions] = useState<string[]>([])

  const handleSelected = (field: "type" | "status", item: string[]) => {
    if(field === "type") {
      setSelectedTransactionTypeOptions(() => ([...item]))
    }else{
      setSelectedTransactionStatusOptions(() => ([...item]))
    }
  }

  const transactionTypes = useMemo(()=>{
    const types = data?.data.map(item=>item.type)
    const status = data?.data.map(item=>item.status)
    return {
      type: [...new Set(types)],
      status: [...new Set(status)]
    }
  },[isLoading])
  
  return (
    <SystemLayout>
      <section className="flex justify-between">
        <div className="w-[50%]">
          <div className="h-full">
            <Chart data={data?.data}/>
          </div>
        </div>

        <div className="w-[35%] flex flex-col justify-between">
          <DashboardText title="Ledger Balance" amount={0.0} />
          <DashboardText title="Total Payout" amount={55080.0} />
          <DashboardText title="Total Revenue" amount={175580.0} />
          <DashboardText title="Ledger Balance" amount={0.0} />
        </div>
      </section>
      <section className="mt-20">
        <div className="flex justify-between pb-6 border-b border-[#EFF1F6]">
          <div>
            <p className="text-xl font-bold">{data?.data.length} Transactions</p>
            <p className="text-xs text-gray-400">Your transactions for the last 7 days</p>
          </div>
          <div className="space-x-4">
            <Button
              size="sm"
              variant="outline"
              onClick={()=>setFilterModal(true)}
              className="text-xs font-semibold bg-[#EFF1F6] border-none py-1 cursor-pointer"
            >
              <span>Filter</span>
              <Image
                width={20}
                height={20}
                alt="expand_more"
                src="svg/expand_more.svg"
              />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs font-semibold bg-[#EFF1F6] border-none py-1"
            >
              <span>Download</span>
              <Image
                width={20}
                height={20}
                alt="expand_more"
                src="svg/download.svg"
              />
            </Button>
          </div>
        </div>
        <div className="space-y-4 mt-6">
          {data?.data.map(item=>{
            return(
              <TransactionItem key={item.payment_reference} data={item}/>
            )
          })}
        </div>
      </section>
      <TransactionFilterOverlay 
        open={filterModalOpen}
        onClose={()=>setFilterModal(false)}
        transactionTypes={transactionTypes.type}
        transactionStatus={transactionTypes.status}
        selectedTransactionTypeOptions={selectedTransactionTypeOptions} 
        selectedTransactionStatusOptions={selectedTransactionStatusOptions} 
        setSelectedTransactionTypeOptions={(option)=> handleSelected("type", option)}
        setSelectedTransactionStatusOptions={(option)=> handleSelected("status", option)}
      />
    </SystemLayout>

  );
}
