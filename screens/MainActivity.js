import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

export default class MainActivity extends React.Component {


  async componentDidMount() {
    const token = await AsyncStorage.getItem("token"); //get the user on component mount and set state to user
    if (token) {
      this.props.navigation.replace("Profile");
    } else {
      this.props.navigation.replace("Login");
    }
  }

  render() {
    return (
      <View style={{ flex:1}}>
      </View>
    );
  }
}
