import { formatCurrency } from '../src/utils/api';

it('Converts number to currency string', () => {
  expect(formatCurrency(100, 'USD')).toBe('$ 100.00');
  expect(formatCurrency(30.58, 'USD')).toBe('$ 30.58');
});
