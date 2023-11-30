import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Shop from './Shop';

// Mock de fetch para simular a chamada da API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, name: 'Livro 1', imageURL: 'https://example.com/image1.jpg', price: 20.0 },
      { id: 2, name: 'Livro 2', imageURL: 'https://example.com/image2.jpg', price: 25.0 },
      // Adicione mais produtos conforme necessário
    ]),
  })
);

// Mock dos componentes importados para evitar problemas de dependência
jest.mock('../components/Header', () => 'Header');
jest.mock('../components/Footer', () => 'Footer');

describe('Shop component', () => {
  it('renders correctly', async () => {
    const { getByTestId, getByText } = render(<Shop />);
    
    // Aguarde a chamada da API ser concluída
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    // Teste para verificar se os componentes estão presentes na tela
    expect(getByTestId('header')).toBeTruthy();

    // Teste para verificar se a seção Hero está presente e contém o título 'Livros'
    const heroTitle = getByText('Livros');
    expect(heroTitle).toBeTruthy();
    expect(heroTitle.props.style).toEqual(expect.arrayContaining([styles.heroTitle])); // Verifica se os estilos estão corretos

    // Teste para verificar se a lista de produtos está presente e contém os produtos mockados
    const livro1 = getByText('Livro 1');
    const livro2 = getByText('Livro 2');
    expect(livro1).toBeTruthy();
    expect(livro2).toBeTruthy();

    // Teste para verificar se o rodapé está presente
    expect(getByTestId('footer')).toBeTruthy();
  });
});
