import React, { useEffect, useState } from 'react';
import {
  Container,
  StudentHeaderView,
  StudentHeaderName,
  TrainingView,
  ButtonContainer,
  ButtonTreino,
  ButtonText,
  TrainingNameTExt,
  TrainingNameView,
  WhiteArea,
  ExerciseContainer,
  ExerciseTextTitle,
  ArrowButton,
  TrainingDetails,
  VideoContainer,
  ExerciseView,
  TrainingData,
  TrainingDataTitle,
  TrainingDataTitleView,
  TrainingDataInputsView,
  GrayTextInput,
  EditButton,
  SeriesWeightView,
  IntervalEditView,
} from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';
import { useUser } from '../../../Context/UserContext';
import MenuIcon from '../../../assets/menu.svg';
import { ScrollView } from 'react-native-gesture-handler';
import BackButton from '../../../components/BackButton/index';
import { Video, ResizeMode } from 'expo-av';
import { API } from '../../../services/api';
import TrainingDay from '../../../Types/trainingDay';
import ArrowDownIcon from '../../../assets/arrow-down.svg';
import ArrowUpIcon from '../../../assets/arrowUp.svg';
import SettingIcon from '../../../assets/settingIcon.svg';
import DoneIcon from '../../../assets/done.svg';
import DotsIcon from '../../../assets/dots.svg';
import { KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const TrainingDayTeacherScreen = () => {
  const { user } = useUser();
  const route = useRoute();
  const [series, setSeries] = useState('Series');
  const [carga, setCarga] = useState('Carga');
  const [intervalo, setIntervalo] = useState('Intervalo');
  const [isEditing, setIsEditing] = useState(false);
  const { dayTraining }: { dayTraining?: TrainingDay } = route.params || {};
  const { student } = route.params || {};
  const navigation = useNavigation();
  const [selectedTrainingId, setSelectedTrainingId] = useState(null);
  const [selectedTraining, setSelectedTraining] = useState();
  const video = React.useRef(null);

  const exercisesData = [
    {
      title: 'Agachamento no Smith',
      series: '4-16-8-9',
      carga: '45Kg',
      intervalo: '45s',
      instructions: 'Colocar aqui as instruções de como realizar o exercicio',
      videoUri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    },
    {
      title: 'Agachamento no Smith',
      series: '4-16-8-9',
      carga: '45Kg',
      intervalo: '45s',
      instructions: 'Colocar aqui as instruções de como realizar o exercicio',
      videoUri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    },
  ];
  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await API.get(
          `/training/trainingByTrainingId?idDayTraining=${dayTraining.id}`,
        );
        setSelectedTraining(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar treinos:', error);
      }
    };
    //trainingByTrainingId
    fetchTrainings();
  }, []);
  const setSeriesFunction = async id => {
    try {
      const data = {
        series: series,
      };
      const response = await API.put(`/training/editSeries?id=${id}`, data);
      console.log(id);
    } catch (error) {
      console.error('Erro ao buscar treinos:', error);
    }
  };
  const handleInputFocus = () => {
    setIsEditing(true);
  };
  const handleInputBlur = () => {
    setIsEditing(false);
  };
  return (
    <Container>
      <BackButton></BackButton>
      <StudentHeaderView>
        <StudentHeaderName>{student.firstname}</StudentHeaderName>
      </StudentHeaderView>
      <TrainingView>
        <ButtonContainer>
          {dayTraining ? (
            <TrainingNameTExt>
              {dayTraining.day} - {dayTraining.name}
            </TrainingNameTExt>
          ) : (
            <TrainingNameTExt>Sem informações</TrainingNameTExt>
          )}
          <ButtonTreino>
            <ButtonText
              onPress={() =>
                navigation.navigate('AddExerciseScreen', {
                  dayTrainingId: dayTraining.id,
                })
              }
            >
              + Exercício
            </ButtonText>
          </ButtonTreino>
        </ButtonContainer>
      </TrainingView>

      <WhiteArea>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="handled"
        >
          <ScrollView>
            {selectedTraining?.map((exercise, index) => (
              <ExerciseContainer key={index}>
                <ScrollView>
                  <ExerciseView>
                    <MenuIcon width={25} height={25}></MenuIcon>
                    <ExerciseTextTitle>{exercise.name}</ExerciseTextTitle>
                    <DotsIcon width={25} height={25}></DotsIcon>
                    <ArrowButton
                      onPress={() => {
                        setSelectedTrainingId(
                          selectedTrainingId === exercise.id
                            ? null
                            : exercise.id,
                        );
                        if (selectedTrainingId) {
                          setSeriesFunction(exercise.id);
                        }
                      }}
                    >
                      {selectedTrainingId === exercise.id ? (
                        <ArrowUpIcon width={25} height={25}></ArrowUpIcon>
                      ) : (
                        <ArrowDownIcon width={25} height={25}></ArrowDownIcon>
                      )}
                    </ArrowButton>
                  </ExerciseView>
                  {selectedTrainingId == exercise.id && (
                    <TrainingDetails>
                      <ScrollView>
                        <VideoContainer>
                          <Video
                            ref={video}
                            source={{ uri: exercisesData[0].videoUri }}
                            style={{ width: 250, height: 250 }}
                            resizeMode={ResizeMode.CONTAIN}
                            useNativeControls
                          />
                        </VideoContainer>
                        <TrainingData>
                          <TrainingDataTitleView>
                            <TrainingDataTitle>
                              Séries e Carga
                            </TrainingDataTitle>
                            <TrainingDataTitle>Intervalo(s)</TrainingDataTitle>
                          </TrainingDataTitleView>
                          <TrainingDataInputsView>
                            <SeriesWeightView>
                              <GrayTextInput
                                isEditing={isEditing}
                                value={exercise.series}
                                onChangeText={value => setSeriesFunction(value)}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                              />
                              <GrayTextInput
                                isEditing={isEditing}
                                value={exercise.carga}
                                onChangeText={value => setCarga(value)}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                              />
                            </SeriesWeightView>
                            <IntervalEditView>
                              <GrayTextInput
                                isEditing={isEditing}
                                value={exercise.intervalo}
                                onChangeText={value => setIntervalo(value)}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                              />
                              <EditButton>
                                {isEditing ? (
                                  <DoneIcon width={30} height={30}></DoneIcon>
                                ) : (
                                  <SettingIcon
                                    width={20}
                                    height={20}
                                  ></SettingIcon>
                                )}
                              </EditButton>
                            </IntervalEditView>
                          </TrainingDataInputsView>
                        </TrainingData>
                      </ScrollView>
                    </TrainingDetails>
                  )}
                </ScrollView>
              </ExerciseContainer>
            ))}
          </ScrollView>
        </KeyboardAwareScrollView>
      </WhiteArea>
    </Container>
  );
};

export default TrainingDayTeacherScreen;
