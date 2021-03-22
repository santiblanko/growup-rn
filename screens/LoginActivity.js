import React, { Component, useState } from "react";
import { Platform, StyleSheet, Text, View, Image, Alert, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";
import configData from "../config/config.json";

class HomeActivity extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      spinner: false
    };
  }

  async doLogin() {
    if (this.state.username == "") {
      Alert.alert(
        "Error on Login",
        "Your username can't be empty.",
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

    this.setState({
      spinner: true
    });

    try {
      var response = await axios.post(
        configData.baseURL + '/auth/local',
        {
          identifier: this.state.username.toLowerCase(),
          password: this.state.password
        }
      );

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
      Alert.alert(
        "Error on Login",
        "Your username or password is invalid.",
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

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Spinner visible={this.state.spinner} textContent={"Loading..."} />

        <View
          style={{
            flex: 0.1,
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            backgroundColor: "black"
          }}
        >
          <Text style={{ color: "white", fontSize: 12, marginRight: 10 }}>
            V.0.0.1
          </Text>
        </View>

        <View
          style={{
            flex: 0.3,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black"
          }}
        >
          <Image
            style={{
              width: 150,
              height: 150
            }}
            source={require("../assets/logo.jpeg")}
          />
        </View>

        <View
          style={{
            flex: 0.4,
            backgroundColor: "black",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <TextInput
            placeholder="Username"
            underlineColor="grey"
            selectionColor="white"
            onChangeText={username => {
              this.setState({ username });
            }}
            theme={{
              colors: {
                text: "grey",
                primary: "grey",
                placeholder: "grey",
                borderColor: "transparent",
                borderWidth: 0,
                underlineColor: "white"
              }
            }}
            style={{
              height: 40,
              width: 300,
              backgroundColor: "black",
              borderWidth: 1,
              color: "white"
            }}
          />

          <TextInput
            placeholder="Password"
            underlineColor="grey"
            secureTextEntry={true}
            selectionColor="white"
            onChangeText={password => {
              this.setState({ password });
            }}
            theme={{
              colors: {
                text: "grey",
                primary: "grey",
                placeholder: "grey",
                underlineColor: "white",
                selectionColor: "white"
              }
            }}
            style={{
              height: 40,
              width: 300,
              backgroundColor: "black",
              borderWidth: 1,
              color: "white"
            }}
          />

          <Button
            style={{
              marginTop: 10,
              borderRadius: 50,
              width: 150,
              backgroundColor: "white",
              color: "black"
            }}
            color="white"
            mode="contained"
            onPress={this.doLogin.bind(this)}
          >
            Log In
          </Button>
        </View>

        <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate("Terms");
          }} 
          style={{
            flex: 0.15,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "black"
          }}
        >
          <Text style={{ color: "white", fontSize: 10 }}>
            By using the GrowUp you agree to the{" "}
          </Text>
          <Text style={{ fontSize: 10, color: "white", fontWeight: "bold" }}>
            Terms and conditions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate("Register");
          }}
          style={{
            backgroundColor: "#2b2b2b",
            borderTopWidth: 0.4,
            borderColor: "grey",
            flex: 0.05,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <Text style={{ color: "white" }}>Don't have an account? </Text>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});

export default HomeActivity;
