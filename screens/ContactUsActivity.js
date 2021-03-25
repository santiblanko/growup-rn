import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";

class ContactUsActivity extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.replace("Profile");
          }}
        >
          <Text>Contact - go back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ContactUsActivity;
