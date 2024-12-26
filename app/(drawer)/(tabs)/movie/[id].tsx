// import MovieCast from '@/presentation/components/movie/MovieCast';
// import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';

import { useLocalSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
const MovieScreen = () => {
    const { id } = useLocalSearchParams();


    const { movieQuery } = useMovie(+id);

    if (movieQuery.isLoading || !movieQuery.data) {
        return (
            <View className="flex flex-1 justify-center items-center">
                <Text className="mb-4">Espere por favor</Text>
                <ActivityIndicator color="purple" size={30} />
            </View>
        );
    }

    //   return (
    //     <ScrollView>

    //       <MovieDescription movie={movieQuery.data} />

    //       {/* Movie Cast */}
    //       <MovieCast cast={castQuery.data ?? []} />
    //     </ScrollView>
    //   );
    return (
        <ScrollView>
            <MovieHeader
                originalTitle={movieQuery.data.originalTitle}
                poster={movieQuery.data.poster}
                title={movieQuery.data.title}
            />
        </ScrollView>
    )
};
export default MovieScreen;