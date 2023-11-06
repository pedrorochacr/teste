import React, { useEffect, useState } from 'react';
import {
  Container,
  Section1,
  TrainingTitle,
  ButtonBack,
  ExerciseContainer,
  TextExerciseContainer,
  Section2,
  VideoContainer,
  ExerciseTextTitle,
  ExerciseTextDescription,
  ExerciseTextInput,
  DescriptionContainer,
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../Context/UserContext';
import { ScrollView } from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton/index';
import { Video, ResizeMode } from 'expo-av';
import Routine from '../../Types/routine';

const TrainingDayStudentScreen = () => {
  const { user } = useUser();
  const student = {
    photo:
      'https:/.freepik.com/vetores-premium/icone-da-conta-icone-do-usuario-graficos-vetoriais_292645-552.jpg?w=740',
  };
  const navigation = useNavigation();
  const video = React.useRef(null);
  // Example array of exercise data
  const exercisesData = [
    {
      title: 'Agachamento no Smith',
      series: '4-16-8-9',
      carga: '45Kg',
      intervalo: '45s',
      instructions: 'Colocar aqui as instruções de como realizar o exercicio',
      videoUri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    },
    // Add more exercises as needed
  ];

  return (
    <Container>
      <BackButton></BackButton>
      <ScrollView>
        <Section1>
          <BackButton destiny="TrainingStudentScreen"></BackButton>
          <TrainingTitle>Inferiores (foco: quadríceps)</TrainingTitle>
        </Section1>
        <Section2>
          {/* Map over the exercisesData array to generate ExerciseContainer components */}
          {exercisesData.map((exercise, index) => (
            <ExerciseContainer key={index}>
              <TextExerciseContainer>
                <ExerciseTextTitle>{exercise.title}</ExerciseTextTitle>
                <DescriptionContainer>
                  <ExerciseTextDescription>Séries</ExerciseTextDescription>
                  <ExerciseTextInput>{exercise.series}</ExerciseTextInput>
                </DescriptionContainer>
                <DescriptionContainer>
                  <ExerciseTextDescription>Carga</ExerciseTextDescription>
                  <ExerciseTextInput>{exercise.carga}</ExerciseTextInput>
                </DescriptionContainer>
                <DescriptionContainer>
                  <ExerciseTextDescription>Intervalo</ExerciseTextDescription>
                  <ExerciseTextInput>{exercise.intervalo}</ExerciseTextInput>
                </DescriptionContainer>
                <ExerciseTextDescription>INSTRUÇÕES</ExerciseTextDescription>
                <ExerciseTextInput>{exercise.instructions}</ExerciseTextInput>
              </TextExerciseContainer>
              <VideoContainer>
                <Video
                  ref={video}
                  source={{ uri: exercise.videoUri }}
                  style={{ width: 200, height: 200 }}
                  resizeMode={ResizeMode.CONTAIN}
                  useNativeControls
                />
              </VideoContainer>
            </ExerciseContainer>
          ))}
        </Section2>
      </ScrollView>
    </Container>
  );
};

export default TrainingDayStudentScreen;
