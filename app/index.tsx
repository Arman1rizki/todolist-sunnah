import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.Containerbg}>
        <View
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LinearGradient
            colors={[
              "transparent",
              "rgba(255, 255, 255, 0.5)",
              "rgb(255,255,255)",
            ]}
            style={{ height: 411, width: 360, position: "absolute" }}
          />
          <Image
            style={styles.backgr}
            source={require("../Img/Get-Started/BackGroundMasjid.png")}
          />
          <Image
            style={styles.Icon}
            source={require("../Img/Get-Started/App-Icon.png")}
          />
        </View>

        <View
          style={{
            width: 360,
            height: 24,
            flexDirection: "row",
            marginTop: 32,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.card}
            source={require("../Img/Get-Started/masjid.png")}
          />
          <Image
            style={styles.card}
            source={require("../Img/Get-Started/book.png")}
          />
          <Image
            style={styles.card}
            source={require("../Img/Get-Started/note.png")}
          />
        </View>

        <View
          style={{
            width: 259,
            height: 160,
            marginTop: 48,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.font}>Buat Jadwal</Text>
          <Text style={styles.font}>Agar Ibadahmu</Text>
          <Text style={styles.font}>Teratur</Text>
        </View>
      </SafeAreaView>
      <TouchableOpacity style={styles.Button}>
        <Text
          onPress={() => {
            router.replace("./Home");
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    height: 800,
    backgroundColor: "#fffff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Containerbg: {
    flex: 1,
    width: 360,
    height: "auto",
    alignItems: "center",
  },
  Icon: {
    width: 220,
    height: 220,
    position: "absolute",
  },
  backgr: {
    width: 360,
    height: 411,
    zIndex: -1,
  },
  card: {
    width: 24,
    height: 24,
  },
  font: {
    fontFamily: "Poppins_400Regular",
    fontSize: 38,
  },
  Button: {
    width: 312,
    height: 45,
    backgroundColor: "#40ADAD",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins_400Regular",
    borderRadius: 5,
    marginBottom: 24,
  },
});
