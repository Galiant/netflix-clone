import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Header } from '../../components';

jest.mock('react-router-dom');

describe('Header', () => {
  it('renders basic Header without a background', () => {
    const { container, getByText, queryByTestId } = render(
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo alt='Netflix' src='/logo.svg' />
          <Header.TextLink active='true'>Hello I am a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    );

    expect(getByText('Hello I am a link!')).toBeTruthy();
    expect(queryByTestId('header-bg')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders full Header with a background', () => {
    const { container, getByText, getByTestId } = render(
      <Header src='joker1' dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo src='/images/logo.svg' alt='Netflix' />
            <Header.TextLink active={false} onClick={() => {}}>
              Series
            </Header.TextLink>
            <Header.TextLink active={false} onClick={() => {}}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm='Joker'
              setSearchTerm={() => {}}
            ></Header.Search>
            <Header.Profile>
              <Header.Picture src='/images/karl.png' />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src='/images/karl.png' />
                  <Header.TextLink>Antonijo</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => {}}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureText>Watch Joker Now</Header.FeatureText>
          <Header.Text>Forever alone in a crowd...</Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    );
    expect(getByTestId('search-input')).toBeTruthy();
    expect(getByTestId('search-input').value).toBe('Joker');
    userEvent.type(getByTestId('search-input'), 'Simpsons');
    userEvent.click(getByTestId('search-click'));
    expect(getByText('Series')).toBeTruthy();
    expect(getByText('Films')).toBeTruthy();
    expect(getByText('Antonijo')).toBeTruthy();
    expect(getByText('Watch Joker Now')).toBeTruthy();
    expect(getByText('Sign out')).toBeTruthy();
    expect(getByText('Forever alone in a crowd...')).toBeTruthy();
    expect(getByText('Play')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
