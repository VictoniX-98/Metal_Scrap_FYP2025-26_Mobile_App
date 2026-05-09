import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { data } from "@/constants/data";
import Icon from "react-native-vector-icons/FontAwesome";
import { color } from "@/constants/colors";

const ActivityIcon = ({
  icon_name,
  icon_size,
}: {
  icon_name: string;
  icon_size?: number;
}) => {
  return <Icon name={icon_name} size={icon_size ?? 24} color={color.gray} />;
};

const Activities = () => {
  return (
    <SafeAreaView>
      <BlurView intensity={100} tint="dark" style={styles.background}>
        <FlatList
          data={data.activities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable style={styles.activity}>
              <View>
                <ActivityIcon icon_name={item.icon_name} />
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              </View>
			  <ActivityIcon icon_name="angle-right" />
            </Pressable>
          )}
        />
      </BlurView>
    </SafeAreaView>
  );
};

export default Activities;

// Styles for this page
const styles = StyleSheet.create({
  background: { flex: 1 },

  activity: {
	borderBottomWidth: 1
  }
});
