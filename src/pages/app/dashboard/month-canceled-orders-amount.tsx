import { Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getMonthCanceledOrdersAmount } from "../../../api/get-month-canceled-orders-amount";
export function MonthCanceledOrdersAmountCard() {

    const { data: monthCancelOrdersAmount } = useQuery({
        queryFn: getMonthCanceledOrdersAmount,
        queryKey: ['metrics', 'month-canceled-orders-amount'],
    })

    return (
        <Card>
            <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">Cancelamentos (mês)</CardTitle>
                <Utensils className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-1">
                {monthCancelOrdersAmount && (
                    <>
                        <span className="text-2xl font-bold tracking-tight">
                            {monthCancelOrdersAmount.amount.toLocaleString('pt-BR')}
                        </span>
                        <p className="text-xs text-muted-foreground">
                            {monthCancelOrdersAmount.diffFromLastMonth > 0 ?
                                <span className="text-rose-500 dark:text-rose-400">+{monthCancelOrdersAmount.diffFromLastMonth}% em relação ao mês passado </span> :
                                <span className="text-emerald-500 dark:text-emerald-400">{monthCancelOrdersAmount.diffFromLastMonth}% em relação ao mês passado </span>}
                        </p>
                    </>
                )}
            </CardContent>
        </Card>
    )
}