import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('Profiles', () => {
  it('render the Profiles with populated data', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who is watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture
              src='/images/karl.png'
              data-testid='profile-picture'
            />
            <Profiles.Name>Antonijo</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText('Who is watching?')).toBeTruthy();
    expect(getByTestId('profile-picture')).toBeTruthy();
    expect(getByText('Antonijo')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('render the Profiles with populated data but misc profile image', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who is watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture data-testid='profile-picture-misc' />
            <Profiles.Name>Antonijo</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText('Who is watching?')).toBeTruthy();
    expect(getByTestId('profile-picture-misc')).toBeTruthy();
    expect(getByText('Antonijo')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
