import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/pages/Home';
import MovieDetails from './src/pages/MovieDetails';
import {MovieProvider} from './src/contexts/MovieContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MovieProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Movies'}}
          />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{title: 'Movie Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MovieProvider>
  );
}
