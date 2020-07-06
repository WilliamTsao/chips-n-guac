import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ItemsList from '../components/ItemsList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default class OrderSideScreen extends React.Component {
  state = {
    items: [
      { name: 'Pico de Gallo', id: "0" },
      { name: 'Salsa Roja', id: "1" },
      { name: 'Salsa Verde', id: "2" },
      { name: 'Corn', id: "3" },
      { name: 'Sour Cream', id: "4" },
      { name: 'Cheese', id: "5" },
      { name: 'Lettus', id: "6" },
      { name: 'Guac', id: "7" }
    ]
  }

  next = () => {
    this.props.navigation.navigate('OrderConfirmationScreen', {
      ...this.props.route.params,
      sides: this.state.items.filter((item)=>item.selected).map((item)=>item.name).join(', ')
    });
  }

  selectSide = (side) => {
    const index = this.state.items.findIndex((item)=> item.name === side)
    this.setState(prevState => ({
      items: [
        ...prevState.items.slice(0, index),
        {...prevState.items[index], selected: !prevState.items[index].selected},
        ...prevState.items.slice(index+1),
      ]
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <ItemsList items={this.state.items} next={this.next} select={this.selectSide}></ItemsList>
        <Button title="Next" onPress={this.next}/>
      </View>
    )
  }
}