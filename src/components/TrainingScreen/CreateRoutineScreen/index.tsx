import React, { useState } from 'react';
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


const CreateRoutineScreen = () => {
  const [name, setName] = useState('');
  const [comments, setComments] = useState('');
  const [difficult, setDifficult] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [goal, setGoal] = useState(null);
  const route = useRoute();
  const navigate = useNavigation()
  const { idStudent } = route.params || {};
  const handleRegisterRoutine = async () => {
    try {

      const data = {
        name: name,
        comments: comments,
        startDate: startDate,
        endDate: endDate,
        difficult: difficult,
        goal: goal,
        idStudent: idStudent,
      };
      const response = await API.post('/routine/insertRoutine', data);
      navigate.goBack();
    } catch (error) {
      console.log('Catch: ', error);
    }
  };
  const { user } = useUser();


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
    
          <RegisterText>Rotina de Treino</RegisterText>
          <Rectangle>
            <>
              <InputContainer>
                <TypeText>Nome da Rotina:</TypeText>
                <Input
                  value={name}
                  onChangeText={text => setName(text)}
                />
              </InputContainer>
              <InputContainer>
                <TypeText>Comentários:</TypeText>
                <InputBox
                  value={comments}
                  onChangeText={text => setComments(text)}
                />
              </InputContainer>
              <InputContainer>
                <TypeText>Objetivo:</TypeText>
                <Picker
                  style={{ backgroundColor: 'white' }}
                  selectedValue={goal}
                  onValueChange={itemValue => setGoal(itemValue)}
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
                <TypeText>Dificuldade:</TypeText>
                <Picker
                  style={{ backgroundColor: 'white' }}
                  selectedValue={difficult}
                  onValueChange={itemValue => setDifficult(itemValue)}
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
                <TypeText>Inicia em:</TypeText>
                <Input
                  value={startDate}
                  placeholder='dd/mm/yyyy'
                  onChangeText={text => setStartDate(text)}
                />
              </InputContainer>
              <InputContainer>
                <TypeText>Finaliza em:</TypeText>
                <Input
                  value={endDate}
                  placeholder='dd/mm/yyyy'
                  onChangeText={text => setEndDate(text)}
                />
              </InputContainer>
              <RegisterButton onPress={handleRegisterRoutine} >
                <RegisterButtonText>Cadastrar</RegisterButtonText>
              </RegisterButton>
            </>
          </Rectangle>
        </KeyboardAwareScrollView>
        </ScrollView>
      </Container>

  );
};

export default CreateRoutineScreen;
