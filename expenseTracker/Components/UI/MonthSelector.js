import { StyleSheet, Text, ScrollView, Button, View } from "react-native";
import React, { useState } from "react";
import { Months } from "../../Context/Categories";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function MonthSelector({ setSelectedMonth }) {
  const [shown, setShown] = useState(false);
  return (
    <>
      <Button
        title="Select Month"
        onPress={() => setShown((prevShown) => !prevShown)}
      />
      {shown && (
        <View style={styles.dropdownContainer}>
          <ScrollView>
            {Months.map((month, index) => (
              <Pressable
                onPress={() => {
                  setShown(false);
                  setSelectedMonth(month);
                }}
                key={index}
              >
                <View>
                  <Text>{month}</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    height: 100,
  },
});
