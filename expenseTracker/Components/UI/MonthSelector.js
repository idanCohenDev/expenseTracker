import { StyleSheet, Text, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { Months } from "../../Context/Categories";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Icon from "./Icon";

export default function MonthSelector({ setSelectedMonth }) {
  const [shown, setShown] = useState(false);
  return (
    <View>
      <Pressable
        style={styles.selectButton}
        onPress={() => setShown((prevShown) => !prevShown)}
      >
        <Text style={styles.selectButtonText}>Select Month</Text>
        <Icon name={shown ? "caret-up" : "caret-down"} size={16} color="#000" />
      </Pressable>
      {shown && (
        <ScrollView style={styles.dropdownContainer}>
          {Months.map((month, index) => (
            <Pressable
              onPress={() => {
                setShown(false);
                setSelectedMonth(month);
              }}
              key={index}
            >
              <View style={styles.monthContainer}>
                <Text style={styles.month}>{month}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  selectButton: {
    flexDirection: "row",
  },
  selectButtonText: {
    fontSize: 16,
    fontWeight: "100",
    marginRight: 4,
  },
  dropdownContainer: {
    height: 120,
    top: 24,
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 16,
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
  },
  monthContainer: {
    paddingVertical: 8,
  },
  month: {
    textAlign: "center",
  },
});
