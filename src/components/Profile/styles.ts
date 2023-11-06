import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const ProfileContainer = styled.View`
  flex-direction: column;
  margin-top: 50px;
`;
export const ProfilePicture = styled.View`
  justify-content: center;
  align-self: center;
  width: 80px;
  height: 80px;
  border-radius: 25px;
  background-color: '#e5effa';
`;
export const ProfileLabelContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const ProfileName = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  font-size: 15px;
`;
export const EditProfile = styled.TouchableOpacity`
  margin-top: 5px;
`;
export const NavigationLabelsContainer = styled.View`
  margin-top: 40px;
`;
export const NavigationLabel = styled.TouchableOpacity`
  width: 100%;
  margin-left: 50px;
  margin-bottom: 30px;
  flex-direction: row;
`;
export const NavigationText = styled.Text`
  color: #8b0000;
  font-size: 15px;
  margin-left: 10px;
`;
export const NavigationButton = styled.TouchableOpacity``;
