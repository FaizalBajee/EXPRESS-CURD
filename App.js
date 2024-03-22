import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Contact from './src/Contact';
import AddContact from './src/AddContact';
import EditContact from './src/EditContact';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="contact"
          component={Contact}
          options={{title: ''}}
        />
        <Stack.Screen name="add" component={AddContact} options={{title: ''}}/>
        <Stack.Screen name="edit" component={EditContact} options={{title: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
