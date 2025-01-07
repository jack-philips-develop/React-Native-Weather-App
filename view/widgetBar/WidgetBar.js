import { StyleSheet, Text, View } from "react-native";
import LabelWidget from "../../components/labelWidget/LabelWidget";

const windIcon = require('../../assets/icons/wind.png');
const dropIcon = require('../../assets/icons/drop.png');
const sunIcon = require('../../assets/icons/sun.png');

const WidgetBar = ({ currentWeatherData }) => {
    return (
        <View style={styles.widgetBarContainer}>
            <LabelWidget source={windIcon} label={`${currentWeatherData?.wind_speed} mph`} />
            <LabelWidget source={dropIcon} label={currentWeatherData?.humidity} />
            <LabelWidget source={sunIcon} label={currentWeatherData?.uv_index} />
        </View>
    )

};

const styles = StyleSheet.create({
    widgetBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default WidgetBar;