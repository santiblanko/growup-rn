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
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
import { Rating, AirbnbRating } from "react-native-ratings";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Search from "react-native-search-box";
import { useNavigation } from "@react-navigation/native";

const CardGrow = ({ service }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        marginVertical: 4,
        marginHorizontal: 10,
        padding: 3
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 0.5, backgroundColor: "white" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            ${service.price}/{service.unitPrice}
          </Text>
        </View>
        <View
          style={{
            flex: 0.5,
            backgroundColor: "white",
            alignItems: "flex-end"
          }}
        >
          {service.tags &&
            service.tags.map(tag => {
              return (
                <Text>
                  {tag}
                </Text>
              );
            })}
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Rating
          imageSize={25}
          isDisabled={true}
          disabled={true}
          startingValue={service.avgCalification}
          readonly={true}
          style={{ paddingVertical: 10 }}
        />

        {service.comments &&
          <Text style={{ fontSize: 8 }}>
            ({service.comments.length}) comments
          </Text>}
      </View>

      <View
        style={{
          padding: 10,
          borderTopWidth: 0.5,
          borderColor: "grey",
          marginTop: 5
        }}
      >
        <Text>
          {service.description}
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 0.5,
            backgroundColor: "white",
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <AntDesign name="warning" size={24} color="black" />
          </View>

          <View style={{ flex: 1 }}>
            <Entypo name="chat" size={24} color="black" />
          </View>
        </View>
        <View style={{ flex: 0.5, backgroundColor: "purple" }}>
          <Button
            style={{
              backgroundColor: "yellow",
              color: "black",
              borderRadius: 0
            }}
            mode="outlined"
            color={"black"}
            onPress={() => {
              console.log("navegando")
              navigation.navigate("Service");
            }}
          >
            Schedule IT
          </Button>
        </View>
      </View>
    </View>
  );
};
export default CardGrow;
