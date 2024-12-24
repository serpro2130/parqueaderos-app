import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Stack, useNavigation, router } from 'expo-router'
import { View, Text } from 'react-native'

const StackLayout = () => {

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
        <Stack
            screenOptions={{
                //headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white',
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
        </Stack>
    )
}

export default StackLayout