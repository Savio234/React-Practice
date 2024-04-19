import { createStore } from "redux";
import cakeReducer from './cakes/cakeReducer'

const store = createStore(cakeReducer)

export default  store

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface User {
// 	name?: string;
// 	email?: string;
// 	phoneNumber?: string | number;
// 	token?: string;
// 	id?: string;
// 	storeId?: string;
// 	storeName?: string;
// 	storeAddress?: string;
// 	isAuthenticated?: boolean;
// }

// const initialState: User = {
// 	name: "",
// 	email: "",
// 	phoneNumber: "",
// 	token: "",
// 	id: "",
// 	storeId: "",
// 	storeName: "",
// 	storeAddress: "",
// 	isAuthenticated: false,
// };

// const userSlice = createSlice({
// 	name: "user",
// 	initialState,
// 	reducers: {
// 		updateUser: (state, action: PayloadAction<User>) => {
// 			state.name = action.payload.name;
// 			state.email = action.payload.email;
// 			state.phoneNumber = action.payload.phoneNumber;
// 			state.id = action.payload.id;
// 			state.token = action.payload.token;
// 			state.isAuthenticated = action.payload.isAuthenticated;
// 			state.storeId = action.payload.storeId;
// 			state.storeName = action.payload.storeName;
// 			state.storeAddress = action.payload.storeAddress;
// 		},
// 		clearUser: state => {
// 			state.name = "";
// 			state.email = "";
// 			state.phoneNumber = "";
// 			state.id = "";
// 			state.token = "";
// 			state.isAuthenticated = false;
// 			state.storeId = "";
// 			state.storeName = "";
// 			state.storeAddress = "";
// 		},
// 	},
// });

// export default userSlice.reducer;
// export const { updateUser, clearUser } = userSlice.actions;
