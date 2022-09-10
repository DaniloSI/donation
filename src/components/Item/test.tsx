import { render, screen } from '@testing-library/react';

import Item from '.';

describe('<Item />', () => {
  it('should render the heading', () => {
    const { container } = render(<Item />);

    expect(screen.getByRole('heading', { name: /Item/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
