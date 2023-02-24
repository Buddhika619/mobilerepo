// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from './Screens/CoachList';
import PhoneNumberScreen from './Screens/PhoneNumberScreen';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import OtpScreen from './Screens/OtpScreen';


const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PhoneNumberScreen} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="Coach" component={Card} />
      </Stack.Navigator>
     
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;