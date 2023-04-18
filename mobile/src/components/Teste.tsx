import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hook/useAuth";

interface ITeste {
   nome: string;
   idade: number;
   rota: "Home" | "Login";
}

const Teste = ({ ...rest }: ITeste) => {
   const { navigate } = useNavigation();
   const { soma } = useAuth();
   return (
      <View>
         <Text>{rest.nome || "Ainda nao tem nome"}</Text>
         <Text>{rest.idade || "ainda nao tem idade"}</Text>
         <Button onPress={() => navigate(rest.rota)}>Clicar</Button>
         <Text>{soma(6, 4)}</Text>
      </View>
   );
};

export default Teste;

const styles = StyleSheet.create({});
