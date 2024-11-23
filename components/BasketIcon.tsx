import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAppSelector } from '@/hooks'
import { selectBasketItems, selectBasketTotal } from '@/features/basketSlice'
import { useNavigation, useRouter } from 'expo-router'
import { FormatPrice } from '@/utils/FormPrice'

const BasketIcon = () => {
    const items = useAppSelector(selectBasketItems) 
    const navigation = useNavigation()
    const router = useRouter()
    const basketTotal = useAppSelector(selectBasketTotal)




  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity className='mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'>
        <Text className='text-white font-extrabold text-lg text-center '> {items.length} </Text>
        <Text className='flex-1 text-white  font-extrabold text-lg text-center'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold '> {FormatPrice(basketTotal)} </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon