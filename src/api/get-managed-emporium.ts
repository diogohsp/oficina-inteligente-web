import { api } from '@/lib/axios'

interface GetManagedEmporiumResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedEmporium() {
  const response = await api.get<GetManagedEmporiumResponse>(
    '/managed-restaurant',
  )

  return response.data
}
