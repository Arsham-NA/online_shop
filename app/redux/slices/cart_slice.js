"use client";
import { createSlice } from "@reduxjs/toolkit";

const get_data_from_ls = () => {
	const data = localStorage.getItem("cart");
	if(data) {
		return JSON.parse(data);
	}
	else {
		return [];
	}
}

export const cart_slice = createSlice({
	name: "cart",
	initialState: {cart_items: get_data_from_ls()},
	reducers: {
		add_item: (state, action) => {
			//filter_items age item az ghabl nabashe, filter undefined ro return mikone va age ye product ba quantity 1 misaze
			const filter_items = state.cart_items.filter((item) => item.id === action.payload.id)[0];
			if(filter_items === undefined) {
				state.cart_items = [...state.cart_items, {...action.payload, quantity: 1}];
			}
			else {
				state.cart_items.map((item) => {
					if(item.id === action.payload.id) {
						item.quantity += 1;
					}
					else {
						return item;
					}
				})
			};
			localStorage.setItem("cart", JSON.stringify(state.cart_items));
		},
		
		dec_item: (state, action) => {
			state.cart_items.map((item) => {
				if(item.id === action.payload.id) {
					item.quantity -= 1;
 				}
				//hazfe item haye 0 quantity
				if(item.quantity < 1) {
					state.cart_items = state.cart_items.filter((item) => item.id !== action.payload.id);
				}
			});
			localStorage.setItem("cart", JSON.stringify(state.cart_items));
		},

		delete_item: (state, action) => {
			state.cart_items = state.cart_items.filter((item) => item.id !== action.payload.id);
			localStorage.setItem("cart", JSON.stringify(state.cart_items));
		},

		delete_cart: (state) => {
			state.cart_items = [];
			localStorage.setItem("cart", JSON.stringify(state.cart_items));
		},
	},

});


export default cart_slice.reducer;
export const { add_item, dec_item, delete_item, delete_cart } = cart_slice.actions;