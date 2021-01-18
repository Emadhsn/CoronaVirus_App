import {axiosService} from '../axiosService';
//config
import {BASE_URl} from '../../config';

export const getSummary = async () => {
  const url = `${BASE_URl}/summary`;
  return await axiosService({url, method: 'GET'});
};
