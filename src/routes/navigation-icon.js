import * as React from 'react';
import { Image } from 'react-native';

export const TabNavigationIcon = ({ tintColor, icon, width, height }) => (
  <Image
    source={icon}
    style={[{ width, height, tintColor }]}
  />
);