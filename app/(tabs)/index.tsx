import { color } from '@/constants/colors';
import { data } from '@/constants/data';
import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Search Section */}
      <View style={styles.search}>
        <TextInput 
          style={styles.search_input}
          placeholder='Search buyers & metals'
          clearButtonMode='while-editing'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Pressable><Text>Search</Text></Pressable>
      </View>

      {/* Top Buyyers section */}
      <View>
        <Text style={styles.top_buyer_heading}>Top Buyers</Text>
        <FlatList
          data={data.top_buyers}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.top_buyer_list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.top_buyer}>
              <Image source={item.image} style={styles.top_buyer_image} />
              <Text style={styles.top_buyer_title}>{item.name}</Text>
            </View>
          )}
        />
      </View>
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
    flexDirection: "column",
  },

  search: {
    flexDirection: "row",
    fontSize: 20,
  },

  search_input: {
    width: '80%',
    height: 45,
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: color.main,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },

  top_buyer_heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color: color.main
  },

  top_buyer_list: {
    gap: 20,
    margin: 10
  },

  top_buyer: {
    alignItems: 'center',
    gap: 5
  },

  top_buyer_image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: color.main
  },

  top_buyer_title: {
    fontWeight: 'bold'
  }

})