import styled from 'styled-components/native';

export const StudentHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-self: self-start;
  padding-left: 6%;
  align-items: center;
`;

export const StudentImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 80px;
  margin-right: 10px;
`;

export const StudentNameContainer = styled.View`
  width: 100%;
  flex: 1;
`;
export const StudentName = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;
