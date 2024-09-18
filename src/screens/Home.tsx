import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import style from './style';
import { Bottom } from '../components/Bottom';
import { Header } from '../components/Header';
import { Payment } from '../components/Payment';

function Home(): JSX.Element {
  const [total, setTotal] = useState(0);

  const iceCreamArray = [
    { name: 'Chocolate', price: '13,40' },
    { name: 'Baunilha', price: '12,00' },
    { name: 'Morango', price: '14,50' },
    { name: 'Flocos', price: '13,00' },
    { name: 'Doce de Leite', price: '15,20' },
    { name: 'Napolitano', price: '16,00' },
    { name: 'Menta com Chocolate', price: '14,70' },
    { name: 'Coco', price: '13,80' },
    { name: 'Pistache', price: '18,30' },
    { name: 'Açaí', price: '16,50' },
    { name: 'Limão', price: '11,90' },
    { name: 'Uva', price: '12,50' },
    { name: 'Frutas Vermelhas', price: '17,00' },
    { name: 'Creme', price: '13,00' },
    { name: 'Caramelo', price: '14,20' },
    { name: 'Banana Split', price: '19,00' },
    { name: 'Brownie', price: '20,50' },
    { name: 'Oreo', price: '21,00' },
    { name: 'Nutella', price: '22,50' },
    { name: 'Framboesa', price: '15,80' },
    { name: 'Maracujá', price: '13,90' },
    { name: 'Manga', price: '14,00' },
    { name: 'Kiwi', price: '13,70' },
    { name: 'Amendoim', price: '16,40' },
    { name: 'Tapioca', price: '18,00' },
    { name: 'Paçoca', price: '15,30' },
    { name: 'Iogurte com Mel', price: '17,60' },
    { name: 'Café', price: '13,50' },
    { name: 'Tiramisu', price: '21,30' },
    { name: 'Cheesecake', price: '20,00' },
  ];

  return (
    <View style={style.container}>
      <ScrollView style={style.menuContainer}>
        <Header />

        <View style={style.listContainer}>
          <View style={style.listHeader}>
            <Text style={style.listText}>Tipos</Text>
            <Text style={style.listText}>Preços</Text>
          </View>

          {iceCreamArray.map(item => {
            return (
              <TouchableOpacity
                key={item.name}
                style={style.itemContainer}
                onPress={() => {
                  const parsedPrice = parseFloat(item.price.replace(',', '.'));

                  setTotal(total => total + parsedPrice);
                }}>
                <Text style={style.itemText}>{item.name}</Text>
                <Text style={style.itemText}>R$ {item.price}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Bottom />
      </ScrollView>

      {total > 0 && <Payment total={total} setTotal={setTotal} />}
    </View>
  );
}

export { Home };
