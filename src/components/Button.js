import { StyleSheet, View, Button } from "react-native";

export default function ButtonTest({ title, color, onClick }) {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => onClick(color)}
        title={title}
        color={color}
        accessibilityLabel="Learn more about this purple button"
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "red",
  },
});
