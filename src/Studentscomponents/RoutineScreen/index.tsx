import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  DateText,
  DescriptionText,
  IconContainer,
  Line,
  Section1,
  Section2,
  Section3,
  Section4,
  TextContainer,
  TitleText,
  TrainingDayButton,
  TrainingDayButtonSection,
  TrainingDayButtonText,
  TrainingDayDescriptionText,
  TrainingDayNameText,
  TrainingDayText,
  TrainingDetails,
  TreinoContainer,
  TreinoNameView,
  TreinoView,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import MuscularIcon from '../../assets/muscular.svg';
import MenuIcon from '../../assets/menu.svg';
import ArrowIcon from '../../assets/arrownext.svg';
import ArrowDownIcon from '../../assets/arrow-down.svg';
import Sheet from '../../assets/sheet.svg';
import Routine from '../../Types/routine';
import { API } from '../../services/api';
import trainingDay from '../../Types/trainingDay';
import BackButton from '../../components/BackButton';
import { ArrowButton } from '../TrainingScreen/styles';

const RoutineStudentScreen = () => {
  const route = useRoute();

  const { idRoutine } = route.params || {};
  const idStudent: number | null = null;
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento
  const [trainingDay, setTrainingDay] = useState<trainingDay[]>();
  const [selectedTrainingId, setSelectedTrainingId] = useState(null);
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
        <Section1>
            <BackButton></BackButton>
        </Section1>
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
        <ScrollView>
        <Section4>
          {trainingDay &&
            trainingDay.map((training, index) => (
              <TreinoContainer
                key={index}
                onPress={() =>
                  navigation.navigate('TrainingDayTeacherScreen', {
                    idDayTrainig: training.id,
                    nameStudent: student.firstname,
                  })
                }
              >
                <TreinoView>
                  <TreinoNameView>
                    <MenuIcon width={30} height={30}></MenuIcon>
                    <TrainingDayText>{training.day}</TrainingDayText>
                  </TreinoNameView>
                  <ArrowButton  onPress={() => setSelectedTrainingId(selectedTrainingId === training.id ? null : training.id)}>
                      {selectedTrainingId == training.id ? 
                      (<ArrowDownIcon width={30} height={30}></ArrowDownIcon>) :
                      (<ArrowIcon width={30} height={30}></ArrowIcon>)
                    }
                  </ArrowButton>
                </TreinoView>
                {selectedTrainingId == training.id && (
                 <TrainingDetails>
                    <TrainingDayNameText>{training.name}</TrainingDayNameText>
                    <TrainingDayDescriptionText>{training.comments}</TrainingDayDescriptionText>
                    <TrainingDayButtonSection>
                       <TrainingDayButton>
                          <Sheet width={18} height={18}></Sheet>
                         <TrainingDayButtonText>Histórico</TrainingDayButtonText>
                       </TrainingDayButton>
                       <TrainingDayButton>
                       <TrainingDayButtonText>Ver Treino</TrainingDayButtonText>
                       </TrainingDayButton>
                    </TrainingDayButtonSection>
                 </TrainingDetails>
              )}
              </TreinoContainer>
            ))}
        </Section4>
      </ScrollView>
    </Container>
  );
};

export default RoutineStudentScreen;
