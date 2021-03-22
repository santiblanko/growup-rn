import React, { Component } from "react";
import {
  Platform,
  ToastAndroid,
  BackHandler,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Menu = ({ service, user }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#404040" }}>
      <View style={{ flex: 0.2, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace("Avatar");
          }}
          style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}
        >
          {user &&
            user.avatar &&
            <Avatar.Image
              size={104}
              style={{ marginTop: 40 }}
              source={{ uri: user.avatar.url }}
            />}
        </TouchableOpacity>
        <View style={{ flex: 0.6, justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            Teresa Gonzales
          </Text>
          <Text style={{ color: "white" }}>TeresaGonzales42</Text>
          <Text style={{ color: "#5297f0", fontSize: 12, marginTop: 10 }}>
            View Profile
          </Text>
        </View>
      </View>
      <View
        style={{ flex: 0.05, justifyContent: "center", borderBottomWidth: 1 }}
      >
        <Text style={{ color: "white", marginLeft: 10 }}>
          Upgrade to Provider
        </Text>
      </View>
      <View
        style={{ flex: 0.1, justifyContent: "center", borderBottomWidth: 1 }}
      >
        <Text style={{ color: "white", marginLeft: 10, marginTop: 10 }}>
          Service
        </Text>
        <Text style={{ color: "white", marginLeft: 10, marginTop: 10 }}>
          Calendar
        </Text>
      </View>

      <View
        style={{ flex: 0.2, justifyContent: "center", borderBottomWidth: 1 }}
      >
        <Text style={{ color: "white", marginLeft: 10, marginTop: 10 }}>
          Payments
        </Text>
        <Text style={{ color: "white", marginLeft: 10, marginTop: 10 }}>
          Contact Us
        </Text>
        <Text style={{ color: "white", marginLeft: 10, marginTop: 10 }}>
          Legal
        </Text>

        <TouchableOpacity
          onPress={async () => {
            navigation.replace("Login");
            const token = await AsyncStorage.removeItem("token");
          }}
        >
          <Text style={{ color: "white", marginLeft: 10, marginTop: 10 }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
