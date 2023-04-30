import { StyleSheet, View } from "react-native";
import React from "react";
import { Dialog, Portal, Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hook/useAuth";

interface ImodalConfirmar {
   visible: boolean;
   setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalConfirmar = ({ visible, setVisible }: ImodalConfirmar) => {
   const { setLogado } = useAuth();

   const hideDialog = () => setVisible(false);
   const handleNavigationLogin = () => {
      setLogado(false);
   };
   return (
      <Portal>
         <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Icon icon="alert" />
            <Dialog.Title style={styles.title}>
               Tem certeza que deseja sair?
            </Dialog.Title>

            <Dialog.Actions>
               <Button onPress={hideDialog}>Cancel</Button>
               <Button onPress={() => handleNavigationLogin()}>Ok</Button>
            </Dialog.Actions>
         </Dialog>
      </Portal>
   );
};

export default ModalConfirmar;

const styles = StyleSheet.create({
   title: {
      textAlign: "center",
      justifyContent: "center",
   },
});
