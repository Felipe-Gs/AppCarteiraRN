import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Cadastro from "../screens/Cadastro/Cadastro";
import RecuperarSenha from "../screens/RecuperarSenha/RecuperarSenha";
import Notificacao from "../screens/Notificacao/Notificacao";
import Configuracao from "../screens/Configuracao/Configuracao";
import Cartao from "../screens/Cartao/Cartao";
import Account from "../screens/Account/Account";
import useAuth from "../hook/useAuth";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LoginStack() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="LoginStack" component={Login} />
         <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
         <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
   );
}

function HomeStack() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Homestack" component={Home} />
         <Stack.Screen name="Cartao" component={Cartao} />
      </Stack.Navigator>
   );
}

function ConfiguracaoStack() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="ConfiguracaoStack" component={Configuracao} />
         <Stack.Screen name="Account" component={Account} />
         <Stack.Screen name="Cartao" component={Cartao} />
         <Stack.Screen name="Notificacao" component={Notificacao} />
      </Stack.Navigator>
   );
}
export function TabNavigation() {
   const { dados, logado } = useAuth();
   // console.log(logado);

   return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
         {logado ? (
            <>
               <Tab.Screen
                  name="Home"
                  component={HomeStack}
                  options={{
                     tabBarLabel: "Home",
                     tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                           name="home"
                           color={color}
                           size={size}
                        />
                     ),
                  }}
               />
               <Tab.Screen
                  name="Notificacao"
                  component={Notificacao}
                  options={{
                     tabBarLabel: "Notificação",
                     tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                           name="bell-outline"
                           color={color}
                           size={size}
                        />
                     ),
                  }}
               />
               <Tab.Screen
                  name="Configuracao"
                  component={ConfiguracaoStack}
                  options={{
                     tabBarLabel: "Configuração",
                     tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                           name="cog-outline"
                           color={color}
                           size={size}
                        />
                     ),
                  }}
               />
            </>
         ) : (
            <>
               <Tab.Screen
                  name="Login"
                  component={LoginStack}
                  options={{
                     tabBarLabel: "Login",
                     tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                           name="login"
                           color={color}
                           size={size}
                        />
                     ),
                  }}
               />
            </>
         )}
      </Tab.Navigator>
   );
}
//https://www.youtube.com/watch?v=SFzzHAbQCMs&list=PLRGv4LGMjiB9nBoDXNR19CiOft3fW0ald&index=39
