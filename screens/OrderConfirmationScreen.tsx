import * as React from 'react';
import { Button, StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import ItemsList from '../components/ItemsList';

export default function OrderConfirmationScreen({ route, navigation }) {
  const items = [
    { name: 'Order Type', value: route.params.orderType, id: "0" },
    { name: 'Rice', value: route.params.rice, id: "1" },
    { name: 'Beans', value: route.params.bean, id: "2" },
    { name: 'Protein', value: route.params.protein, id: "3" },
    { name: 'Sides', value: route.params.sides, id: "4" }
  ]

  const next = () => {
    navigation.navigate('OrderConfirmationScreen', {
      ...route.params
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item.name}: {item.value}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
