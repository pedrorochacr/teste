import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  InputContainer,
  Input,
  RegisterButton,
  Rectangle,
  RegisterButtonText,
  RegisterText,
  TypeText,
  BackButtonView,
  EditInput,
  DeleteButton,
  EditButton,
  CloseModal,
  InternModal,
  ContainerModal,
} from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView, TouchableOpacity, Text, View, Button } from 'react-native';
import Modal from 'react-native-modal';
import BackButton from '../../BackButton';
import { API } from '../../../services/api';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const CreateTypeScreen = () => {
  const [name, setName] = useState(null);
  const [types, setTypes] = useState([]);
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [selectedTypeValue, setSelectedTypeValue] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigation();
  const [editedTypeName, setEditedTypeName] = useState('');

  const toggleModal = () => {
    setShowTypeModal(!showTypeModal);
  };
  const fetchTypes = async () => {
    try {
      const response = await API.get('/type/getAllTypes');
      setTypes(response);
    } catch (error) {
      console.error('Erro ao buscar os tipos:', error);
    }
  };

  const fetchTypesById = async selectedTypeValue => {
    try {
      const response = await API.get(
        `/type/getTypeById?idType=${selectedTypeValue}`,
      );
      setEditedTypeName(response.nome);
      setSelectedType(response);
    } catch (error) {
      console.error('Erro ao buscar os tipos:', error);
    }
  };

  const handleRegisterType = async () => {
    try {
      const data = {
        name: name,
      };

      const response = await API.post('/type/createType', data);
      navigate.goBack();
    } catch (error) {
      console.log('Catch: ', error);
    }
  };
  const handleEditType = async () => {
    const data = {
      nome: editedTypeName,
    };
    const response = await API.put(
      `/type/alterType/${selectedTypeValue}`,
      data,
    );
    toggleModal();
    fetchTypes();
  };

  const handleDeleteType = async () => {
    const response = await API.delete(`/type/deleteType/${selectedTypeValue}`);
    // console.log(response);
    toggleModal();
    fetchTypes();
  };

  useEffect(() => {
    fetchTypes();
  }, []);

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
          <RegisterText>Tipo de Treino</RegisterText>
          <>
            <Rectangle>
              <InputContainer>
                <TypeText>Adicione um novo tipo:</TypeText>
                <Input value={name} onChangeText={text => setName(text)} />
              </InputContainer>

              <RegisterButton onPress={handleRegisterType}>
                <RegisterButtonText>Cadastrar</RegisterButtonText>
              </RegisterButton>

              <InputContainer>
                <TypeText>Altere um tipo já existente:</TypeText>
                <Picker
                  style={{ backgroundColor: 'white' }}
                  selectedValue={selectedTypeValue}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedTypeValue(itemValue);
                    setShowTypeModal(true);
                    fetchTypesById(itemValue);
                  }}
                >
                  <Picker.Item
                    label="Selecione o exercício"
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
              <Modal isVisible={showTypeModal}>
                <ScrollView>
                  <ContainerModal>
                    {selectedTypeValue && (
                      <InternModal>
                        <CloseModal onPress={toggleModal}>
                          <Icon name="times" size={20} color="black" />
                        </CloseModal>
                        <EditInput
                          onChangeText={text => setEditedTypeName(text)}
                          value={editedTypeName}
                        />
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <EditButton onPress={() => handleEditType()}>
                            <Text style={{ color: 'white' }}>Salvar</Text>
                          </EditButton>

                          <DeleteButton onPress={() => handleDeleteType()}>
                            <Text style={{ color: 'white' }}>Excluir</Text>
                          </DeleteButton>
                        </View>
                      </InternModal>
                    )}
                  </ContainerModal>
                </ScrollView>
              </Modal>
            </Rectangle>
          </>
        </KeyboardAwareScrollView>
      </ScrollView>
    </Container>
  );
};

export default CreateTypeScreen;
