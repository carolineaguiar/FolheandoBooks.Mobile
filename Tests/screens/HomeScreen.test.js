import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

// Mock dos componentes importados para evitar problemas de dependência
jest.mock('../components/Header', () => 'Header');
jest.mock('../components/Hero', () => 'Hero');
jest.mock('../components/Why', () => 'Why');
jest.mock('../components/PopularProducts', () => 'PopularProducts');
jest.mock('../components/Footer', () => 'Footer');

describe('HomeScreen component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<HomeScreen />);
    
    // Teste para verificar se os componentes estão presentes na tela
    expect(getByTestId('header')).toBeTruthy();
    expect(getByTestId('hero')).toBeTruthy();
    expect(getByTestId('why')).toBeTruthy();
    expect(getByTestId('popular-products')).toBeTruthy();
    expect(getByTestId('footer')).toBeTruthy();
  });
});
