import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/Home/index';
import RegistrationTrainer from './src/components/RegistrationTrainer/index';
import RegistrationStudent from './src/components/RegistrationStudent/index';
import HomeStudent from './src/Studentscomponents/HomeStudent/index';

import Toast from 'react-native-toast-message';

import Header from './src/components/Header/index';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { UserProvider } from './src/Context/UserContext';
import TrainingScreen from './src/components/TrainingScreen/index';
import CreateExercise from './src/components/ExerciseTypeLibrary/CreateExercise/index';
import CreateTypeScreen from './src/components/ExerciseTypeLibrary/Type/index';
import TrainingLibraryScreen from './src/components/TrainingLibraryScreen';
import TrainingStudentScreen from './src/Studentscomponents/TrainingScreen/index';
import TrainingDayStudentScreen from './src/Studentscomponents/TrainingDayScreen/index';
import CreateRoutineScreen from './src/components/TrainingScreen/CreateRoutineScreen';
import RoutineScreen from './src/components/TrainingScreen/RoutineScreen';
import CreateTrainingDayScreen from './src/components/TrainingScreen/CreateTrainingDayScreen';
import TrainingDayTeacherScreen from './src/components/TrainingScreen/TrainingDayScreen';
import AddExerciseScreen from './src/components/TrainingScreen/AddExercise';
import ExerciseTypeLibraryScreen from './src/components/ExerciseTypeLibrary/index';
import RoutineStudentScreen from './src/Studentscomponents/RoutineScreen';
import SignIn from './src/components/SignIn';

const Stack = createStackNavigator();

export default function App() {
  const isReadyRef = React.createRef();
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <UserProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}
      >
        <Stack.Navigator
          screenOptions={{
            header: () => {
              return <Header />;
            },
          }}
        >
          <Stack.Screen
            name="SingIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Página Inicial' }}
          />
          <Stack.Screen
            name="RegistrationTrainer"
            component={RegistrationTrainer}
            options={{ title: 'Registrar Treinador' }}
          />
          <Stack.Screen
            name="RegistrationStudent"
            component={RegistrationStudent}
            options={{ title: 'Registrar Estudante' }}
          />
          <Stack.Screen
            name="RoutineStudentScreen"
            component={RoutineStudentScreen}
          />
          <Stack.Screen name="Treinos" component={TrainingScreen} />
          <Stack.Screen
            name="TrainingLibray"
            component={TrainingLibraryScreen}
          />
          <Stack.Screen
            name="TrainingStudentScreen"
            component={TrainingStudentScreen}
          />
          <Stack.Screen
            name="TrainingDayStudentScreen"
            component={TrainingDayStudentScreen}
          />
          <Stack.Screen
            name="CreateRoutineScreen"
            component={CreateRoutineScreen}
          />
          <Stack.Screen
            name="CreateTrainingDayScreen"
            component={CreateTrainingDayScreen}
          />
          <Stack.Screen
            name="TrainingDayTeacherScreen"
            component={TrainingDayTeacherScreen}
          />
          <Stack.Screen
            name="AddExerciseScreen"
            component={AddExerciseScreen}
          />
          <Stack.Screen name="CreateExercise" component={CreateExercise} />
          <Stack.Screen name="CreateTypeScreen" component={CreateTypeScreen} />
          <Stack.Screen
            name="ExerciseTypeLibraryScreen"
            component={ExerciseTypeLibraryScreen}
          />

          <Stack.Screen name="RoutineScreen" component={RoutineScreen} />
          <Stack.Screen name="HomeStudent" component={HomeStudent} />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </UserProvider>
  );
}
