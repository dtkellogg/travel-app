import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocationsScreen from './screens/LocationsScreen';
import { TailwindProvider } from 'tailwindcss-react-native';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="Location" component={LocationsScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}