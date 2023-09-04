import { styled } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 70%;
  background-color: green;
  margin-top: 10px;

  overflow: hidden;
  position: relative;
`;

const ArrowBtn = styled(motion.div)`
  position: absolute;
  display: flex;
  top: 40%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 98;

  i {
    font-size: 3rem;
  }

  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
// 화살표버튼

const ArrowBox_L = styled(ArrowBtn)`
  left: 0;
`;

const ArrowBox_R = styled(ArrowBtn)`
  right: 0;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  position: absolute;
  width: 100%;

  grid-template-columns: repeat(5, 1fr);

  &:hover ${ArrowBtn} {
    opacity: 1;
  }
`;
//슬라이더 열

/* const rowVar = {
  hidden: () => {
    return {
      x: right === 1 ? window.innerWidth + 5 : -window.innerWidth - 5,
    };
  },
  visible: {
    x: 0,
    y: 0,
  },
  exit: () => {
    return {
      x: right === 1 ? -window.innerWidth - 5 : window.innerWidth + 5,
    };
  },
}; */
//Row 애니메이션

const Box = styled(motion.div)`
  background-color: white;
  height: 130px;
  width: 200px;
  font-size: 20px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
  &:first-child {
    transform-origin: center left; //변화하는 기준점
  }
  &:last-child {
    transform-origin: center right;
  }
`;
//슬라이더 내용

const boxVar = {
  normal: {
    scale: 1,
  },
  hover: {
    y: -20,
    scale: 1.1,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
};
//박스 애니메이션

function Slider() {
  const boxImg = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      슬라이더 구간입니다.
      <AnimatePresence initial={false}>
        <Row>
          <ArrowBox_L>
            <i className="fa-solid fa-angle-left"></i>
          </ArrowBox_L>

          <ArrowBox_R>
            <i className="fa-solid fa-angle-right"></i>
          </ArrowBox_R>

          {boxImg.map((boxImg, index) => (
            <Box key={index}>{boxImg}</Box>
          ))}
        </Row>
      </AnimatePresence>
    </Wrapper>
  );
}

export default Slider;
