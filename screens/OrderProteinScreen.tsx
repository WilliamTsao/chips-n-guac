import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ItemsList from '../components/ItemsList';

export default function OrderProteinScreen({ route, navigation }) {
  const items = [
    { name: 'Beef', id: "0" },
    { name: 'Pork', id: "1" },
    { name: 'Chicken', id: "2" },
    { name: 'Veggie', id: "3" }
  ]

  const next = (proteinType) => {
    navigation.navigate('OrderSideScreen', {
      ...route.params,
      protein: proteinType
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
