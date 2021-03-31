import { cleanup } from '@testing-library/react';

beforeEach(async () => {
  jest.clearAllMocks();
});

afterEach(cleanup);

it('test from setup', () => {
  expect('123').toBe('123');
});