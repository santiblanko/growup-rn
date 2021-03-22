import React, { Component } from "react";
import {
  Platform,
  ToastAndroid,
  BackHandler,
  StyleSheet,
  ScrollView,
  Text,
  View
} from "react-native";
import TopMenu from "../components/TopMenu";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default class ServiceActivity extends React.Component {
  constructor() {
    super();
    this.state = {
      services: []
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TopMenu />
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 5,
            paddingVertical: 5,
            backgroundColor: "black"
          }}
        >
          <View style={{ flex: 0.5 }}>
            <Button
              style={{
                backgroundColor: "yellow",
                color: "black",
                borderRadius: 0
              }}
              color={"black"}
              mode="outlined"
              onPress={() => {
                navigation.replace("Service");
              }}
            >
              Schedule IT
            </Button>
          </View>
          <View style={{ flex: 0.5 }}>
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: 0
              }}
              color={"black"}
              mode="outlined"
              onPress={() => {
                navigation.replace("Service");
              }}
            >
              Ask a Question
            </Button>
          </View>
        </View>

        <View style={{ flex: 0.2, backgroundColor: "red" }}>

        </View>

      </View>
    );
  }
}
