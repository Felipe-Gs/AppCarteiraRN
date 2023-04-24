import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ListaPagamentos from "../../components/ListaPagamentos";

import net from "../../assets/net.png";
import paypal from "../../assets/paypal.png";
import Group from "../../assets/Group.png";
const Home = () => {
   const name = "net.png";
   const { navigate } = useNavigation();
   return (
      <SafeAreaView style={{ padding: 20, flex: 1 }}>
         <View
            style={{
               flexDirection: "row",
               marginTop: 50,
               justifyContent: "space-around",
               alignItems: "center",
            }}
         >
            <Text style={{ fontWeight: "bold", fontSize: 23 }}>Wallet</Text>
            <Avatar.Image
               style={{}}
               size={80}
               source={require("../../assets/foto.jpeg")}
            />
         </View>
         <View
            style={{
               flexDirection: "row",
               justifyContent: "space-around",
               width: "100%",
               height: 150,
               alignItems: "center",
               backgroundColor: "#2F1155",
               borderRadius: 40,
               marginTop: 60,
            }}
         >
            <View>
               <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 23 }}
               >
                  Balance
               </Text>
               <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 23 }}
               >
                  $ 1.300
               </Text>
            </View>
            <View>
               <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 23 }}
               >
                  Card
               </Text>
               <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 23 }}
               >
                  Mabanck
               </Text>
            </View>
         </View>
         <View
            style={{
               marginTop: 60,
               flexDirection: "row",
               justifyContent: "space-around",
            }}
         >
            <TouchableOpacity
               style={{ justifyContent: "center", alignItems: "center" }}
            >
               <Icon name="transfer" size={40} color="#5B259F" />
               <Text>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={{ justifyContent: "center", alignItems: "center" }}
            >
               <Icon name="cash" size={40} color="#5B259F" />
               <Text>Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={{ justifyContent: "center", alignItems: "center" }}
            >
               <Icon name="cash" size={40} color="#5B259F" />
               <Text>Pagos</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={{ justifyContent: "center", alignItems: "center" }}
            >
               <Icon name="plus" size={40} color="#5B259F" />
               <Text>Top Up</Text>
            </TouchableOpacity>
         </View>
         <Text style={{ marginTop: 40, fontSize: 23 }}>Last Pagaments</Text>
         <ScrollView>
            <ListaPagamentos img={net} />
            <ListaPagamentos img={Group} />
            <ListaPagamentos img={net} />
            <ListaPagamentos img={paypal} />
            <ListaPagamentos img={Group} />
            <ListaPagamentos img={paypal} />
         </ScrollView>
      </SafeAreaView>
   );
};

export default Home;

const styles = StyleSheet.create({});
