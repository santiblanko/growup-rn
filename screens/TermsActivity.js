import React, { Component, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";

export default class Terms extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, paddingHorizontal: 19, marginTop: 20 }}>

      <Text style={{fontWeight: "bold"}}>Terms and Conditions</Text>

        <Text style={{textAlign: 'left', marginTop: 10}}>
The following terms of service (these Terms of Service), govern
your access to and use of the GrowUp website and mobile application,
including any content, functionality and services offered on or through
www.GrowUP.com or the GrowUp mobile application (the Site) 34751
Calle Linda Temecula CA 92592, as applicable. Fiverr International
and its subsidiaries are collectively referred here to as GrowUP weor us and “you” or “user” means you as user
of the Site.

Please read the Terms of Service carefully before you start to use the
Site. By using the Site, opening an account or by clicking to
accept or agree to the Terms of Service when this option is made
available to you, you accept and agree, on behalf of yourself or on
behalf of any other entity (if applicable), to be bound and abide by
these Terms of Service, GrowUp Payment Terms found here
(“Payment Terms”), and our Privacy Policy found here, each of
which is incorporated herein by reference. If you do not want to
agree to these Terms of Service or the Privacy Policy, you must not
access or use the Site. For more detailed policies surrounding the
activity and usage on the Site, please access the designated articles
herein.

This Site is offered and available to users who are 13 years of age or
older. If you are under 13 you may not use this Site or the GrowUp
services. By using this Site, you represent and warrant that you are of
legal age to form a binding contract and meet all of the foregoing
eligibility requirements. If you do not meet all of these requirements,
you must not access or use the Site.
Our Customer Support team is available 24/7 if you have any
questions regarding the Site or Terms of Service. Contacting our
Customer Support team can be performed by submitting a
request here. 

The original language of these Terms of Service, as well as all other
texts throughout the Site, is English and Spanish.

        </Text>

      <Text style={{fontWeight: "bold", marginTop: 10}}>Overview</Text>

        <Text style={{textAlign: 'left', marginTop: 10}}>
Only registered users may buy and sell on GrowUp, registration
is free. In registering for an account, you agree to provide us
with accurate, complete and updated information and must not
create an account for fraudulent or misleading purposes. You
are solely responsible for any activity on your account and for
maintaining the confidentiality and security of your password.
We are not liable for any acts or omissions by you in
connection with your account.
 Buyers pay GrowUp in advance to create an order (see Payment
Terms).
 For fees and payments please read the Payment Terms
 Sellers must fulfill their orders and may not cancel orders on a
regular basis or without cause. Cancelling orders will affect
GrowUp’ reputation and status.
 Sellers gain account statuses (Levels) based on their
performance and reputation. Advanced levels provide their
owners with benefits.
 Users may not offer or accept payments using any method other
than placing an order through GrowUp.com.
 We care about your privacy. You can read our Privacy
Policy here The Privacy Policy is a part of these Terms of Service
 Users undertake to comply with GrowUp’s Community
Standards, which are a set of behavior rules and guidelines
applicable to the GrowUp community and marketplace in addition
to these Terms of Service, as updated from time to time.
        </Text>


      </ScrollView>
    );
  }
}
