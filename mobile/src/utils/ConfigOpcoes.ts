import { useNavigation } from "@react-navigation/native";
interface IdadosConfig {
   titulo: string;
   nameIcon?: string;
   navegar?: () => void;
}

const { navigate } = useNavigation();

export const DadosConfig: IdadosConfig[] = [
   {
      titulo: "Profile",
      nameIcon: "account",
      navegar() {
         navigate("Home");
      },
   },
   {
      titulo: "Notifications",
      nameIcon: "bell",
      navegar() {
         navigate("Home");
      },
   },
   {
      titulo: "Login settings",
      nameIcon: "key",
      navegar() {
         navigate("Home");
      },
   },
   {
      titulo: "Service senter",
      nameIcon: "account-group",
      navegar() {
         navigate("Home");
      },
   },
];
