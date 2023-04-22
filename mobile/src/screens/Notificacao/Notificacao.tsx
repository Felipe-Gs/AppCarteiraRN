import { FlatList, Text, View } from "react-native";
import React from "react";
import "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import { NotificacaoText } from "../../utils/NotificacaoText";

const Notificacao = () => {
   const { goBack } = useNavigation();
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
            <FlatList
               style={{ height: "90%" }}
               data={NotificacaoText}
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
                           <Text>{item.data}</Text>
                           <Text>{item.title}</Text>
                           <Text>{item.desc}</Text>
                        </View>
                        <Icon
                           style={{
                              alignSelf: "flex-start",
                              marginLeft: 20,
                              marginTop: 10,
                           }}
                           name="arrow-up"
                           size={25}
                           color="#5B259F"
                        />
                     </View>
                  );
               }}
            />
         </View>
      </View>
   );
};

export default Notificacao;
