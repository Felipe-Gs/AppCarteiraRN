import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./src/screens/Login/Login";
import Home from "./src/screens/Home/Home";
import Cadastro from "./src/screens/Cadastro/Cadastro";
import RecuperarSenha from "./src/screens/RecuperarSenha/RecuperarSenha";

const Stack = createNativeStackNavigator();
const LoginStack = () => (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginStack" component={Login} />
   </Stack.Navigator>
);

const HomeStack = () => (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={Home} />
   </Stack.Navigator>
);

const CadastroStack = () => (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CadastroStack" component={Cadastro} />
   </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

export default function Routes() {
   return (
      <NavigationContainer>
         <PaperProvider>
            <StatusBar style="auto" translucent backgroundColor="transparent" />
            <Tab.Navigator screenOptions={{ headerShown: false }}>
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
                  name="Login"
                  component={LoginStack}
                  options={{
                     tabBarLabel: "Login",
                     tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                           name="account"
                           color={color}
                           size={size}
                        />
                     ),
                  }}
               />
               <Tab.Screen
                  name="Cadastro"
                  component={CadastroStack}
                  options={{
                     tabBarLabel: "Cadastro",
                     tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                           name="account"
                           color={color}
                           size={size}
                        />
                     ),
                  }}
               />
            </Tab.Navigator>
         </PaperProvider>
      </NavigationContainer>
   );
}
