import React, { Component } from "react";
import {
  Platform,
  ToastAndroid,
  BackHandler,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Text,
  View
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
import { Rating, AirbnbRating } from "react-native-ratings";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import Search from "react-native-search-box";
import CardGrow from "../components/CardGrow";
import TopMenu from "../components/TopMenu";
import Menu from "../components/Menu";
import axios from "axios";
import configData from "../config/config.json";
import Drawer from "react-native-drawer";

class ProfileActivity extends React.Component {
  constructor() {
    super();
    this.state = {
      services: [],
      refreshing: false
    };
  }

  componentDidMount() {
    // BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    this.getData();
  }


  async getData() {
    var response = await axios.get(configData.baseURL + "/services");
    this.getCurrentUser();
    this.setState({
      services: response.data
    });
  }

  onRefresh () {
    this.getData()
  }

  async searchServices(terms) {
    var response = await axios.get(
      configData.baseURL + "/services?search_contains=" + terms
    );
    this.setState({
      services: response.data
    });
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
      console.log(error, "error");
      this.setState({
        spinner: false
      });
    }
  }

  handleBackButton() {
    return true;
  }

  onSearchService(terms) {
    if (terms) {
      this.searchServices(terms);
    } else {
      this.getData();
    }
  }

  onCancelSearchBox() {
    this.getData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Drawer
          type="static"
          content={<Menu user={this.state.user} />}
          openDrawerOffset={100}
          tapToClose={true}
          ref={ref => (this._drawer = ref)}
        >
          <View style={{ flex: 1 }}>
            <TopMenu
              onOpen={() => {
                this._drawer.open();
              }}
            />

            <View style={{ flex: 0.1, backgroundColor: "grey" }}>
              <Search
                onCancel={this.onCancelSearchBox.bind(this)}
                onChangeText={this.onSearchService.bind(this)}
                placeholder="search"
                ref="search_box"
              />
            </View>

            <ScrollView
              refreshControl={
                <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh.bind(this)} />
              }
              style={{ flex: 0.85, backgroundColor: "grey" }}
            >
              {this.state.services.map(service => {
                return <CardGrow key={service.id} service={service} />;
              })}
            </ScrollView>
          </View>
        </Drawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ProfileActivity;
