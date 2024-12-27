import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useEffect } from 'react';
import { Slot, SplashScreen, Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

import { useFonts } from 'expo-font';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import "./global.css";
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';

const queryClient = new QueryClient()

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const backgroundColor = useThemeColor({}, 'background');
    const colorScheme = useColorScheme();
    const [fontsLoaded, error] = useFonts({
        'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    });
    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    return (
        // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
            <ThemeChangerProvider>
                <QueryClientProvider client={queryClient}>
                    <Slot />
                </QueryClientProvider>
            </ThemeChangerProvider>
        </GestureHandlerRootView>
        // </ThemeProvider>
    );
    //return <Slot />;
    // return <Stack />

}

export default RootLayout