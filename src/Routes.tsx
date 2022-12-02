import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MyList} from './screens/MyList'
import { AddStudent } from './screens/AddStudent';
import { EditStudent } from './screens/EditStudent';
import { StudentType } from './@types/@types';
/*Tipo da RAIZ de navegação */
export type RootStackParamList = {
  Mylist: undefined
  AddStudent: undefined
  EditStudent: {student: StudentType};
  
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes =()=> {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Mylist' screenOptions={{headerShown:false}} >
          <Stack.Screen name="Mylist" component={MyList}  options={{headerShown:false}} />
          <Stack.Screen name="AddStudent" component={AddStudent}  options={{headerShown:false}} />
          <Stack.Screen name="EditStudent" component={EditStudent}  options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }