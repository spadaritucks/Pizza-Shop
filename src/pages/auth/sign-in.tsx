
import { Helmet } from "react-helmet-async";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner'
import { Link } from "react-router-dom";


const signInForm = z.object({
    email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>()

    async function HandleSignIn(data: SignInForm) {

        try {
            toast.success('Enviamos um link de autenticação para seu e-mail', {
                action: {
                    label: 'Reenviar',
                    onClick: () => { }
                }
            })
        } catch {
            toast.error('Credenciais Invalidas')
        }
    }

    return (
        <>
            <Helmet title="Login" />
            <div className="p-8">
                <Button variant="ghost" asChild className="absolute right-8 top-8">
                    <Link to="/sign-up">Novo Estabelecimento</Link>
                </Button>
                <div className="flex w-[350px] flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Acessar Painel
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Acompanhe suas vendas pelo painel do parceiro
                        </p>
                    </div>

                    <form className="space-y-2" onSubmit={handleSubmit(HandleSignIn)}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} />
                        </div>
                        <Button className="w-full" type="submit" disabled={isSubmitting}>Acessar Painel</Button>
                    </form>
                </div>
            </div>
        </>
    )
}