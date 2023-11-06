import React, { useEffect, useState } from 'react';
import {
  ButtonContainer,
  ButtonOrdenar,
  ButtonText,
  ButtonTreino,
  Container,
  DateText,
  DescriptionText,
  IconContainer,
  PageTitle,
  RoutineDetail,
  RoutineTitle,
  Section1,
  Section2,
  Section3,
  Section4,
  SectionImage,
  StudentImage,
  StudentName,
  StudentNameContainer,
  TextButtons,
  TextContainer,
  TitleText,
  TreinoContainer,
  WhiteBox,
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../Context/UserContext';
import { ScrollView } from 'react-native-gesture-handler';
import MuscularIcon from '../../assets/muscular.svg';
import MenuIcon from '../../assets/menu.svg';
import ArrowIcon from '../../assets/arrownext.svg';
import Routine from '../../Types/routine';
import { API } from '../../services/api';
import TrainingDay from '../../Types/trainingDay';
import BackButton from '../../components/BackButton';

const HomeStudent = () => {
  const { user } = useUser();
  const [routines, setRoutines] = useState<Routine[]>();

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const response = await API.get(
          `/routine/getRoutines?idStudent=${user?.id}`,
        );
        setRoutines(response);
      } catch (error) {
        console.error('Erro ao buscar rotinas:', error);
      }
    };
    fetchRoutines();
  }, [routines]);
  const student = {
    photo:
      'https:/.freepik.com/vetores-premium/icone-da-conta-icone-do-usuario-graficos-vetoriais_292645-552.jpg?w=740',
  };
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton />
      <Section1>
        <PageTitle>Rotinas de Treinos</PageTitle>
      </Section1>
      <WhiteBox>
        <ScrollView>
          {routines?.map(routine => (
            <RoutineDetail
              key={routine.id_routine}
              onPress={() =>
                navigation.navigate('RoutineStudentScreen', {
                  idRoutine: routine.id_routine,
                })
              }
            >
              <IconContainer>
                <MuscularIcon width={100} height={100} />
              </IconContainer>
              <TextContainer>
                <TitleText>{routine.name}</TitleText>
                <DateText>
                  {routine.startdate} - {routine.enddate}
                </DateText>
                <DescriptionText>{routine.comments}</DescriptionText>
              </TextContainer>
            </RoutineDetail>
          ))}
        </ScrollView>
      </WhiteBox>
    </Container>
  );
};

export default HomeStudent;
