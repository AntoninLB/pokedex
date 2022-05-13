import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import Home from "./src/views/Home";
import * as ScreenOrientation from "expo-screen-orientation";

export default function App() {
  return (
    // <NavigationContainer>
    //   <Home />
    // </NavigationContainer>
    <Navigation />
  );
}
