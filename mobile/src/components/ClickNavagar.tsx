import { Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface IdadosConfig {
   titulo: string;
   nameIcon?: string;
   navegar?: () => void;
}

const ClickNavagar = ({ ...rest }: IdadosConfig) => {
   return (
      <View
         style={{
            flexDirection: "row",
            justifyContent: "space-between",
         }}
      >
         <View
            style={{
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "center",
               marginTop: 10,
            }}
         >
            <Icon name={`${rest.nameIcon}`} size={30} color="black" />
            <Text
               numberOfLines={1}
               ellipsizeMode="tail"
               style={{
                  fontSize: 18,
                  marginLeft: 20,
               }}
            >
               {rest.titulo}
            </Text>
         </View>
         {rest.navegar && (
            <Icon
               onPress={rest.navegar}
               name="arrow-right"
               size={30}
               color="#5B259F"
            />
         )}
      </View>
   );
};

export default ClickNavagar;
