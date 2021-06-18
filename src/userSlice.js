import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars : [
    "Model S",
    "Model X",
    "Model Y",
    "Model 3",
    "Model 4",
  ]

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});


export const selectUser = (state) => state.user.cars;

export default userSlice.reducer;












