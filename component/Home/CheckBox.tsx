import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { StyleSheet, View } from "react-native";

const checkbox = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginRight: 15,
  },
  checkbox: {
    alignSelf: "center",
  },
});

export default checkbox;
