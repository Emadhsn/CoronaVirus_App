import {axiosService} from '../axiosService';
//config
import {BASE_URl} from '../../config';

export const getCountryDetails = async (payload) => {
  const url = `${BASE_URl}/total/dayone/country/${payload?.CountryCode}`;
  return await axiosService({url, method: 'GET'});
};
