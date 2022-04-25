import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SettingsTitle } from "../../src/views/MainViews/SettingsViews/titles/SettingsTitle";
import { SettingsScreen } from "../../src/views/MainViews/SettingsViews/SettingsView";
import { AddScoupeScreen } from "../../src/views/MainViews/SettingsViews/Scoupe/ScoupeView";
import { AddDepartmentScreen } from "../../src/views/MainViews/SettingsViews/Department/DepartmentView";
import { AddPositionNameScreen } from "../../src/views/MainViews/SettingsViews/PositionName/PositionNameView";
import { AddPositionScreen } from "../../src/views/MainViews/SettingsViews/Position/PositionView";
import { View } from "react-native";
import { CodeScreen } from "../../src/views/MainViews/SettingsViews/Employees/CodeView";
import { SetUsersForScoupeScreen } from "../../src/views/MainViews/SettingsViews/Employees/SetUsersForScoupeView";
import { EmployeeButtonStackNavigator } from "./buttonStacks/EmpoyeesStack";

const Stack = createNativeStackNavigator();

export function SettingsStackNavigator()
{
    
    const settingsStack = createNativeStackNavigator();

    return(
        <View style = {{flex:1}}>
        <SettingsTitle/>
        <settingsStack.Navigator>
                
            <Stack.Screen options = {{headerShown: false, }} name="Settings" component={SettingsScreen} />
            <Stack.Screen options = {{headerShown: false, headerStyle:{backgroundColor: '#F7FFF2'}}} name="EmployeeButtonStackNavigator" component={EmployeeButtonStackNavigator} />
            <Stack.Screen options = {{headerShown: false, gestureEnabled:true, presentation: 'transparentModal'}} name="AddScoupe" component={AddScoupeScreen} />
            <Stack.Screen options = {{headerShown: false}} name="AddDepartment" component={AddDepartmentScreen} />
            <Stack.Screen options = {{headerShown: false}} name="AddPositionName" component={AddPositionNameScreen} />
            <Stack.Screen options = {{headerShown: false}} name="AddPosition" component={AddPositionScreen} />

        </settingsStack.Navigator>
        </View>
    )
  }