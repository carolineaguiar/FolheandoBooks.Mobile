import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PopularProducts from './PopularProducts';

// Mock da função fetch
jest.mock('node-fetch');

describe('PopularProducts', () => {
  it('renders popular products correctly', async () => {
    // Mock da resposta da API
    const mockProducts = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        imageURL: 'https://example.com/image1.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description 2',
        imageURL: 'https://example.com/image2.jpg',
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockProducts),
    });

    render(<PopularProducts />);

    // Aguarde a renderização dos produtos
    await waitFor(() => {
      // Verifique se os produtos foram renderizados corretamente
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
    });
  });
});
