import CustomButton from '@/components/shared/CustomButton';
import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes';
import MenuItem from '@/presentation/menu/MenuItem';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import { View, SafeAreaView, ScrollView } from 'react-native'

const HomeScreen = () => {

    const naigation = useNavigation();

    const onToggleDrawer = () => {
        naigation.dispatch(DrawerActions.toggleDrawer);
    }

    return (
        <ScrollView>
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
                    <View className='my-3' />
                    {animationMenuRoutes.map((route, index) => (
                        <MenuItem
                            key={route.title}
                            title={route.title}
                            icon={route.icon}
                            name={route.name}
                            isFirst={index === 0}
                            isLast={index === animationMenuRoutes.length - 1}
                        />
                    ))}
                    <View className='my-3' />
                    {uiMenuRoutes.map((route, index) => (
                        <MenuItem
                            key={route.title}
                            title={route.title}
                            icon={route.icon}
                            name={route.name}
                            isFirst={index === 0}
                            isLast={index === uiMenuRoutes.length - 1}
                        />
                    ))}
                    <View className='my-3' />
                    {menuRoutes.map((route, index) => (
                        <MenuItem
                            key={route.title}
                            title={route.title}
                            icon={route.icon}
                            name={route.name}
                            isFirst={index === 0}
                            isLast={index === menuRoutes.length - 1}
                        />
                    ))}
                    <View className='my-3' />

                    {/* <Link className='mb-5' href='/products'>Productos</Link>
                <Link className='mb-5' href='/profile'>Perfil</Link>
                <Link className='mb-5' href='/settings'>Ajustes</Link> */}
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default HomeScreen;