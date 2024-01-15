import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Register from "./Register";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Account from "./Account";
import { COLORS } from "../constants/constants";
import Notification from "./Notification";
import Search from "./Search";

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Account") {
              iconName = "user-circle";
            } else if (route.name === "Search") {
              return <Icon name="search" color={color} size={30} />;
            } else if (route.name === "Notification") {
              return (
                <Icon2 name="notifications-active" color={color} size={30} />
              );
            }

            return <Icon name={iconName} color={color} size={30} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarStyle: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: 60,
              shadowOpacity: 0,
            },
            tabBarActiveTintColor: COLORS.dprimary,
            tabBarInactiveTintColor: COLORS.dblack,
          }}
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search",
            tabBarStyle: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: 60,
              shadowOpacity: 0,
            },
            tabBarActiveTintColor: COLORS.dprimary,
            tabBarInactiveTintColor: COLORS.dblack,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: "Notification",
            tabBarStyle: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: 60,
              shadowOpacity: 0,
            },
            tabBarActiveTintColor: COLORS.dprimary,
            tabBarInactiveTintColor: COLORS.dblack,
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: "Account",
            tabBarStyle: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: 60,
              shadowOpacity: 0,
            },
            tabBarActiveTintColor: COLORS.dprimary,
            tabBarInactiveTintColor: COLORS.dblack,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default Dashboard;
