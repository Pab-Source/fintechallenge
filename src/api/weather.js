import { httpGet, formatDataResponse, formatFiveDays } from '../utils';

class Http {
  async getWeatherWithLocation({ latitude, longitude }) {
    const response = await httpGet(`weather?lat=${latitude}&lon=${longitude}`);
    return await formatDataResponse(response);
  }

  async getWeatherCityName(cityName) {
    const response = await httpGet(`weather?q=${cityName}`);
    return await formatDataResponse(response);
  }

  async getWeatherFiveDaysLocation({ latitude, longitude }) {
    const response = await httpGet(`forecast?lat=${latitude}&lon=${longitude}`);
    return await formatFiveDays(response);
  }

  async getWeatherFiveDaysCityName(cityName) {
    const response = await httpGet(`forecast?q=${cityName}`);
    return await formatFiveDays(response);
  }
}

export default new Http();
