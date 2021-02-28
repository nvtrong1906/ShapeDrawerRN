import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  octagon: {},
  octagonBar: {
    width: 42,
    height: 100,
    backgroundColor: "red",
  },
  octagonUp: {},
  octagonFlat: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{ rotate: "90deg" }],
  },
  octagonLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{ rotate: "-45deg" }],
  },
  octagonRight: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{ rotate: "45deg" }],
  },
});

export default styles;
