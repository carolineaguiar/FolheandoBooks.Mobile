import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ContactForm from './ContactForm';

test('renders ContactForm component', () => {
  const { getByText, getByPlaceholderText } = render(<ContactForm />);

  // Verifica se alguns elementos estão presentes no componente
  const locationIcon = getByText('Ícone Local');
  const envelopeIcon = getByText('Ícone Envelope');
  const phoneIcon = getByText('Ícone Telefone');
  const nameLabel = getByText('Nome');
  const surnameLabel = getByText('Sobrenome');
  const emailLabel = getByText('E-mail');
  const messageLabel = getByText('Mensagem');
  const sendButton = getByText('Enviar');

  expect(locationIcon).toBeDefined();
  expect(envelopeIcon).toBeDefined();
  expect(phoneIcon).toBeDefined();
  expect(nameLabel).toBeDefined();
  expect(surnameLabel).toBeDefined();
  expect(emailLabel).toBeDefined();
  expect(messageLabel).toBeDefined();
  expect(sendButton).toBeDefined();
});

test('calls the send button function when pressed', () => {
  const mockSend = jest.fn();
  const { getByText } = render(<ContactForm send={mockSend} />);

  const sendButton = getByText('Enviar');
  fireEvent.press(sendButton);

  expect(mockSend).toHaveBeenCalled();
});

// Adicione testes semelhantes para outros botões, entradas e funcionalidades do componente
