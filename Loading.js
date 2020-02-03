import React from "react"
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Loading(){
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style={styles.text}>Amazing Weather! App : pdg916</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:20,        
        paddingVertical:100,
        backgroundColor:"#A8DEE9",
    },
    text:{
        color:"white",
        fontSize:39,

    },
    icons:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }

})