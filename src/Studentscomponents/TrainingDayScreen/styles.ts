import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
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

export const ExerciseContainer = styled.View`
  padding: 20px;
  margin-top: 20px;
  display: flex;
  min-height: 200px;
  width: 95%;
  border-width: 1px;
  border-color: black;
  border-radius: 10px;
`;

export const VideoContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextExerciseContainer = styled.View``;
export const ExerciseTextTitle = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 18px;
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
