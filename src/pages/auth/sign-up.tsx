
import { Helmet } from "react-helmet-async";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner'
import { Link, useNavigate } from "react-router-dom";


const signInForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignUp() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>()

    async function HandleSignIn(data: SignInForm) {

        try {
            console.log(data)
            toast.success('Restaurante cadastrado com sucesso!', {
                action: {
                    label: 'Login',
                    onClick: () => { 
                        navigate('/sign-in')
                    }
                }
            })
        } catch {
            toast.error('Erro ao cadastrar o restaurante')
        }
    }

    return (
        <>
            <Helmet title="Cadastro" />
            <div className="p-8">
                <Button variant="ghost" asChild className="absolute right-8 top-8">
                    <Link to="/sign-in">Fazer Login</Link>
                </Button>
                <div className="flex w-[350px] flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Criar Conta Gratis
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Seja um parceiro e comece suas vendas
                        </p>
                    </div>

                    <form className="space-y-2" onSubmit={handleSubmit(HandleSignIn)}>
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Nome do Establecimento</Label>
                            <Input id="restaurantName" type="text" {...register('restaurantName')} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="managerName">Seu nome</Label>
                            <Input id="managerName" type="type" {...register('managerName')} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Seu celular</Label>
                            <Input id="phone" type="text" {...register('phone')} />
                        </div>
                        <Button className="w-full" type="submit" disabled={isSubmitting}>Finalizar Cadastro</Button>
                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">Ao continuar, você concorda com nossos
                             <a href="" className="underline underline-offset-4"><br /> termos de serviço </a> e  <a href="" className="underline underline-offset-4">politicas de privacidade</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}