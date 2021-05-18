import styled from "styled-components";
import ImgSlider from "./ImgSlider.js";
import Viewers from "./Viewers.js";
import Recomends from "./Recomends.js";
import NewDisney from "./NewDisney.js";
import Originals from "./Originals.js";
import Trendings from "./Trendings.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../config/firebase.js";
import { setMovies } from "../store/movie/movieSlice.js";
import { selectUserName } from "../store/user/userSlice.js";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommend = [];
  let newDisney = [];
  let original = [];
  let trending = [];

  const set = () => {
    dispatch(
      setMovies({
        recommend: recommend,
        newDisney: newDisney,
        original: original,
        trending: trending,
      })
    );
  };

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommend);
        switch (doc.data().type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            original = [...original, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            throw new Error("Invalid type");
        }
      });
      set();
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recomends />
      <NewDisney />
      <Originals />
      <Trendings />
    </Container>
  );
};

// main
const Container = styled.main`
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  top: 70px;
  overflow-x: hidden;
  background: url("/images/home-background.png") center center / cover no-repeat
    fixed;
`;

export default Home;
