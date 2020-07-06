import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ItemsList from '../components/ItemsList';

export default function OrderTypeScreen({ navigation }) {
  const items = [
    { name: 'Burrito', id: "0" },
    { name: 'Bowl', id: "1" },
    { name: 'Salad', id: "2" }
  ]

  const next = (orderType) => {
    navigation.navigate('OrderRiceScreen', {
      orderType: orderType
    });
  }

  return (
    <View style={styles.container}>
      <ItemsList items={items} select={next}></ItemsList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
