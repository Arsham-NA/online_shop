"use client";
import { createSlice } from "@reduxjs/toolkit";

const get_data_from_ls = () => {
	const data = localStorage.getItem("user");
	if(data) {
		return JSON.parse(data);
	}
	else {
		return null;
	}
};


export const user_slice = createSlice({
	name: "user_slice",
	initialState: {user: get_data_from_ls()},
	reducers: {
		set_token: (state, action) => {
			state.user = {
				first_name: "Arsham",
				last_name: "Naghash",
				phone_number: "09335593213",
				email: "arsham.naghash@yahoo.com",
				address: [],
				token: action.payload,
				favorits: [],
			}
			localStorage.setItem("user", JSON.stringify(state.user));
		},

		//age dakhele favorits bood, oon item hazf mishe (chon user dobare zade roosh ke unfavorit beshe), age ham nabood item ezafe mishe
		set_favorits: (state, action) => {
			const exist_item = state.user.favorits.find((item) => item.id === action.payload.id);
			if(exist_item) {
				state.user.favorits = state.user.favorits.filter((item) => item.id !== exist_item.id)
			}
			else {
				state.user.favorits = [...state.user.favorits, action.payload];
			}
			localStorage.setItem("user", JSON.stringify(state.user));
		},

		set_address: (state, action) => {
			state.user.address = [...state.user.address, action.payload];
			localStorage.setItem("user", JSON.stringify(state.user));
		},

		delete_address: (state, action) => {
			state.user.address = state.user.address.filter((item, index) => index !== action.payload);
			localStorage.setItem("user", JSON.stringify(state.user));
		},
		
		logout: () => {
			localStorage.removeItem("user");
			window.location = "/";
		}
	}
});

export default user_slice.reducer;
export const { set_token, logout, set_favorits, set_address, delete_address } = user_slice.actions;