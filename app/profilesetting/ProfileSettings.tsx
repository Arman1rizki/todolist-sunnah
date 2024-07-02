import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { router, Link } from "expo-router";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function ProfileSettingg() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ width: 360, height: "auto" }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            marginLeft: 40,
            marginRight: 145,
          }}
        >
          <View style={{ marginRight: 99 }}>
            <Link href={"/Setting"} asChild>
              <TouchableOpacity>
                <Image
                  source={require("../Img/Create-task/Vector.png")}
                  style={{ width: 8.68, height: 14.33 }}
                />
              </TouchableOpacity>
            </Link>
          </View>
          <Text
            style={{
              width: 108,
              height: 21,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            {" "}
            Profile Settings{" "}
          </Text>
        </View>
        {/* Profile */}
        <View style={{ alignItems: "center", marginTop: 42 }}>
          <Image
            source={"/Img/ProfileSettingg/gambar.png"}
            style={{ width: 100, height: 100, zIndex: 10 }}
          />
        </View>
        {/* Akhir Profile */}

        {/* UserName */}
        <View style={{ marginLeft: 24, marginRight: 24 }}>
          <Text>Username</Text>
          <TextInput
            style={{
              width: 312,
              height: 42,
              backgroundColor: "#ddd",
              borderRadius: 5,
              marginTop: 14,
            }}
          />
        </View>
        {/* Akhir UserName */}

        {/* name */}
        <View style={{ marginLeft: 24, marginRight: 24 }}>
          <Text>Name</Text>
          <TextInput
            style={{
              width: 312,
              height: 42,
              backgroundColor: "#ddd",
              borderRadius: 5,
              marginTop: 14,
            }}
          />
        </View>
        {/* Akhir name */}

        {/* Bio */}
        <View style={{ marginLeft: 24, marginRight: 24 }}>
          <Text>Name</Text>
          <TextInput
            style={{
              width: 312,
              height: 129,
              backgroundColor: "#ddd",
              borderRadius: 5,
              marginTop: 14,
            }}
          />
        </View>
        {/* akhir Bio */}
      </SafeAreaView>
      <View style={{ alignItems: "center", marginTop: 132 }}>
        <View
          style={{
            width: 312,
            height: 42,
            backgroundColor: "#40ADAD",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <Link href={"/Setting"}>
            <TouchableOpacity>
              <Text style={{ color: "white" }}>Save Setting</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 800,
    alignItems: "center",
    justifyContent: "space-between",
  },
  // Dark Mode
  containerBox: {
    width: 360,
    height: 208,
    marginTop: 14,
    alignItems: "center",
  },
  box: {
    width: 310,
    height: 210,
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#C2C2C2",
  },
  // Akhir Dark Mode

  // Box Policy
  containerPolicy: {
    width: 360,
    height: "auto",
    marginTop: 14,
    alignItems: "center",
  },

  boxPolicy: {
    width: 310,
    height: 104,
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#C2C2C2",
  },
  //  Akhir Box Policy

  //  box Give FeedBack
  containerFeedback: {
    width: 360,
    height: 52,
    marginTop: 24,
    alignItems: "center",
  },
  boxFeedback: {
    width: 310,
    height: 52,
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#C2C2C2",
  },

  //   akhir box Give FeedBack
});
