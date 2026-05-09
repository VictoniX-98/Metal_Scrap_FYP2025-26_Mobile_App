import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View, StyleSheet } from 'react-native'

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Stack 
            screenOptions={{
              headerShown: false
            }} 
          />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}


const styles = StyleSheet.create({
  container: { flex: 1 }
})