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
import Swiper from "react-native-swiper";

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
          <Swiper style={styles.wrapper} showsButtons={true}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View> 
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
