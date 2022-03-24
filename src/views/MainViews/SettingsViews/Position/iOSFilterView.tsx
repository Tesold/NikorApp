import { Picker } from "@react-native-picker/picker";
import React from "react";
import { View } from "react-native";

const style=
{
    container:
    {
        height: '30%',
        width: '100%',
        backgroundColor: '#BFE4A9',
        elevation: 10,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 1,
    },
}

export function iOSFilter({route}:any)
{
    return(
    <View style={style.container}>
                return(
        <Picker
        style={{ height: 50, width: "90%", opacity: 0.65, alignSelf: 'center'}}
        selectedValue={route.Scoupe}
        onValueChange={(itemValue, itemIndex) =>{
            route.setScoupe(itemValue);
        }
        }>

        {
            route.ArrayScoupe.map((item: any, index: any) => {return (<Picker.Item label={item.ScoupeName} value={item.ScoupeName} key={index}/>)})
        }

        </Picker>
        )
    </View>
    )
}