import React, { useState, useEffect } from 'react';
import { ScrollView, Linking } from 'react-native';
import {
  Container,
  WhiteBox,
  ActiveStudentsText,
  AddStudentButton,
  Header,
  SearchInput,
  StudentItem,
  StudentName,
  NameAndIconWrapper,
  WhatsAppIcon,
  AddStudentText,
  StudentImage,
} from './styles';
import StudentModal from '../StudentModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import removeAccents from 'remove-accents';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../Context/UserContext';
import { API } from '../../services/api';
import UserCircle from '../../assets/userCircle.svg';

import Student from '../../Types/student'; // Substitua com o caminho real

export default function StudentActions() {
  const [modalVisible, setModalVisible] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null); // State to store selected student id

  const { user } = useUser();
  const navigation = useNavigation();
  // ...

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await API.get(
          `/user/getStudents?idTeacher=${user?.id}`,
        );
        setStudents(response.students);

        //console.log('data: ', response.students);
      } catch (error) {
        console.error('Erro ao buscar estudantes:', error);
      }
    };

    fetchStudents();
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openWhatsApp = (whatsappNumber: string) => {
    const url = `http://api.whatsapp.com/send?phone=${whatsappNumber}`;
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log('WhatsApp não está instalado.');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('Erro ao abrir o WhatsApp: ', err));
  };

  const [searchValue, setSearchValue] = useState('');
  const normalizedSearchValue = removeAccents(searchValue.toLowerCase());
  const filteredStudents = students.filter(student => {
    const fullName = `${student.firstname} ${student.lastname}`;
    const normalizedFullName = removeAccents(fullName.toLowerCase());
    return normalizedFullName.includes(normalizedSearchValue);
  });

  return (
    <Container>
      <WhiteBox>
        <Header>
          <ActiveStudentsText>Alunos Ativos</ActiveStudentsText>
          <AddStudentButton
            onPress={() => navigation.navigate('RegistrationStudent')}
          >
            <AddStudentText>+ Aluno</AddStudentText>
          </AddStudentButton>
        </Header>
        <SearchInput
          placeholder="Pesquisar"
          value={searchValue}
          onChangeText={text => setSearchValue(text)}
        />
        <ScrollView>
          {filteredStudents.map(student => (
            <StudentItem
              key={student.id}
              onPress={() => {
                setSelectedStudentId(student.id); // Set the selected student id
                openModal();
              }}
            >
              <StudentImage
                source={{
                  uri: 'https:/.freepik.com/vetores-premium/icone-da-conta-icone-do-usuario-graficos-vetoriais_292645-552.jpg?w=740',
                }}
              />
              <NameAndIconWrapper>
                <StudentName>{`${student.firstname} ${student.lastname}`}</StudentName>
                <WhatsAppIcon>
                  <Icon
                    name="whatsapp"
                    size={30}
                    color="black"
                    onPress={() => openWhatsApp(student.phone)}
                  />
                </WhatsAppIcon>
              </NameAndIconWrapper>
            </StudentItem>
          ))}
        </ScrollView>
        {modalVisible && (
          <StudentModal closeModal={closeModal} idStudent={selectedStudentId} />
        )}
      </WhiteBox>
    </Container>
  );
}
