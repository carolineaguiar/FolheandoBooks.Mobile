import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerSection}>
      <View style={styles.container}>
        <View style={styles.sofaImg}>
          <Image
            source={require('../../assets/footer-livro.png')}
            style={styles.img}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.col4}>
            <View style={styles.footerLogoWrap}>
              <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
              />
            </View>
            <Text style={styles.mb4}>Download nosso App</Text>

            <View style={styles.customSocial}>
              <TouchableOpacity style={styles.socialIcon}>
                {/* Adicione o ícone do Google Play */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon}>
                {/* Adicione o ícone da App Store */}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.col8}>
            <View style={styles.row}>
              <View style={styles.col6}>
                <View style={styles.linksWrap}>
                  <Text style={styles.linkTitle}>Livros</Text>
                  <Text style={styles.link}>Contato</Text>
                </View>
              </View>

              <View style={styles.col6}>
                <View style={styles.linksWrap}>
                  <Text style={styles.link}>Suporte</Text>
                  <Text style={styles.link}>Políticas de Devolução & Reembolso</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.borderTop}>
          <View style={styles.row}>
            <View style={styles.col6}>
              <Text style={[styles.mb2, styles.textCenter, styles.textLgStart]}>
                Copyright &copy;{new Date().getFullYear()}. Todos os Direitos Reservados. &mdash; Desenvolvido por{' '}
                <Text style={styles.link}>Folheando Books</Text>
              </Text>
            </View>

            <View style={[styles.col6, styles.textCenter, styles.textLgEnd]}>
              <View style={styles.inlineList}>
                <Text style={styles.me4}>
                  <Text style={styles.link}>Termos &amp; Condições</Text>
                </Text>
                <Text>
                  <Text style={styles.link}>Política de Privacidade</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerSection: {
    backgroundColor: 'white',
    paddingBottom: 40, // Ajuste conforme necessário
    paddingTop: 50
  },
  container: {
    paddingHorizontal: 20, // Ajuste conforme necessário
  },
  sofaImg: {
    position: 'absolute',
    top: -250,
    zIndex: 1,
    right: 0,
  },
  img: {
    width: 300, // Ajuste o valor conforme necessário
    height: 250, // Ajuste o valor conforme necessário
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  col4: {
    width: '40%',
  },
  footerLogoWrap: {
    marginBottom: 20,
  },
  logo: {
    top: -50,
    width: 200, // Ajuste o valor conforme necessário
    height: 150, // Ajuste o valor conforme necessário
  },
  mb4: {
    marginBottom: 20,
  },
  customSocial: {
    flexDirection: 'row',
  },
  socialIcon: {
    width: 40,
    height: 40,
    textAlign: 'center',
    lineHeight: 40,
    marginRight: 10,
    backgroundColor: '#dce5e4', // Cor de fundo dos ícones sociais
  },
  col8: {
    width: '30%',
  },
  linksWrap: {
    marginBottom: 20,
  },
  linkTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    color: '#3b5d50', // Cor do link
    marginBottom: 10,
  },
  borderTop: {
    borderColor: '#dce5e4', // Cor da borda superior
    borderTopWidth: 1,
    paddingTop: 20, // Ajuste conforme necessário
  },
  mb2: {
    marginBottom: 20,
  },
  textCenter: {
    textAlign: 'center',
  },
  textLgStart: {
    textAlign: 'left',
  },
  textLgEnd: {
    textAlign: 'right',
  },
  inlineList: {
    flexDirection: 'row',
  },
  me4: {
    marginRight: 20,
  },
});

export default Footer;
