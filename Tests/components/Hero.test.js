import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HeroSection from './HeroSection';
import { useNavigation } from '@react-navigation/native';

// Mocking the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('HeroSection', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<HeroSection />);
    const linearGradient = getByTestId('linear-gradient');
    expect(linearGradient).toBeTruthy();

    const hero = getByTestId('hero');
    expect(hero).toBeTruthy();

    const introExcerpt = getByTestId('intro-excerpt');
    expect(introExcerpt).toBeTruthy();

    const heroImgWrap = getByTestId('hero-img-wrap');
    expect(heroImgWrap).toBeTruthy();
  });

  it('calls navigation.navigate on "Compre Agora" button press', () => {
    const mockNavigate = jest.fn();
    useNavigation.mockReturnValue({ navigate: mockNavigate });

    const { getByText } = render(<HeroSection />);
    const compreAgoraButton = getByText('Compre Agora');
    fireEvent.press(compreAgoraButton);

    expect(mockNavigate).toHaveBeenCalledWith('Shop');
  });

  it('logs "Folhear pressed" on "Folhear" button press', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    
    const { getByText } = render(<HeroSection />);
    const folhearButton = getByText('Folhear');
    fireEvent.press(folhearButton);

    expect(consoleLogSpy).toHaveBeenCalledWith('Folhear pressed');
  });
});
