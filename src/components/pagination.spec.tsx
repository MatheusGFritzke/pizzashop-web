import { render } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

const onPageChangeCallBack = vi.fn()

describe('Pagination', () => {
  it('should display the rigth amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const user = UserEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallBack}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallBack).toHaveBeenCalledWith(1)
  })
})
