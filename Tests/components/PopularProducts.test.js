import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PopularProducts from '../../components/PopularProducts';

test('renders popular products', () => {
  const { getByText } = render(<PopularProducts />);
  

  expect(getByText('Nome do Produto')).toBeInTheDocument();
  expect(getByText('Descrição do Produto')).toBeInTheDocument();



});
