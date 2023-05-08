import {
   ActivityIndicator,
   FlatList,
   Text,
   TouchableOpacity,
   View,
} from "react-native";
import React, { useEffect, useState } from "react";
import "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import useAuth from "../../hook/useAuth";

import formatarData from "../../utils/formatarData";

import Animated, {
   BounceIn,
   FadeIn,
   FadeOut,
   FlipInEasyX,
   ZoomOut,
} from "react-native-reanimated";

import { Checkbox } from "react-native-paper";

const Notificacao = () => {
   const { goBack } = useNavigation();
   const { dados } = useAuth();

   const [checked, setChecked] = useState<number[]>([]);

   const handleChecked = (id: number) => {
      if (checked.includes(id)) {
         setChecked((prevState) => prevState.filter((habit) => habit !== id));
      } else {
         setChecked((prevState) => [...prevState, id]);
      }
   };

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
      <Animated.View
         entering={FadeIn.duration(1000)}
         style={{ flex: 1, alignItems: "center", marginTop: 60 }}
      >
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
                        <Animated.View
                           entering={BounceIn}
                           exiting={FadeOut}
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
                              <Text>{formatarData(item.data)}</Text>
                           </View>
                           <TouchableOpacity
                              onPress={() => {
                                 handleChecked(item.id);
                              }}
                              activeOpacity={0.7}
                           >
                              {checked.includes(item.id) ? (
                                 <Animated.View
                                    style={{
                                       width: 40,
                                       height: 40,
                                       backgroundColor: "gray",
                                       alignItems: "center",
                                       justifyContent: "center",
                                       borderRadius: 10,
                                    }}
                                    entering={FlipInEasyX}
                                    exiting={ZoomOut}
                                 >
                                    <Feather
                                       name="check"
                                       size={20}
                                       color={"white"}
                                    />
                                 </Animated.View>
                              ) : (
                                 <View
                                    style={{
                                       width: 40,
                                       height: 40,
                                       backgroundColor: "green",
                                       alignItems: "center",
                                       justifyContent: "center",
                                       borderRadius: 10,
                                    }}
                                 ></View>
                              )}
                           </TouchableOpacity>
                        </Animated.View>
                     );
                  }}
               />
            ) : (
               <ActivityIndicator size={30} color={"#5B259F"} />
            )}
         </View>
      </Animated.View>
   );
};

export default Notificacao;
