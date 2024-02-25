import { StyleSheet, Text, View } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topText}>Top Left</View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeft}>
          <View style={styles.bottomLeftText}>Bottom Left</View>
        </View>
        <View style={styles.bottomRight}>
          <View style={styles.rightTopContainer}>
            <View style={styles.rightTopText}>Right Top</View>
          </View>
          <View style={styles.rightBottomContainer}>
            <View style={styles.rightBottomText}>Right Bottom</View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#f4fe87',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#21a3d0',
  }
});