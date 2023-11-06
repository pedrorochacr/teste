import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: black;
`;
export const StudentHeaderView = styled.View`
  padding-left: 20px;
  padding-top: 10px;
`;
export const StudentHeaderName = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: 300;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonTreino = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  margin-right: 25px;
  background-color: #ed2e28;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  color: white;
  font-weight: bold;
  text-align: center;
`;
export const ExerciseContainer = styled.View`
  flex-direction: column;
`;

export const TrainingDetails = styled.View`
  align-items: center;
  padding-top: 20px;
  margin-bottom: 50px;
`;
export const ArrowButton = styled.TouchableOpacity``;

export const WhiteArea = styled.View`
  background-color: white;
  height: 80%;
`;
export const TrainingNameView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const TrainingNameTExt = styled.Text`
  margin-left: 20px;
  color: white;
  font-size: 22px;
  font-weight: bold;
`;
export const Section1 = styled.View`
  background-color: black;
  height: 100px;
`;

export const Section2 = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Section3 = styled.View`
  gap: 3px;
  margin-top: 20px;
  margin-left: 20px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Section4 = styled.View`
  gap: 3px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  background-color: #d1dce8;
`;

export const StudentImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 80px;
  margin-left: 30px;
`;

export const TrainingTitle = styled.Text`
  margin-left: 35px;
  font-size: 20px;
  color: white;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const ButtonBack = styled.Text`
  font-size: 15px;
  color: white;
  font-weight: regular;
  flex-wrap: wrap;
`;

export const TrainingView = styled.View`
  margin-top: 20px;
`;
export const ExerciseView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  height: 50px;
  border-bottom-width: 0.3px;
  border-bottom-color: black;
`;
export const TrainingData = styled.View`
  flex-direction: column;
  width: 100%;
`;
export const EditButton = styled.TouchableOpacity`
  padding-top: 7px;
`;
export const GrayTextInput = styled.TextInput`
  background-color: ${({ isEditing }) => (isEditing ? '#F0F0F0' : '#CCCCCC')};
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
`;
export const TrainingDataTitle = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: bold;
`;
export const TrainingDataTitleView = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 60px;
  margin: 11px 0px;
`;
export const TrainingDataInputsView = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;
export const SeriesWeightView = styled.View`
  flex-direction: row;
  gap: 7px;
`;
export const IntervalEditView = styled.View`
  flex-direction: row;
  padding-left: 10px;
  gap: 7px;
`;
export const VideoContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ExerciseTextTitle = styled.Text`
  color: black;
  font-weight: 300;
  font-size: 15px;
`;

export const ExerciseTextDescription = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 15px;
`;

export const ExerciseTextInput = styled.Text`
  color: black;
  font-weight: regular;
  font-size: 15px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  gap: 7px;
`;
