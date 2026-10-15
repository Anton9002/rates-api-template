import { test } from '@playwright/test';

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
