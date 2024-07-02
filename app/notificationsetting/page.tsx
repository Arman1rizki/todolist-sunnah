import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import Footer from "../../component/Footer";
import { Link } from "expo-router";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotifcationSetting() {
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        width: "auto",
        height: 800,
      }}
    >
      <SafeAreaView>
        <View style={{ marginRight: 312, marginTop: 38 }}>
          <Link href={"/Setting"} asChild>
            <TouchableOpacity>
              <Image
                source={require("../Img/Create-task/Vector.png")}
                style={{ width: 8.68, height: 14.33 }}
              />
            </TouchableOpacity>
          </Link>
        </View>
        <View style={{ height: 72, width: 142, marginTop: 32 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Poppins_600SemiBold",
              flexDirection: "column",
              fontWeight: "bold",
            }}
          >
            Notification Settings
          </Text>
        </View>

          <Text style={{ marginTop: 32 }}>General</Text>
          
        {/* BoxSetting */}

        <View style={styles.containerBox}>
          <View style={styles.box}>
            
            {/* Notification Sound */}
            <View
              style={{
                width: "auto",
                height: 52,
                justifyContent: "center",
                borderBottomColor: "#C2C2C2",
                borderBottomWidth: 3,
              }}
            >
                
                <Link href={"/Notification_Type"} asChild>
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
                      <Text style={{ marginLeft: 12 }}>Notification Sound</Text>
                    </View>
                    <Image
                      source={"/Img/Setting/Component 3.png"}
                      style={{ width: 24, height: 24, marginRight: 14 }}
                    />
                  </View>
                </TouchableOpacity>
              </Link>
            </View>
            {/* akhir Notification Sound */}

            {/* Notification Type */}
            <View
              style={{
                width: "auto",
                height: 52,
                justifyContent: "center",
                borderBottomColor: "#C2C2C2",
                borderBottomWidth: 3,
              }}
            >
              <Link href={"/Notification_Type"} asChild>
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
                      <Text style={{ marginLeft: 12 }}>Notification Type</Text>
                    </View>
                    <Image
                      source={"/Img/Setting/Component 3.png"}
                      style={{ width: 24, height: 24, marginRight: 14 }}
                    />
                  </View>
                </TouchableOpacity>
              </Link>
            </View>
            {/* Akhir Notification Type */}

            {/* Notification Priority */}
            <View
              style={{
                width: "auto",
                height: 52,
                justifyContent: "center",
                borderBottomColor: "#C2C2C2",
                borderBottomWidth: 3,
              }}
            >
              <Link href={"/Notification_Priority"} asChild>
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
                      <Text style={{ marginLeft: 12 }}>Notification Priority</Text>
                    </View>
                    <Image
                      source={"/Img/Setting/Component 3.png"}
                      style={{ width: 24, height: 24, marginRight: 14 }}
                    />
                  </View>
                </TouchableOpacity>
              </Link>
            </View>
            {/* Akhir Notification Priority */}

            {/* Notification Frequency */}
            <View
              style={{
                width: "auto",
                height: 52,
                justifyContent: "center",
                borderBottomColor: "#C2C2C2",
              }}
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
                      <Text style={{ marginLeft: 12 }}>Notification Frequency</Text>
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
        {/* Notification Frequency */}

        {/* BoxSetting */}

      </SafeAreaView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
