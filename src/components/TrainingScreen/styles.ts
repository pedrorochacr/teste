import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: black;
  height: 100%;
`;
export const RoutineDetail = styled.TouchableOpacity`
  flex-direction: row;
`
export const IconContainer = styled.View`
  margin-top: 10px;
  margin-left: 10px;
`;
export const DescriptionText = styled.Text`
  font-size: 14px;
  color: black;
`;
export const TitleText = styled.Text`
  font-size: 17px;
  color: black;
  font-weight: bold;
  text-align: center;
`;
export const DateText = styled.Text`
  font-size: 17px;
  color: black;
`;
export const TextContainer = styled.View`
  gap: 5px;
  display: flex;
  margin-top: 30px;
  margin-left: 20px;
  width: 60%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
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

export const GoBackText = styled.Text`
  font-size: 16px;
  color: white;
  margin-top: 3px;
  margin-left: -8px;
`;

export const Rectangle = styled.View`
  background-color: #f0f0f0;
  width: 350px;
  height: 700px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
`;
export const StudentHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-self: self-start;
  padding-left: 6%;
  align-items: center;
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

export const WhiteBox = styled.View`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 88%;
  height: 70%;
  border-radius: 10px;
  margin: 5%;
`;

export const RoutineButton = styled.TouchableOpacity`
  width: 95%;
  margin-top: 1%;
  height: 40px;
  border-radius: 12px;
  background-color: ${props => (props.isSelected ? '#ba0e09' : '#fff')};
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const RoutineCreated = styled.TouchableOpacity`
  flex-direction: row;
`;

export const AerobicButton = styled.TouchableOpacity`
  width: 95%;
  margin-top: 1%;
  height: 40px;
  border-radius: 12px;
  background-color: ${props => (props.isSelected ? '#ba0e09' : '#fff')};
  align-items: center;
  display: flex;
  justify-content: center;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
`;

export const CreateRoutineView = styled.View`
  display: flex;
  align-self: flex-start;
  margin-top: 7%;
  margin-left: 5%;
`;
export const CreateRoutineButton = styled.TouchableOpacity`
  background-color: black;
  width: 100px;
  align-items: center;
  justify-content: center;
  height: 35px;
  border-radius: 5px;
`;
export const CreateRoutineText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;
export const Line = styled.View`
  align-self: center;
  margin-top: 5%;
  width: 90%;
  border-bottom-width: 1px;
  border-bottom-color: #8f8d8d;
`;
export const SelectTraining = styled.View`
  padding-top: 3%;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TrainText = styled.Text`
  color: ${props => (props.isSelected ? '#fff' : 'black')};
  align-self: center;
  font-size: 15px;
  font-weight: 300;
`;
export const AerobicText = styled.Text`
  color: ${props => (props.isSelected ? '#fff' : 'black')};
  align-self: center;
  font-size: 15px;
  font-weight: 300;
`;




export const RoutineView = styled.View`
  flex-direction: row;
`;
export const BodyIconView = styled.View`
  background-color: #ba0e09;
  height: 10%;
  justify-content: center;
`;
