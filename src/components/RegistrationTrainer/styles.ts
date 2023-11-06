import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
  justify-content: start;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ba0e09;
`;

export const InputContainer = styled.View`
  width: 90%;
  margin: 8px 0;
`;

export const InputLabel = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
  color: #000;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 60px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 5px;
  padding: 8px;
`;

export const RegisterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  height: 50px;
  margin: 3%;
  font-size: 16px;
  border-radius: 5px;
  background-color: #ba0e09;
`;

export const RegisterButtonText = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
  color: #fff;
`;

export const RegisterStudentText = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
  color: #000;
`;

export const RegisterStudentTextConatainer = styled.View`
  width: 80%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  left: 16px;
`;

export const GoBackText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ba0e09;
`;
export const Rectangle = styled.View`
  background-color: #f0f0f0;
  width: 350px;
  height: 700px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
`;

export const LogoImage = styled.Image`
  width: 300px;
  height: 100px;
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
  border-width: 1px;
  border-color: black;
  justify-content: center;
  align-items: center;
`;

export const InnerCircle = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ba0e09;
`;

export const RoleText = styled.Text`
  font-size: 16px;
  margin-left: 5%;
  font-weight: bold;
`;
