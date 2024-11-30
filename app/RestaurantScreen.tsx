import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { sanityClientVerify, urlFor } from '@/sanity';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, MinusCircleIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import { DishType, RestaurantType } from '@/types/FeaturedTypes';
import DishRow from '@/components/DishRow';
import BasketIcon from '@/components/BasketIcon';
import { useAppDispatch } from '@/hooks';
import { setRestaurant } from '@/features/restaurantSlice';

const RestaurantScreen = () => {
    const [dishValue, setDishValue] = useState<DishType[]>([])
    const [restaurantValue, setrestaurantValue] = useState<RestaurantType[]>([])


    const navigation = useNavigation()
    const dispatch = useAppDispatch()

    const { id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        long,
        lat } = useLocalSearchParams();

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation])

    useEffect(() => {
        sanityClientVerify.fetch(`*[_type == 'restaurant' && _id == $id] {
            ..., 
            dishes[] -> {
                ...,
            }
        }`, { id }).then((res) => {
            //console.log("Only Dishes", res)
            if (res) {
                setrestaurantValue(res)
                setDishValue(restaurantValue[0].dishes)
                //console.log("Pratos Do Dia", dishValue)
            }
        })
            .catch((err) => console.log("Dish Values error", err))

    }, [dishValue, restaurantValue])


    useEffect(() => {
        dispatch(setRestaurant({
            ...restaurantValue
        }))
        //console.log("Hire Have a values",restaurantValue)

    }, [dispatch])
    return (
        <>
            <BasketIcon />

            <ScrollView>
                <View className='relative'>
                    <Image
                        source={{
                            uri: urlFor(imgUrl).url()
                        }}
                        className='w-full h-56 bg-gray-300 p-4 object-cover'
                    />
                    <TouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
                        <ArrowLeftIcon size={20} color={"#00CCBB"} />
                    </TouchableOpacity>
                </View>

                <View className='bg-white'>
                    <View className='px-4 pt-4'>
                        <Text className='text-3xl font-bold'> {title} </Text>
                        <View className='flex-row items-center space-x-2'>
                            <StarIcon color={"green"} opacity={0.5} size={22} />
                            <Text className='text-xs text-gray-500'>
                                <Text className='text-gray-500'>Rating </Text> - {genre}
                            </Text>
                        </View>
                        <View className='flex-row items-center space-x-1'>
                            <MapPinIcon color={"green"} opacity={0.4} size={22} />
                            <Text className='text-xs text-gray-500'> Nearby -  {address} </Text>
                        </View>
                    </View>
                    <Text className='text-gray-500 mt-20 pb-4'> {short_description} </Text>

                    <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                        <QuestionMarkCircleIcon color={"gray"} opacity={0.6} size={20} />
                        <Text className='pl-2 flex-1 text-md font-bold'>Have a food allergy?</Text>
                        <ChevronRightIcon color={"#00CCBB"} />
                    </TouchableOpacity>
                </View>

                <View className='pb-36'>
                    <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>

                    {dishValue && dishValue.map((dish) => {
                        return <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                        />
                    })}
                </View>
            </ScrollView>

        </>
    )
}

export default RestaurantScreen