import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import Footer from "../../component/Footer";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import React, { useState } from "react";

export default function InternetProblem() {
  const router = useRouter();
  const [isRotating, setIsRotating] = useState(false); // State untuk menentukan apakah gambar sedang berputar atau tidak

  const spinValue = new Animated.Value(0);

  // First set up animation
  React.useEffect(() => {
    if (isRotating) {
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      spinValue.stopAnimation();
    }
  }, [isRotating]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const toggleRotation = () => {
    setIsRotating((prevState) => !prevState);
  };

  const refreshPage = () => {
    console.log("Refreshing page...");
    router.navigate("/Home");
  };

  const handlePress = () => {
    toggleRotation();
    refreshPage();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ width: 360, height: "auto" }}>
        <View
          style={{
            height: 34,
            marginTop: 38,
            marginLeft: 24,
            marginRight: 34,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 195,
              height: 34,
              backgroundColor: "#C9C9C9",
              borderRadius: 16,
              flexDirection: "row",
            }}
          >
            <Image
              style={{
                width: 18,
                height: 18,
                marginLeft: 10,
                marginTop: 8,
                marginBottom: 8,
              }}
              source={require("../Img/home/Vector.png")}
            />
            <TextInput style={{ outlineStyle: "none", marginLeft: 10 }} />
          </View>
          <Link href={"/Notification.tsx"} asChild>
            <TouchableOpacity>
              <Image
                style={{
                  width: 18,
                  height: 24,
                  marginTop: 5,
                  tintColor: "#707070",
                }}
                source={require("../Img/home/Component 1.png")}
              />
            </TouchableOpacity>
          </Link>
          <View
            style={{
              width: 34,
              height: 34,
              borderRadius: 100,
              backgroundColor: "#707070",
            }}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 145 }}>
          <Image
            source={"/assets/InternetProblem/Box.png"}
            style={{ width: 150, height: 160 }}
          />
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Oops, couldn't
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>load page...</Text>
          <Text style={{ marginTop: 14, color: "#5F5F5F" }}>
            Check your internet again{" "}
          </Text>
          <Text style={{ color: "#5F5F5F" }}>or trying to refresh page</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 44 }}>
          <TouchableOpacity
            onPress={handlePress}
            style={{ width: 24, height: 24 }}
          >
            <Animated.Image
              source={"/Img/InternetProblem/refresh.png"}
              style={{ width: 18, height: 20, transform: [{ rotate: spin }] }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Poppins_600SemiBold",
  },
});
