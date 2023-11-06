import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
  justify-content: start;
  background-color: black;
`;

export const LogoImage = styled.Image`
  display: flex;
  align-items: flex-start;
  width: 600px;
  height: 200px;
`;

export const Logo = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 60px;
  margin: 3%;
  font-size: 16px;
  border-radius: 5px;
  background-color: #f0f0f0;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding-left: 10px;
  font-size: 16px;
`;

export const LoginButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 50px;
  margin: 3%;
  font-size: 16px;
  border-radius: 5px;
  background-color: #ba0e09;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #ba0e09;
  width: 100%;
  border-radius: 5px;
`;

export const RegistrerButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 5px;
`;

export const LoginText = styled.Text`
  font-size: 16px;
  color: white;
  text-align-vertical: center;
  text-align: center;
`;

export const RegistrerText = styled.Text`
  font-size: 16px;
  color: black;
  text-align-vertical: center;
  text-align: center;
  color: #f0f0f0;
`;

export const RoleText = styled.Text`
  font-size: 16px;
  margin-left: 5%;
  font-weight: bold;
  color: #f0f0f0;
`;

export const Rectangle = styled.View`
  width: 350px;
  height: 600px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 10px;
`;

export const UserBackground = styled.View`
  background-color: #000;
  border-radius: 10px;
  justify-content: center;
`;

export const UserTypeButtonsContainer = styled.View`
  flex-direction: row; /* Coloca os botões lado a lado */
  margin-bottom: 10px;
`;

export const UserTypeButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px; /* Espaçamento entre os botões */
`;

export const Circle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #f0f0f0;
  justify-content: center;
  align-items: center;
`;

export const SelectedCircle = styled.View`
  background-color: blue;
`;

export const InnerCircle = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ba0e09;
`;
