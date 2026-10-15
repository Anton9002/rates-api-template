import { test, expect } from '@playwright/test';
import { StatusCodes } from 'http-status-codes';
import { Currency, SEED_CURRENCIES } from './currency';

test.beforeAll(async ({ request }) => {
  const response = await request.get('/api/currencies');
  const currencies: { currency: string }[] = await response.json();

  for (const { currency } of currencies) {
    if (!SEED_CURRENCIES.includes(currency)) {
      const deleted = await request.delete(`/api/rates/${currency}`);
      expect(deleted.status()).toBe(StatusCodes.NO_CONTENT);
    }
  }
});

test.describe('GET /api/currencies', () => {
  test('returns 3 currencies', async ({ request }) => {
    const response = await request.get('/api/currencies');

    expect(response.status()).toBe(StatusCodes.OK);

    const body = await response.json();
    expect(body).toHaveLength(3);
  });

});

test.describe('GET /api/rates/{currency}', () => {
  test('returns rate for existing currency', async ({ request }) => {
    const response = await request.get(`/api/rates/${Currency.USD}`);

    expect(response.status()).toBe(StatusCodes.OK);

    const body = await response.json();
    expect(body.currency).toBe(Currency.USD);
    expect(typeof body.rate).toBe('number');
    expect(body.rate).toBeGreaterThan(0);
  });

  test('returns 400 for lowercase currency code', async () => {});
  test('returns 400 for too short currency code', async () => {});
  test('returns 404 for unknown currency', async () => {});
});

test.describe('Other', () => {
  test('returns 405 for unsupported method', async () => {});
  test('returns 404 for unknown URL', async () => {});
});
