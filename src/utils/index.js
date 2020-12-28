import * as httpConstants from '../constants/http-constants';

export const createAction = (action) => {
  return {
    init: (payload) => {
      return {
        type: action + '_INIT',
        payload,
      };
    },
    success: (payload) => {
      return { type: action + '_SUCCESS', payload };
    },
    error: (payload) => {
      return { type: action + '_ERROR', payload };
    },
  };
};

export const httpGet = async (query) => {
  try {
    const request = await fetch(
      `${httpConstants.BASE_URL}${query}&appid=${httpConstants.API_KEY}`,
    );
    const response = await request.json();
    return response;
  } catch (error) {
    return error;
  }
};

export const convertTemp = (num) => Number((num - 273).toFixed(0));

export const daysWeek = (language) => {
  if (language.includes('es')) {
    return [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
    ];
  }
  return [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
};

export const formatDataResponse = async (response) => {
  return {
    name: response.name,
    country: response.sys.country,
    report: {
      temp: convertTemp(response.main.temp),
      tempMin: convertTemp(response.main.temp_min),
      tempMax: convertTemp(response.main.temp_max),
      key: response.weather[0].id,
      icon: `https://openweathermap.org/img/w/${response.weather[0].icon}.png`,
      description: response.weather[0].description,
      name: response.weather[0].main,
    },
  };
};

export const formatFiveDays = async (response) =>
  response?.list?.length &&
  response.list
    .filter((item) => item.dt_txt.includes('00:00:00'))
    .map((item) => {
      return {
        name: response.city.name,
        country: response.city.country,
        report: {
          date: item.dt_txt.split(' ')[0],
          temp: convertTemp(item.main.temp),
          tempMin: convertTemp(item.main.temp_min),
          tempMax: convertTemp(item.main.temp_max),
          icon: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`,
          description: item.weather[0].description,
          name: item.weather[0].main,
        },
      };
    });

// export const manageError = async (response, callback) => {
//   if (response.cod !== 200) {
//     return response;
//   }
//   return await callback(response);
// };
