import { StyleSheet } from 'react-native';
import color from './contains/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  body: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 25,
  },
  header: {
    fontSize: 24,
    color: color.primary,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 25,
  },
});

export default styles;