import { http, HttpResponse } from 'msw'

import { UpdateProfileBody } from '../update-profile'

export const updateProfileMock = http.put<never, UpdateProfileBody>(
  '/profile',
  async ({ request }) => {
    const { name, description } = await request.json()

    if (name === 'Bola 8' && description === 'Coisa legal') {
      return new HttpResponse(null, { status: 204 })
    }
    return new HttpResponse(null, { status: 400 })
  },
)
