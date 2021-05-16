// firebaseパッケージからインポート
import firebase from "firebase";
// firebase設定インポート（firebaseプロジェクトから取得）
import config from "./config.js";

const firebaseApp = firebase.initializeApp(config.firebase);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
