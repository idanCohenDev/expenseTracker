import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { Months, Years } from "../../Context/staticData";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Icon from "../General/General/Icon";
import CategoryDropdown from "../General/General/CategoryDropdown";
const { width, height } = Dimensions.get("screen");
export default function DateSelector({ setSelectedMonth, setSelectedYear, type }) {
  const [shown, setShown] = useState(false);
  const [data, setData] = useState({
    year: "",
    month: "",
  });
  const labelHandler = () => {
    if (type === "month") {
      if (data.month) {
        return data.month;
      } else {
        return "Select Month";
      }
    } else {
      if (data.year) {
        return data.year;
      } else {
        return "Select Year";
      }
    }
  };
  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={() => setShown((prevShown) => !prevShown)}
      >
        <Text style={styles.selectButtonText}>{labelHandler()}</Text>
        <Icon name={shown ? "caret-up" : "caret-down"} size={16} color="#000" />
      </Pressable>

      {shown && (
        <CategoryDropdown
          closeDropdown={() => setShown(false)}
          customStyle={type === "year" && styles.dropdownYear}
          data={type === "month" ? Months : Years}
          icon={false}
          categorySelectHandler={(date) => {
            if (type === "month") {
              setData({ ...data, month: date });
              setSelectedMonth(date);
            } else {
              setData({ ...data, year: date });
              setSelectedYear(date);
            }
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 8,
    width: width * 0.4,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  dropdownYear: {
    width: width * 0.3,
    transform: [{ translateX: width * 0.05 }],
  },
  selectButton: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  selectButtonText: {
    fontSize: 16,
    marginRight: 4,
  },
});
