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

class UpgradeActivity extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.replace("Profile");
          }}
        >
          <Text>upgrade - go back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default UpgradeActivity;
