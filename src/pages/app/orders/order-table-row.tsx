
import { TableCell, TableRow } from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";
import { ArrowRight, Search, X } from "lucide-react";
import { Dialog, DialogContent } from "../../../components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { OrderDetails } from "./orders-details";
export interface OrderTableRowProps {

}


export function OrderTableRow() {

    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="h-3 w-3" />
                            <span className="sr-only">Detalhes do Pedido</span>
                        </Button>
                    </DialogTrigger>

                    <OrderDetails />
                </Dialog>

            </TableCell>
            <TableCell className="font-mono text-xs font-medium">98s09df8s0d9f8s9d08</TableCell>
            <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                    <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
            </TableCell>
            <TableCell className="font-medium">Diego Fernandes</TableCell>
            <TableCell className="font-medium">R$ 149,90</TableCell>
            <TableCell>
                <Button variant='outline' size='xs'>
                    <ArrowRight className=" mr-2 h-3 w-3" />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant='ghost' size='xs'>
                    <X className="mr-2 h-3 w-3 " />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}