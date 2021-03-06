import { render, act } from '@testing-library/react';

import useViewport from '../src/hooks/useViewport';
import { windowResize } from './setup';

function ResizeComponent() {
  const { width } = useViewport();
  return <span>{width}</span>;
}

it('changes width value on window resize', () => {
  const { container, rerender } = render(<ResizeComponent />);
  act(() => windowResize(768));
  rerender(<ResizeComponent />);

  expect(container.firstChild?.textContent).toBe('768');
});
