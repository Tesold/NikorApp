
import React from 'react';
import { StyleSheet, View , Text, Image, TouchableOpacityBase, TouchableOpacity} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7FFF2',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    logo:{
      width: '35%',
      height: '35%',
      alignSelf: 'center',
      marginRight: 10,
      paddingVertical: 25
    },
    text:
    {
      opacity: 0.65,
      fontSize: 24,
      marginHorizontal: 5,
      fontWeight: 'bold'
    }
  });

  export function EmployeeCardScreen({navigation, route}:any)
  {

    return(
        <View style={styles.container}>
            <Image
              style={styles.logo}
              resizeMode='contain'
              source={
              require('C:/Users/Tesold/Documents/JS/NikorApp/assets/images/logoW.png')
            }
            />
            
          <View></View>
          <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
              <Text style={styles.text}>{route.params?.Employee.LastName} {route.params?.Employee.FirstName} {route.params?.Employee.MiddleName}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
              <View style={{flex:1}}></View>
              <TouchableOpacity style={{flex:3, flexDirection: 'row'}}>
              <Text style={{flex:2, textAlign: 'center', opacity: 0.65, fontSize: 20, fontWeight: 'bold'}}>{route.params?.Employee?.Position||'Нет должности'}</Text>
              
              <View style={{flex:1, justifyContent:'flex-start', alignContent: 'flex-start'}}>
              <Image
                 style={{height: '30%', width: '30%'}}
                 resizeMode='contain'
                source={
                require('C:/Users/Tesold/Documents/JS/NikorApp/assets/icons/iconpencil.png')
                }
                />
              </View>
              
            </TouchableOpacity>
          </View>
        </View>
    )

  }
