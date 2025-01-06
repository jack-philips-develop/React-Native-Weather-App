import { StyleSheet, View } from "react-native";
import LabelWidget from "../../components/labelWidget/LabelWidget";

const windIcon = require('../../assets/icons/wind.svg');
const dropIcon = require('../../assets/icons/drop.svg');
const sunIcon = require('../../assets/icons/sun.svg');

const WidgetBar = () => {
    return (
        <View style={styles.widgetBarContainer}>
            <LabelWidget source={windIcon} label='11km/hr' />
            <LabelWidget source={dropIcon} label='02%' />
            <LabelWidget source={sunIcon} label='8 hr' />
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