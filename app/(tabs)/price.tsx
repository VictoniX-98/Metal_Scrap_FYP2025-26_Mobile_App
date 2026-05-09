import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "@/constants/colors";
import { BlurView } from "expo-blur";
import { data } from "@/constants/data";

const Price = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header View */}
      <View style={styles.header}>
        <Text style={styles.title}>Guide Price</Text>
        <Text style={styles.hint}>
          Prices shown in this page are /kg of a given metal
        </Text>
      </View>

      {/* Scroll View with BlurBackground */}
        <FlatList
          data={data.metal_details}
          style={styles.contents}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <BlurView intensity={140} tint="dark" style={styles.price_card}>
                <Image source={item.image} style={styles.metal_image} />
                <View style={styles.metal_details}>
                  <Text style={styles.metal_title}>{item.title}</Text>
                  <Text style={styles.metal_description}>
                    {item.description}
                  </Text>
                  <Text style={styles.metal_price}>
                    TZS: {item.price.toLocaleString("en-TZ")}/=
                  </Text>
                </View>
            </BlurView>
          )}
        />
    </SafeAreaView>
  );
};
export default Price;

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

  contents: {
    height: "100%",
    paddingTop: "40%",
  },

  price_card: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderColor: color.main,
  },

  metal_image: {
    height: 100,
    width: 150,
    borderRadius: 20,
  },

  metal_details: {
    flexShrink: 1,
    marginLeft: 20,
  },

  metal_title: {
    fontSize: 30,
    fontWeight: "bold",
    color: color.background,
  },

  metal_description: {
    fontSize: 16,
    color: color.gray,
  },

  metal_price: {
    fontSize: 20,
    color: color.white,
  },
});
