import { api } from '@/lib/axios'

export interface RegisterWorkShopBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerEmporium({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterWorkShopBody) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
