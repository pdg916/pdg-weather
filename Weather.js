import React from "react";
import { View,Text,StyleSheet, StatusBar }from "react-native";
import PropTypes from "prop-types";
import {LinearGradient}from "expo-linear-gradient";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions={
    Haze:{
        iconName:"weather-hail",
        gradient:["#4A0B0","D39D38"],
        title:"안개",
        subtitle:"앞이 안보여ㅠ"
    },
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient:["#373B44","#4286f4"],
        title:"번개",
        subtitle:"우르르쾅쾅!"
    },
    Drizzle:{//이슬비
        iconName:"weather-hail",
        gradient:["#89F7FE","#66A6FF"],
        title:"이슬비",
        subtitle:"역시 참이슬!"
    },
    Rain:{
        iconName:"weather-rainy",
        gradient:["#00C6EB","#005BEA"],
        title:"비",
        subtitle:"비가 네리네요~"
    },
    Snow:{
        iconName:"weather-snowy",
        gradient:["#7DE2FC","#B9B6E5"],
        title:"눈",
        subtitle:"눈이 와~펑펑!"
    },
    Atmosphere:{
        iconName:"weather-hail",
        gradient:["#89F7FE","#66A6AF"],
        title:"기압?",
        subtitle:"이건 무슨 날씨?"
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#FF7300","#FEF253"],
        title:"맑음",
        subtitle:"끼욧~!"
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#D7D2CC","#304352"],
        title:"구름",
        subtitle:"무난무난~"
    },
    Mist:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","D39D38"],
        title:"안개?",
        subtitle:"앞이 흠..."
    },
    Dist:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"이건 뭐지?",
        subtitle:"흠..."
    }
}

export default function Weather({temp,condition}){
    return(
        <LinearGradient 
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
        <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
        <MaterialCommunityIcons 
        size={200} 
        name={weatherOptions[condition].iconName} 
        color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
        </View> 
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dist"
]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center" 
    },
    temp:{
        fontSize:50,
        color:"white"

    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontSize:50,
        marginBottom:10
    },
    subtitle:{
        color:"white",
        fontSize:30
    },
    textContainer:{
        paddingHorizontal:10,
        alignItems:"flex-start"
    }
})