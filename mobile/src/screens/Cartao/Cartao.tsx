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
            <Text>Detalhes do cartão</Text>
            <View
               style={{
                  width: "90%",
                  height: 250,
                  backgroundColor: "#5B259F",
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 50,
               }}
            >
               <Text style={{ fontSize: 23, color: "white" }}>Visa</Text>
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
            <View>
               <Text style={{ fontSize: 15 }}>Nome: Felipe Gomes da Silva</Text>
               <Text style={{ fontSize: 15 }}>Banck: Nubank</Text>
               <Text style={{ fontSize: 15 }}>Accont: ... ... ..223</Text>
               <Text style={{ fontSize: 15 }}>Status: Ativo</Text>
               <Text style={{ fontSize: 15 }}>Valid: 2020-2023</Text>
            </View>
         </View>
         <Button style={{ marginTop: 40 }}>Delete Card</Button>
      </View>
   );
};

export default Cartao;
