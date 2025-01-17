import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Provider } from 'react-redux';
import { store } from '@/store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="LoginScreen" options={{
          headerShown: false, title: "login"
        }} />
        <Stack.Screen name="RegisterScreen" options={{
          headerShown: false, title: "Register"
        }} />
        <Stack.Screen name="index" options={{
          headerShown: true, title: "Home", presentation: "fullScreenModal"
        }} />
        <Stack.Screen name="RestaurantScreen" options={{
          headerShown: true, title: "Restaurant"
        }} />
       
        <Stack.Screen name="PreparingOrderScreen" options={{
          title: "Preparing", headerShown: false, presentation: "fullScreenModal"
        }} />
        <Stack.Screen name="DeliveryScreen" options={{
          title: "Delivery", headerShown: false, presentation: "fullScreenModal"
        }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="BasketScreen" options={{
          headerShown: false, title: "Basket"
        }} />
      </Stack>
    </Provider>
  );
}
