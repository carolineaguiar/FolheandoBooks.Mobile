import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginForm from './LoginForm';

test('renders LoginForm component', () => {
  const { getByText, getByPlaceholderText } = render(<LoginForm />);

  // Verifica se alguns elementos estão presentes no componente
  const heading = getByText('Faça o Login');
  const emailInput = getByPlaceholderText('name@example.com');
  const passwordInput = getByPlaceholderText('Password');
  const rememberLoginCheckbox = getByText('Lembrar Login');
  const loginButton = getByText('Log in');

  expect(heading).toBeDefined();
  expect(emailInput).toBeDefined();
  expect(passwordInput).toBeDefined();
  expect(rememberLoginCheckbox).toBeDefined();
  expect(loginButton).toBeDefined();
});

test('calls the login function when pressed', () => {
  const mockLogin = jest.fn();
  const { getByText } = render(<LoginForm login={mockLogin} />);

  const loginButton = getByText('Log in');
  fireEvent.press(loginButton);

  expect(mockLogin).toHaveBeenCalled();
});

// Adicione testes semelhantes para outros botões, entradas e funcionalidades do componente
