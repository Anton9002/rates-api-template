import { test, expect } from '@playwright/test';
import { StatusCodes } from 'http-status-codes';
import { Currency } from './currency';

test.describe('GET /api/currencies', () => {
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

test.describe('POST /api/rates', () => {
  test('creates new currency and returns 201', async () => {});
  test('returns 400 for invalid currency code', async () => {});
  test('returns 400 for rate equal to 0', async () => {});
  test('returns 400 for rate greater than 1000000', async () => {});
  test('returns 400 for non-numeric rate', async () => {});
  test('returns 400 for invalid JSON', async () => {});
  test('returns 409 when currency already exists', async () => {});
  test('returns 413 for body larger than 10000 bytes', async () => {});
});

test.describe('PATCH /api/rates/{currency}', () => {
  test('updates rate of existing currency', async () => {});
  test('returns 400 for invalid rate', async () => {});
  test('returns 400 for invalid currency code', async () => {});
  test('returns 404 for unknown currency', async () => {});
});

test.describe('Other', () => {
  test('returns 405 for unsupported method', async () => {});
  test('returns 404 for unknown URL', async () => {});
});
