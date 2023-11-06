import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  InputContainer,
  Input,
  RegisterButton,
  Rectangle,
  LogoImage,
  RegisterButtonText,
  RegisterText,
  TypeText,
  BackButtonView,
  InputBox,
} from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useUser } from '../../../Context/UserContext';
import BackButton from '../../BackButton';
import { API } from '../../../services/api';

const CreateTrainingDayScreen = () => {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [comments, setComments] = useState('');

  const route = useRoute();
  const navigate = useNavigation();
  const { idRoutine } = route.params || {};
  const handleRegisterTraining = async () => {
    try {
      const data = {
        day: day,
        name: name,
        comments: comments,
        idRoutine: idRoutine,
      };
      const response = await API.post('/routine/insertDayTraining', data);

      navigate.goBack();
    } catch (error) {
      console.log('Catch: ', error);
    }
  };
  useEffect(() => {}, []);
  return (
    <Container>
      <ScrollView>
        <BackButtonView>
          <BackButton destiny="Home"></BackButton>
        </BackButtonView>
        <KeyboardAwareScrollView
          extraScrollHeight={50}
          keyboardShouldPersistTaps="handled"
        >
          <RegisterText>Treino</RegisterText>
          <>
            <Rectangle>
              <InputContainer>
                <TypeText>Selecione o dia da semana:</TypeText>
                <Picker
                  style={{ backgroundColor: 'white' }}
                  selectedValue={day}
                  onValueChange={itemValue => setDay(itemValue)}
                >
                  <Picker.Item
                    label="Selecione o dia da semana"
                    value={null}
                    color="grey"
                  />
                  <Picker.Item label="Segunda" value="Segunda" color="black" />
                  <Picker.Item label="Terça" value="Terça" color="black" />
                  <Picker.Item label="Quarta" value="Quarta" color="black" />
                  <Picker.Item label="Quinta" value="Quinta" color="black" />
                  <Picker.Item label="Sexta" value="Sexta" color="black" />
                  <Picker.Item label="Sábado" value="Sábado" color="black" />
                  <Picker.Item label="Domingo" value="Domingo" color="black" />
                </Picker>
              </InputContainer>
              <InputContainer>
                <TypeText>Nome:</TypeText>
                <Input value={name} onChangeText={text => setName(text)} />
              </InputContainer>
              <InputContainer>
                <TypeText>Comentários:</TypeText>
                <InputBox
                  value={comments}
                  onChangeText={text => setComments(text)}
                />
              </InputContainer>
              <RegisterButton onPress={handleRegisterTraining}>
                <RegisterButtonText>Cadastrar</RegisterButtonText>
              </RegisterButton>
            </Rectangle>
          </>
        </KeyboardAwareScrollView>
      </ScrollView>
    </Container>
  );
};

export default CreateTrainingDayScreen;
