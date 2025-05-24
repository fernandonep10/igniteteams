import { SafeAreaView } from "react-native";
import Groups from "@screens/Groups";
import NewGroup from "@screens/NewGroup";
import Players from "@screens/Players";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Loading from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {/* {fontsLoaded ? <NewGroup /> : <Loading />} */}
      <Groups />
      {/* <Players /> */}
    </ThemeProvider>
  );
}
