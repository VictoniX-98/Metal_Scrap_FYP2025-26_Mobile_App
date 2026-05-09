import { Tabs } from "expo-router";
import { color } from "@/constants/colors";
import { image } from "@/constants/images";
import Icon from "react-native-vector-icons/Fontisto";
import { View, ImageBackground, StyleSheet } from "react-native";

// Component to render TabBar Icons
const TabBarIcon = ({
  focused,
  icon_name,
  icon_size,
  icon_color,
}: {
  focused?: boolean;
  icon_name: string;
  icon_size?: number;
  icon_color?: string;
}) => {
  return (
    <Icon
      name={icon_name}
      size={icon_size ?? 30}
      color={icon_color ?? (focused ? color.black : color.tabBar_icon)}
    />
  );
};

const _layout = () => {
  return (
    <ImageBackground source={image.background} style={styles.container}>
      {/* Application Tabs*/}
      <Tabs
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: styles.tab_bar,
          tabBarLabelStyle: styles.tab_bar_label,
          sceneStyle: { backgroundColor: "transparent" },
        }}
      >
        <Tabs.Screen
          name="price"
          options={{
            headerShown: false,
            tabBarLabel: "Guide Price",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} icon_name="wallet" icon_size={25} />
            ),
          }}
        />

        <Tabs.Screen
          name="calculator"
          options={{
            headerShown: false,
            tabBarLabel: "Calculator",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon_name="calculator"
                icon_size={24}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <View style={styles.center_icon_view}>
                <TabBarIcon
                  focused={focused}
                  icon_name="recycle"
                  icon_size={35}
                  icon_color={focused ? color.white : color.background}
                />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="activities"
          options={{
            headerShown: false,
            tabBarLabel: "Activities",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon_name="spinner-fidget"
                icon_size={27}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="help"
          options={{
            headerShown: false,
            tabBarLabel: "Help",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon_name="question"
                icon_size={28}
              />
            ),
          }}
        />
      </Tabs>
    </ImageBackground>
  );
};

export default _layout;

// Page styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tab_bar: {
    height: 70,
    paddingTop: 5,
    backgroundColor: color.background,
  },

  tab_bar_label: {
    fontSize: 14,
    fontWeight: "bold",
    color: color.black,
  },

  center_icon_view: {
    height: 60,
    width: 80,
    borderWidth: 1,
    borderColor: color.primary,
    marginBottom: 20,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.main,
  },
});
