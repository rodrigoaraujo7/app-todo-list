import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
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
  itemText: {
    maxWidth: '80%'
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