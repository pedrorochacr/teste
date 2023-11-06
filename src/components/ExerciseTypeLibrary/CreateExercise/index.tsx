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
import BackButton from '../../BackButton';
import { API } from '../../../services/api';

const CreateExerciseScreen = () => {
  const [video, setVideo] = useState('');
  const [name, setName] = useState('');
  const [typeId, setTypeId] = useState('');
  const [types, setTypes] = useState([]); // Estado para armazenar os tipos
  const navigate = useNavigation();

  const fetchTypes = async () => {
    try {
      const response = await API.get('/type/getAllTypes');
      setTypes(response);
      console.log(response);
    } catch (error) {
      console.error('Erro ao buscar os tipos:', error);
    }
  };

  const createExerciseFunction = async () => {
    try {
      const data = {
        name: name,
        video: video,
        id_tipo: typeId,
      };
      const response = await API.post('/exercise/createExercise', data);
      navigate.goBack();
    } catch (error) {
      console.error('Erro ao buscar os tipos:', error);
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  const handleRegisterExercise = async () => {
    // Aqui você pode implementar a lógica para registrar o exercício
  };

  return (
    <Container>
      <ScrollView>
        <BackButtonView>
          <BackButton destiny="Home" />
        </BackButtonView>
        <KeyboardAwareScrollView
          extraScrollHeight={50}
          keyboardShouldPersistTaps="handled"
        >
          <RegisterText>Criar Exercício</RegisterText>
          <>
            <Rectangle>
              <InputContainer>
                <TypeText>Selecione o tipo de exercício:</TypeText>
                <Picker
                  style={{ backgroundColor: 'white' }}
                  selectedValue={typeId}
                  onValueChange={itemValue => setTypeId(itemValue)}
                >
                  <Picker.Item
                    label="Selecione o tipo de exercício"
                    value={null}
                    color="grey"
                  />
                  {types.map(type => (
                    <Picker.Item
                      key={type.id}
                      label={type.nome}
                      value={type.id}
                      color="black"
                    />
                  ))}
                </Picker>
              </InputContainer>
              <InputContainer>
                <TypeText>Nome:</TypeText>
                <Input onChangeText={value => setName(value)} />
              </InputContainer>
              <InputContainer>
                <TypeText>Vídeo:</TypeText>
                <InputBox onChangeText={value => setVideo(value)} />
              </InputContainer>
              <RegisterButton onPress={createExerciseFunction}>
                <RegisterButtonText>Cadastrar</RegisterButtonText>
              </RegisterButton>
            </Rectangle>
          </>
        </KeyboardAwareScrollView>
      </ScrollView>
    </Container>
  );
};

export default CreateExerciseScreen;
