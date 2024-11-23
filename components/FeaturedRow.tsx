import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon, StarIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { sanityClientVerify } from '@/sanity'
import { FeaturedTpe, RestaurantType } from '@/types/FeaturedTypes'

interface FeaturedRowProps {
    id: string
    title: string
    description: string
    featuredCategory?: string

}

const FeaturedRow: React.FC<FeaturedRowProps> = ({ id, title, description, featuredCategory }) => {
    const [restaurantValues, setRestaurantValues] = useState<RestaurantType[]>([])
    useEffect(() => {
        sanityClientVerify.fetch(`*[_type == 'featured' && _id == $id] {
  ...,
  restaurants[] -> {
    ...,
    dishes[]->,
      type->{
        name
      }
  },
}[0]
      `, { id }).then((res: FeaturedTpe) => {
       /*  console.log("Verificando o valor da imagem",res) */
            setRestaurantValues(res?.restaurants)
        }).catch((err) => console.log(err))

    }, [])
    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lg'> {title} </Text>
                <ArrowRightIcon color={"#00CCBB"} />
            </View>

            <Text className='text-xs text-gray-500 px-4'> {description} </Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className='pt-4'
            >
                {/* Restaurant Cart */}
                {restaurantValues && restaurantValues.map((restaurantValue) => {
                    return <RestaurantCard
                        id={restaurantValue._id}
                        imgUrl={restaurantValue.image.asset._ref}
                        title={restaurantValue.name}
                        rating={restaurantValue.rating}
                        genre="123 Man St"
                        address={restaurantValue.address}
                        short_description={restaurantValue.short_description}
                        dish={restaurantValue.dishes}
                        long={restaurantValue.long}
                        lat={restaurantValue.lat}
                    />
                })}





            </ScrollView>
        </View>
    )
}

export default FeaturedRow