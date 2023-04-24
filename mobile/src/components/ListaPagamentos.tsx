import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

interface IListaPagamentosProps {
   img?: any;
}

const name = "net.png";

const ListaPagamentos = ({ img }: IListaPagamentosProps) => {
   return (
      <>
         <View
            style={{
               flexDirection: "row",
               justifyContent: "space-between",
               alignItems: "center",
            }}
         >
            <View
               style={{
                  flexDirection: "row",
                  alignItems: "center",
               }}
            >
               <View style={{ marginTop: 10, alignItems: "center" }}>
                  <Image source={img} />
               </View>
               <View>
                  <Text>NetFlix</Text>
                  <Text>Month subscription</Text>
               </View>
            </View>
            <Text>$ 12</Text>
         </View>
      </>
   );
};

export default ListaPagamentos;

const styles = StyleSheet.create({});
