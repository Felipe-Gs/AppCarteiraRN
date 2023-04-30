import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import useAuth from "../../hook/useAuth";

const Notificacao = () => {
   const { goBack } = useNavigation();
   const { dados } = useAuth();

   const [notificacoes, setNotificacoes] = useState();

   const handleNotification = async () => {
      try {
         const response = await api.get(`buscarNotificacao/${dados.id}`);
         setNotificacoes(response.data);
         console.log(notificacoes);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      handleNotification();
   }, []);
   return (
      <View style={{ flex: 1, alignItems: "center", marginTop: 60 }}>
         <Icon
            onPress={() => goBack()}
            style={{ alignSelf: "flex-start", marginLeft: 20, marginTop: 10 }}
            name="arrow-left"
            size={30}
            color="#5B259F"
         />
         <Text style={{ fontSize: 25 }}>Notificação</Text>
         <View style={{ marginTop: 30, width: "100%", padding: 20 }}>
            <Text style={{ alignSelf: "center" }}>Novas</Text>
            {notificacoes ? (
               <FlatList
                  showsVerticalScrollIndicator={false}
                  style={{ height: "90%" }}
                  data={notificacoes}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                     return (
                        <View
                           style={{
                              borderRadius: 10,
                              backgroundColor: "whiteSmoke",
                              width: "100%",
                              height: 100,
                              padding: 10,
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginBottom: 20,
                           }}
                        >
                           <View>
                              <Text>{item.mensagem}</Text>
                              <Text>{item.data}</Text>
                              {/* <Text>{item}</Text>
                           <Text>{item}</Text> */}
                           </View>
                           <Icon
                              style={{
                                 alignSelf: "flex-start",
                                 marginLeft: 20,
                                 marginTop: 10,
                              }}
                              name="checkbox-blank-circle"
                              size={15}
                              color="#5B259F"
                           />
                        </View>
                     );
                  }}
               />
            ) : (
               <ActivityIndicator size={30} />
            )}
         </View>
      </View>
   );
};

export default Notificacao;
