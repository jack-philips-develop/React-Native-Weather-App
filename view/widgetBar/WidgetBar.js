import { StyleSheet, View } from "react-native";
import LabelWidget from "../../components/labelWidget/LabelWidget";

const windIcon = require('../../assets/icons/wind.png');
const dropIcon = require('../../assets/icons/drop.png');
const sunIcon = require('../../assets/icons/sun.png');

const WidgetBar = ({ currentWeatherData }) => {
    return (
        <View style={styles.widgetBarContainer}>
            <LabelWidget source={windIcon} label={`${currentWeatherData?.wind_mph} mph`} />
            <LabelWidget source={dropIcon} label={currentWeatherData?.humidity} />
            <LabelWidget source={sunIcon} label={currentWeatherData?.uv} />
        </View>
    )

};

const styles = StyleSheet.create({
    widgetBarContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default WidgetBar;