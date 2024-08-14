import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Header } from '@/components/header'
import { api } from '@/lib/axios'

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    // response.use() tem 2 resposta a 1 é quando da sucesso, e a segunda quando ocorre algum erro
    const interceptorID = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            // replace não deixa ele voltar pelo botao "voltar" do navegador
            navigate('/sign-in', { replace: true })
          }
        }
      },
    )

    // todo useEffect caso eu esteja criando um listener eu tenho que limpar esse listener no final, para caso o componente seja desmontado o useffect deve fazer a limpeza dos eventListener
    return () => {
      api.interceptors.response.eject(interceptorID)
    }
  }, [navigate])

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
