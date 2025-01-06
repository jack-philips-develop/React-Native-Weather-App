import { Image, StyleSheet, View } from "react-native";

const listIcon = require('../../assets/icons/list.svg');
const calendarIcon = require('../../assets/icons/calendar.svg');

const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={listIcon}
                style={styles.image}
            />
            <Image
                source={calendarIcon}
                style={styles.image2}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    image: {
        width: 30,
        height: 30,
        marginHorizontal: 5,
        color: 'white'
    },
    image2: {
        width: 25,
        height: 25,
        marginHorizontal: 5,
        color: 'white'
    },
});

export default Header;