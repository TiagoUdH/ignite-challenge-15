import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  if(!fontsLoaded){
    return <ActivityIndicator />
  }

  return (
    <ThemeProvider theme={theme} >
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
    </ThemeProvider>
  );
}