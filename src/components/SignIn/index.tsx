import React, { useState } from 'react';
import {
  Container,
  Rectangle,
  UserTypeButtonsContainer,
  UserTypeButton,
  Circle,
  InnerCircle,
  Input,
  LoginButton,
  LoginText,
  InputContainer,
  RoleText,
  LogoImage,
  RegistrerButton,
  LoginButtonContainer,
  RegistrerText,
  UserBackground,
} from './styles';
import { useNavigation } from '@react-navigation/native';

import EmailSvg from '../../assets/email.svg';
import PasswordSvg from '../../assets/password.svg';
import { useUser } from '../../Context/UserContext';
import { API } from '../../services/api';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Alert } from 'react-native';
const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userType, setUserType] = useState<string>('student');
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();
  const { login } = useUser();
  const notFoundAlert = () =>
    Alert.alert('Usuario não encontrado', 'O email ou senha estão incorretos', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const handleLogin = async () => {
    setLoading(true);
    const isTeacher = userType == 'student' ? false : true;
    try {
      const data = {
        email: email,
        senha: password,
        isTeacher: isTeacher,
      };
      const response = await API.post('/user/verificaUsuario', data);
      if (response == 'Usuário não encontrado') {
        setLoading(false);
        notFoundAlert();
        return;
      }
      if (response) {
        setLoading(false);
      }
      login(response);
      if (userType == 'student') {
        navigation.navigate('HomeStudent');
        return;
      }
      if (userType == 'teacher') {
        navigation.navigate('Home');
      }
    } catch (error: any) {
      console.error(error);
      setLoading(false);
    }
  };

  const navigateToTrainerRegistration = () => {
    navigation.navigate('RegistrationTrainer');
  };
  return (
    <Container>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={50}
        contentContainerStyle={{
          marginTop: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <UserBackground>
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
            <InputContainer>
              <EmailSvg width={20} height={20} style={{ marginLeft: 10 }} />
              <Input placeholder="Email" onChangeText={text => setEmail(text)} />
            </InputContainer>
            <InputContainer>
              <PasswordSvg width={20} height={20} style={{ marginLeft: 10 }} />
              <Input
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
              />
            </InputContainer>
            <LoginButtonContainer>
              <LoginButton onPress={handleLogin}>
                <LoginText>{loading ? 'Carregando' : 'Entrar'}</LoginText>
              </LoginButton>
            </LoginButtonContainer>
            <RegistrerButton
              onPress={
                userType === 'student'
                  ? undefined
                  : navigateToTrainerRegistration
              }
              disabled={userType === 'student'}
            >
              <RegistrerText>
                {userType === 'student' ? '' : 'Criar uma conta'}
              </RegistrerText>
            </RegistrerButton>
          </Rectangle>
        </UserBackground>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default SignIn;
