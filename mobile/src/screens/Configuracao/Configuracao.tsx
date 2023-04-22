import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-paper";

import { DadosConfig } from "../../utils/ConfigOpcoes";

const Configuracao = () => {
   const { goBack } = useNavigation();
   return (
      <View style={styles.container}>
         <Icon
            onPress={() => goBack()}
            style={{ alignSelf: "flex-start", marginLeft: 20, marginTop: 10 }}
            name="arrow-left"
            size={30}
            color="#5B259F"
         />
         <View style={styles.viewfoto}>
            <Avatar.Image
               style={{ marginTop: 50, marginBottom: 10 }}
               size={110}
               source={require("../../assets/foto.jpeg")}
            />
            <Text style={{ fontSize: 20 }}>Felipe Gomes</Text>
         </View>

         <View style={styles.viewText}>
            {DadosConfig.map((item, index) => {
               return (
                  <View
                     key={index}
                     style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                     }}
                  >
                     <Text
                        style={{
                           marginBottom: 20,
                           fontSize: 18,
                        }}
                     >
                        {item.titulo}
                     </Text>
                     <Icon
                        onPress={() => alert("em andamento")}
                        name="arrow-right"
                        size={30}
                        color="#5B259F"
                     />
                  </View>
               );
            })}
         </View>

         <View
            style={{
               alignItems: "center",
               marginTop: 20,
            }}
         >
            <Icon name="delete-outline" size={40} color="#5B259F" />
            <Text style={{ marginTop: 20, fontSize: 15 }}>Deletar conta</Text>
         </View>
      </View>
   );
};

export default Configuracao;
