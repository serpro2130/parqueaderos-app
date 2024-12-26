import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Stack, useNavigation, router } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { allRoutes } from '@/constants/Routes';

const StackLayout = () => {
    const backgroundColor = useThemeColor({}, 'background');
    const colorScheme = useColorScheme();

    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
        if (canGoBack) {
            router.back();
            //navigation.dispatch(StackActions.pop())
            return;
        }
        navigation.dispatch(DrawerActions.toggleDrawer);
    }

    return (
        <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack
                    screenOptions={{
                        //headerShown: false,
                        headerShadowVisible: false,
                        contentStyle: {
                            backgroundColor: backgroundColor,
                        },
                        headerStyle: {
                            backgroundColor: backgroundColor,
                        },
                        headerLeft: ({ tintColor, canGoBack }) => (
                            <Ionicons
                                name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                                className='mr-5'
                                size={20}
                                onPress={() => onHeaderLeftClick(canGoBack)}
                            />
                        ),
                    }}
                >
                    <Stack.Screen
                        name='home/index'
                        options={{
                            title: 'Inicio',
                        }}
                    />
                    <Stack.Screen
                        name='products/index'
                        options={{
                            title: 'Noticias',
                        }}
                    />
                    <Stack.Screen
                        name='profile/index'
                        options={{
                            title: 'Saldo',
                        }}
                    />
                    <Stack.Screen
                        name='settings/index'
                        options={{
                            title: 'Multas',
                        }}
                    />
                    {
                        allRoutes.map(route => (
                            <Stack.Screen
                                key={route.name}
                                name={route.name}
                                options={{
                                    title: route.title
                                }}
                            />
                        ))
                    }
                </Stack>
            </ThemeProvider>
        </GestureHandlerRootView>
    )
}

export default StackLayout