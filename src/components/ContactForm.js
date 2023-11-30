import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ContactForm = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>

        <View style={styles.block}>
          <View style={styles.row}>

            <View style={styles.col}>
              <View style={styles.service}>
                <View style={styles.serviceIcon}>
                  {/* Ícone do local */}
                  <Text>Ícone Local</Text>
                </View>
                <View style={styles.serviceContents}>
                  <Text>Belo Horizonte, MG - Brasil</Text>
                </View>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.service}>
                <View style={styles.serviceIcon}>
                  {/* Ícone do envelope */}
                  <Text>Ícone Envelope</Text>
                </View>
                <View style={styles.serviceContents}>
                  <Text>info@folheando.com.br</Text>
                </View>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.service}>
                <View style={styles.serviceIcon}>
                  {/* Ícone do telefone */}
                  <Text>Ícone Telefone</Text>
                </View>
                <View style={styles.serviceContents}>
                  <Text>+55 31 3925 3939</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.form}>
            <View style={styles.row}>
              <View style={styles.col}>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Nome</Text>
                  <TextInput style={styles.input} placeholder="Digite seu nome" />
                </View>
              </View>
              <View style={styles.col}>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Sobrenome</Text>
                  <TextInput style={styles.input} placeholder="Digite seu sobrenome" />
                </View>
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput style={styles.input} placeholder="Digite seu e-mail" keyboardType="email-address" />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Mensagem</Text>
              <TextInput style={styles.textarea} placeholder="Digite sua mensagem" multiline={true} numberOfLines={5} />
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  container: {
    flex: 1,
  },
  block: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    flex: 1,
    marginBottom: 20,
  },
  service: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceIcon: {
    marginRight: 10,
  },
  serviceContents: {
    flex: 1,
  },
  form: {},
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ContactForm;
