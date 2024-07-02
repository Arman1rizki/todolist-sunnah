import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { router, Link } from "expo-router";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useNetInfo } from "@react-native-community/netinfo";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import InternetProblem from "../internetproblem/InternetProblem";

function LoginPage() {
  const [string, onChangeMail] = React.useState("");
  const [number, onChangePassword] = React.useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ width: 360, height: "auto" }}>
        <View>
          <Image
            source={require("../assets/Login/Rectangle-41.png")}
            style={{
              backgroundColor: "red",
              width: 360,
              height: 165,
              position: "absolute",
            }}
          />
          <Text
            style={{
              marginLeft: 24,
              marginTop: 91,
              fontSize: 32,
              fontFamily: "Poppins_600SemiBold",
              color: "#FFFFFF",
            }}
          >
            Sign In
          </Text>
        </View>

        {/* Username Email */}
        <View style={{ alignItems: "center", marginTop: 122 }}>
          <View
            style={{
              width: 312,
              height: 59,
              backgroundColor: "#D9D9D9",
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <TextInput
              style={styles.Mail}
              onChangeText={onChangeMail}
              value={string}
              placeholder="Username or email"
              keyboardType="email-address"
            />
          </View>
        </View>
        {/* Akhir Username Email */}

        {/* Password */}
        <View style={{ alignItems: "center", marginTop: 18 }}>
          <View
            style={{
              width: 312,
              height: 59,
              backgroundColor: "#D9D9D9",
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <TextInput
              style={styles.password}
              onChangeText={onChangePassword}
              value={number}
              placeholder="Password"
              keyboardType="visible-password"
              textContentType="password"
              secureTextEntry
            />
          </View>
        </View>
        {/* Akhir Password */}

        {/*  Buat Akun */}
        <View style={{ alignItems: "center", marginTop: 32 }}>
          <View style={{ height: 21, width: 208, flexDirection: "row" }}>
            <Text>Don’t have account? </Text>
            <Link href={"/Sign_up"} asChild>
              <TouchableOpacity>
                <Text style={{ color: "#D9D9D9" }}> Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
        {/*   Akhir Buat Akun */}

        <View style={{ alignItems: "center", marginTop: 32 }}>
          <Text>Or</Text>
        </View>

        {/* Icon */}
        <View style={{ alignItems: "center", marginTop: 21 }}>
          <View
            style={{
              width: 111,
              height: 44,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity>
              <Image
                source={"/Img/Login/google.png"}
                style={{ height: 55, width: 55 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={"/Img/Login/facebook.png"}
                style={{ height: 55, width: 55 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Akhir Icon */}
      </SafeAreaView>

      <View style={{ alignItems: "center", marginTop: 178 }}>
        <View
          style={{
            width: 312,
            height: 45,
            backgroundColor: "#40ADAD",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginBottom: 24,
          }}
        >
          <TouchableOpacity>
            <Text style={{ color: "#fff", fontFamily: "Poppins_600SemiBold" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function login() {
  const netInfo = useNetInfo();
  return (
    <View style={styles.container}>
      {netInfo.isConnected ? <LoginPage /> : <InternetProblem />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 800,
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Poppins_600SemiBold",
  },
  Mail: {
    height: 40,
    margin: 12,
    padding: 10,
    outlineStyle: "none",
  },
  password: {
    height: 40,
    margin: 12,
    padding: 10,
    outlineStyle: "none",
  },
});
