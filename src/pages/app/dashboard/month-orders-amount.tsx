import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getMonthOrdersAmount } from "../../../api/get-month-orders-amount";
import { MetricCardSkeleton } from "./metric-card-skeleton";
export function MonthOrdersAmountCard() {

    const { data: monthOrdersAmount } = useQuery({
        queryFn: getMonthOrdersAmount,
        queryKey: ['metrics', 'month-orders-amount'],
    })

    return (
        <Card>
            <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-1">
                {monthOrdersAmount ? (
                    <>
                        <span className="text-2xl font-bold tracking-tight">
                            {monthOrdersAmount.amount.toLocaleString('pt-BR')}
                        </span>
                        <p className="text-xs text-muted-foreground">
                            {monthOrdersAmount.diffFromLastMonth > 0 ?
                                <span className="text-emerald-500 dark:text-emerald-400">+{monthOrdersAmount.diffFromLastMonth}% em relação ao mês passado </span> :
                                <span className="text-rose-500 dark:text-rose-400">{monthOrdersAmount.diffFromLastMonth}% em relação ao mês passado </span>}
                        </p>
                    </>
                ) : <MetricCardSkeleton/>}
            </CardContent>
        </Card>
    )
}