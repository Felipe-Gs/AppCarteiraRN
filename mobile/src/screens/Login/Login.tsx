import {
   Text,
   View,
   TouchableOpacity,
   KeyboardAvoidingView,
} from "react-native";
import { styles } from "./styles";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import ButtonRedeSocial from "../../components/ButtonRedeSocial";
import { RFValue } from "react-native-responsive-fontsize";
import InputLogin from "../../components/InputLogin";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hook/useAuth";

const Login = () => {
   const { navigate } = useNavigation();
   const { handleLogin, dados, user, setUser } = useAuth();

   const [showPassword, setShowPassword] = useState(true);

   const handleShowPassword = () => {
      setShowPassword(!showPassword);
      console.log(dados);
   };

   useEffect(() => {
      if (dados.email != "") {
         navigate("Home");
      }
   }, [dados]);

   return (
      <KeyboardAvoidingView behavior="position" enabled>
         <View style={styles.container}>
            <View style={styles.header}>
               <Text style={{ fontSize: RFValue(30), fontWeight: "bold" }}>
                  Seja bem vindo(a)
               </Text>
               <Text style={{ fontSize: RFValue(20), fontWeight: "bold" }}>
                  Wallet App
               </Text>
            </View>
            <Text>Sing In</Text>
            <View style={styles.viewButton}>
               <ButtonRedeSocial
                  nameIcon="google"
                  nomeDesc="Google"
                  mode="outlined"
                  bgColor="white"
                  clicar={() => ""}
               />
               <ButtonRedeSocial
                  nameIcon="facebook"
                  nomeDesc="Facebook"
                  bgColor="#0072EA"
                  clicar={() => ""}
               />
            </View>
            <View style={styles.viewInputs}>
               <InputLogin
                  placeh="Username"
                  iconLeftName="account"
                  value={user.email}
                  onChangeText={(e) => setUser({ ...user, email: e })}
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
            </View>
            <TouchableOpacity
               onPress={() => navigate("RecuperarSenha")}
               style={{
                  width: "100%",
                  marginTop: 10,
                  marginBottom: 20,
                  alignItems: "flex-end",
                  marginRight: 40,
               }}
            >
               <Text>Recupera senha</Text>
            </TouchableOpacity>

            <Button
               onPress={() => handleLogin()}
               style={{
                  width: 200,
                  height: 60,
                  justifyContent: "center",
                  // marginTop: 20,
               }}
               mode="contained"
            >
               Login
            </Button>
            <View
               style={{
                  flexDirection: "row",
                  marginTop: 40,
               }}
            >
               <Text>Não tem cadastro ainda?</Text>
               <TouchableOpacity onPress={() => navigate("Cadastro")}>
                  <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                     Cadastre-se
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </KeyboardAvoidingView>
   );
};

export default Login;
//https://www.youtube.com/watch?v=PZwQHlfBviY&list=PLRGv4LGMjiB9nBoDXNR19CiOft3fW0ald&index=33
