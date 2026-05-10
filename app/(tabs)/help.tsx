import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { color } from "@/constants/colors";
import { data } from "@/constants/data";

const Help = () => {
  return (
    <View style={styles.container}>
      {/* Top Header View */}
      <View style={styles.header}>
        <Text style={styles.title}>Help</Text>
        <Text style={styles.hint}>
          Read the instructions below to use this Application.
        </Text>
      </View>

      <ScrollView>
        <BlurView intensity={140} tint="dark" style={styles.help_container}>
          <Text style={styles.help}>{data.help_instruction}</Text>
        </BlurView>
      </ScrollView>
    </View>
  );
};

export default Help;

// These are styles for this page
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: color.main,
    marginBottom: 10,
  },

  hint: {
    color: color.gray,
  },

  help_container: {
    height: "100%",
    marginTop: "45%",
    paddingTop: 10,
  },

  help: {
    padding: 20,
    fontSize: 18,
    color: color.white
  },
});
