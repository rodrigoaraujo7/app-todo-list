import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = (props) => {
  const [check, setCheck] = useState(false);

  const checkItem = () => {
    if(check === false) {
      setCheck(true)
    } else {
      setCheck(false)
    }
  }

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square} onPress={() => checkItem()}></TouchableOpacity>
        <Text style={check === false ? styles.itemTextUnchecked : styles.itemTextChecked}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 20,

    borderRadius: 10,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    backgroundColor: '#55bcf6',

    width: 24,
    height: 24,
    marginRight: 15,

    opacity: 0.4,
    borderRadius: 5
  },
  itemTextUnchecked: {
    maxWidth: '80%',
  },
  itemTextChecked: {
    maxWidth: '80%',
    textDecorationLine: 'line-through',
    color: '#d7d7d7'
  },
  circular: {
    width: 12,
    height: 12,

    borderColor: '#55bcf6',
    borderWidth: 2,
    borderRadius: 10
  },
});

export default Task;