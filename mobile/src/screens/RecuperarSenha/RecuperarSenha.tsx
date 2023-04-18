import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import InputLogin from "../../components/InputLogin";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const RecuperarSenha = () => {
   const { goBack } = useNavigation();
   return (
      <View style={styles.container}>
         <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Seja bem vindo
         </Text>
         <Text style={{ fontSize: 40 }}>Recuperar Senha</Text>
         <View style={styles.viewInputs}>
            <InputLogin iconLeftName="email" placeh="Digite seu email" />
            <Button
               mode="contained"
               style={{
                  borderRadius: 10,
                  height: 50,
                  justifyContent: "center",
                  marginTop: 20,
               }}
            >
               Recuperar
            </Button>
            <View
               style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 30,
               }}
            >
               <Text>Não quer recuperar senha?</Text>
               <TouchableOpacity onPress={() => goBack()}>
                  <Text style={{ fontWeight: "bold" }}>Volte ao Login</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};

export default RecuperarSenha;
