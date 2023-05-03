import { Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { Button } from "react-native-paper";
const Cartao = () => {
   const { goBack } = useNavigation();
   return (
      <View style={styles.container}>
         <Icon
            onPress={() => goBack()}
            style={{
               alignSelf: "flex-start",
               marginLeft: 20,
               marginTop: 50,
            }}
            name="arrow-left"
            size={30}
            color="#5B259F"
         />
         <View
            style={{
               marginTop: 80,
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <Text style={{ fontSize: 22 }}>Detalhes do cartão</Text>
            <View
               style={{
                  width: "90%",
                  height: 250,
                  backgroundColor: "#6E34B8",
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 50,
               }}
            >
               <Text style={{ fontSize: 25, color: "white" }}>Visa</Text>
            </View>
         </View>
         <View
            style={{
               width: "100%",
               justifyContent: "center",
               alignItems: "center",
               marginTop: 50,
            }}
         >
            <View
               style={{
                  justifyContent: "space-around",
                  width: "100%",
                  alignItems: "flex-start",
               }}
            >
               <View
                  style={{
                     width: "100%",
                     justifyContent: "space-around",
                     alignItems: "center",
                     flexDirection: "row",
                     height: 50,
                  }}
               >
                  <Text style={{ fontSize: 22 }}>Nome:</Text>
                  <Text style={{ fontSize: 22 }}>Felipe G Silva</Text>
               </View>
               <View
                  style={{
                     width: "100%",
                     justifyContent: "space-around",
                     alignItems: "center",
                     flexDirection: "row",
                     height: 50,
                  }}
               >
                  <Text style={{ fontSize: 22 }}>Banck:</Text>
                  <Text style={{ fontSize: 22 }}>Nubank</Text>
               </View>
               <View
                  style={{
                     width: "100%",
                     justifyContent: "space-around",
                     alignItems: "center",
                     flexDirection: "row",
                     height: 50,
                  }}
               >
                  <Text style={{ fontSize: 22 }}>Accont:</Text>
                  <Text style={{ fontSize: 22 }}>... ... ..223</Text>
               </View>
               <View
                  style={{
                     width: "100%",
                     justifyContent: "space-around",
                     alignItems: "center",
                     flexDirection: "row",
                     height: 50,
                  }}
               >
                  <Text style={{ fontSize: 22 }}>Status:</Text>
                  <Text style={{ fontSize: 22 }}>Ativo</Text>
               </View>
               <View
                  style={{
                     width: "100%",
                     justifyContent: "space-around",
                     alignItems: "center",
                     flexDirection: "row",
                     height: 50,
                  }}
               >
                  <Text style={{ fontSize: 22 }}>Valid:</Text>
                  <Text style={{ fontSize: 22 }}>2020-2023</Text>
               </View>
            </View>
         </View>
         <Button style={{ marginTop: 40 }}>Delete Card</Button>
      </View>
   );
};

export default Cartao;
