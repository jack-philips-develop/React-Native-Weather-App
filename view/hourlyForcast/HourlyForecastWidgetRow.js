import { StyleSheet, View, ScrollView } from "react-native";
import HourlyWeatherWidget from "../../components/hourlyWeatherWidget/HourlyWeatherWidget";

const HourlyForecastWidgetRow = ({ threeHourWeatherData }) => {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      {threeHourWeatherData?.length > 0
        ? threeHourWeatherData?.map(item =>
          <HourlyWeatherWidget
            widgetImageCode={item?.condition?.code}
            time={item?.time.split(" ")[1]}
            degree={item?.temp_c} />)
        : <View></View>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 17,
  },
});

export default HourlyForecastWidgetRow;
