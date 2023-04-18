import React from "react";
import { Button } from "react-native-paper";
import { styles } from "./StyleButtonRedeSocial";

interface Ibutton {
   nameIcon?: string;
   nomeDesc: string;
   mode?: "text" | "outlined" | "contained";
   bgColor?: "#0072EA" | "white";
   clicar?: () => void;
}

const ButtonRedeSocial = ({ nameIcon, nomeDesc, mode, ...rest }: Ibutton) => {
   return (
      <Button
         onPress={rest.clicar}
         icon={nameIcon}
         style={[
            styles.ButtonStyle,
            { backgroundColor: `${rest.bgColor}` || "#0072EA" },
         ]}
         mode={mode || "contained"}
      >
         {nomeDesc}
      </Button>
   );
};

export default ButtonRedeSocial;
