import { StyleSheet, Text, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { Months } from "../../Context/Categories";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Icon from "../General/Icon";
import { Colors } from "../../styles/Colors";
export default function MonthSelector({ setSelectedMonth }) {
  const [shown, setShown] = useState(false);
  return (
    <View style={styles.container}>
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
  container: {
    width: "100%",
  },
  selectButton: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  selectButtonText: {
    fontSize: 16,
    fontWeight: "100",
    marginRight: 4,
  },
  dropdownContainer: {
    height: 120,
    top: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  monthContainer: {
    paddingVertical: 10,
    borderBottomColor: Colors.White,
    borderBottomWidth: 2,
  },
  month: {
    textAlign: "center",
  },
});
