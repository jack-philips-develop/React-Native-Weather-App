import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import axios from "axios";

import CurrentWeatherWidgets from "../view/currentWeatherWidgets/CurrentWeatherWidgets";
import HourlyForcast from "../view/hourlyForcast/HourlyForcast";
// import axiosInstance from "../services/base/AxiosInstance";
import Header from "../view/header/Header";

const mainBackground = require('../assets/images/main-background.jpg');

const Home = ({ navigation }) => {
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [threeHourWeatherData, setThreeHourWeatherData] = useState([]);
    const [locationData, setLocationData] = useState(null);
    const [currentWeatherData, setCurrentWeatherData] = useState(null);

    const apiKey = "fca778bda40b426f979145731250601";
    const city = "London";
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(url);
                fetchWeatherDataCallback(response.data);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    const fetchWeatherDataCallback = (weatherData) => {
        const targetTimes = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];
        const threeHourWeatherData = weatherData.forecast.forecastday[0].hour.filter(item => targetTimes.includes(item.time.split(" ")[1]));

        setThreeHourWeatherData(threeHourWeatherData);
        setLocationData(weatherData.location);
        setCurrentWeatherData(weatherData.current);
    }

    return (
        <ImageBackground source={mainBackground} style={styles.background}>
            <BlurView intensity={50} style={styles.blurContainer}>
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
        marginTop: 15
    },
    dailyForcastContainer: {
        marginTop: 25,
        marginStart: 10,
        marginEnd: 10,
    }
});

export default Home;
