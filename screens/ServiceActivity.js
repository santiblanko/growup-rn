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
import { Rating, AirbnbRating } from "react-native-ratings";

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

        <View style={{ flex: 0.3, backgroundColor: "red" }}>
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

        <View style={{ flex: 0.25, backgroundColor: "grey" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flex: 0.5, alignItems: "center" }}>
              <Avatar.Image
                size={150}
                style={{ marginTop: 40 }}
                // source={{ uri: user.avatar.url }}
              />
            </View>
            <View
              style={{
                flex: 0.5,
                alignItems: "center"
              }}
            >
              <View style={{ marginTop: 50, alignItems: "flex-start" }}>
                <Text style={{ fontWeight: "bold" }}>Teresa Gonsalez</Text>
                <Text>Oxaca, MX</Text>
                <Rating
                  tintColor={"grey"}
                  imageSize={25}
                  isDisabled={true}
                  disabled={true}
                  startingValue={5}
                  readonly={true}
                  style={{ paddingVertical: 10 }}
                />
                <Text>
                  loremSint veniam consequat in consequat dolor aliquip do amet
                  ex et aliqua..
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{flex:.35}}>
          <Text style={{ fontWeight: "bold", paddingVertical: 10,paddingHorizontal: 10, fontSize:18 }}>Aprender a cocinar Posole al estilo regional de Oaxaca</Text>
          <Text style={{ paddingVertical: 10,paddingHorizontal: 10}}>
            Nostrud aliqua sunt tempor aliquip ullamco ex consectetur. Non est nulla et aute id nisi enim laboris labore exercitation minim. Cillum laboris enim eu enim exercitation nulla.
          </Text>

          <ScrollView>
              <View>

              </View>

          </ScrollView>
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
