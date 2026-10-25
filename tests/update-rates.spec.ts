import { test, expect } from '@playwright/test';
import {StatusCodes} from "http-status-codes";

test.describe('PATCH /api/rates/{currency}', () => {

  test('updates rate of existing currency', async ({request}) => {

    const response = await request.patch(`/api/rates/USD`, {

      data: {"rate": 0.89}

    });

    const body = await response.json();

    expect(response.status()).toBe(StatusCodes.OK);
    expect(body.rate).toEqual(0.89);

  });

  test('returns 400 for invalid rate', async ({request}) => {

    const response = await request.patch(`/api/rates/USD`, {

      data: {"rate": 0}

    });

    expect(response.status()).toBe(StatusCodes.BAD_REQUEST);

  });

  test('returns 400 for invalid currency code', async ({request}) => {

    const response = await request.patch(`/api/rates/US`, {

      data: {"rate": 0.89}

    });

    expect(response.status()).toBe(StatusCodes.BAD_REQUEST);

  });

  test('returns 404 for unknown currency', async ({request}) => {

    const response = await request.patch(`/api/rates/EUR`, {

      data: {"rate": 0.89}

    });

    expect(response.status()).toBe(StatusCodes.NOT_FOUND);

  });

});
