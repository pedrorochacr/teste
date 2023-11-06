import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  WhiteBox,
  CreateRoutineView,
  CreateRoutineButton,
  CreateRoutineText,
  TitleArea,
  TitleLibrary,
  AddTrainingButton,
  AddTrainingText,
} from './styles';
import BackButton from '../BackButton';

const ExerciseTypeLibraryScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton destiny="Home"></BackButton>
      <TitleArea>
        <TitleLibrary>Biblioteca de Tipos e Exercícios</TitleLibrary>
      </TitleArea>
      <WhiteBox>
        <CreateRoutineView>
          <CreateRoutineButton
            onPress={() => navigation.navigate('CreateTypeScreen')}
          >
            <CreateRoutineText>Criar Tipo</CreateRoutineText>
          </CreateRoutineButton>
          <CreateRoutineButton
            onPress={() => navigation.navigate('CreateExercise')}
          >
            <CreateRoutineText>Criar Exercício</CreateRoutineText>
          </CreateRoutineButton>
        </CreateRoutineView>
      </WhiteBox>
    </Container>
  );
};

export default ExerciseTypeLibraryScreen;
