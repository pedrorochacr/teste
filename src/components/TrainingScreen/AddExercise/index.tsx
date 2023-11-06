import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import PlusRed from '../../../assets/plusRed.svg';

import {
  Container,
  Rectangle,
  RegisterText,
  BackButtonView,
  ExerciseTypeContainer,
  ExerciseTypeText,
  SearchBarContainer,
  ExerciseContainer,
  PlusIcons,
  ModalInter,
  ExercisesTitle,
  ExercisesOptions,
  Line,
} from './styles';
import BackButton from '../../BackButton';
import { API } from '../../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Input } from '../styles';
import { SearchInput } from '../../StudentActions/styles';

type ExerciseType = {
  id: number;
  nome: string;
};

const AddExerciseScreen = () => {
  const [name, setName] = useState('');
  const [types, setTypes] = useState<ExerciseType[]>([]);
  const [exercises, setExercises] = useState<any[]>();
  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);

  const route = useRoute();
  const { dayTrainingId } = route.params || {};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigation();

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const toggleExerciseSelection = (exerciseName: string) => {
    // Check if the exercise is already selected, and toggle its selection
    if (selectedExercises.includes(exerciseName)) {
      setSelectedExercises(
        selectedExercises.filter(name => name !== exerciseName),
      );
    } else {
      setSelectedExercises([...selectedExercises, exerciseName]);
    }
  };

  useEffect(() => {
    fetchTypes();
    //console.log(dayTrainingId);
  }, []);

  const addExerciseTraining = async (ExerciseId, ExerciseName) => {
    try {
      const data = {
        name: ExerciseName,
        id_exercise: ExerciseId,
        id_day_training: dayTrainingId,
      };
      console.log(data);
      const response = await API.post('/training/createTraining', data);
      navigate.goBack();
    } catch (error) {
      console.log('Catch: ', error);
    }
  };

  const fetchTypes = async () => {
    try {
      const response = await API.get('/type/getAllTypes');
      setTypes(response);
    } catch (error) {
      console.error('Erro ao buscar os tipos:', error);
    }
  };

  const getExercisesByIdType = async (typeId: number) => {
    try {
      const response = await API.get(
        `/exercise/getExercisesByIdType?idTipo=${typeId}`,
      );
      setExercises(response);
      console.log(response);
      setIsModalVisible(true);
    } catch (error) {
      console.error('Erro ao buscar os exercicios:', error);
    }
  };

  return (
    <Container>
      <BackButtonView>
        <BackButton />
      </BackButtonView>

      <RegisterText>Adicionar Exercício</RegisterText>

      <Rectangle>
        <ScrollView>
          {types
            .reduce((typePairs, type, index, array) => {
              if (index % 2 === 0) {
                const pair = [type, array[index + 1]];
                typePairs.push(pair);
              }
              return typePairs;
            }, [])
            .map((pair, rowIndex) => (
              <View
                key={rowIndex}
                style={{
                  flexDirection: 'row',
                  gap: 30,
                }}
              >
                {pair[0] && (
                  <ExerciseContainer key={pair[0].id}>
                    <ExerciseTypeContainer
                      onPress={() => getExercisesByIdType(pair[0].id)}
                    >
                      <ExerciseTypeText>{pair[0].nome}</ExerciseTypeText>
                    </ExerciseTypeContainer>
                  </ExerciseContainer>
                )}
                {pair[1] && (
                  <ExerciseContainer key={pair[1].id}>
                    <ExerciseTypeContainer
                      onPress={() => getExercisesByIdType(pair[1].id)}
                    >
                      <ExerciseTypeText>{pair[1].nome}</ExerciseTypeText>
                    </ExerciseTypeContainer>
                  </ExerciseContainer>
                )}
              </View>
            ))}
        </ScrollView>
      </Rectangle>

      <View>
        <Modal isVisible={isModalVisible}>
          <ModalInter>
            <ScrollView>
              <View style={{ width: '100%' }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <ExercisesTitle>Exercícios:</ExercisesTitle>
                  <Icon
                    name="times"
                    size={20}
                    color="black"
                    onPress={closeModal}
                  />
                </View>

                <SearchInput placeholder="Pesquisar Exercício" />
                {exercises?.map(exercise => (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <TouchableOpacity
                        key={exercise.id}
                        onPress={() => toggleExerciseSelection(exercise)}
                      >
                        <PlusRed width={50} height={80} />
                      </TouchableOpacity>
                      <ExercisesOptions style={{ fontSize: 20 }}>
                        {exercise.nome}
                      </ExercisesOptions>
                    </View>
                    <Line></Line>
                  </>
                ))}
              </View>
            </ScrollView>
          </ModalInter>
        </Modal>
      </View>
    </Container>
  );
};

export default AddExerciseScreen;
