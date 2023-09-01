import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: blue;
  height: 90%;
`;
//Center전체

const MainDiv = styled.div`
  width: 70%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
`;

const MainIntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 30px;
  background-color: white;
  width: 90%;
  height: 40%;

  p {
    font-size: 35px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const MainIntroDivUp = styled(MainIntroDiv)``;

const MainIntroDivDn = styled(MainIntroDiv)``;

//Center 왼쪽 div

const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  background-color: white;
  border-radius: 20px;
  height: 420px;
  width: 30%;
  padding: 10px;
`;

const ProfileUpDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
`;

const ProfileText = styled.div`
  height: 150px;
  width: 50%;
  border-radius: 20px;
  background-color: gray;

  display: flex;
  flex-direction: column;
`;

const ProfilePh = styled.div`
  height: 90%;
  width: 45%;
  border-radius: 20px;
  background-color: gray;
`;

const ProfileDnDiv = styled.div`
  background-color: #f6f6f6;
  border-radius: 20px;
  height: 270px;
  width: 100%;
`;

const ProfileDnText = styled.p`
  display: flex;
  flex-direction: column;
  margin: 15px;
  font-size: 20px;
  font-weight: 700;
  color: gray;

  span {
    margin-left: 30px;
  }

  p {
    margin: 0;
    margin-top: 5px;
  }

  a {
    margin-left: 5px;
    margin-top: 5px;
    text-decoration-line: none;
    color: inherit;

    &:hover {
      color: blueviolet;
    }
  }
`;

const PhotoDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;

  img {
    width: 100%;
    height: 100%;
  }
`;

//Center 오른쪽 div

function Center() {
  return (
    <Wrapper>
      <MainDiv>
        <MainIntroDivUp>
          <p>Web Developer</p>
          <span>차별화된 서비스를 만들어내는 개발자</span>
          <span>꼼꼼하게 빈 틈을 채워나가는 개발자</span>
          <span>사람들이 필요로 하는 것이 무엇인지 고민하는 개발자</span>
        </MainIntroDivUp>

        <MainIntroDivDn>
          <p>Skills / Stacks 기술 스택</p>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>git/github</span>
        </MainIntroDivDn>
      </MainDiv>

      <IntroDiv>
        <ProfileUpDiv>
          <ProfileText>
            <span>안녕하세요!</span>
            <span>곽태현 입니다.</span>
          </ProfileText>
          <ProfilePh>사진공간</ProfilePh>
        </ProfileUpDiv>

        <ProfileDnDiv>
          <ProfileDnText>
            <PhotoDiv>
              <img src={process.env.PUBLIC_URL + `assets/Notion.png`} />
            </PhotoDiv>
            <span>Notion</span>

            <a
              href="https://www.notion.so/ee2ecfccfa2142818a18cb020c7b8376?pvs=4"
              target="_black"
              rel="noopener noreferrer"
            >
              notion.so/taehyeon0422
            </a>
          </ProfileDnText>

          <ProfileDnText>
            <PhotoDiv>
              <img src={process.env.PUBLIC_URL + `assets/Email.png`} />
            </PhotoDiv>
            <span>Email</span>
            <p>taehyeon202@naver.com</p>
          </ProfileDnText>

          <ProfileDnText>
            <PhotoDiv>
              <img src={process.env.PUBLIC_URL + `assets/Github.png`} />
            </PhotoDiv>
            <span> Github</span>
            <a
              href="https://github.com/taehyeon0412"
              target="_black"
              rel="noopener noreferrer"
            >
              github.com/taehyeon0412
            </a>
          </ProfileDnText>

          <ProfileDnText>
            <PhotoDiv>
              <img src={process.env.PUBLIC_URL + `assets/blog.png`} />
            </PhotoDiv>
            <span> Tistory Blog</span>
            <a
              href="https://taehyeon-smilestudy.tistory.com/"
              target="_black"
              rel="noopener noreferrer"
            >
              taehyeon-study.tistory.com/
            </a>
          </ProfileDnText>
        </ProfileDnDiv>
      </IntroDiv>
    </Wrapper>
  );
}

export default Center;
