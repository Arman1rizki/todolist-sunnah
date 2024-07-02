import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, StyleSheet,} from "react-native";

export default function Notification() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ width: 360, height: "auto" }}>
        <Text>Arman</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
