import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { router } from 'expo-router'
import { image } from '@/constants/images'

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)')
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.splash_image}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})