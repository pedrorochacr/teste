import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  Line,
  WhiteBox,
  RoutineButton,
  TrainText,
  SelectTraining,
  CreateRoutineView,
  CreateRoutineButton,
  CreateRoutineText,
  AerobicButton,
  AerobicText,
  RoutineCreated,
  IconContainer,
  TextContainer,
  TitleText,
  DateText,
  DescriptionText,
} from './styles';
import { API } from '../../services/api';
import Student from '../../Types/student';
import BackButton from '../BackButton';
import Routine from '../../Types/routine';
import MuscularIcon from '../../assets/muscular.svg';
import { ScrollView } from 'react-native-gesture-handler';
import StudentNameHeader from '../NameStudentHeader';

const TrainingScreen = () => {
  const [students, setStudents] = useState<Student | undefined>(undefined);
  const [routines, setRoutines] = useState<Routine[]>();

  const route = useRoute();
  const { id } = route.params || {};
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await API.get(
          `/user/getStudentIdStudent?idStudent=${id}`,
        );
        setStudents(response.student);
      } catch (error) {
        console.error('Erro ao buscar estudantes:', error);
      }
    };
    const fetchRoutines = async () => {
      try {
        const response = await API.get(`/routine/getRoutines?idStudent=${id}`);
        console.log('data routine: ', response);
        setRoutines(response);
      } catch (error) {
        console.error('Erro ao buscar rotinas:', error);
      }
    };

    // fetchRoutines()
    fetchStudents();
    fetchRoutines();
  }, []);
  const [selectedTrain, setSelectedTrain] = useState('routine');
  const navigation = useNavigation();
  const student = {
    id: 1,
    name: 'João',
    photo: '',
    whatsapp: '+55 33 8893-7320', // Adicione o atributo "whatsapp"
  };
  const handleSelect = option => {
    setSelectedTrain(option);
  };

  const renderRoutineButtons = () => {
    return routines?.map(routine => (
      <RoutineCreated
        key={routine.id_routine}
        onPress={() =>
          navigation.navigate('RoutineScreen', {
            idRoutine: routine.id_routine,
          })
        }
      >
        <IconContainer>
          <MuscularIcon width={100} height={100}></MuscularIcon>
        </IconContainer>
        <TextContainer>
          <TitleText>{routine.name}</TitleText>
          <DateText>
            {routine.startdate} - {routine.enddate}
          </DateText>
          <DescriptionText>{routine.comments}</DescriptionText>
        </TextContainer>
      </RoutineCreated>
    ));
  };

  return (
    <Container>
      <BackButton></BackButton>
      <StudentNameHeader student={students}></StudentNameHeader>
      <WhiteBox>
        <SelectTraining>
          <RoutineButton
            isSelected={selectedTrain === 'routine'}
            onPress={() => handleSelect('routine')}
          >
            <TrainText isSelected={selectedTrain === 'routine'}>
              Rotinas de Treino
            </TrainText>
          </RoutineButton>
          <AerobicButton
            isSelected={selectedTrain === 'aerobic'}
            onPress={() => handleSelect('aerobic')}
          >
            <AerobicText isSelected={selectedTrain === 'aerobic'}>
              Aeróbico
            </AerobicText>
          </AerobicButton>
        </SelectTraining>
        <CreateRoutineView>
          <CreateRoutineButton
            onPress={() =>
              navigation.navigate('CreateRoutineScreen', {
                idStudent: students?.id,
              })
            }
          >
            <CreateRoutineText>Criar Rotina</CreateRoutineText>
          </CreateRoutineButton>
        </CreateRoutineView>
        <Line></Line>
        <SelectTraining>
          <ScrollView>{renderRoutineButtons()}</ScrollView>
        </SelectTraining>
      </WhiteBox>
    </Container>
  );
};

export default TrainingScreen;
