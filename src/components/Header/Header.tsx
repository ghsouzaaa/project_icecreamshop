import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

function Header(): JSX.Element {
  return (
    <View>
      <Text style={style.title}>Cardápio</Text>
    </View>
  );
}

export { Header };
