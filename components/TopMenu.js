import React, { Component } from "react";
import { Entypo } from "@expo/vector-icons";

import {
  Platform,
  ToastAndroid,
  BackHandler,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const TopMenu = onOpen => {
  const navigation = useNavigation();
  console.log();
  return (
    <View style={{ flex: 0.1, backgroundColor: "black", flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          onOpen.onOpen();
        }}
        style={{ flex: 0.33, justifyContent: "flex-end" }}
      >
        <Entypo
          style={{ color: "white" }}
          name="menu"
          size={30}
          color="black"
        />
      </TouchableOpacity>

      <View
        style={{ flex: 0.33, justifyContent: "flex-end", alignItems: "center" }}
      >
        <Image
          style={{
            width: 40,
            height: 40
          }}
          source={require("../assets/logo.jpeg")}
        />
      </View>

      <View
        style={{
          flex: 0.33,
          justifyContent: "flex-end",
          alignItems: "flex-end"
        }}
      >
        <Entypo
          style={{ color: "white", marginRight: 10, paddingBottom: 5 }}
          name="chat"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

export default TopMenu;
