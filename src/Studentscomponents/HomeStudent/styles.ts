import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Section1 = styled.View`
  flex-direction: row;
  background-color: black;
  height: 150px;
`;

export const ContainerSquares = styled.View`
  justify-content: center;
`;
export const Section2 = styled.View`
  height: 300px;
  justify-content: center;
  align-items: center;
`;
export const LogoImage = styled.Image`
  width: 400px;
  height: 150px;
`;
export const Section3 = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export const SectionImage = styled.View`
  justify-content: center;
  height: 100%;
`;

export const StudentImage = styled.Image`
  width: 95px;
  height: 95px;
  border-radius: 80px;
  margin-left: 30px;
`;

export const StudentNameContainer = styled.View`
  width: 100%;
  justify-content: center;
`;

export const StudentName = styled.Text`
  font-size: 33px;
  color: white;
  margin-bottom: 6px;
  margin-left: -11px;
  font-weight: 400;
  flex-wrap: wrap;
`;

export const FontInputTitle = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const WhatsAppIcon = styled.View`
  width: 50px;
`;

export const OptionsButton = styled.TouchableOpacity`
  width: 80px;
  background-color: white;
  border-radius: 15px;
  padding: 5px 10px;
`;

export const OptionsButtonText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: 400;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const DataContainer = styled.View`
  margin-left: 35px;
  align-items: center;
  justify-content: center;
`;

export const SquareButton = styled.TouchableOpacity`
  gap: 10px;
  width: 150px;
  height: 120px;
  background-color: #ba0e10;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const SquareButtonText = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;
