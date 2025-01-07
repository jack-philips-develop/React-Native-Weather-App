import { Image, StyleSheet, Text, View } from "react-native";

import { fwBold, semiMdText, whiteText } from "../../assets/styles/common/commonStyles";
import HourlyForecastWidgetRow from "./HourlyForecastWidgetRow";

const clockIcon = require('../../assets/icons/clock.png');

const HourlyForcast = ({threeHourWeatherData}) => {
    return (
        <View>
            <View style={styles.titleContainer}>
                <Image source={clockIcon} style={styles.titleContainerIcon} />
                <Text style={styles.titleContainerText} >Hourly Forcast</Text>
            </View>

            <HourlyForecastWidgetRow threeHourWeatherData={threeHourWeatherData} />
        </View>
    )
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    titleContainerIcon: {
        ...fwBold,
    },
    titleContainerText: {
        ...whiteText,
        ...semiMdText,
        ...fwBold,
        marginStart: 7,
        letterSpacing: 1,
    }
})

export default HourlyForcast;