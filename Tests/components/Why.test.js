import React from 'react';
import { render } from '@testing-library/react';
import Why from './Why';

describe('Why component', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<Why />);
    
    // Teste para verificar se o texto está sendo renderizado corretamente
    expect(getByText('Por que folhear com a gente?')).toBeInTheDocument();
    expect(getByText('Só aqui você encontra a melhor seleção de livros, esperando para ser sua próxima leitura.')).toBeInTheDocument();

    // Teste para verificar se as imagens estão sendo renderizadas corretamente
    expect(getByAltText('Frete Grátis')).toBeInTheDocument();
    expect(getByAltText('Simplicidade na hora de comprar')).toBeInTheDocument();
    expect(getByAltText('Suporte 24/7')).toBeInTheDocument();
    expect(getByAltText('Reembolso sem complicações')).toBeInTheDocument();
  });
});
