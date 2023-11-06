import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../assets/backIcon.svg';
import {
  Container,
  InputContainer,
  Input,
  RegisterButton,
  BackButton,
  GoBackText,
  Rectangle,
  LogoImage,
  RegisterButtonText,
  RegisterText,
  TypeText,
} from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { API } from '../../services/api';
import { ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useUser } from '../../Context/UserContext';

const StudentRegistrationScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [attendanceType, setAttendanceType] = useState(null);
  const [gender, setGender] = useState(null);

  const navigation = useNavigation();

  const { user } = useUser();

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        console.log('Senhas diferentes');
        return;
      }

      const data = {
        firstName: firstName,
        lastName: lastName,
        grouptype: attendanceType,
        phone: phone,
        datanascimento: birthday,
        genero: gender,
        email: email,
        idTeacher: user?.id,
      };
      console.log('data: ', data);
      const response = await API.post('/user/registerStudent', data);
    } catch (error) {
      console.log('Catch: ', error);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <KeyboardAwareScrollView
          extraScrollHeight={50}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            marginTop: 100,
            marginBottom: 160,
          }}
        >
          <BackButton onPress={() => navigation.navigate('Home')}>
            <BackIcon />
            <GoBackText>Voltar</GoBackText>
          </BackButton>
          <RegisterText>Cadastrar Aluno</RegisterText>
          <Rectangle>
            <LogoImage
              style={{ resizeMode: 'contain' }}
              source={require('../../assets/logos/logoAll.png')}
            />

            <>
              {/* <SafeAreaView>
                <RNDateTimePicker value={new Date()} />
              </SafeAreaView> */}
              <InputContainer>
                <TypeText>Nome</TypeText>
                <Input
                  placeholder="Nome"
                  value={firstName}
                  onChangeText={text => setFirstName(text)}
                />
              </InputContainer>
              <InputContainer>
                <TypeText>Sobrenome</TypeText>
                <Input
                  placeholder="Sobrenome"
                  value={lastName}
                  onChangeText={text => setLastName(text)}
                />
              </InputContainer>
              <InputContainer>
                <TypeText>Email</TypeText>
                <Input
                  placeholder="Email"
                  value={email}
                  onChangeText={text => setEmail(text)}
                  keyboardType="email-address"
                />
              </InputContainer>
              <InputContainer>
                <TypeText>Tipo de Atendimento</TypeText>
                <Picker
                  style={{ backgroundColor: 'white' }}
                  selectedValue={attendanceType}
                  onValueChange={itemValue => setAttendanceType(itemValue)}
                >
                  <Picker.Item
                    label="Selecione o tipo"
                    value={null}
                    color="grey"
                  />
                  <Picker.Item
                    label="Presencial"
                    value="presencial"
                    color="black"
                  />
                  <Picker.Item label="Online" value="online" color="black" />
                </Picker>
              </InputContainer>
              <InputContainer>
                <TypeText>Telefone</TypeText>
                <Input
                  placeholder="(31)97148-8741"
                  value={phone}
                  onChangeText={text => setPhone(text)}
                  keyboardType="phone-pad"
                />
              </InputContainer>
              <InputContainer>
                <TypeText>Data de Nascimento</TypeText>
                <Input
                  type="date"
                  placeholder="11/04/1975"
                  value={birthday}
                  onChangeText={text => setBirthday(text)}
                />
              </InputContainer>
              <InputContainer>
                <TypeText>Gênero</TypeText>
                <Picker
                  style={{ backgroundColor: 'white' }}
                  selectedValue={gender}
                  onValueChange={itemValue => setGender(itemValue)}
                >
                  <Picker.Item
                    label="Selecione seu gênero"
                    value={null}
                    color="grey"
                  />
                  <Picker.Item
                    label="Feminino"
                    value="feminino"
                    color="black"
                  />
                  <Picker.Item
                    label="Masculino"
                    value="masculino"
                    color="black"
                  />
                </Picker>
              </InputContainer>
              <RegisterButton onPress={handleRegister}>
                <RegisterButtonText>Cadastrar</RegisterButtonText>
              </RegisterButton>
            </>
          </Rectangle>
        </KeyboardAwareScrollView>
      </Container>
    </ScrollView>
  );
};

export default StudentRegistrationScreen;
