import React from "react";
import { Text, View, StyleSheet } from "react-native";

const style=StyleSheet.create(
{
    container:
    {
        height: '4%',
        width: '100%',
        backgroundColor: '#BFE4A9',
        elevation: 10,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 1,
    },
});

export function AddPositionTitle()
{
    return(
    <View style={style.container}>
        <Text style={{  letterSpacing: 1, opacity: 0.65, textAlign:'center', fontSize:17, fontWeight: 'bold'}}>Изменить код должности</Text>
    </View>
    )
}