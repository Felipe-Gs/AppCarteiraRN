import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import InputLogin from "../../components/InputLogin";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { toFormattedPhoneString } from "../../utils/toFormattedPhoneString";
import { maiorValor } from "../../utils/maiorValor";
import api from "../../services/api";

const Cadastro = () => {
   const { navigate } = useNavigation();
   const myArray = [3, 1, 4, 1, 5, 9, 12];

   // const max = myArray.maiorValor();
   Number.prototype.toFormattedPhoneString = toFormattedPhoneString;
   const myNumber = 88993108812;
   const formattedNumber = myNumber.toFormattedPhoneString();

   const [resp, setResp] = useState("");
   const [showPassword, setShowPassword] = useState(true);
   const [user, setUser] = useState({
      nome: "",
      email: "",
      password: "",
   });

   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   const handleCadastro = async () => {
      if (!user.nome || !user.email || !user.password)
         return alert("Insiras os dados para proseguir");
      try {
         const response = await api.post("/cadastrar", {
            nome: user.nome,
            email: user.email,
            password: user.password,
         });
         setResp(response.data.message);
         setUser({ nome: "", email: "", password: "" });
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <View style={styles.container}>
         <Text style={[styles.textView]}>Seja bem vindo</Text>
         <Text style={[styles.textView, { fontSize: 40 }]}>Cadastro</Text>
         <View style={styles.viewButton}>
            <InputLogin
               value={user.nome}
               onChangeText={(e) => setUser({ ...user, nome: e })}
               iconLeftName="account"
               placeh="Nome"
            />
            <InputLogin
               value={user.email}
               onChangeText={(e) => setUser({ ...user, email: e })}
               iconLeftName="email"
               placeh="Email"
            />
            <InputLogin
               placeh="Passowrd"
               iconLeftName="lock"
               iconHigtName={true}
               handleShowPassword={handleShowPassword}
               showPassword={showPassword}
               value={user.password}
               onChangeText={(e) => setUser({ ...user, password: e })}
            />
            <Button
               onPress={() => handleCadastro()}
               mode="contained"
               style={{
                  height: 50,
                  justifyContent: "center",
                  borderRadius: 10,
               }}
            >
               Cadastrar
            </Button>
         </View>
         <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>Ja tem uma conta?</Text>
            <TouchableOpacity onPress={() => navigate("Login")}>
               <Text style={{ fontWeight: "bold", color: "blue" }}>
                  Logue-se
               </Text>
            </TouchableOpacity>
         </View>
         <Text>{resp}</Text>
      </View>
   );
};

export default Cadastro;
