import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-paper";
import { Dialog, Portal, Text } from "react-native-paper";

import ClickNavagar from "../../components/ClickNavagar";
import useAuth from "../../hook/useAuth";
import ModalConfirmar from "../../components/ModalConfirmar";
// https://reactnative.dev/docs/typescript

const Account = () => {
   const { dados } = useAuth();
   console.log(dados);
   const [showModal, setShowModal] = React.useState(false);
   const handleShowModal = () => {
      setShowModal(true);
   };

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
            <ClickNavagar titulo={dados.dinheiro} nameIcon="cash" />
            <ClickNavagar titulo={dados.localizacao} nameIcon="city" />
            <ClickNavagar titulo={dados.cep} nameIcon="map-marker-radius" />
         </View>

         <View
            style={{
               alignItems: "center",
               marginTop: 20,
            }}
         >
            <TouchableOpacity
               style={{ alignItems: "center" }}
               onPress={() => handleShowModal()}
            >
               <Icon name="exit-to-app" size={40} color="#5B259F" />
               <Text style={{ marginTop: 20, fontSize: 15 }}>
                  Sair da conta
               </Text>
            </TouchableOpacity>
         </View>
         <ModalConfirmar visible={showModal} setVisible={setShowModal} />
      </View>
   );
};

export default Account;
