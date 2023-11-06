import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ModalContainer,
  SquareButtonsContainer,
  SquareButtons,
  SquareButtonsText,
  TopContainer,
  ButtonRow,
  StudentButtons,
} from './styles';
import GymSvg from '../../assets/gym.svg';
import FilePlusSvg from '../../assets/filePlus.svg';
import TestSvg from '../../assets/test.svg';
import FileCheckSvg from '../../assets/fileCheck.svg';
import FilesSvg from '../../assets/files.svg';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../Context/UserContext';
import { API } from '../../services/api';
import TrainingScreen from '../TrainingScreen';

export default function StudentModal({ closeModal, idStudent }) {
  const navigation = useNavigation();
  const { user } = useUser();
  const [students, setStudents] = useState([]);

  const renderSquare = (icon: any, name: string) => (
    <SquareButtonsContainer
      onPress={() => {
        closeModal();
        navigation.navigate(name, { id: idStudent });
      }}
    >
      <SquareButtons>
        {icon}
        <SquareButtonsText>{name}</SquareButtonsText>
      </SquareButtons>
    </SquareButtonsContainer>
  );
  useEffect(() => {
    //console.log('idStudent: ', idStudent);
  }, []);
  return (
    <Modal coverScreen isVisible={true}>
      <ModalContainer>
        <TopContainer>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Ações</Text>
          <TouchableOpacity onPress={closeModal}>
            <Icon name="times" size={20} color="black" />
          </TouchableOpacity>
        </TopContainer>
        <ButtonRow style={{ justifyContent: 'space-between' }}>
          {renderSquare(
            <GymSvg width={45} height={50} color="black" />,
            'Treinos',
          )}
          {renderSquare(
            <FilePlusSvg width={45} height={50} color="black" />,
            'Treino Extra',
          )}
          {renderSquare(
            <TestSvg width={45} height={50} color="black" />,
            'Avaliações',
          )}
        </ButtonRow>
        <ButtonRow style={{ justifyContent: 'center', marginTop: 20 }}>
          {renderSquare(
            <FileCheckSvg width={45} height={50} color="black" />,
            'Progresso',
          )}
          {renderSquare(
            <FilesSvg width={45} height={50} color="black" />,
            'Arquivos',
          )}
        </ButtonRow>
        <View
          style={{
            flex: 0.6,
            justifyContent: 'center',
            marginLeft: 5,
          }}
        >
          <StudentButtons onPress={closeModal}>
            <Text style={{ color: 'white', fontSize: 18 }}>
              Ir para o aluno
            </Text>
          </StudentButtons>
        </View>
      </ModalContainer>
    </Modal>
  );
}
