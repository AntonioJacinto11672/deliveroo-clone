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
    image: Image
    rating: number
    address: string
    lat: number
    long: number
    type: Type
    dishes: Dish[]
    _rev: string
    _type: string
    _createdAt: string
    _updatedAt: string
}

export interface Dish {
    _id: string
    name: string
    image: Image
    price: number
    short_description: string
    _type: string
    _updatedAt: string
    _createdAt: string
    _rev: string
    
}

export interface Image {
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
