import { cleanup } from '@testing-library/react';

beforeEach(async () => {
  jest.clearAllMocks();
});

afterEach(cleanup);

export function windowResize(width: number): void {
  global.innerWidth = width;
  global.dispatchEvent(new Event('resize'));
}
