import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Image } from "expo-image";
import { router, Link } from "expo-router";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Link href={"/Home"} asChild>
        <TouchableOpacity>
          <Image style={styles.icon} source={require("../Img/home/Home.png")} />
        </TouchableOpacity>
      </Link>
      <Link href={"/Login"} asChild>
        <TouchableOpacity>
          <Image style={styles.icon} source={require("../Img/home/Plus.png")} />
        </TouchableOpacity>
      </Link>
      <Link href={"/Setting"} asChild>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../Img/home/setting.png")}
          />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 70,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    shadowRadius: 0.7,
  },
  icon: {
    width: 24,
    height: 24,
    backgroundColor: "white",
  },
});

export default Footer;
