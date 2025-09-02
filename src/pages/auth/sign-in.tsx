import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signInForm = z.object({
  user: z.string().min(1, { message: 'O email é obrigatório' }),
  password: z.string().min(1, { message: 'A senha é obrigatória' }),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      user: searchParams.get('user') ?? '',
    },
  })

  async function handleSignIn(data: SignInForm) {
    console.log(data)

    if (data.user == 'teste' && data.password == '123') {
      toast.success('Autenticado com sucesso.')
      localStorage.setItem('login', 'true')
      navigate('/')
    } else {
      toast.error('Credenciais incorretas.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8 overflow-hidden">
        <div className="w[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe seus clientes
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-4">
              <Label htmlFor="user">Seu usuário</Label>
              <Input id="user" type="user" {...register('user')} />
            </div>

            <div className="space-y-4">
              <Label htmlFor="password">Sua senha</Label>
              <Input id="password" type="password" {...register('password')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
          <p>Ainda não tem um acesso ?</p>
          <Button variant="ghost" asChild>
            <Link to="/sign-up">Adquirir agora</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
