import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native'

const HomeScreen = () => {

    const naigation = useNavigation();

    const onToggleDrawer = () => {
        naigation.dispatch(DrawerActions.toggleDrawer);
    }

    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>

                <CustomButton
                    className="mb-2"
                    color='primary'
                    onPress={() => router.push('/products')}
                >
                    Noticias
                </CustomButton>

                <CustomButton
                    onPress={() => router.push('/profile')}
                    className="mb-2"
                    color="secondary"
                >
                    Saldo
                </CustomButton>

                <CustomButton
                    onPress={() => router.push('/settings')}
                    className="mb-2"
                    color="tertiary"
                >
                    Multas
                </CustomButton>

                <Link href='/products' asChild>
                    <CustomButton variant='text-only' className="mb-10" color='primary'>Ajustes </CustomButton>
                </Link>
                <CustomButton
                    onPress={onToggleDrawer}
                >
                    Abrir menú
                </CustomButton>
                {/* <Link className='mb-5' href='/products'>Productos</Link>
                <Link className='mb-5' href='/profile'>Perfil</Link>
                <Link className='mb-5' href='/settings'>Ajustes</Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;