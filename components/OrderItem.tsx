import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  row: {
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between"
  },
})

const OrderItem = props => (
  <TouchableOpacity onPress={()=>{props.select(props.name)}} style={styles.row}>
    <Text>{props.name}</Text>
    { props.selected ? <Ionicons size={30} name="ios-checkmark"/> :null }
  </TouchableOpacity>
)

OrderItem.propTypes = {
  name: PropTypes.string,
  select: PropTypes.func,
}

export default OrderItem
