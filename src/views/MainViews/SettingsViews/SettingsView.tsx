
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLogOut } from '../../../../redux/actions';
import { setRefreshToken } from '../../../store/authToken';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7FFF2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {marginVertical:10,justifyContent: 'center', alignContent: 'center',height: '7%', width: '60%', backgroundColor: '#BFE4A9', borderRadius: 10}
    
  });

export function SettingsScreen (props:any)
{
  const dispatch = useDispatch();

    const logOut = () => {

        setRefreshToken('');
        dispatch(setLogOut());
    };

    return(
      
        <View style={styles.container}>

            <TouchableOpacity 
              style = {styles.button}
              onPress={() =>
              props.navigation.navigate('Registration')
            }>
              <Text style={{textAlign: 'center', fontWeight: 'bold', opacity: 0.7}}>Назначить на должность</Text>
            </TouchableOpacity>
          
            <TouchableOpacity 
              style = {styles.button}
              onPress={() =>
              props.navigation.navigate('EmployeeButtonStackNavigator')
            }>
              <Text style={{textAlign: 'center', fontWeight: 'bold', opacity: 0.7}}>Сотрудники</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style = {styles.button}
              onPress={() =>
              props.navigation.navigate('Registration')
            }>
              <Text style={{textAlign: 'center', fontWeight: 'bold', opacity: 0.7}}>Добавить права</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style = {styles.button}
              onPress={() =>
              props.navigation.navigate('Registration')
            }>
              <Text style={{textAlign: 'center', fontWeight: 'bold', opacity: 0.7}}>Назначить командование</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style = {styles.button}
              onPress={() =>
              props.navigation.navigate('AddPosition')
            }>
              <Text style={{textAlign: 'center', fontWeight: 'bold', opacity: 0.7}}>Должности</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style = {styles.button}
              onPress={() =>
              props.navigation.navigate('AddPositionName')
            }>
              <Text style={{textAlign: 'center', fontWeight: 'bold', opacity: 0.7}}>Наименования должностей</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style = {styles.button}
              onPress={() =>
              props.navigation.navigate('AddDepartment')
            }>
              <Text style={{textAlign: 'center', fontWeight: 'bold', opacity: 0.7}}>Отделы</Text>
            </TouchableOpacity>



            <TouchableOpacity 
              style = {styles.button}
              onPress={() =>
              props.navigation.navigate('AddScoupe')
            }>
              <Text style={{textAlign: 'center', fontWeight: 'bold', opacity: 0.7}}>Структуры</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style = {{...styles.button, backgroundColor: 'tomato'}}
              onPress={logOut}>
              <Text style={{textAlign: 'center', fontWeight: 'bold', opacity: 0.7}}>Выйти</Text>
            </TouchableOpacity>
        </View>
    )
}