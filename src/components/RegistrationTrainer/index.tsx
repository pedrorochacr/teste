import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  InputContainer,
  InputLabel,
  Input,
  RegisterButton,
  BackButton,
  GoBackText,
  Rectangle,
  LogoImage,
  RegisterButtonText,
  UserTypeButton,
  Circle,
  InnerCircle,
  RoleText,
  UserTypeButtonsContainer,
  RegisterStudentText,
  RegisterStudentTextConatainer,
} from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { API } from '../../services/api';
import { View, ScrollView, Alert } from 'react-native';
import Toast from 'react-native-toast-message';

const TrainerRegistrationScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState<string>('teacher');
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('SingIn');
  };
  const differentPasswordsAlert = () =>
    Alert.alert(
      'Senhas não conferem',
      'A senha e a confirmação de senha estão diferente, favor corrigir!',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
    );
  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        differentPasswordsAlert();
        return;
      }

      const data = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
      };

      const response = await API.post('/user/registerTeacher', data);
      navigation.navigate('SingIn');
      Toast.show({
        text1: 'Usuário cadastrado com sucesso',
        text2: 'Utilize suas novas credenciais para acessar sua conta',
      });
    } catch (error) {
      console.log('Catch: ', error);

      if (error.response.status === 400) {
        // Se o e-mail já existir, exibe um alerta com a mensagem específica
        Alert.alert(
          'Erro',
          'E-mail já cadastrado. Faça login ou use outro e-mail.',
          [{ text: 'OK' }],
        );
      } else {
        // Se ocorrer um erro não previsto, exibe um alerta genérico
        Alert.alert('Erro', 'Ocorreu um erro durante o registro.', [
          { text: 'OK' },
        ]);
      }
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <KeyboardAwareScrollView
          extraScrollHeight={50}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            marginTop: 40,
            marginBottom: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Rectangle>
            <LogoImage
              style={{ resizeMode: 'contain' }}
              source={require('../../assets/logos/logoAll.png')}
            />
            <UserTypeButtonsContainer>
              <UserTypeButton onPress={() => setUserType('student')}>
                <Circle selected={userType === 'student'}>
                  {userType === 'student' && <InnerCircle></InnerCircle>}
                </Circle>
                <RoleText>Aluno</RoleText>
              </UserTypeButton>
              <UserTypeButton onPress={() => setUserType('teacher')}>
                <Circle selected={userType === 'teacher'}>
                  {userType === 'teacher' && <InnerCircle />}
                </Circle>
                <RoleText>Treinador</RoleText>
              </UserTypeButton>
            </UserTypeButtonsContainer>
            <BackButton onPress={navigateToLogin}>
              <GoBackText>Voltar</GoBackText>
            </BackButton>
            {userType === 'teacher' ? (
              <>
                <InputContainer>
                  <Input
                    placeholder="Nome"
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    placeholder="Sobrenome"
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    placeholder="Senha"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    placeholder="Confirmação de Senha"
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    secureTextEntry
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    placeholder="Telefone"
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    keyboardType="phone-pad"
                  />
                </InputContainer>
                <RegisterButton onPress={handleRegister}>
                  <RegisterButtonText>Cadastrar</RegisterButtonText>
                </RegisterButton>
              </>
            ) : (
              <View>
                <RegisterStudentTextConatainer>
                  <RegisterStudentText>
                    Para se registrar como aluno, entre em contato com o seu
                    professor.
                  </RegisterStudentText>
                </RegisterStudentTextConatainer>
              </View>
            )}
          </Rectangle>
        </KeyboardAwareScrollView>
      </Container>
    </ScrollView>
  );
};

export default TrainerRegistrationScreen;
