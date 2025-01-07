import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import axios from "axios";

import CurrentWeatherWidgets from "../view/currentWeatherWidgets/CurrentWeatherWidgets";
import HourlyForcast from "../view/hourlyForcast/HourlyForcast";
import Header from "../view/header/Header";
import { hours } from "../resource/testForeCast";

const mainBackground = require('../assets/images/main-background.jpg');

const Home = ({ navigation }) => {
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [threeHourWeatherData, setThreeHourWeatherData] = useState([]);
    const [locationData, setLocationData] = useState(null);
    const [currentWeatherData, setCurrentWeatherData] = useState(null);

    const apiKey = "9ce42b44eadda2fb316ea6a09c77a5c8";
    const city = "Tehran";
    const url = `https://api.weatherstack.com/forecast?access_key=${apiKey}&query=${city}`;

    useEffect(() => {
        const fetchWeatherData = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(url);
                fetchWeatherDataCallback(response.data);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    const fetchWeatherDataCallback = (weatherData) => {
        setLocationData(weatherData.location);
        setCurrentWeatherData(weatherData.current);

        const targetTimes = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];
        const threeHourWeatherData = hours.filter(item => targetTimes.includes(item.time.split(" ")[1]));
        setThreeHourWeatherData(threeHourWeatherData);
        setIsLoading(false)
    }

    return (
        isloading
            ? <Text>loaing</Text>
            : <ImageBackground source={mainBackground} style={styles.background}>
                <View style={styles.root}>
                    <Header />

                    <View style={styles.currentWeatherWidgetsContainer}>
                        <CurrentWeatherWidgets locationData={locationData}
                            currentWeatherData={currentWeatherData} />
                    </View>

                    <View style={styles.dailyForcastContainer}>
                        <HourlyForcast threeHourWeatherData={threeHourWeatherData} />
                    </View>
                </View>
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
    },
    dailyForcastContainer: {
        marginTop: 15,
        marginStart: 10,
        marginEnd: 10,
    }
});

export default Home;
