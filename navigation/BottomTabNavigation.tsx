import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Cart } from "../screens";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { NavigationProps, ScreenOptionsProps } from "../utils/interface";
import { AntDesign } from "@expo/vector-icons";
import { Image, Text } from "react-native";
const Tab = createBottomTabNavigator<NavigationProps>();
import { logo } from "../utils/profileIcon";
import { checkImageURL } from "../utils/imageCheck";

const screenOptions = {
  tabBarShowLabel: true,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 70,
  },
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions as ScreenOptionsProps}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                className="font-normal text-[14px] leading-[20px] tracking-[0.42px]"
                style={{ color: `${focused ? COLORS.crimson : COLORS.silver}` }}
              >
                Home
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="home"
                size={24}
                color={focused ? COLORS.crimson : COLORS.silver}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                className="font-normal text-[14px] leading-[20px] tracking-[0.42px]"
                style={{ color: `${focused ? COLORS.crimson : COLORS.silver}` }}
              >
                Menu
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="menu"
                size={24}
                color={focused ? COLORS.crimson : COLORS.silver}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                className="font-normal text-[14px] leading-[20px] tracking-[0.42px]"
                style={{ color: `${focused ? COLORS.crimson : COLORS.silver}` }}
              >
                Cart
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <SimpleLineIcons
                name="handbag"
                size={24}
                color={focused ? COLORS.crimson : COLORS.silver}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                className="font-normal text-[14px] leading-[20px] tracking-[0.42px]"
                style={{ color: `${focused ? COLORS.crimson : COLORS.silver}` }}
              >
                Account
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={{
                  uri: checkImageURL(logo) ? logo : logo,
                }}
                style={[
                  {
                    width: SIZES.xxLarge,
                    height: SIZES.xxLarge,
                    borderRadius: 50,
                  },
                  focused && { borderWidth: 1, borderColor: COLORS.crimson },
                ]}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
