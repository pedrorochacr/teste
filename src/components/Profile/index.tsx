import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  EditProfile,
  NavigationLabel,
  NavigationLabelsContainer,
  NavigationText,
  ProfileContainer,
  ProfileLabelContainer,
  ProfileName,
  ProfilePicture,
} from './styles';

const ProfileScreen = () => {
  return (
    <Container>
      <ProfileContainer>
        <ProfilePicture>
          <Image
            source={{
              uri: 'https:/.freepik.com/fotos-gratis/retrato-de-homem-feliz-e-sorridente_23-2149022620.jpg',
            }}
            style={{ width: '100%', height: '100%', borderRadius: 50 }}
          />
        </ProfilePicture>

        <ProfileLabelContainer>
          <ProfileName>Hallison Henrique</ProfileName>
          <EditProfile>
            <Text>Editar Perfil</Text>
          </EditProfile>
        </ProfileLabelContainer>
      </ProfileContainer>

      <NavigationLabelsContainer>
        <NavigationLabel>
          <Icon name="whatsapp" size={20} color="#8B0000" />
          <NavigationText>Gerenciador de Alunos</NavigationText>
        </NavigationLabel>
        <NavigationLabel>
          <Icon name="whatsapp" size={20} color="#8B0000" />
          <NavigationText>Biblioteca de Treinos</NavigationText>
        </NavigationLabel>
        <NavigationLabel>
          <Icon name="whatsapp" size={20} color="#8B0000" />
          <NavigationText>Biblioteca de Exercicios</NavigationText>
        </NavigationLabel>
        <NavigationLabel>
          <Icon name="whatsapp" size={20} color="#8B0000" />
          <NavigationText>Grupo de Desafios</NavigationText>
        </NavigationLabel>
        <NavigationLabel>
          <Icon name="whatsapp" size={20} color="#8B0000" />
          <NavigationText>Enviar Notificações</NavigationText>
        </NavigationLabel>
      </NavigationLabelsContainer>
    </Container>
  );
};

export default ProfileScreen;
