import React, { Component, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";
import axios from "axios";
import configData from "../config/config.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      repeatPassword: ""
    };
  }

  async doRegister() {
    if (this.state.email == "") {
      Alert.alert(
        "Error on Login",
        "Your email can't be empty.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    }

    if (this.state.firstName == "") {
      Alert.alert(
        "Error on Login",
        "Your first name can't be empty.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    }

    if (this.state.lastName == "") {
      Alert.alert(
        "Error on Login",
        "Your lastname can't be empty.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    }

    if (this.state.phoneNumber == "") {
      Alert.alert(
        "Error on Login",
        "Your phone number can't be empty.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    }

    if (this.state.password == "") {
      Alert.alert(
        "Error on Login",
        "Your password can't be empty.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    }

    if (this.state.repeatPassword == "") {
      Alert.alert(
        "Error on Login",
        "The password confirmation can't be empty.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    }

    if (this.state.repeatPassword !== this.state.password) {
      Alert.alert(
        "Error on Login",
        "The password and the confirmation password is different.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    }

    this.setState({
      spinner: true
    });

    try {
      var response = await axios.post(
        configData.baseURL + "/auth/local/register",
        {
          email: this.state.email.toLowerCase(),
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phoneNumber: this.state.phoneNumber,
          username: this.state.email.toLowerCase(),
          password: this.state.password
        }
      );

      console.log("response", response);

      const token = await AsyncStorage.setItem("token", response.data.jwt);
      const user = await AsyncStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      this.setState({
        spinner: false
      });

      this.props.navigation.replace("Profile");

      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      Alert.alert(
        "Error on Register",
        "The email exist in the database.",
        [
          {
            text: "OK",
            onPress: () => {
              this.setState({
                spinner: false
              });
            }
          }
        ],
        { cancelable: false }
      );
    }
  }
  changeEmail(text) {
    this.setState({
      email: text
    });
  }
  changeFirsName(text) {
    this.setState({
      firstName: text
    });
  }
  changeLastName(text) {
    this.setState({
      lastName: text
    });
  }
  changePhoneNumber(text) {
    this.setState({
      phoneNumber: text
    });
  }
  changePassword(text) {
    this.setState({
      password: text
    });
  }
  changeRepeatPassword(text) {
    this.setState({
      repeatPassword: text
    });
  }
  render() {
    return (
      <View style={{ flex: 1, paddingHorizontal: 19 }}>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Registry in Grow Up!
          </Text>
        </View>

        <View>
          <TextInput
            onChangeText={this.changeEmail.bind(this)}
            style={{ marginTop: 10 }}
            label="Email"
          />

          <TextInput
            onChangeText={this.changeFirsName.bind(this)}
            label="First Name"
          />

          <TextInput
            onChangeText={this.changeLastName.bind(this)}
            label="Last Name"
          />

          <TextInput
            onChangeText={this.changePhoneNumber.bind(this)}
            label="Phone Number"
          />

          <TextInput
            onChangeText={this.changePassword.bind(this)}
            label="Password"
          />

          <TextInput
            onChangeText={this.changeRepeatPassword.bind(this)}
            label="Repeat Password"
          />
        </View>

        <Button
          style={{
            backgroundColor: "yellow",
            color: "black",
            marginTop: 10,
            borderRadius: 0
          }}
          mode="outlined"
          onPress={this.doRegister.bind(this)}
        >
          Register
        </Button>
      </View>
    );
  }
}
