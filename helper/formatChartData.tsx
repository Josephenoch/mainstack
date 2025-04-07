import { format } from "date-fns"
import { Transaction } from "@/types/transaction.type"

const formatChartData = (data: Transaction[]):{date:string, amount: number}[] =>  {
  return Object.values(data?.filter((entry) => entry.type === "deposit")
    .reduce((acc, entry) => {
      const formattedDate = format(new Date(entry.date), "MMM d, yyyy")
      if (!acc[formattedDate]) {
        acc[formattedDate] = { date: formattedDate, amount: 0 }
      }
      acc[formattedDate].amount += entry.amount
      return acc
    }, {} as Record<string, { date: string; amount: number }>)
  )
}

export default formatChartData