import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import React from "react";

import CurrentWeatherWidgets from "../view/currentWeatherWidgets/CurrentWeatherWidgets";
import Header from "../view/header/Header";

const mainBackground = require('../assets/images/main-background.jpg');

const Home = ({ navigation }) => {
    return (
        <ImageBackground source={mainBackground} style={styles.background}>
            <BlurView intensity={50} style={styles.blurContainer}>
                <View style={styles.root}>
                    <Header />
                    <View style={styles.currentWeatherWidgetsContainer}>
                        <CurrentWeatherWidgets />
                    </View>
                </View>
            </BlurView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: 'auto',
        height: 'auto',
        resizeMode: "cover",
    },
    blurContainer: {
        flex: 1,
    },
    root: {
        flex: 1,
        padding: 10,
        marginTop: 25,
        marginStart: 10,
        marginEnd: 10,
    },
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    currentWeatherWidgetsContainer: {
        marginTop: 25
    }
});

export default Home;
