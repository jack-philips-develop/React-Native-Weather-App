import { Image, StyleSheet, Text, View } from "react-native";
import { smText, whiteText } from "../../assets/styles/common/commonStyles";

const LabelWidget = ({ source, label }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={source} />
            <Text style={styles.text}>{label}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
    text: {
        ...whiteText,
        ...smText,
        marginStart: 5
    }
})

export default LabelWidget;