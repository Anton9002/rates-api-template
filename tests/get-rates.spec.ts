import { test, expect } from '@playwright/test';
import { StatusCodes } from 'http-status-codes';
import { Currency } from './currency';

test.describe('GET /api/currencies', () => {
  test('contains initial currencies USD, GBP and JPY', async ({ request }) => {
    const response = await request.get('/api/currencies');

    expect(response.status()).toBe(StatusCodes.OK);

    const body = await response.json();
    expect(body).toEqual(
      expect.arrayContaining([
        { currency: Currency.USD, rate: 1.08 },
        { currency: Currency.GBP, rate: 0.85 },
        { currency: Currency.JPY, rate: 162.5 },
      ]),
    );
  });

  test('returns list of currencies sorted by code', async () => {});
  test('each item has currency and rate fields', async () => {});
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
