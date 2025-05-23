import { Pizza } from "lucide-react";
import { Outlet } from "react-router-dom";


export function AuthLayout() {

    return (
        <div className="min-h-screen grid grid-cols-2 ">
            <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
                <div className="flex items-center gap-3 text-lg font-medium text-foreground">
                    <Pizza className="h-5 w-5" />
                    <span className="font-semibold">Pizza Shop</span>
                </div>
                <footer className="text-sm">
                    Painel do Parceiro &copy; Pizza Shop - {new Date().getFullYear()}
                </footer>
            </div>

            <div className="flex flex-col justify-center items-center relative">
                <Outlet />
            </div>
        </div>
    )
}