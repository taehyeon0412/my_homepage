import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: yellow;
  height: 10%;
`;

function Header() {
  return <Wrapper>헤더 구간입니다.</Wrapper>;
}

export default Header;
