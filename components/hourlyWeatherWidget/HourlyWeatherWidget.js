import { Image, StyleSheet, Text, View } from "react-native";
import { fwBold, fwSemiBold, semiMdText, smText, whiteText } from "../../assets/styles/common/commonStyles";
import { getWidgetImage } from '../../utility/commonHelper/CommonHelper';

const sunnyWidget = require('../../assets/images/weatherWidgets/sunnyWidget.png');
const sunnyCloudyWidget = require('../../assets/images/weatherWidgets/sunnyCloudyWidget.png');
const sunnyCloudyRainyWidget = require('../../assets/images/weatherWidgets/sunnyCloudyRainyWidget.png');
const cloudyRainyWidget = require('../../assets/images/weatherWidgets/cloudyRainyWidget.png');

const HourlyWeatherWidget = ({ widgetImageCode, time, degree }) => {
    return (
        <View style={styles.container}>
            <Image source={getWidgetImage(widgetImageCode)} style={styles.widgetImage} />
            <Text style={styles.widgetTimeLabel} >{time}</Text>
            <Text style={styles.widgetTemperatureLabel}>{degree}°</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 'max-content',
        borderRadius: 10,
        paddingStart: 20,
        paddingEnd: 20,
        marginEnd: 10
    },
    widgetImage: {
        width: 60,
        height: 60,
    },
    widgetTimeLabel: {
        ...whiteText,
        fontSize: 15
    },
    widgetTemperatureLabel: {
        ...whiteText,
        ...semiMdText,
        ...fwSemiBold,
        marginTop: 2
    }
})

export default HourlyWeatherWidget;