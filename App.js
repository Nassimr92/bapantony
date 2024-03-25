import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
          },
        ]}
      >
        <View style={{ flex: 0.5, borderRadius: 15 }}>
          <LinearGradient
            colors={["rgba(246, 116, 162, 1)", "rgba(246, 116, 162, 0.2)"]}
            style={styles.linearGradient}
          >
            <Text style={styles.buttonText}>Sign in withh Facebook</Text>
          </LinearGradient>
        </View>

        <View
          style={[
            styles.containerMiddle,
            {
              flexDirection: "row",
            },
          ]}
        >
          <View style={[styles.containerInner, { flexDirection: "column" }]}>
            <View style={{ flex: 2, borderRadius: 15 }}>
              <LinearGradient
                colors={["rgba(246, 116, 162, 1)", "rgba(246, 116, 162, 0.2)"]}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>Sign in with Facebook</Text>
              </LinearGradient>
            </View>
            <View style={{ flex: 3, borderRadius: 15 }}>
              <LinearGradient
                colors={["rgba(246, 116, 162, 1)", "rgba(246, 116, 162, 0.2)"]}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>Sign in with Facebook</Text>
              </LinearGradient>
            </View>
          </View>

          <View style={[styles.containerInner, { flexDirection: "column" }]}>
            <View style={{ flex: 3, borderRadius: 15 }}>
              <LinearGradient
                colors={["rgba(246, 116, 162, 1)", "rgba(246, 116, 162, 0.2)"]}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>Sign in with Facebook</Text>
              </LinearGradient>
            </View>
            <View style={{ flex: 2, borderRadius: 15 }}>
              <LinearGradient
                colors={["rgba(246, 116, 162, 1)", "rgba(246, 116, 162, 0.2)"]}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>Sign in with Facebook</Text>
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Sondage() {
  const [optionOneVotes, setOptionOneVotes] = useState(0);
  const [optionTwoVotes, setOptionTwoVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const voteOptionOne = () => {
    if (!hasVoted) {
      setOptionOneVotes(optionOneVotes + 1);
      setHasVoted(true);
      Alert.alert('Merci pour votre vote!', 'Votre vote a été enregistré.');
    } else {
      Alert.alert('Vous avez déjà voté!', 'Vous ne pouvez voter qu\'une seule fois.');
    }
  };

  const voteOptionTwo = () => {
    if (!hasVoted) {
      setOptionTwoVotes(optionTwoVotes + 1);
      setHasVoted(true);
      Alert.alert('Merci pour votre vote!', 'Votre vote a été enregistré.');
    } else {
      Alert.alert('Vous avez déjà voté!', 'Vous ne pouvez voter qu\'une seule fois.');
    }
  };

  return (
    <View style={styles.sondageContainer}>
      <Text style={styles.sondageTitle}>Sondage</Text>
      <TouchableOpacity style={styles.sondageButton} onPress={voteOptionOne}>
        <Text style={styles.sondageButtonText}>Option 1</Text>
      </TouchableOpacity>
      <Text style={styles.voteText}>Votes: {optionOneVotes}</Text>
      <TouchableOpacity style={styles.sondageButton} onPress={voteOptionTwo}>
        <Text style={styles.sondageButtonText}>Option 2</Text>
      </TouchableOpacity>
      <Text style={styles.voteText}>Votes: {optionTwoVotes}</Text>
    </View>
  );
}

function Projets() {
  return (
    <View>
      <Text>Projets</Text>
    </View>
  );
}

function Agenda() {
  const [programs, setPrograms] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const addProgram = () => {
    const newProgram = { id: Math.random().toString(), title: 'New Program' };
    setPrograms(currentPrograms => [...currentPrograms, newProgram]);
  };

  const editProgram = (id) => {
    const updatedPrograms = programs.map(program => {
      if (program.id === id) {
        return { ...program, title: newTitle };
      }
      return program;
    });
    setPrograms(updatedPrograms);
    setEditingId(null); // Reset editing state
    setNewTitle(''); // Reset new title input
  };

  const startEditing = (id, currentTitle) => {
    setEditingId(id);
    setNewTitle(currentTitle);
  };

  const deleteProgram = (id) => {
    setPrograms(currentPrograms => currentPrograms.filter(program => program.id !== id));
  };

  return (
    <View>
      
      <Button title="Add Programe" onPress={addProgram} />
      {programs.map(program => (
        <View key={program.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
          <Text style={{ flex: 1 }}>{program.title}</Text>
          {editingId === program.id ? (
            <>
              <TextInput
                value={newTitle}
                onChangeText={setNewTitle}
                style={{ borderWidth: 1, borderColor: 'gray', flex: 1, marginRight: 5 }}
              />
              <Button title="Save" onPress={() => editProgram(program.id)} />
            </>
          ) : (
            <Button title="Edit" onPress={() => startEditing(program.id, program.title)} />
          )}
          <Button title="Delete" onPress={() => deleteProgram(program.id)} color="#ff0000" />
        </View>
      ))}
    </View>
  );
}



function Profil() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null);

  const handleSaveProfile = () => {
    // Ici vous pouvez ajouter la logique pour sauvegarder les informations du profil
    // par exemple, en les envoyant à une API ou en les stockant localement
    Alert.alert('Profil sauvegardé!', 'Les informations de votre profil ont été sauvegardées.');
  };

  const handleChooseImage = () => {
    // Ici vous pouvez ajouter la logique pour choisir une image depuis la galerie de l'appareil
    // Par exemple, en utilisant la librairie React Native Image Picker
    // https://github.com/react-native-image-picker/react-native-image-picker
    Alert.alert('Choisir une image', 'Fonctionnalité non implémentée dans cette démo.');
  };

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileTitle}>Profil</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Prénom:</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Entrez votre prénom"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nom:</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Entrez votre nom"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Bio:</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={bio}
          onChangeText={setBio}
          placeholder="Parlez de vous..."
          multiline={true}
        />
      </View>
      <TouchableOpacity style={styles.chooseImageButton} onPress={handleChooseImage}>
        <Text style={styles.chooseImageText}>Choisir une image</Text>
      </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} style={styles.profileImage} />
      )}
      <Button title="Enregistrer" onPress={handleSaveProfile} />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>🏠</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Sondage" 
          component={Sondage} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>📊</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Projets" 
          component={Projets} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>💼</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Agenda" 
          component={Agenda} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>📅</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Profil" 
          component={Profil} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>👤</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    gap: 10,
  },
  containerMiddle: {
    flex: 1,
    gap: 10,
  },
  containerInner: {
    flex: 1,
    gap: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    opacity: 0.8,
  },
  sondageContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sondageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sondageButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  sondageButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  voteText: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
  agendaContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  agendaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  programItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  programTitle: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
    marginRight: 5,
    padding: 8,
    borderRadius: 5,
  },
  buttonEdit: {
    marginRight: 5,
    backgroundColor: '#007bff',
  },
  buttonDelete: {
    backgroundColor: '#ff0000',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});


