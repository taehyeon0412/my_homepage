import { styled } from "styled-components";
import Slider from "./Slider";

const Wrapper = styled.div`
  height: 30%;
  margin-bottom: 20px;
  background-color: blueviolet;
`;

function Bottom() {
  return (
    <Wrapper>
      바텀 구간 입니다.
      <Slider />
    </Wrapper>
  );
}

export default Bottom;
