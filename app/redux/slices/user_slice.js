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
				name: null,
				last_name: null,
				phone_number: null,
				email: null,
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
		
		logout: () => {
			localStorage.removeItem("user");
			window.location = "/";
		}
	}
});

export default user_slice.reducer;
export const { set_token, logout, set_favorits } = user_slice.actions;