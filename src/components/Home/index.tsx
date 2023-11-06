import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import StudentActions from '../StudentActions';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeedBackSvg from '../../assets/feedback.svg';
import { useUser } from '../../Context/UserContext';
import ProfileScreen from '../Profile';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const { user } = useUser();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backgroundUpperHalf}></View>
      <View style={styles.backgroundLowerHalf}></View>
      <View style={styles.userContainer}>
        <View style={styles.profilePicture}>
          <Image
            source={{
              uri: 'https:/.freepik.com/fotos-gratis/retrato-de-homem-feliz-e-sorridente_23-2149022620.jpg',
            }}
            style={{ width: '100%', height: '100%', borderRadius: 50 }}
          />
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userName}>Olá, {user?.firstname}!</Text>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.buttonTextEdit}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonContainerText}>
          <TouchableOpacity style={styles.button}>
            <Icon name="whatsapp" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Whatsapp</Text>
        </View>
        <View style={styles.buttonContainerText}>
          <TouchableOpacity style={styles.button}>
            <FeedBackSvg width={30} height={30} color="white"></FeedBackSvg>
          </TouchableOpacity>
          <Text style={styles.buttonText}>Feedback</Text>
        </View>
        <View style={styles.buttonContainerText}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TrainingLibray')}
            style={styles.button}
          >
            <Icon name="list" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Treinos</Text>
        </View>
        <View style={styles.buttonContainerText}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ExerciseTypeLibraryScreen')}
            style={styles.button}
          >
            <Icon name="check" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Exercícios</Text>
        </View>
      </View>
      <Text style={styles.buttonTextJustDoIt}>Just Do It'</Text>
      <StudentActions></StudentActions>
      <View style={styles.userContainer}>
        <ProfileScreen></ProfileScreen>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F0F0',
    // Cor cinza claro do container
  },
  backgroundUpperHalf: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 400,
    backgroundColor: 'black', // Cor vinho
  },
  backgroundLowerHalf: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
  },

  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e5effa', // Cor de fundo temporária
    marginRight: 15,
  },
  buttonTextJustDoIt: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
    marginTop: 15,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f8f6f6',
  },
  userProfileInfo: {
    fontSize: 16,
    color: '#f8f6f6',
    marginBottom: 10,
  },
  editProfileButton: {},
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginRight: 10,
    marginTop: 3,
  },
  buttonTextEdit: {
    color: 'white',
    fontSize: 11,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 50,
  },
  buttonContainerText: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '27%',
  },
  button: {
    backgroundColor: '#bd3e3e',
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default Home;
