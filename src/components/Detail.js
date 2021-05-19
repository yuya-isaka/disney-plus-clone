import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img
          src="https://avatars.githubusercontent.com/u/45951565?v=4"
          alt=""
        />
      </Background>

      <ImageTitle>
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwnjvkyPGzOmEXZ34mEFPlwMKTbCDl1ZkQ_HkxY-O5Q=s48-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </ImageTitle>

      <ContentMeta>
        <Controls>controls</Controls>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh- 250px);
  overflow: hidden;
  display: block;
  top 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  -webkit-box-pack: start;
  margin: 0px auto;
  height: 30px;
  min-height: 170px;
  padding-bottom: 30px;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

export default Detail;
