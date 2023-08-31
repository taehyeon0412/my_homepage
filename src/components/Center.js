import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: blue;
  height: 80%;
`;

const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  background-color: black;
  border-radius: 20px;
  height: 90%;
  width: 30%;
  padding: 10px;
`;

const ProfileUpDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50%;
`;

const ProfileText = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 20px;
  background-color: gray;
`;

const ProfilePh = styled.div`
  height: 90%;
  width: 45%;
  border-radius: 20px;
  background-color: white;
`;

const ProfileDnDiv = styled.div`
  background-color: #f6f6f6;
  border-radius: 20px;
  height: 50%;
  width: 100%;
`;

function Center() {
  return (
    <Wrapper>
      센터 구간 입니다.
      <IntroDiv>
        <ProfileUpDiv>
          <ProfileText>text공간</ProfileText>
          <ProfilePh>사진공간</ProfilePh>
        </ProfileUpDiv>

        <ProfileDnDiv></ProfileDnDiv>
      </IntroDiv>
    </Wrapper>
  );
}

export default Center;
