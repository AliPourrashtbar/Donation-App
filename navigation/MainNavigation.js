import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import {Routes} from './Routes';

const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};
