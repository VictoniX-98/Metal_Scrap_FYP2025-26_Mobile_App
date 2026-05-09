import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "@/constants/colors"
import { image } from "@/constants/images"

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
		<Text>This is the Home page</Text>
	</SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  }

})