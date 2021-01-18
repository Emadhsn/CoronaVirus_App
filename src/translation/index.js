import {I18nManager} from 'react-native';
import config from './config';

const getTrans = () => {
  if (I18nManager.isRTL) return config.ar;
  else return config.en;
};

export const Trans = getTrans();
