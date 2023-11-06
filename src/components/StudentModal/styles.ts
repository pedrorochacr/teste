// style.ts
import styled from 'styled-components/native';
export const SquareButtonsContainer = styled.TouchableOpacity`
  width: 33%;
  height: 92%;
  padding: 8px;
  align-items: center;
  text-align: center;
`;

export const SquareButtons = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SquareButtonsText = styled.Text`
  font-size: 16px;
  color: black;
  text-align-vertical: center;
  text-align: center;
`;

export const ModalContainer = styled.View`
  background-color: white;
  width: 87%;
  height: 38%;
  border-radius: 10px;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
  justify-content: center;
  align-self: center;
`;

export const StudentButtons = styled.TouchableOpacity`
  width: 60%;
  height: 60%;
  background-color: #ba0e10;
  margin: 5px;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const ButtonRow = styled.View`
  flex: 0.4;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
