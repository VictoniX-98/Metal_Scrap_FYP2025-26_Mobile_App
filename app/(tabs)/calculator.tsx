import { color } from "@/constants/colors";
import { data } from "@/constants/data";
import { Picker } from "@react-native-picker/picker";
import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Calculator = () => {
  const [unit, setUnit] = useState<number>(
    data.mass_unit[0]?.relation_to_kg ?? 0.001,
  );
  const [metalId, setMetalId] = useState<number>(
    data.metal_details[0]?.id ?? 0,
  );
  const [currency, setCurrency] = useState<number>(
    data.currency[0]?.relation_to_tzs ?? 0,
  );
  const [mass, setMass] = useState<string>('');
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);

  const selected_metal =
    data.metal_details.find((item) => item.id === metalId) ??
    data.metal_details[0];

  useEffect(() => {
    const given_mass = Number(mass)
    const mass_in_kg = given_mass * unit
    const price = mass_in_kg * selected_metal.price
    setCalculatedPrice(price * currency)
  }, [mass, unit, currency, selected_metal])

  // const calculatePrice = (text: string) => {
  //   const mass = Number(text);
  //   const mass_in_kg = mass * unit;
  //   const price = mass_in_kg * selected_metal.price;
  //   setCalculatedPrice(price * currency)
  // }

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header View */}
      <View style={styles.header}>
        <Text style={styles.title}>Calculator</Text>
        <Text style={styles.hint}>Calculate Price of your Scrap Metal</Text>
      </View>

      <BlurView intensity={140} tint="dark" style={styles.calculator}>
        <BlurView intensity={140} tint="dark" style={styles.display}>
          <TextInput
            keyboardType="numeric"
            onChangeText={setMass}
            style={styles.input}
          />
          <Text style={styles.usage_hint}>
            Enter metal mass above to calculate its price.
          </Text>
          <Text style={styles.price}>{calculatedPrice.toLocaleString()}</Text>
        </BlurView>

        <View style={styles.options}>
          {/* Unit selection Option */}
          <View style={styles.option}>
            <Text style={styles.option_hint}>Select Mass unit</Text>
            <Picker
              style={styles.option_picker}
              selectedValue={unit}
              onValueChange={(item_value) => setUnit(item_value)}
            >
              {data.mass_unit.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={`${item.title} (${item.symbol})`}
                  value={item.relation_to_kg}
                />
              ))}
            </Picker>
          </View>

          {/* Currency selection Option */}
          <View style={styles.option}>
            <Text style={styles.option_hint}>Select Currency value</Text>
            <Picker
              style={styles.option_picker}
              selectedValue={currency}
              onValueChange={(item_value) => setCurrency(item_value)}
            >
              {data.currency.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={`${item.title} (${item.symbol})`}
                  value={item.relation_to_tzs}
                />
              ))}
            </Picker>
          </View>
        </View>

        {/* Metal selection Option */}
        <View style={styles.metal_option}>
          <Text style={styles.option_hint}>Select Metal type</Text>
          <Picker
            style={styles.metal_option_picker}
            selectedValue={metalId}
            onValueChange={(item_value) => setMetalId(item_value)}
          >
            {data.metal_details.map((item, index) => (
              <Picker.Item key={index} label={item.title} value={item.id} />
            ))}
          </Picker>
        </View>

        {/* Metal Image & Details */}
        <View style={styles.price_card}>
          <Image source={selected_metal.image} style={styles.metal_image} />
          <View style={styles.metal_details}>
            <Text style={styles.metal_title}>{selected_metal.title}</Text>
            <Text style={styles.metal_description}>
              {selected_metal.description}
            </Text>
            <Text style={styles.metal_price}>
              TZS: {selected_metal.price.toLocaleString("en-TZ")}/=
            </Text>
          </View>
        </View>
      </BlurView>
    </SafeAreaView>
  );
};

export default Calculator;

// Styles of this page
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

  calculator: {
    height: "100%",
    marginTop: "40%",
    paddingTop: 10,
  },

  display: {
    borderTopWidth: 0.15,
    borderBottomWidth: 0.15,
    borderColor: color.gray,
  },

  input: {
    height: 100,
    fontSize: 60,
    paddingLeft: 10,
    color: color.black,
    backgroundColor: color.white_gray
  },

  usage_hint: {
    padding: 5,
    paddingLeft: 15,
    marginBottom: 12,
    fontSize: 18,
    color: color.white,
    borderBottomWidth: 0.15,
    borderColor: color.gray,
  },

  price: {
    fontSize: 30,
    color: color.white,
    textAlign: "right",
    marginBottom: 12,
    marginRight: 20,
  },

  options: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  option: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 5,
  },

  option_hint: {
    fontSize: 16,
    color: color.white,
  },

  option_picker: {
    width: 180,
    backgroundColor: color.background,
  },

  metal_option: {
    margin: 12,
  },

  metal_option_picker: {
    width: "100%",
    borderWidth: 1,
    borderColor: color.primary,
    backgroundColor: color.background,
  },

  price_card: {
    padding: 12,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
