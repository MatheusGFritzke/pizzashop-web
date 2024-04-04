import { http, HttpResponse } from 'msw'

import type { GetOrderResponse } from '../get-orders'

type Orders = GetOrderResponse['orders']
type OrderStatus = GetOrderResponse['orders'][number]['status']

const statuses: OrderStatus[] = [
  'canceled',
  'delivered',
  'delivering',
  'pending',
  'processing',
]

const orders: Orders = Array.from({ length: 60 }).map((_, i) => {
  const min = 30000
  const max = 100000
  return {
    orderId: `order-${i + 1}`,
    createdAt: new Date().toISOString(),
    customerName: `customer-${i + 1}`,
    total: Math.floor(Math.random() * (max - min + 1)) + min,
    status: statuses[i % 5],
  }
})

export const getOrdersMock = http.get<never, never, GetOrderResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0

    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')

    let filteredOrders = orders

    if (customerName) {
      filteredOrders = filteredOrders.filter((order) =>
        order.customerName.includes(customerName),
      )
    }

    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.orderId.includes(orderId),
      )
    }

    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    const paginatedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredOrders.length,
      },
    })
  },
)
