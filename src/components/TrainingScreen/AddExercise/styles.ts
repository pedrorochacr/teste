import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

export const PlusIcons = styled.TouchableOpacity`
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

export const SearchBarContainer = styled.View`
  padding: 16px;
`;

export const RegisterText = styled.Text`
  font-size: 23px;
  color: white;
  margin-bottom: 19px;
`;

export const BackButtonView = styled.View`
  align-self: flex-start;
`;
export const ExerciseContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
`;
export const ExerciseTypeContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  border-radius: 10px;
  background-color: #ba0e09; /* Cor de fundo vermelho pastel */
  justify-content: center;
  align-items: center;
  width: 150px;
  margin-bottom: 20px;
  height: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Efeito de sombra */
`;

export const ExerciseTypeText = styled.Text`
  font-size: 20px;
  color: white;
`;

export const ExercisesTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: flex-start;
`;

export const ExercisesOptions = styled.Text`
  font-size: 20px;
  margin-left: 30px;
  font-weight: medium;
`;

export const Line = styled.View`
  margin: auto;
  width: 95%;
  border-bottom-width: 1px;
  border-bottom-color: #fb605b;
`;

export const Rectangle = styled.View`
  background-color: #f0f0f0;
  padding-top: 15px;
  width: 380px;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  border-radius: 7px;
`;

export const ModalInter = styled.View`
  background-color: white;
  padding: 20px;
  margin: 5px;
  justify-content: center;
  height: 100%;
  border-radius: 20px;
`;
