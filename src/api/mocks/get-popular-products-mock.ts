import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 2000 },
    { product: 'Pizza 02', amount: 3000 },
    { product: 'Pizza 03', amount: 4000 },
    { product: 'Pizza 04', amount: 5000 },
    { product: 'Pizza 05', amount: 6000 },
    { product: 'Pizza 06', amount: 7000 },
  ])
})
