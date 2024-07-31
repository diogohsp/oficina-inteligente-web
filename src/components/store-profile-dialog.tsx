import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import {
  getManagedEmporium,
  GetManagedEmporiumResponse,
} from '@/api/get-managed-emporium'
import { updateProfile } from '@/api/update-profile'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1).nullable(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
  const queryClient = useQueryClient()

  const { data: managedEmporium } = useQuery({
    queryKey: ['managed-emporium'],
    queryFn: getManagedEmporium,
    staleTime: Infinity, // O react query tenta recarregar qualquer informação que seja obsoleta, e o stale time coloca um tempo para que a informação se torne obsoleta. já vem por padrão com um tempo setado
    // refetchOnWindowFocus: true //Ao tirar o foco da tela e voltar ele recarrega as informações obsoletas, por padrao já é true
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    // o radix executa o codigo antes mesmo do dialog ser aberto (exemplo do console log)
    // utilizar values ao inves de defaultValues, pois o defaultValues vai carregar as informações antes da requisição ou seja vazio já o values vai sempre ficar observando as informações e prenchendo o input
    values: {
      name: managedEmporium?.name ?? '',
      description: managedEmporium?.description ?? '',
    },
  })

  function updateManagedEmporiumCache({
    name,
    description,
  }: StoreProfileSchema) {
    const cached = queryClient.getQueryData<GetManagedEmporiumResponse>([
      'managed-emporium',
    ])

    if (cached) {
      queryClient.setQueryData<GetManagedEmporiumResponse>(
        ['managed-emporium'],
        {
          ...cached,
          name,
          description,
        },
      )
    }

    // retorna as informações do emporium antes de ser atualizado
    return { cached }
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    // Data = retorna dados retornados da query
    // Variables = retorna os dados utilizados na query
    // onSuccess(_, { name, description }) { }

    // Diferente do succes, o onMutate dispara assim que eu clico no botão de salvar e não apenas no sucesso
    onMutate: ({ name, description }) => {
      const { cached } = updateManagedEmporiumCache({ name, description })
      return { previousProfile: cached }
    },

    // Error = detalhes do erro
    // Variables = as variaveis que eu enviei na hora da requisição
    // Context = são informações que eu consigo compartilhar entre o contexto de uma mutação ou query (tudo que eu retorno em um mutate é adicionado ao contexto)
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateManagedEmporiumCache(context.previousProfile)
      }
    },
  })

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      })

      toast.success('Perfil atualizado com sucesso')
    } catch {
      toast.error('Falha ao atualizar o perfil, tente novamente')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="success" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
