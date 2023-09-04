import styled from "styled-components";
import "./App.css";

//COMPONENTS
import Main from "./components/Main";
import Bottom from "./components/Bottom";

const Wrapper = styled.div`
  height: 90vh;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  font-family: "Nanum Pen Script";

  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 650px) {
    width: 900px;
  }

  @media (max-width: 650px) {
    width: 80vw;
  }
`;

function App() {
  return (
    <Wrapper>
      <Main />
      <Bottom />
    </Wrapper>
  );
}

export default App;
