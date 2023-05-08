import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   Image,
} from "react-native";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";

import ListaPagamentos from "../../components/ListaPagamentos";

import net from "../../assets/net.png";
import paypal from "../../assets/paypal.png";
import Group from "../../assets/Group.png";
import useAuth from "../../hook/useAuth";
import Animated, { FadeIn } from "react-native-reanimated";

const Home = () => {
   const { dados } = useAuth();
   const { navigate } = useNavigation();
   const { nome } = dados;
   const email = dados.email;

   return (
      <SafeAreaView style={{ padding: 20, flex: 1 }}>
         <Animated.View
            entering={FadeIn.duration(700)}
            style={{
               flexDirection: "row",
               marginTop: 50,
               justifyContent: "space-around",
               alignItems: "center",
            }}
         >
            <View>
               <Text style={{ fontWeight: "bold", fontSize: 23 }}>Wallet</Text>
               <Text style={{ fontWeight: "bold", fontSize: 23 }}>{nome}</Text>
            </View>
            <Avatar.Image
               style={{}}
               size={80}
               source={require("../../assets/foto.jpeg")}
            />
         </Animated.View>
         <View
            style={{
               flexDirection: "row",
               justifyContent: "space-around",
               width: "100%",
               height: 150,
               alignItems: "center",
               backgroundColor: "#6E34B8",
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
               <Image source={require("../../assets/convert.png")}></Image>
               <Text>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={{ justifyContent: "center", alignItems: "center" }}
            >
               <Image source={require("../../assets/export.png")}></Image>
               <Text>Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={{ justifyContent: "center", alignItems: "center" }}
            >
               <Image source={require("../../assets/money-send.png")}></Image>
               <Text>Pagos</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={{ justifyContent: "center", alignItems: "center" }}
            >
               <Image source={require("../../assets/add-circle.png")}></Image>
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
