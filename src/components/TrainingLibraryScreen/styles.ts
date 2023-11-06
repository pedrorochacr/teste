import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
  justify-content: start;
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
  height: 75%;
  padding: 4px;
  border-radius: 10px;
  margin: 5%;
`;

export const RoutineButton = styled.TouchableOpacity`
    width: 95%;
    margin-top: 1%;
    height: 40px;
    border-radius: 12px;
    background-color: ${(props) => (props.isSelected ? '#ba0e09' : '#fff')};
    align-items: center;
    display: flex;
    justify-content: center;
`;


export const AerobicButton = styled.TouchableOpacity`
  width: 95%;
  margin-top: 1%;
  height: 40px;
  border-radius: 12px;
  background-color: ${(props) => (props.isSelected ? '#ba0e09' : '#fff')};
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
  margin: auto;
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
`

export const TrainText= styled.Text`
    color: ${(props) => (props.isSelected ? '#fff' : 'black')};
    align-self: center;
    font-size: 15px;
    font-weight: 300;

`
export const AerobicText= styled.Text`
    color: ${(props) => (props.isSelected ? '#fff' : 'black')};
    align-self: center;
    font-size: 15px;
    font-weight: 300;

`

export const TitleArea = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 12px;
    margin-bottom: 12px;
    justify-content: space-between;
`;
export const TitleLibrary = styled.Text`
    display: flex;

    color: white;
    font-size: 23px;
    margin-left: 25px;
    font-weight: 500;
`;
export const AddTrainingButton = styled.TouchableOpacity`
    margin-right: 29px;
    background-color: white;
    border-radius: 5px;
    width: 78px;
    height: 23px;
    margin-top: 4px;
    justify-content: center;

`;

export const AddTrainingText = styled.Text`
    color: black;
    align-self: center;
    font-size: 11px;
    font-weight: bold;
`;