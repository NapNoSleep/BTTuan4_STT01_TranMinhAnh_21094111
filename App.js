import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_01 from './screens/Screen_01';
import Screen_03 from './screens/Screen_03';
import Screen_04 from './screens/Screen_04';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen_01">
        <Stack.Screen name="Screen_01" component={Screen_01} options={{ title: 'Login' }} />
        <Stack.Screen name="Screen_03" component={Screen_03} options={{ title: 'Forgot Password' }} />
        <Stack.Screen name="Screen_04" component={Screen_04} options={{ title: 'TikTok OK' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
