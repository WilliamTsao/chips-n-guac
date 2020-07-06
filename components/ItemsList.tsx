import React from 'react'
import {FlatList, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import OrderItem from './OrderItem'

const styles = StyleSheet.create({
  list: {
  },
})

const ItemsList = props => {
  return (
    <FlatList
      style={styles.list}
      data={props.items}
      renderItem={({ item }) => <OrderItem {...item} select={props.select} />}
      keyExtractor={item => item.id}
    />
  )
}

ItemsList.propTypes = {
  items: PropTypes.array,
  next: PropTypes.func,
  select: PropTypes.func
}

export default ItemsList
