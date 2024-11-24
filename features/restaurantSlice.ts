import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
export interface CounterState {
  restaurantData: any
}

// Define the initial state using that type
const initialState: CounterState = {
  restaurantData: {}
}

export const restaurantSlice = createSlice({
  name: 'restaurant_new',
  initialState,
  reducers: {
    setRestaurant: (state: any, action: PayloadAction<any>) => {
      state.restaurantData = action.payload
      console.log("Esta a chmar a função", state.restaurantData)
    }

  },
})

export const { setRestaurant } = restaurantSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectRestaurants = (state: RootState) => state.restaurant_new.restaurantData


export default restaurantSlice.reducer