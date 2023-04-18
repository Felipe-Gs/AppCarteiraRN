import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
   const { navigate } = useNavigation();
   return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         <Text>Home</Text>
         <Button onPress={() => navigate("Login")}>Ir para login</Button>
      </View>
   );
};

export default Home;

const styles = StyleSheet.create({});
