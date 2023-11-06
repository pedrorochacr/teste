import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BackIcon from "../../assets/backIcon.svg" 

import {
    BackButtonView,
    GoBackText,
  } from './styles';


const BackButton =() => {
    const navigation = useNavigation()

   return(
          <BackButtonView onPress={()=>navigation.goBack()}>
              <BackIcon/>
              <GoBackText>Voltar</GoBackText>
          </BackButtonView>
  );
};

export default BackButton;
