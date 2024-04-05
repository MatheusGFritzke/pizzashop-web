import { expect, test } from '@playwright/test'

test('update profile successfuly', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Dono do morro' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da Loja' }).click()
  await page.getByLabel('Nome').fill('Bola 8')
  await page.getByLabel('Descrição').fill('Coisa legal')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'Bola 8' })).toBeVisible()
})

test('update profile with wrong data', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Dono do morro' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da Loja' }).click()
  await page.getByLabel('Nome').fill('Bola 9')
  await page.getByLabel('Descrição').fill('Desc. errada')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Falha ao atualizar o perfil, tente novamente')

  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(
    page.getByRole('button', { name: 'Dono do morro' }),
  ).toBeVisible()
})
