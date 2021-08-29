






import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screen/MainScreen';
import DetailScreen from '../screen/DetailScreen'

const Stack = createNativeStackNavigator();

const AppNavigatior = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="User Lists" component={MainScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigatior
