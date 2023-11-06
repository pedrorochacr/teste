import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ba0e09;
`;

export const InfomationText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

export const TypeText = styled.Text`
  font-size: 14px;
  margin-bottom: 11px;
  font-weight: 500;
  color: black;
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
  height: 40px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 5px;
  padding: 8px;
`;
export const InputBox = styled.TextInput`
  width: 100%;
  height: 120px;
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
  width: 40%;
  height: 40px;
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

export const BackButtonView = styled.View`
  align-self: flex-start;
`;

export const GoBackText = styled.Text`
  font-size: 16px;
  color: white;
  margin-top: 3px;
  margin-left: -8px;
`;
export const Rectangle = styled.View`
  background-color: #f0f0f0;
  padding-top: 15px;
  width: 380px;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 7px;
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

export const DeleteButton = styled.TouchableOpacity`
  background-color: #ba0e09;
  padding-vertical: 10px;
  padding-horizontal: 40px;
  border-radius: 10px;
`;

export const EditButton = styled.TouchableOpacity`
  background-color: grey;
  padding-vertical: 10px;
  padding-horizontal: 40px;
  border-radius: 10px;
`;

export const CloseModal = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 5px;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const ContainerModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InternModal = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  position: relative;
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

export const EditInput = styled.TextInput`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: black;
  margin-bottom: 20px;
`;

export const InnerCircle = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ba0e09;
`;
export const RegisterText = styled.Text`
  font-size: 23px;
  color: white;
  margin-bottom: 19px;
`;

export const RoleText = styled.Text`
  font-size: 16px;
  margin-left: 5%;
  font-weight: bold;
`;

export const SelectContainer = styled.View`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SelectText = styled.Text`
  font-size: 16px;
`;
