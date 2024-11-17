import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
interface CategoriesProps {
    title: string,
    imgUrl: string,


}
const CategoryCard = ({ title, imgUrl }: CategoriesProps) => {
    return (
        <TouchableOpacity className='relative mr-2'>
            <Image
                source={{
                    uri: imgUrl
                }}
                className='h-20 w-20 rounded'
                alt='None'
            />
            <Text className='absolute bottom-1 left-1 text-white font-bold'> {title} </Text>
        </TouchableOpacity>
    )
}

export default CategoryCard