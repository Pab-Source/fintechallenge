import { PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

class GeolocationService {
  async requestPermissionsAndroid() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        return this.requestPermissionsAndroid();
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async getGeoLocation(callback) {
    Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) =>
      callback({ latitude, longitude }),
    );
  }
}

export default new GeolocationService();
