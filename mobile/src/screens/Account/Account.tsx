import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-paper";

import ClickNavagar from "../../components/ClickNavagar";
import useAuth from "../../hook/useAuth";
// https://reactnative.dev/docs/typescript
const Account = () => {
   const { dados } = useAuth();

   const { goBack, navigate } = useNavigation();
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
            <Text style={{ fontSize: 20 }}>{dados.nome}</Text>
         </View>

         <View style={styles.viewText}>
            <ClickNavagar titulo={dados.email} nameIcon="email" />
            <ClickNavagar titulo="1300" nameIcon="cash" />
            <ClickNavagar titulo="Alto da Irmandade" nameIcon="city" />
            <ClickNavagar titulo="62910000" nameIcon="map-marker-radius" />
         </View>

         <View
            style={{
               alignItems: "center",
               marginTop: 20,
            }}
         >
            <Icon name="exit-to-app" size={40} color="#5B259F" />
            <Text style={{ marginTop: 20, fontSize: 15 }}>Sair da conta</Text>
         </View>
      </View>
   );
};

export default Account;
