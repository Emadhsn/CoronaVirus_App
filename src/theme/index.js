import {themeColors} from './config';
import {Appearance} from 'react-native';

const getColors = () => {
  const themeState = Appearance.getColorScheme();

  if (themeState === 'dark') return themeColors.dark;
  else return themeColors.light;
};

export const colors = getColors();
