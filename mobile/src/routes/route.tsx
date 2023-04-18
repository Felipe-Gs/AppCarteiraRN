import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { TabNavigation } from "./Tab";

import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Cadastro from "../screens/Cadastro/Cadastro";
import RecuperarSenha from "../screens/RecuperarSenha/RecuperarSenha";

const Stack = createNativeStackNavigator();

export function Route() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Cadastro" component={Cadastro} />
         <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
         {/* <Stack.Screen name="homeTabs" component={TabNavigation} /> */}
      </Stack.Navigator>
   );
}
