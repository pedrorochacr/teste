import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ButtonContainer,
  ButtonOrdenar,
  ButtonText,
  ButtonTreino,
  Container,
  DateText,
  DescriptionText,
  IconContainer,
  Section1,
  Section2,
  Section3,
  Section4,
  SectionImage,
  SectionView,
  StudentImage,
  StudentName,
  StudentNameContainer,
  TextButtons,
  TextContainer,
  TitleText,
  TreinoContainer,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import MuscularIcon from '../../../assets/muscular.svg';
import MenuIcon from '../../../assets/menu.svg';
import ArrowIcon from '../../../assets/arrownext.svg';
import Routine from '../../../Types/routine';
import { API } from '../../../services/api';
import trainingDay from '../../../Types/trainingDay';
import BackButton from '../../BackButton';

const RoutineScreen = () => {
  const route = useRoute();
  const { idRoutine } = route.params || {};
  const idStudent: number | null = null;
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento
  const [trainingDay, setTrainingDay] = useState<trainingDay[]>();
  const [student, setStudent] = useState(null);

  const [routine, setRoutines] = useState<Routine>();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const response = await API.get(
          `/routine/getRoutinesIdRoutine?idRoutine=${idRoutine}`,
        );
        //console.log('data routine routine screen: ', response);
        setRoutines(response[0]);
      } catch (error) {
        console.error('Erro ao buscar rotinas:', error);
      }
      try {
        const studentResponse = await API.get(
          `/user/getStudentByRoutine?idRoutine=${idRoutine}`,
        );
        setStudent(studentResponse.student);
      } catch (error) {
        console.error('Erro ao buscar student:', error);
      }
    };

    const fetchTrainingDays = async () => {
      try {
        const response = await API.get(
          `/routine/getDayTraining?idRoutine=${idRoutine}`,
        );
        //console.log('data routine: ', response);
        setTrainingDay(response);
      } catch (error) {
        console.error('Erro ao buscar training:', error);
      }
    };

    fetchTrainingDays();
    console.log(trainingDay);
    fetchRoutines();
  }, []);

  return (
    <Container>
      <BackButton></BackButton>
      <ScrollView>
        <SectionView>
        <Section2>
          <IconContainer>
            <MuscularIcon width={100} height={100} />
          </IconContainer>
          <TextContainer>
            <TitleText>{routine?.name} </TitleText>
            <DateText>{`${routine?.startdate} - ${routine?.enddate}`}</DateText>

            <DescriptionText> {routine?.comments}</DescriptionText>
          </TextContainer>
        </Section2>
        <Section3>
          <TitleText>Tipo do Treino</TitleText>
          <DescriptionText>{routine?.goal} </DescriptionText>
          <TitleText>Dificuldade</TitleText>
          <DescriptionText>{routine?.difficulty}</DescriptionText>
        </Section3>
        <Section4>
          <ButtonContainer>
            <ButtonTreino>
              <ButtonText
                onPress={() =>
                  navigation.navigate('CreateTrainingDayScreen', {
                    idRoutine: idRoutine,
                  })
                }
              >
                + Treino
              </ButtonText>
            </ButtonTreino>
          </ButtonContainer>
          {trainingDay &&
            trainingDay.map((training, index) => (
              <TreinoContainer
                key={index}
                onPress={() =>
                  navigation.navigate('TrainingDayTeacherScreen', {
                    dayTraining: training,
                    student: student,
                  })
                }
              >
                <MenuIcon width={30} height={30}></MenuIcon>
                <TitleText>{training.day}</TitleText>
                <ArrowIcon width={30} height={30}></ArrowIcon>
              </TreinoContainer>
            ))}
        </Section4>
        </SectionView>
        
      </ScrollView>
    </Container>
  );
};

export default RoutineScreen;
