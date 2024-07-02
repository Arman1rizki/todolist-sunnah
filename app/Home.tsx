import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image } from "expo-image";
import { router, Link } from "expo-router";
import Box from "../component/Home/Box";
import Footer from "../component/Footer";
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView style={styles.Head}>
        <View style={styles.row}>
          <View style={styles.search}>
            <Image
              style={styles.serc}
              source={require("../Img/home/Vector.png")}
            ></Image>
            <TextInput
              style={{ outlineStyle: "none", marginLeft: 10 }}
            ></TextInput>
          </View>
          <Link href={"/Notification.tsx"} asChild>
            <TouchableOpacity>
              <Image
                style={styles.img}
                source={require("../Img/home/Component 1.png")}
              />
            </TouchableOpacity>
          </Link>
          <View style={styles.Profile}></View>
        </View>
        <View style={{ width: 360, marginTop: 38 }}>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.card}></View>
            <View style={{ width: 14 }} />
            <View style={styles.card}></View>
            <View style={{ width: 14 }} />
            <View style={styles.card}></View>
          </ScrollView>
        </View>
        <View style={styles.containerText}>
          <SafeAreaView style={styles.text}>
            <Text>Task</Text>
            <Text>See More</Text>
          </SafeAreaView>
        </View>
        <Box />
      </SafeAreaView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Head: {
    width: 360,
    height: 188,
    borderBottomLeftRadius: 50,
    borderBottomEndRadius: 50,
    backgroundColor: "#2C9999",
  },
  row: {
    height: 34,
    marginTop: 38,
    marginLeft: 24,
    marginRight: 34,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serc: {
    width: 18,
    height: 18,
    marginLeft: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  Profile: {
    width: 34,
    height: 34,
    borderRadius: 100,
    backgroundColor: "white",
  },
  search: {
    width: 195,
    height: 34,
    backgroundColor: "white",
    borderRadius: 16,
    flexDirection: "row",
  },
  img: {
    width: 18,
    height: 24,
    backgroundColor: "#2C9999",
    marginTop: 5,
  },
  // * Akhir Head

  card: {
    width: 276,
    height: 167,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    shadowRadius: 1,
  },

  // * container text
  containerText: {
    width: "auto",
    height: "auto",
    alignItems: "center",
    marginTop: 38,
    justifyContent: "space-between",
  },
  text: {
    flexDirection: "row",
    gap: 212,
  },
  // * Akhir text container
});
