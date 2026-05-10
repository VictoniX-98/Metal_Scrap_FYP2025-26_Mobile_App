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
  icon_color,
  container_width,
}: {
  icon_name: string;
  icon_size?: number;
  icon_color?: string;
  container_width?: number;
}) => {
  return (
    <View style={{ width: container_width, alignItems: "center" }}>
      <Icon name={icon_name} size={icon_size ?? 38} color={icon_color ?? color.gray} />
    </View>
  );
};

const Account = () => {
  return (
      <BlurView intensity={140} tint="dark" style={styles.background}>
        {/* Header Profile Info */}
        <View style={styles.header_container}>
          <View style={styles.profile_pic}>
            <ActivityIcon icon_name="user-o" icon_color={color.white}/>
          </View>
          <View style={styles.user_details}>
            <Text style={styles.username}>Victor A. Magayane</Text>
            <Text style={styles.email}>victonix98@gmail.com</Text>
          </View>
        </View>

        {/* Activities List */}
        <FlatList
          data={data.activities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable style={styles.activity}>
              <View style={styles.data}>
                <ActivityIcon icon_name={item.icon_name} container_width={60} />
                <View style={styles.description}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.hint}>{item.hint}</Text>
                </View>
              </View>
              <ActivityIcon icon_name="angle-right" icon_size={30} />
            </Pressable>
          )}
        />
      </BlurView>
  );
};

export default Account;

// Styles for this page
const styles = StyleSheet.create({
  background: { height: "100%" },

  header_container: {
    padding: 24,
    marginTop: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  profile_pic: {
    width: 70,
    height: 70,
    borderWidth: .2,
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.gray,
  },

  user_details: {
    marginLeft: 20,
    gap: 3,
  },

  username: {
    fontSize: 28,
    fontWeight: "bold",
    color: color.main
  },

  email: {
    fontSize: 16,
    paddingLeft: 5,
    color: color.background
  },

  activity: {
    padding: 20,
    paddingLeft: 24,
    paddingRight: 24,
    borderBottomWidth: .15,
    borderColor: color.gray,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  data: { flexDirection: "row" },

  description: {
    gap: 5,
    marginLeft: 20,
  },

  title:{
    fontSize: 18,
    fontWeight: "bold",
    color: color.background
  },

  hint: {
    fontSize: 12,
    color: color.white
  }
});
