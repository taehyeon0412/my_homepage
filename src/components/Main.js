import { styled } from "styled-components";

//COMPONENTS
import Header from "./Header";
import Center from "./Center";

const Wrapper = styled.div`
  height: 70%;
  margin-top: 20px;
  background-color: black;
`;

function Main() {
  return (
    <Wrapper>
      <Header />
      <Center />
    </Wrapper>
  );
}

export default Main;
