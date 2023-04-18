import { styles } from "./StyleInputLogin";
import React from "react";
import { TextInput } from "react-native-paper";

interface InputProps {
   autoCapitalize?: "none" | "sentences" | "words" | "characters";
   autoCorrect?: boolean;
   placeholder?: string;
}

interface IinputLoginProps extends InputProps {
   showPassword?: boolean;
   handleShowPassword?: () => void;
   iconLeftName: string;
   iconHigtName?: boolean;
   placeh: string;
   value?: string;
   onChangeText?: (value: string) => void;
}

const InputLogin = ({ ...rest }: IinputLoginProps) => {
   return (
      <TextInput
         value={rest.value}
         onChangeText={rest.onChangeText}
         style={styles.InputStyle}
         right={
            rest.iconHigtName && (
               <TextInput.Icon
                  icon={rest.showPassword ? "eye-off" : "eye"}
                  onPress={rest.handleShowPassword}
               />
            )
         }
         autoCapitalize={rest.autoCapitalize || "none"}
         autoCorrect={rest.autoCorrect !== undefined ? rest.autoCorrect : false}
         placeholder={rest.placeh}
         secureTextEntry={rest.showPassword || false}
         left={<TextInput.Icon icon={rest.iconLeftName} />}
      />
   );
};

export default InputLogin;
//www.youtube.com/watch?v=rscBVaXhAO8&list=PLRGv4LGMjiB9nBoDXNR19CiOft3fW0ald&index=30
