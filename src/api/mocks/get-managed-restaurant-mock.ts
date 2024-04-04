import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-menaged-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    createdAt: new Date(),
    description: 'Restaurante legal',
    id: 'custom-restaurant-id',
    managerId: 'custom-user-id',
    name: 'Dono do morro',
    updatedAt: null,
  })
})
