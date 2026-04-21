import { expect, test } from '@playwright/test'

test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.logo')).toBeVisible()
})

test.describe('NutUI Components', () => {
  test('NutButton should render correctly', async ({ page }) => {
    await page.goto('/')

    const button = page.locator('.nut-button')
    await expect(button).toBeVisible()
    await expect(button).toHaveText('按钮')
    await expect(button).toHaveClass(/nut-button--primary/)
  })

  test('NutCell should render correctly', async ({ page }) => {
    await page.goto('/')

    const cell = page.locator('.nut-cell')
    await expect(cell).toBeVisible()
    await expect(cell.locator('.nut-cell__title')).toHaveText('单元格')
  })

  test('NutButton should be clickable', async ({ page }) => {
    await page.goto('/')

    const button = page.locator('.nut-button')
    await expect(button).toBeEnabled()
    await button.click()
  })
})
