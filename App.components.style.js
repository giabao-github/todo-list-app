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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  empty: {
    opacity: 0.4,
    fontSize: 20,
  }
});

export default styles;