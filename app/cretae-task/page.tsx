import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { router, Link } from "expo-router";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.containerTask}>
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
            <Link href={"/Home"} asChild>
              <TouchableOpacity>
                <Image
                  source={require("../Img/Create-task/Vector.png")}
                  style={{ width: 8.68, height: 14.33 }}
                />
              </TouchableOpacity>
            </Link>
          </View>
          <Text
            style={{ width: 68, height: 21, fontFamily: "Poppins_600SemiBold" }}
          >
            {" "}
            New Task{" "}
          </Text>
        </View>
        <Text
          style={{
            marginTop: 43,
            marginLeft: 40,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Title
        </Text>
        <View
          style={{
            width: "auto",
            height: "auto",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <TextInput
            style={{
              width: 312,
              height: 45,
              backgroundColor: "#ddd",
              borderRadius: 5,
              outlineStyle: "none",
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 43,
            marginLeft: 40,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Date
        </Text>
        <View
          style={{
            width: "auto",
            height: "auto",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <TextInput
            style={{
              width: 312,
              height: 45,
              backgroundColor: "#ddd",
              borderRadius: 5,
              outlineStyle: "none",
            }}
          />
        </View>
        <View style={{ marginTop: 24, marginLeft: 24, flexDirection: "row" }}>
          <View>
            <Text style={{ fontFamily: "Poppins_600SemiBold" }}>Start</Text>
            <TextInput
              style={{
                width: 76,
                height: 45,
                backgroundColor: "#ddd",
                borderRadius: 5,
                marginTop: 12,
                outlineStyle: "none",
              }}
            />
          </View>
          <View style={{ marginLeft: 24 }}>
            <Text style={{ fontFamily: "Poppins_600SemiBold" }}>End</Text>
            <TextInput
              style={{
                width: 76,
                height: 45,
                backgroundColor: "#ddd",
                borderRadius: 5,
                marginTop: 12,
                outlineStyle: "none",
              }}
            />
          </View>
        </View>
        <Text
          style={{
            marginTop: 24,
            marginLeft: 24,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Description
        </Text>
        <View style={{ alignItems: "center" }}>
          <TextInput
            style={{
              width: 312,
              height: 110,
              backgroundColor: "#ddd",
              marginTop: 12,
              borderRadius: 5,
              outlineStyle: "none",
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 24,
            marginLeft: 24,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Add Category
        </Text>
        <View style={{ alignItems: "center", marginTop: 24 }}>
          <View
            style={{
              width: 312,
              height: 45,
              backgroundColor: "#ddd",
              justifyContent: "center",
              flexDirection: "row",
              borderRadius: 5,
            }}
          >
            <TextInput
              style={{ width: 275, height: 45, outlineStyle: "none" }}
            />
            <Image
              source={require("../Img/Create-task/Component 1.png")}
              style={{ width: 24, height: 24, marginTop: 11 }}
            />
          </View>
        </View>
      </SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: 312,
            height: 45,
            backgroundColor: "#40ADAD",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <TouchableOpacity>
            <Text style={{ color: "white" }}>Create Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: 800,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerTask: {
    width: 360,
    height: "auto",
    justifyContent: "flex-start",
  },
});
