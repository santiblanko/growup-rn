// In App.js in a new project

import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainActivity from "./screens/MainActivity";
import LoginActivity from "./screens/LoginActivity";
import ProfileActivity from "./screens/ProfileActivity";
import ServiceActivity from "./screens/ServiceActivity";
import RegisterActivity from "./screens/RegisterActivity";
import AvatarLoadActivity from "./screens/AvatarLoadActivity";
import TermsActivity from "./screens/TermsActivity";
import ContactUsActivity from "./screens/ContactUsActivity";
import PaymentsActivity from "./screens/PaymentsActivity";
import CalendarActivity from "./screens/CalendarActivity";
import ServiceListActivity from "./screens/ServiceListActivity";
import UpgradeActivity from "./screens/UpgradeActivity";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar } from "react-native-paper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      isLoading: true
    };
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem("token"); //get the user on component mount and set state to user
    this.setState({ token, isLoading: false }); // this.setState({ user: user }) does same
  }

  render() {
    const Stack = createStackNavigator();
    if (!this.state.isLoading) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="MainActivity"
              component={MainActivity}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginActivity}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Profile"
              component={ProfileActivity}
            />
            <Stack.Screen name="Register" component={RegisterActivity} />

            <Stack.Screen name="Terms" component={TermsActivity} />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Service"
              component={ServiceActivity}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Avatar"
              component={AvatarLoadActivity}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Contact"
              component={ContactUsActivity}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Payments"
              component={PaymentsActivity}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Calendar"
              component={CalendarActivity}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="ServiceList"
              component={ServiceListActivity}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Upgrade"
              component={UpgradeActivity}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default App;
