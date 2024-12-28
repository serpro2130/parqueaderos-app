import CustomDrawer from '@/components/shared/CustomDrawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';
import { View, Text } from 'react-native'
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

const DrawerLayout = () => {
    const backgroundColor = useThemeColor({}, 'background');
    const colorScheme = useColorScheme();
    return (
        <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
            <ThemeChangerProvider>
                <Drawer
                    drawerContent={CustomDrawer}
                    screenOptions={{
                        // headerShown: false,
                        overlayColor: 'rgba(0,0,0,0.4)',
                        drawerActiveTintColor: 'indigo',
                        headerShadowVisible: false,
                        sceneStyle: {
                            backgroundColor: 'white',
                        },
                    }}
                >
                    <Drawer.Screen
                        name="(tabs)" // This is the name of the page and must match the url from root
                        options={{
                            headerShown: false,
                            drawerLabel: 'Tabs + Stack',
                            title: 'Tabs + Stack',
                            drawerIcon: ({ color, size }) => (
                                <Ionicons name='albums-outline' size={size} color={color} />
                            ),

                        }}
                    />
                    <Drawer.Screen
                        name="user/index" // This is the name of the page and must match the url from root
                        options={{
                            drawerLabel: 'Usuario',
                            title: 'Usuario',
                            drawerIcon: ({ color, size }) => (
                                <Ionicons name='person-circle-outline' size={size} color={color} />
                            ),

                        }}
                    />
                    <Drawer.Screen
                        name="schedule/index" // This is the name of the page and must match the url from root
                        options={{
                            drawerLabel: 'Cerrar sesión',
                            title: 'Horario',
                            drawerIcon: ({ color, size }) => (
                                <Ionicons name='log-out-outline' size={size} color={color} />
                            ),
                        }}
                    />

                </Drawer>
            </ThemeChangerProvider>
        </GestureHandlerRootView>
    )
}

export default DrawerLayout