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
import * as ImagePicker from "expo-image-picker";
import { Avatar, Button } from "react-native-paper";
import axios from "axios";
import configData from "../config/config.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "react-native-loading-spinner-overlay";

class AvatarLoadActivity extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      spinner: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.getCurrentUser();
  }

  async getCurrentUser() {
    this.setState({
      spinner: true
    });

    var token = await AsyncStorage.getItem("token");
    var user = await AsyncStorage.getItem("user");

    user = JSON.parse(user);

    try {
      var response = await axios.get(
        configData.baseURL + "/users/" + user._id,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data"
          }
        }
      );

      this.setState({
        spinner: false,
        user: response.data
      });
    } catch (error) {
      this.setState({
        spinner: false
      });
    }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      this.uploadImage(result.uri);
    }
  };

  async uploadImage(image) {
    this.setState({
      spinner: true
    });

    var token = await AsyncStorage.getItem("token");
    var user = await AsyncStorage.getItem("user");

    user = JSON.parse(user);

    var photo = {
      uri: image,
      type: "image/jpeg",
      name: "photo.jpg"
    };

    var formData = new FormData();
    formData.append("files", photo);
    formData.append("ref", "user");
    formData.append("refId", user._id);
    formData.append("field", "avatar");
    formData.append("source", "users-permissions");

    try {
      var response = await axios.post(
        configData.baseURL + "/upload",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data"
          }
        }
      );

      this.setState({
        spinner: false
      });

      this.getData();
      this.props.navigation.replace("Profile");
    } catch (error) {
      this.setState({
        spinner: false
      });
    }
  }

  renderAvatar() {
    if (this.state.user && this.state.user.avatar) {
      return (
        <TouchableOpacity onPress={this.pickImage}>
          <Avatar.Image
            size={200}
            style={{ marginTop: 40 }}
            source={{ uri: this.state.user.avatar.url }}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={this.pickImage}>
          <Avatar.Image size={200} style={{ marginTop: 40 }} />
        </TouchableOpacity>
      );
    }
  }

  renderBackbutton() {
    if (this.state.user && this.state.user.avatar) {
      return (
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Button
            style={{
              marginTop: 10,
              borderRadius: 50,
              width: 150,
              backgroundColor: "white",
              color: "black"
            }}
            color="white"
            onPress={() => {
              this.props.navigation.replace("Profile");
            }}
            mode="contained"
          >
            Go Profile
          </Button>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner visible={this.state.spinner} />
        <View style={{ flex: 0.3 }} />
        <View
          style={{ flex: 0.7, flexDirection: "column", alignItems: "center" }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Select your Avatar
          </Text>

          {this.renderAvatar()}

          {this.renderBackbutton()}
        </View>
      </View>
    );
  }
}

export default AvatarLoadActivity;
