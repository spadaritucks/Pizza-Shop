import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Label } from "recharts"
import colors from 'tailwindcss/colors'
import { getDailyRevenueInPeriod } from "../../../api/get-daily-revenue-in-period";
import { DateRangePicker } from "../../../components/date-range-picker";
import { useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { subDays } from "date-fns";
import { Loader2 } from "lucide-react";

export function RevenueChart() {

    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: subDays(new Date(), 7) ,
        to: new Date(),
    })

    const { data: dailyRevenueInPeriod } = useQuery({
        queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
        queryFn : () => getDailyRevenueInPeriod({
            from: dateRange?.from,
            to: dateRange?.to,
        }
            
        )
    })

    const chartData = useMemo(() => {
        return dailyRevenueInPeriod?.map(chartItem => {
            return{
                date: chartItem.date,
                receipt: chartItem.receipt / 100
            }
             
            
        })
    },[dailyRevenueInPeriod])

    return (
        <Card className="col-span-6">
            <CardHeader className=" flex flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Receita no periodo</CardTitle>
                    <CardDescription>Receita Diaria do Periodo</CardDescription>
                </div>

                <div className="flex items-center gap-3">
                    <Label>Periodo</Label>
                    <DateRangePicker date={dateRange} onDateChange={setDateRange}  />
                </div>
            </CardHeader>
            <CardContent>
                {dailyRevenueInPeriod ? (
                    <ResponsiveContainer width="100%" height={248}>
                        <LineChart data={chartData} style={{ fontSize: 12 }}>
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                dy={16}
                            />
                            <YAxis
                                stroke="#888"
                                axisLine={false}
                                tickLine={false}
                                width={88}
                                tickFormatter={(value: number) =>
                                    value.toLocaleString("pt-BR",
                                        { style: 'currency', currency: "BRL" })} />
                            <Line type="linear" strokeWidth={2} dataKey="receipt" stroke={colors.violet['500']} />
                            <CartesianGrid vertical={false} className="stroke-muted" />
                        </LineChart>
                    </ResponsiveContainer>
                ) : <div className="flex h-[240px] w-full items-center justify-center">
                <Loader2 className="h-8 w-8 text-muted-foreground" />
            </div> }
            </CardContent>
        </Card>
    )
}