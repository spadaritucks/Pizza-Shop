import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown } from "lucide-react";


export function AccountMenu () {

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                    Pizza Shop
                    <ChevronDown className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>Diego Fernandes</span>
                    <span className="text-xs font-normal text-muted-foreground ">diego@rocketseat.com.br</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <Building className="mr-2 w-4 h-4" />
                    <span>Perfil da Loja</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <Building className="mr-2 w-4 h-4 " />
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}