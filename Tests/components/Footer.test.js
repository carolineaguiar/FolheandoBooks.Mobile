import React from 'react';
import { render } from '@testing-library/react-native';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<Footer />);

    // Testa se o texto está sendo renderizado corretamente
    expect(getByText('Download nosso App')).toBeTruthy();

    // Testa se a imagem do sofá está sendo renderizada
    const sofaImg = getByTestId('sofa-img');
    expect(sofaImg).toBeTruthy();
    expect(sofaImg.props.source).toEqual(
      // Adicione aqui a referência correta para a imagem do sofá
      require('../../assets/footer-livro.png')
    );

    // Testa se o logo está sendo renderizado
    const logoImg = getByTestId('footer-logo');
    expect(logoImg).toBeTruthy();
    expect(logoImg.props.source).toEqual(
      // Adicione aqui a referência correta para a imagem do logo
      require('../../assets/logo.png')
    );

    // Testa se os links estão sendo renderizados corretamente
    expect(getByText('Livros')).toBeTruthy();
    expect(getByText('Contato')).toBeTruthy();
    expect(getByText('Suporte')).toBeTruthy();
    expect(getByText('Políticas de Devolução & Reembolso')).toBeTruthy();

    // Adicione mais testes conforme necessário para outros elementos do seu componente
  });
});
