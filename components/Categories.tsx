import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { sanityClientVerify } from '@/sanity'

type CategoriesType = {
    _type: string
    name: string
    _id: string
    _updatedAt: string
    _createdAt: string
    _rev: string
}
const Categories = () => {

    const [categories, setCategories] = useState<CategoriesType[]>([])

    useEffect(() => {
        sanityClientVerify.fetch(`*[_type == 'category'] {..., }`)
            .then((res) => {
                console.log("Categories values ", res)
                setCategories(res)
            })
    }, [])

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* Categories Card */}
            {
                categories && categories.map((category) => {
                    return <CategoryCard key={category._id} imgUrl='https://links.papareact.com/gn7' title={category.name} />
                })
            }
        </ScrollView>
    )
}

export default Categories