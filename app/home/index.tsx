import CustomButton from '@/components/shared/CustomButton';
import { Link } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>
                <CustomButton />
                {/* <Link className='mb-5' href='/products'>Productos</Link>
                <Link className='mb-5' href='/profile'>Perfil</Link>
                <Link className='mb-5' href='/settings'>Ajustes</Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;