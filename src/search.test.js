import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Search from './search';

expect.extend(toHaveNoViolations);

test('should not have any accessibility violations', async () => {
    const { container } = render(<Search searchQuery="" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
});
