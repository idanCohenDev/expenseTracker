import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Months, Years } from "../../Context/Categories";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Icon from "../General/Icon";
import CategoryDropdown from "../General/CategoryDropdown";
export default function DateSelector({ setSelectedMonth, setSelectedYear, type }) {
  const [shown, setShown] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.selectButton}
        onPress={() => setShown((prevShown) => !prevShown)}
      >
        <Text style={styles.selectButtonText}>
          {type === "month" ? "Select Month" : "Select Year"}
        </Text>
        <Icon name={shown ? "caret-up" : "caret-down"} size={16} color="#000" />
      </Pressable>
      {shown && (
        <CategoryDropdown
          customStyle={styles.dropdown}
          data={type === "month" ? Months : Years}
          icon={false}
          categorySelectHandler={(data) =>
            type === "month" ? setSelectedMonth(data) : setSelectedYear(data)
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    zIndex: 1,
  },
  selectButton: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
  },
  selectButtonText: {
    fontSize: 16,
    fontWeight: "100",
    marginRight: 4,
  },
  dropdown: {
    transform: [{ translateY: 300 }, { translateX: 0 }],
    left: 0,
  },
});
