import React from 'react';

import {
  StudentHeader,
  StudentImage,
  StudentName,
  StudentNameContainer,
} from './styles';
import Student from '../../Types/student';

const students = {
  id: 1,
  name: 'João',
  photo:
    'https:/.freepik.com/vetores-premium/icone-da-conta-icone-do-usuario-graficos-vetoriais_292645-552.jpg?w=740',
  whatsapp: '+55 33 8893-7320', // Adicione o atributo "whatsapp"
};
const StudentNameHeader: React.FC<{ student: Student }> = ({ student }) => {
  return (
    <StudentHeader>
      <StudentImage source={{ uri: students.photo }}></StudentImage>
      <StudentNameContainer>
        <StudentName>
          {student?.firstname} {student?.lastname}
        </StudentName>
      </StudentNameContainer>
    </StudentHeader>
  );
};

export default StudentNameHeader;
