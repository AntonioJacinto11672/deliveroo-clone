import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon, StarIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

interface FeaturedRowProps {
    id: string
    title: string
    description: string
    featuredCategory?: string

}

const FeaturedRow: React.FC<FeaturedRowProps> = ({ id, title, description, featuredCategory }) => {
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
                <RestaurantCard
                    id="123"
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="123 Man St"
                    address="string"
                    short_description="this is a test description"
                    dish={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id="123"
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="123 Man St"
                    address="string"
                    short_description="this is a test description"
                    dish={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id="123"
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="123 Man St"
                    address="string"
                    short_description="this is a test description"
                    dish={[]}
                    long={20}
                    lat={0}
                />



            </ScrollView>
        </View>
    )
}

export default FeaturedRow