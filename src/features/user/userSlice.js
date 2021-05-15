import { createSlice } from "@reduxjs/toolkit";

// 空白にする（make sence）
const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // ユーザのログイン情報をセット
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    // ユーザのログイン情報をリセット
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

// ログイン処理とログアウト処理の関数
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

// ユーザ情報にアクセスするための変数
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
