import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ItemsList from '../components/ItemsList';

export default function OrderRiceScreen({ route, navigation }) {
  const items = [
    { name: 'White Rice', id: "0" },
    { name: 'Brown Rice', id: "1" }
  ]

  const next = (riceType) => {
    navigation.navigate('OrderBeanScreen',{
      ...route.params,
      rice: riceType
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
