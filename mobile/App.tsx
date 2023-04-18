import React from "react";
import AuthContext from "./src/context/auth";
// import Routes from "./Routes";
import { NavigationContainer } from "@react-navigation/native";

import { TabNavigation } from "./src/routes/Tab";

export default function App() {
   return (
      <AuthContext>
         <NavigationContainer>
            <TabNavigation />
         </NavigationContainer>
      </AuthContext>
   );
}

//https://www.youtube.com/watch?v=7kLc1k3xlKQ&list=PLRGv4LGMjiB9nBoDXNR19CiOft3fW0ald&index=8
