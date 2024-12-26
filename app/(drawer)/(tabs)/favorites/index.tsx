import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import ThemedView from '@/presentation/shared/ThemedView'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useThemeColor } from '@/hooks/useThemeColor'
import ThemedText from '@/presentation/shared/ThemedText';

const FavoritesScreen = () => {
    const backgroundColor = useThemeColor({}, 'background');
    const colorScheme = useColorScheme();
    return (
        <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <ThemedView margin>
                    <ThemedText className='mt-10'>Mis noticias favoritas</ThemedText>
                </ThemedView>
            </ThemeProvider>
        </GestureHandlerRootView>
    )
}

export default FavoritesScreen