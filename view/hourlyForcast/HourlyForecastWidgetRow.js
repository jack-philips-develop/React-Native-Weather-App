import { StyleSheet, View, ScrollView } from "react-native";
import HourlyWeatherWidget from "../../components/hourlyWeatherWidget/HourlyWeatherWidget";

const HourlyForecastWidgetRow = () => {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <HourlyWeatherWidget />
      <HourlyWeatherWidget />
      <HourlyWeatherWidget />
      <HourlyWeatherWidget />
      <HourlyWeatherWidget />
      <HourlyWeatherWidget />
      <HourlyWeatherWidget />
      <HourlyWeatherWidget />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 17,
  },
});

export default HourlyForecastWidgetRow;
