// ストア設定関数，ミドルウェア作成関数
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// スライスからリデューサをインポート
import userReducer from "../store/user/userSlice.js";
import movieReducer from "../store/movie/movieSlice.js";

// ストア設定
// エキスポート
export default configureStore({
  // スライスを管理
  reducer: {
    // リデューサごとに設定
    user: userReducer,
    movie: movieReducer,
  },
  // ミドルウェア設定
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
