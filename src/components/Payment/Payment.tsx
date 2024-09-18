import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style';

type Props = {
  total: number;
  setTotal: (value: number) => void;
};

function Payment({ total, setTotal }: Props): JSX.Element {
  return (
    <View style={style.container}>
      <View style={style.infoContainer}>
        <Text style={style.itemText}>Total: </Text>
        <Text style={style.itemText}>R$ {total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={style.button} onPress={() => setTotal(0)}>
        <Text style={style.buttonText}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}

export { Payment };
