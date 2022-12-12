import { Provider } from 'react-redux'
import Homescreen from './screens/HomeScreen';
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScrren from './screens/MapScrren';
import { KeyboardAvoidingView } from 'react-native';
export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <Stack.Navigator>
              <Stack.Screen name='HomeScreen' component={Homescreen} options={{
                headerShown: false
              }} />
              <Stack.Screen name='MapScreen' component={MapScrren} options={{
                headerShown: false
              }} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

