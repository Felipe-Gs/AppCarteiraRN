import {
   ActivityIndicator,
   FlatList,
   ScrollView,
   Text,
   TouchableOpacity,
   View,
} from "react-native";
import React, { useEffect, useState } from "react";
import "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import useAuth from "../../hook/useAuth";

import { VictoryPie, VictoryTooltip } from "victory-native";
import { Picker } from "@react-native-picker/picker";

import { MONTHS, MonthsProps } from "../../utils/months";
import { CardProps, EXPENSES } from "../../utils/Expenses";
import Animated, {
   BounceIn,
   FadeIn,
   FadeOut,
   FlipInEasyX,
   ZoomOut,
} from "react-native-reanimated";

const Notificacao = () => {
   const [data, setData] = useState<CardProps[]>([]);
   const [months, setMonths] = useState<MonthsProps>("Janeiro");
   const { goBack } = useNavigation();
   const { dados } = useAuth();

   useEffect(() => {
      setData(EXPENSES[months]);
   }, [months]);

   const [selecionado, setSelecionado] = useState("");
   const [checked, setChecked] = useState<number[]>([]);

   const handleOnpress = (id: string) => {
      setSelecionado((prev) => (prev === id ? "" : id));
   };

   const handleChecked = (id: number) => {
      if (checked.includes(id)) {
         setChecked((prevState) => prevState.filter((item) => item !== id));
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
         <Text style={{ fontSize: 25 }}>Dispesas</Text>
         <View
            style={{
               width: "100%",
               height: 50,
               marginTop: 20,
               justifyContent: "center",
            }}
         >
            <Picker
               selectedValue={months}
               onValueChange={(itemValue: MonthsProps) => setMonths(itemValue)}
               style={{
                  backgroundColor: "#FFF",
                  height: 50,
                  flex: 1,
                  marginLeft: 50,
               }}
            >
               {MONTHS.map((month) => (
                  <Picker.Item
                     key={month.label}
                     label={month.label}
                     value={month.label}
                  />
               ))}
            </Picker>
         </View>
         <View
            style={{
               width: "100%",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <VictoryPie
               data={data}
               x="label"
               y="value"
               colorScale={data.map((expenses) => expenses.color)}
               innerRadius={80}
               // padAngle={10}
               animate={{
                  duration: 500,
                  easing: "bounce",
               }}
               style={{
                  data: {
                     fillOpacity: ({ datum }) =>
                        datum.id === selecionado || selecionado === ""
                           ? 1
                           : 0.2,
                  },
                  labels: {
                     fill: "white",
                  },
               }}
               labelComponent={
                  <VictoryTooltip
                     renderInPortal={false}
                     flyoutStyle={{
                        stroke: 0,
                        fill: ({ datum }) => datum.color,
                     }}
                  />
               }
            />
         </View>

         <View style={{ marginTop: 30, width: "100%", padding: 20 }}>
            <Text style={{ alignSelf: "center" }}>Novas</Text>
            <FlatList
               data={data}
               style={{ height: 130 }}
               keyExtractor={(item) => item.id}
               renderItem={({ item, index }) => {
                  return (
                     <TouchableOpacity
                        key={index}
                        onPress={() => handleOnpress(item.id)}
                        style={{
                           flexDirection: "row",
                           alignItems: "center",
                        }}
                     >
                        <View
                           style={{
                              backgroundColor: "white",
                              marginTop: 10,
                              height: 60,
                              width: "95%",
                           }}
                        >
                           <View
                              style={{
                                 flexDirection: "row",
                                 padding: 10,
                                 justifyContent: "space-between",
                              }}
                           >
                              <Text style={{ fontWeight: "bold" }}>
                                 {item.label}
                              </Text>
                              <Text style={{ fontWeight: "bold" }}>
                                 R$ {item.value}
                              </Text>
                           </View>
                        </View>
                        <View
                           style={{
                              width: 15,

                              height: 60,
                              marginTop: 10,
                              backgroundColor: `${item.color}`,
                           }}
                        ></View>
                     </TouchableOpacity>
                  );
               }}
               showsVerticalScrollIndicator={false}
            />

            {/* {notificacoes ? (
               <FlatList
                  showsVerticalScrollIndicator={false}
                  style={{ height: 50 }}
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
            )} */}
         </View>
      </Animated.View>
   );
};

export default Notificacao;
