import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { ImageType } from '@/types/FeaturedTypes'
import { FormatPrice } from '@/utils/FormPrice'
import { urlFor } from '@/sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '@/features/basketSlice'
import { useAppDispatch, useAppSelector } from '@/hooks'

interface DishRowProps {
    id: string
    name: string
    description: string
    price: number,
    image: ImageType
}
const DishRow: React.FC<DishRowProps> = ({ id,
    name,
    description,
    price,
    image, }) => {
    const [isPressed, setIsPressed] = useState<Boolean>(false)
    const items = useAppSelector((state) => selectBasketItemsWithId(state, id))
    const dispatch = useAppDispatch()


    /* Add Items to basket */

    const addItemTOBasket = () => {
        dispatch(addToBasket({ id, name, price, image }))
        //console.log(items)
    }

    const removeItemFromBasket = () => {

        if (!(items.length > 0)) return;

        dispatch(removeFromBasket({ id }))
    }

    //console.log("Items in basket", items)

    return (<>
        <TouchableOpacity className={`bg-white p-4 border border-gray-200 ${isPressed && 'border-b-0'}`} onPress={() => setIsPressed(!isPressed)}>
            <View className='flex-row'>
                <View className='flex-1 pr-2'>
                    <Text className='text-lg mb-1'> {name} </Text>
                    <Text className='text-gray-400'> {description} </Text>
                    <Text className=''> {FormatPrice(price)} </Text>
                </View>
                <View>
                    <Image
                        source={{
                            uri: urlFor(image).url()
                        }}
                        className='h-20 w-20 bg-gray-300 p-4'
                    />
                </View>
            </View>
        </TouchableOpacity>
        {
            isPressed && (
                <View className='bg-white px-4'>
                    <View className='flex-row items-center space-x-2 pb-3'>
                        <TouchableOpacity onPress={removeItemFromBasket}  disabled={!items.length}>
                            <MinusCircleIcon size={40} color={items.length > 0 ? "#00CCBB" : 'gray'} />
                        </TouchableOpacity>

                        <Text> {items.length} </Text>

                        <TouchableOpacity onPress={addItemTOBasket}>
                            <PlusCircleIcon size={40} color={"#00CCBB"} />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    </>
    )
}

export default DishRow