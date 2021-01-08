import React from 'react';
import { render } from '@testing-library/react';
import { FooterContainer } from '../../containers/footer';

describe('Footer', () => {
  it('renders the Footer with populated data', () => {
    const { container, getByText } = render(<FooterContainer />);

    expect(getByText('Questions? Contact us.')).toBeTruthy();
    expect(getByText('FAQ')).toBeTruthy();
    expect(getByText('Investor Relations')).toBeTruthy();
    expect(getByText('Ways To Watch')).toBeTruthy();
    expect(getByText('Corporate Information')).toBeTruthy();
    expect(getByText('Netflix Originals')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
