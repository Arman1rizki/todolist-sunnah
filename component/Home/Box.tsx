// import { textChangeRangeNewSpan } from "typescript";
import Checkbox from "./CheckBox";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";

// const

const Box = () => {
  return (
    <SafeAreaView>
      <View style={styles.componentsBox}>
        <View style={styles.boxComponents}>
          <View style={styles.box}>
            <Text>{}</Text>
          </View>
          <View>
            <Checkbox />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  componentsBox: {
    width: "auto",
    height: "auto",
    marginTop: 15,
    alignItems: "center",
  },
  boxComponents: {
    width: 311,
    height: 51,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    justifyContent: "space-between",
    shadowRadius: 1.7,
  },
  box: {
    marginLeft: 15,
  },
});

export default Box;
