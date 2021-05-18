import styled from "styled-components";
import ImgSlider from "./ImgSlider.js";
import Viewers from "./Viewers.js";
import Recomends from "./Recomends.js";
import NewDisney from "./NewDisney.js";
import Originals from "./Originals.js";
import Trendings from "./Trendings.js";

const Home = (props) => {
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
