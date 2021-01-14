import React from 'react';
import { render } from '@testing-library/react';
import JumbotronContainer from '../../containers/jumbotron';

describe('Jumbotron', () => {
  it('renders the Jumbotron with populated data', () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <JumbotronContainer />
    );

    expect(getByText('Enjoy on your TV.')).toBeTruthy();
    expect(getByAltText('Tiger King on Netflix')).toBeTruthy();
    expect(getByTestId('1-jumbo-image')).toBeTruthy();
    expect(
      getByText(
        'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
      )
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
