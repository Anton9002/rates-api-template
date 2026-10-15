import { test } from '@playwright/test';

test.describe('PATCH /api/rates/{currency}', () => {
  test('updates rate of existing currency', async () => {});
  test('returns 400 for invalid rate', async () => {});
  test('returns 400 for invalid currency code', async () => {});
  test('returns 404 for unknown currency', async () => {});
});
