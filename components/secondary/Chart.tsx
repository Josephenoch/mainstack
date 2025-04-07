
import { CartesianGrid, Line, LineChart, ReferenceLine, XAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "../ui/button"
import { useQuery } from "@tanstack/react-query"
import { fetchTransactionRequest } from "@/requests/transaction.request"
import { FC, useMemo } from "react"
import formatChartData from "@/helper/formatChartData"
import { Transaction } from "@/types/transaction.type"

interface ChartInterface {
  data: Transaction[] | undefined
}

const Chart:FC<ChartInterface> = ({
  data
}) => {
  
  const chartData = useMemo(()=> {
    if (!data) return []
    return formatChartData(data)
  },[data])

  return (
    <div>
      <div className="flex items-center space-x-20">
        <div className="flex flex-col">
          <span>Available Balance</span>
          <span className="text-4xl font-bold">USD 120,500.00</span>
        </div>
        <Button>Withdraw</Button>
      </div>
      <div>
        <ChartContainer config={{}}>
          <LineChart
            accessibilityLayer
            data={chartData}
            height={200}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid horizontal={false} vertical={false} />
            <XAxis
              tickMargin={2}
              dataKey="date"
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
              tickFormatter={(value, index) =>
                index === 0 || index === chartData.length - 1 ? value : ''
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="amount"
              type="natural"
              stroke="#FF5403"
              strokeWidth={1}
              dot={false}
              
            />
            <ReferenceLine
              y={getBottomYValue(chartData) - 200}
              stroke="#E5E5E5"
            />
            </LineChart>
        </ChartContainer>
      </div>
   
    </div>
  )
}

const getBottomYValue = (data: any[]) => {
  if (!data || data.length === 0) return 0;

  let min = Number.MAX_VALUE;

  data.forEach(d => {
    if (typeof d.amount === "number" && d.amount < min) {
      min = d.amount;
    }
  });

  return min;
};

export default Chart
