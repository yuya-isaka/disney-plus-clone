import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  // Sliderのオプションに[スプレッド構文で上記のオブジェクトを展開]
  return (
    <div>
      <Carousel {...sliderSettings}>
        <Wrap>
          <a>
            <img src="/images/slider-badging.jpg" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scale.jpg" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-badag.jpg" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scales.jpg" />
          </a>
        </Wrap>
      </Carousel>
    </div>
  );
};

// Sliderプラグイン
const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:hover {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: position;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94);

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 5px;
    margin: 0 17px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 2px solid rgba(249, 249, 249, 0.8);
      transition-duration: 500ms;
      transform: scale(1.03);
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
  }
`;

export default ImgSlider;
