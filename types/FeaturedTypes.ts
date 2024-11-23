export interface FeaturedTpe {
    _updatedAt?: string
    name: string
    restaurants: RestaurantType[]
    short_description: string
    _id: string
    _createdAt?: string
    _rev?: string
    _type?: string

}

export interface RestaurantType {
    _id: string
    name: string
    short_description: string
    image: ImageType
    rating: number
    address: string
    lat: number
    long: number
    type: Type
    dishes: DishType[]
    _rev: string
    _type: string
    _createdAt: string
    _updatedAt: string
}

export interface DishType {
    _id: string
    name: string
    image: ImageType
    price: number
    short_description: string
    _type: string
    _updatedAt: string
    _createdAt: string
    _rev: string
    
}

export interface ImageType {
    asset: Asset
    _type: string
}

export interface Asset {
    _ref: string
    _type: string
}

export interface Type {
    _ref: string
    _type: string
}
