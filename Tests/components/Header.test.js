import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Header />);
    const headerContainer = getByTestId('header-container');
    expect(headerContainer).toBeTruthy();

    const logo = getByTestId('logo');
    expect(logo).toBeTruthy();

    const navbar = getByTestId('navbar');
    expect(navbar).toBeTruthy();

    const ctaContainer = getByTestId('cta-container');
    expect(ctaContainer).toBeTruthy();
  });

  it('calls the onPress function for each navItem', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Header />);
    
    const inicioNavItem = getByText('Início');
    fireEvent.press(inicioNavItem);
    expect(onPressMock).toHaveBeenCalledTimes(1);

    const livrosNavItem = getByText('Livros');
    fireEvent.press(livrosNavItem);
    expect(onPressMock).toHaveBeenCalledTimes(2);

    const contatoNavItem = getByText('Contato');
    fireEvent.press(contatoNavItem);
    expect(onPressMock).toHaveBeenCalledTimes(3);
  });

  it('calls the onPress function for each ctaItem', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<Header />);
    
    const loginCtaItem = getByTestId('login-cta');
    fireEvent.press(loginCtaItem);
    expect(onPressMock).toHaveBeenCalledTimes(1);

    const cartCtaItem = getByTestId('cart-cta');
    fireEvent.press(cartCtaItem);
    expect(onPressMock).toHaveBeenCalledTimes(2);
  });
});
