import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { iOSFilter } from "../../../src/views/MainViews/SettingsViews/Position/iOSFilterView";
import { AddPositionScreen } from "../../../src/views/MainViews/SettingsViews/Position/PositionView";
import { AddPositionNameTitle } from "../../../src/views/MainViews/SettingsViews/titles/addPositionNameTitle";

const Stack = createNativeStackNavigator();

export function PositionsStackNavigator()
{
    
    const settingsStack = createNativeStackNavigator();

    return(
        <View style = {{flex:1}}>
        <AddPositionNameTitle/>
        <settingsStack.Navigator>
                
            <Stack.Screen options = {{headerShown: false}} name="PositionScreen" component={AddPositionScreen} />
            <Stack.Screen options = {{headerShown: false, headerStyle:{backgroundColor: '#F7FFF2'}}} name="IOSFilter" component={iOSFilter} />

        </settingsStack.Navigator>
        </View>
    )
  }