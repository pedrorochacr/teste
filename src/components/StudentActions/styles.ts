// style.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const WhiteBox = styled.View`
  background-color: white;
  width: 100%;
  height: 90%;
  border-radius: 10px;
  margin: 5%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

export const ActiveStudentsText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const AddStudentButton = styled.TouchableOpacity`
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const AddStudentText = styled.Text`
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
`;
export const SearchInput = styled.TextInput`
  width: 90%;
  margin: 5%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 6;
  background-color: white;
`;

export const StudentItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const StudentImage = styled.Image`
  width: 90px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

export const StudentName = styled.Text`
  font-size: 16px;
`;

export const NameAndIconWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WhatsAppIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
