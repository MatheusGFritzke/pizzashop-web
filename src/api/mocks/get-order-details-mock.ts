import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsResponse,
  OrderDetailsParams,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  OrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Matheus',
      email: 'matheus@matheus.com',
      phone: '5678564566',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 36000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza calma calabreso' },
        quantity: 2,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'Pizza Roger' },
        quantity: 17,
      },
    ],
  })
})
