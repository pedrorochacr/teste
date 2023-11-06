import React, { useEffect, useState } from 'react';
import {
  Container,
  OptionsButton,
  OptionsButtonText,
  Section1,
  Section2,
  Section3,
  SectionImage,
  StudentImage,
  StudentName,
  StudentNameContainer,
  WhatsAppIcon,
  ButtonContainer,
  DataContainer,
  SquareButton,
  SquareButtonText,
  ContainerSquares,
  LogoImage,
  FontInputTitle,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../Context/UserContext';
import Nutrition from '../../assets/nutrition.svg';
import Progress from '../../assets/progress.svg';

const HomeStudent = () => {
  const [notes, setNotes] = useState('');
  const { user } = useUser();

  const student = {
    id: 1,
    name: 'Mariana',
    lastname: 'Gurgel',
    photo:
      'https:/.freepik.com/vetores-premium/icone-da-conta-icone-do-usuario-graficos-vetoriais_292645-552.jpg?w=740',
    whatsapp: '+55 33 8893-7320',
  };
  const navigation = useNavigation();

  const handleTreino = async () => {
    navigation.navigate('TrainingStudentScreen');
    return;
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={50}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{}}
    >
      <Container>
        <Section1>
          <SectionImage>
            <StudentImage source={{ uri: student.photo }}></StudentImage>
          </SectionImage>
          <DataContainer>
            <StudentNameContainer>
              <StudentName>{user?.firstname}</StudentName>
            </StudentNameContainer>
            <ButtonContainer>
              <WhatsAppIcon>
                <Icon name="whatsapp" size={40} color="white" />
              </WhatsAppIcon>
              <OptionsButton>
                <OptionsButtonText>Opções</OptionsButtonText>
              </OptionsButton>
            </ButtonContainer>
          </DataContainer>
        </Section1>

        <Section2>
          <ContainerSquares>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SquareButton onPress={handleTreino}>
                <LogoImage
                  style={{ resizeMode: 'contain', flex: 1 }}
                  source={require('../../assets/logos/logoTreino.png')}
                />
              </SquareButton>
              <SquareButton>
                <SquareButtonText>Progresso</SquareButtonText>
                <Progress width={40} height={40}></Progress>
              </SquareButton>
            </View>
            <SquareButton>
              <SquareButtonText>Nutrição </SquareButtonText>
              <Nutrition width={40} height={40}></Nutrition>
            </SquareButton>
          </ContainerSquares>
        </Section2>

        <Section3>
          <FontInputTitle>Anatoções</FontInputTitle>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: 'gray',
              padding: 10,
              width: '90%',
              height: '75%',
            }}
            multiline
            numberOfLines={4}
            value={notes}
            onChangeText={text => setNotes(text)}
          />
        </Section3>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default HomeStudent;
