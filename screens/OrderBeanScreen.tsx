import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ItemsList from '../components/ItemsList';

export default function OrderBeanScreen({ route, navigation }) {
  const items = [
    { name: 'Black Beans', id: "0" },
    { name: 'Pinto Beans', id: "1" }
  ]

  const next = (beanType) => {
    navigation.navigate('OrderProteinScreen',{
      ...route.params,
      bean: beanType
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
