import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

import ClickNavagar from "../../components/ClickNavagar";

const Configuracao = () => {
   useEffect(() => {}, []);
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
            <Text style={{ fontSize: 20 }}>settings</Text>
         </View>

         <View style={styles.viewText}>
            <ClickNavagar
               titulo="account"
               nameIcon="account"
               navegar={() => navigate("Account")}
            />
            <ClickNavagar
               titulo="Notifications"
               nameIcon="bell-circle"
               navegar={() => navigate("Notificacao")}
            />
            <ClickNavagar
               titulo="Login settings"
               nameIcon="key"
               navegar={() => navigate("Cartao")}
            />
            <ClickNavagar
               titulo="Service senter"
               nameIcon="account-group"
               navegar={() => navigate("Login")}
            />
         </View>

         <View
            style={{
               alignItems: "center",
               marginTop: 20,
               position: "absolute",
               bottom: 30,
            }}
         >
            <Icon name="delete-outline" size={40} color="#5B259F" />
            <Text style={{ marginTop: 20, fontSize: 15 }}>Deletar conta</Text>
         </View>
      </View>
   );
};

export default Configuracao;
