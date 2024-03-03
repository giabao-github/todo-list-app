import { StyleSheet } from 'react-native';
import color from '../../contains/color';

const styles = StyleSheet.create({
  addTask: {
    bottom: 30,
    paddingHorizontal: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 44,
    width: '70%',
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.primary,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: color.text,
  },
});

export default styles;