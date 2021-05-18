// 状態と管理者（スライス）を作成
import { createSlice } from "@reduxjs/toolkit";

// 初期値（空白にする）
const initialState = {
  name: "",
  email: "",
  photo: "",
};

// スライス作成
const userSlice = createSlice({
  // 名前
  name: "user",
  // ステート（初期値）
  initialState,
  // リデューサ
  reducers: {
    // アクション①
    setUserLoginDetails: (state, action) => {
      // ユーザのログイン情報をセット
      // ペイロードオブジェクト（自動生成）を受け取る
      // ステートは付随（initialStateで定義）
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    // アクション②
    setSignOutState: (state) => {
      // ユーザのログイン情報をリセット
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

// スライスのアクションを格納，エキスポート
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

// ユーザスライスの変数を格納，エキスポート（「state.スライス名」でアクセス）
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

// リデューサをエキスポート
export default userSlice.reducer;
