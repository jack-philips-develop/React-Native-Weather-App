import { Image, StyleSheet, Text, View } from "react-native";
import { fwBold, fwSemiBold, lgText, mdText, smText, whiteText } from '../../assets/styles/common/commonStyles';

const cloudyRainyWidget = require('../../assets/images/weatherWidgets/cloudyRainyWidget.png');
const sunnyCloudyRainyWidget = require('../../assets/images/weatherWidgets/sunnyCloudyRainyWidget.png');
const sunnyCloudyWidget = require('../../assets/images/weatherWidgets/sunnyCloudyWidget.png');
const sunnyWidget = require('../../assets/images/weatherWidgets/sunnyWidget.png');

const CurrentWeatherWidgets = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.currentCityLabel}>Malayer, Iran</Text>
            <Image source={cloudyRainyWidget}
                style={styles.weatherWidget} />
            <View style={styles.currentWeatherDegree}>
                <Text style={styles.currentWeatherDegreeNumber}>29°</Text>
                <Text style={styles.currentWeatherDegreeUnit}>C</Text>
            </View>
            <Text style={styles.currentWeatherDescription}>Expect high rain today.</Text>
        </View >
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center'
    },
    currentCityLabel: {
        ...smText,
        ...whiteText,
        textAlign: 'center'
    },
    weatherWidget: {
        width: 350,
        height: 350,
    },
    currentWeatherDegree: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentWeatherDegreeNumber: {
        ...whiteText,
        ...lgText,
        ...fwBold,
    },
    currentWeatherDegreeUnit: {
        ...whiteText,
        ...mdText,
        ...fwSemiBold,
        marginStart: 7,
    },
    currentWeatherDescription: {
        ...smText,
        ...whiteText,
        textAlign: 'center'
    }
});

export default CurrentWeatherWidgets;