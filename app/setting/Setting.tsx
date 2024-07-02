import { StatusBar } from "expo-status-bar";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Image } from "expo-image";
import Footer from "../../component/Footer";
import { router, Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function setting() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Text
          style={{
            marginLeft: 24,
            fontSize: 24,
            fontFamily: "Poppins_400Regular",
            marginTop: 38,
          }}
        >
          Setting
        </Text>
        <Text
          style={{
            marginLeft: 24,
            fontFamily: "Poppins_400Regular",
            marginTop: 32,
          }}
        >
          General
        </Text>

        <View style={styles.containerBox}>
          <View style={styles.box}>
            {/* boxDarkMode */}
            <View
              style={{
                width: "auto",
                height: 52,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "#C2C2C2",
                borderBottomWidth: 3,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={"/Img/Setting/bulanSabit.png"}
                  style={{ width: 24, height: 24, marginLeft: 14 }}
                />
                <Text style={{ marginLeft: 12 }}>Dark Mode</Text>
              </View>
              <Link href={"/component/DarkMode"}>
                <TouchableOpacity>
                  <Image
                    source={"/Img/Setting/Component 3.png"}
                    style={{ width: 24, height: 24, marginRight: 14 }}
                  />
                </TouchableOpacity>
              </Link>
            </View>
            {/* akhir boxDarkMode */}

            {/* Profile Setting */}
            <View
              style={{
                width: "auto",
                height: 52,
                justifyContent: "center",
                borderBottomColor: "#C2C2C2",
                borderBottomWidth: 3,
              }}
            >
              <Link href={"/InternetProblem"} asChild>
                <TouchableOpacity>
                  <View
                    style={{
                      width: "auto",
                      height: 24,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={"/Img/Setting/profile.png"}
                        style={{ width: 24, height: 24, marginLeft: 14 }}
                      />
                      <Text style={{ marginLeft: 12 }}>Profile</Text>
                    </View>
                    <Image
                      source={"/Img/Setting/Component 3.png"}
                      style={{ width: 24, height: 24, marginRight: 14 }}
                    />
                  </View>
                </TouchableOpacity>
              </Link>
            </View>
            {/* Akhir Profile setting */}

            {/* Notification */}
            <View
              style={{
                width: "auto",
                height: 52,
                justifyContent: "center",
                borderBottomColor: "#C2C2C2",
                borderBottomWidth: 3,
              }}
            >
              <Link href={"/Notification_Settings"} asChild>
                <TouchableOpacity>
                  <View
                    style={{
                      width: "auto",
                      height: 24,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={"/Img/Setting/Notification.png"}
                        style={{ width: 24, height: 24, marginLeft: 14 }}
                      />
                      <Text style={{ marginLeft: 12 }}>Notification</Text>
                    </View>
                    <Image
                      source={"/Img/Setting/Component 3.png"}
                      style={{ width: 24, height: 24, marginRight: 14 }}
                    />
                  </View>
                </TouchableOpacity>
              </Link>
            </View>
            {/* Akhir Notification */}

            {/* Help & FaQ */}
            <View
              style={{ width: "auto", height: 52, justifyContent: "center" }}
            >
              <Link href={"/k"} asChild>
                <TouchableOpacity>
                  <View
                    style={{
                      width: "auto",
                      height: 24,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={"/Img/Setting/help.png"}
                        style={{ width: 24, height: 24, marginLeft: 14 }}
                      />
                      <Text style={{ marginLeft: 12 }}>Help & FAQ</Text>
                    </View>
                    <TouchableOpacity>
                      <Image
                        source={"/Img/Setting/Component 3.png"}
                        style={{ width: 24, height: 24, marginRight: 14 }}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
        {/* Akhir Help & FAQ */}

        <Text
          style={{
            marginLeft: 24,
            fontFamily: "Poppins_400Regular",
            marginTop: 24,
          }}
        >
          Policy and Account Terms
        </Text>

        {/* Box Policy */}
        <View style={styles.containerPolicy}>
          <View style={styles.boxPolicy}>
            <View
              style={{
                width: "auto",
                height: 52,
                justifyContent: "center",
                borderBottomColor: "#C2C2C2",
                borderBottomWidth: 3,
              }}
            >
              <Link href={"k"} asChild>
                <TouchableOpacity>
                  <View
                    style={{
                      width: "auto",
                      height: 24,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={"/Img/Setting/note.png"}
                        style={{ width: 24, height: 24, marginLeft: 14 }}
                      />
                      <Text style={{ marginLeft: 12 }}>Privacy Policy</Text>
                    </View>
                    <Image
                      source={"/Img/Setting/Component 3.png"}
                      style={{ width: 24, height: 24, marginRight: 14 }}
                    />
                  </View>
                </TouchableOpacity>
              </Link>
            </View>

            <View
              style={{ width: "auto", height: 52, justifyContent: "center" }}
            >
              <Link href={"k"} asChild>
                <TouchableOpacity>
                  <View
                    style={{
                      width: "auto",
                      height: 24,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={"/Img/Setting/note.png"}
                        style={{ width: 24, height: 24, marginLeft: 14 }}
                      />
                      <Text style={{ marginLeft: 12 }}>
                        Terms and Conditions
                      </Text>
                    </View>
                    <Image
                      source={"/Img/Setting/Component 3.png"}
                      style={{ width: 24, height: 24, marginRight: 14 }}
                    />
                  </View>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
        {/* Akhir Box Policy */}

        {/* Box Give feedback */}
        <View style={styles.containerFeedback}>
          <View style={styles.boxFeedback}>
            <View
              style={{ width: "auto", height: 52, justifyContent: "center" }}
            >
              <Link href={"/"} asChild>
                <TouchableOpacity>
                  <View
                    style={{
                      width: "auto",
                      height: 24,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={"/Img/Setting/like.png"}
                        style={{ width: 24, height: 24, marginLeft: 14 }}
                      />
                      <Text style={{ marginLeft: 12 }}>Give Feedback</Text>
                    </View>
                    <Image
                      source={"/Img/Setting/Component 3.png"}
                      style={{ width: 24, height: 24, marginRight: 14 }}
                    />
                  </View>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
        {/*  Akhir Box Give feedback */}
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
