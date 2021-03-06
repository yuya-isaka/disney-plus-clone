// フック，ライフサイクル，コンポーネントが初めて表示される時，第２引数の値が変更された時
import { useEffect } from "react";
import styled from "styled-components";
// ストア/スライスにアクセスするための関数（ディスパッチ，セレクタ）
import { useDispatch, useSelector } from "react-redux";
// ルートの管理
import { useHistory } from "react-router-dom";
// 管理，Googleプロバイダをインポート
import { auth, provider } from "../config/firebase.js";
// スライスから「名前・写真・アクション」をインポート
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../store/user/userSlice";

const Header = (props) => {
  // 事前準備
  // ディスパッチ，ヒストリ，スライスの変数
  const dispatch = useDispatch();
  const history = useHistory();
  // セレクタ経由でスライスの情報にアクセス
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  // フック
  // ブラウザでコンポーネントが初めて表示される時に必ず一度実行
  // コンポーネントが更新される度に実行（第２引数の値で変わる，空配列ならコンポーネントの更新で呼ばれなくなる）
  // （外部APIからのデータ取得・初期化に使える）
  useEffect(() => {
    // 自動で認証ユーザかチェック
    auth.onAuthStateChanged(async (user) => {
      // 認証ユーザなら
      // データを初期化，ホームにルーティング
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      // 指定したログイン方法で認証
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          // 確認用
          console.log("ユーザ情報");
          console.log(result);
          console.log(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const setUser = (user) => {
    // ディスパッチ経由でスライスの関数を呼び出す
    dispatch(
      setUserLoginDetails(
        // ペイロードオブジェクト（自動生成）
        {
          // console.log(result.user)で確認したユーザ情報をセット
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }
      )
    );
  };
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="Home" />
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" alt="Search" />
              <span>SEARCH</span>
            </a>
            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="Watchlist" />
              <span>WATCHLIST</span>
            </a>
            <a href="/originals">
              <img src="/images/original-icon.svg" alt="Original" />
              <span>ORIGINAL</span>
            </a>
            <a href="/movie">
              <img src="/images/movie-icon.svg" alt="Movie" />
              <span>MOVIE</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt="Series" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 30px;
  letter-spacing: 16px;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Logo = styled.a`
  margin-top: 4px;
  max-height: 70px;
  width: 80px;

  img {
    width: 100%;
  }
`;

const NavMenu = styled.div`
  flex-wrap: nowrap;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      white-space: nowrap;
      margin-left: 6px;
      margin-top: 3px;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        content: "";
        height: 2px;
        position: absolute;
        bottom: -6px;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        visibility: hidden;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
  border-radius: 32% 68% 61% 39% / 32% 34% 66% 68%;
`;

const DropDown = styled.div`
  position: absolute;
  white-space: nowrap;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    height: 100%;
    width: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
    }
  }
`;

export default Header;
