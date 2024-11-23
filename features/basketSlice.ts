import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
export interface CounterState {
  items: any[]
}

// Define the initial state using that type
const initialState: CounterState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToBasket: (state: any, action: PayloadAction<any>) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state: any, action: PayloadAction<any>) => {
      const index = state.items.findIndex((item: any) => item.id == action.payload.id )

      let newBasket = [...state.items]

      if(index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(`Cant´t Remove Product (id: ${action.payload.id}) as its not in basket`)
      }

      state.items = newBasket;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    /* incrementByAmount: (state: any, action: PayloadAction<number>) => {
      state.value += action.payload
    } */
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBasketItems = (state: RootState) => state.basket.items

export const selectBasketItemsWithId = (state: RootState, id: string) => 
  state.basket.items.filter((item) => item.id == id )

export default basketSlice.reducer