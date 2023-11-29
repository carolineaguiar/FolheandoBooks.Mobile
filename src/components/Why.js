import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WhyChooseUsSection = () => {
  return (
    <View style={styles.whyChooseSection}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col6}>
            <Text style={styles.sectionTitle}>Porque folhear com a gente?</Text>
            <Text>Só aqui você encontra a melhor seleção de livros, esperando para ser sua próxima leitura.</Text>

            <View style={styles.featureRow}>
              <View style={styles.featureCol}>
                <View style={styles.feature}>
                  <View style={styles.icon}>
                    <Image
                      source={require('../../assets/truck.svg')}
                      style={styles.imfFluid}
                    />
                  </View>
                  <Text style={styles.featureTitle}>Rápido &amp; Frete Grátis</Text>
                  <Text>Só aqui você encontra frete grátis para todo o Brasil, sem pedido mínimo!</Text>
                </View>
              </View>

              <View style={styles.featureCol}>
                <View style={styles.feature}>
                  <View style={styles.icon}>
                    <Image
                      source={require('../../assets/bag.svg')}
                      style={styles.imfFluid}
                    />
                  </View>
                  <Text style={styles.featureTitle}>Simplicidade na hora de comprar</Text>
                  <Text>Com apenas alguns cliques seu pedido já estará sendo processado, separado e enviado para você.</Text>
                </View>
              </View>

              <View style={styles.featureCol}>
                <View style={styles.feature}>
                  <View style={styles.icon}>
                    <Image
                      source={require('../../assets/support.svg')}
                      style={styles.imfFluid}
                    />
                  </View>
                  <Text style={styles.featureTitle}>Suporte 24/7</Text>
                  <Text>Teve algum problema? Relaxa. Nossa equipe de suporte está sempre disponível pra falar com você.</Text>
                </View>
              </View>

              <View style={styles.featureCol}>
                <View style={styles.feature}>
                  <View style={styles.icon}>
                    <Image
                      source={require('../../assets/return.svg')}
                      style={styles.imfFluid}
                    />
                  </View>
                  <Text style={styles.featureTitle}>Reembolso sem complicações</Text>
                  <Text>Não conseguimos resolver seu problema? Tudo bem, nossa política de reembolso é simples e prática.</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whyChooseSection: {
    backgroundColor: '#f8f9fa', // Cor de fundo
    paddingTop: 60, // Ajuste conforme necessário
    paddingBottom: 60, // Ajuste conforme necessário
  },
  container: {
    paddingHorizontal: 20, // Ajuste conforme necessário
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center', // Centraliza os componentes horizontalmente
  },
  col6: {
    width: '80%', // Ajuste conforme necessário
  },
  sectionTitle: {
    fontSize: 24, // Ajuste conforme necessário
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Centraliza o texto
  },
  featureRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  featureCol: {
    width: '48%', // Ajuste conforme necessário
    marginBottom: 20,
  },
  feature: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 2, // Sombra no Android
    shadowColor: '#000', // Cor da sombra no iOS
    shadowOffset: { width: 0, height: 2 }, // Configuração da sombra no iOS
    shadowOpacity: 0.3, // Opacidade da sombra no iOS
    shadowRadius: 3, // Raio da sombra no iOS
  },
  icon: {
    marginBottom: 10,
  },
  imfFluid: {
    width: 40, // Ajuste conforme necessário
    height: 40, // Ajuste conforme necessário
  },
  featureTitle: {
    fontSize: 16, // Ajuste conforme necessário
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default WhyChooseUsSection;
