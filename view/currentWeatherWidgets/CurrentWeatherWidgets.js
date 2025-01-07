import { Image, StyleSheet, Text, View } from "react-native";

import { fwBold, fwSemiBold, lgText, mdText, smText, whiteText } from '../../assets/styles/common/commonStyles';
import { getWidgetImage } from "../../utility/commonHelper/CommonHelper";
import LabelWidget from "../../components/labelWidget/LabelWidget";
import WidgetBar from "../widgetBar/WidgetBar";

const cloudyRainyWidget = require('../../assets/images/weatherWidgets/cloudyRainyWidget.png');
const sunnyCloudyRainyWidget = require('../../assets/images/weatherWidgets/sunnyCloudyRainyWidget.png');
const sunnyCloudyWidget = require('../../assets/images/weatherWidgets/sunnyCloudyWidget.png');
const sunnyWidget = require('../../assets/images/weatherWidgets/sunnyWidget.png');

const CurrentWeatherWidgets = ({ locationData, currentWeatherData }) => {
    return (
        <View style={styles.root}>
            {/* <Text style={styles.currentCityLabel}>{locationData?.region}</Text> */}
            <Text style={{backgroundColor: 'white'}}>this is text</Text>
            <Image source={getWidgetImage(currentWeatherData?.condition?.code)}
                style={styles.weatherWidget} />

            <View style={styles.currentWeatherDegree}>
                <Text style={styles.currentWeatherDegreeNumber}>{currentWeatherData?.temp_c}°</Text>
                <Text style={styles.currentWeatherDegreeUnit}>C</Text>
            </View>

            <Text style={styles.currentWeatherDescription}>{currentWeatherData?.condition?.text}</Text>

            <View style={styles.WidgetBarContainer}>
                <WidgetBar currentWeatherData={currentWeatherData} />
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
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
        marginTop: 10,
        textAlign: 'center'
    },
    WidgetBarContainer: {
        marginTop: 30,
        width: '100%',
        flex: 1
    }
});

export default CurrentWeatherWidgets;