const { weatherWidgetType } = require('../../configs/Enumerations');

const sunnyCloudyRainyWidget = require('../../assets/images/weatherWidgets/sunnyCloudyRainyWidget.png');
const sunnyCloudyWidget = require('../../assets/images/weatherWidgets/sunnyCloudyWidget.png');


export const getWidgetImage = (weatherWidgetCode) => weatherWidgetType.cloudy.includes(weatherWidgetCode) ? (sunnyCloudyWidget) : (sunnyCloudyRainyWidget);