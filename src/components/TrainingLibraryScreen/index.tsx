import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

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
    TitleArea,
    TitleLibrary,
    AddTrainingButton,
    AddTrainingText,
  } from './styles';
import BackButton from '../BackButton';


const TrainingLibraryScreen = () => {
    const [selectedTrain, setSelectedTrain] = useState('routine');
    const handleSelect = (option) => {
        setSelectedTrain(option);
    };
  
  
  
  return(
    <Container>
        <BackButton destiny="Home"></BackButton>
        <TitleArea>
            <TitleLibrary>Biblioteca de Treinos</TitleLibrary>
            <AddTrainingButton>
                <AddTrainingText>Adicionar</AddTrainingText>
            </AddTrainingButton>
        </TitleArea>
        <WhiteBox>
                <SelectTraining>
                    <RoutineButton isSelected={selectedTrain === 'routine'} onPress={() => handleSelect('routine')}>
                        <TrainText isSelected={selectedTrain === 'routine'}>Rotinas de Treino</TrainText>
                    </RoutineButton>
                    <AerobicButton isSelected={selectedTrain === 'aerobic'} onPress={() => handleSelect('aerobic')}>
                        <AerobicText isSelected={selectedTrain === 'aerobic'}>Aeróbico</AerobicText>
                    </AerobicButton>
                </SelectTraining>
                <CreateRoutineView>
                  <CreateRoutineButton>
                     <CreateRoutineText>Criar Rotina</CreateRoutineText>
                  </CreateRoutineButton>
                </CreateRoutineView>
                <Line></Line>
          </WhiteBox>
    </Container>
  );
};

export default TrainingLibraryScreen;
