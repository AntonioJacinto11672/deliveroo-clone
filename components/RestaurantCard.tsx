import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'
import { urlFor } from '@/sanity'
import { useNavigation } from 'expo-router'
import { useRouter } from 'expo-router';

interface RestaurantCardProps {
    id: string,
    imgUrl: string,
    title: string,
    rating: number,
    genre: string,
    address: string,
    short_description: string,
    dish: any[],
    long: number,
    lat: number
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dish,
    long,
    lat
}) => {
    const navigation = useNavigation()
    const router = useRouter();



    return (
        <>
            <TouchableOpacity className='bg-white  mr-3 shadow-sm'

                onPress={() => router.push({
                    pathname: '/RestaurantScreen',
                    params:
                    {
                            id,
                            imgUrl,
                            title,
                            rating,
                            genre,
                            address,
                            short_description,
                            long,
                            lat
                    }
                })}
            >
                <Image
                    source={{
                        uri: urlFor(imgUrl).url()
                    }}
                    className='h-56 w-full rounded-sm'
                />
                <View className='px-3 pb-4'>
                    <Text className='font-bold text-lg pt-2'> {title} </Text>
                    <View className=' flex-row items-center space-x-1'>
                        <StarIcon color={"green"} opacity={0.5} size={22} />
                        <Text className='text-xs text-gray-500'>
                            <Text className='text-green-500'> {rating} </Text> . {genre}
                        </Text>
                    </View>

                    <View className='flex-row items-center space-x-1'>
                        <MapPinIcon color={"gray"} opacity={0.4} size={22} />
                        <Text className='text-xs text-gray-500'> Nearby - {address} </Text>
                    </View>
                </View>

            </TouchableOpacity>

        </>
    )
}

export default RestaurantCard