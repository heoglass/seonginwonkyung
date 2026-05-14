import styled from "@emotion/styled";

const Container = styled.div({
  paddingTop: "16px",
});
const Description = styled.p({
  fontFamily: "Dovemayo",
  fontSize: "15px",
  lineHeight: "29px",
});

export default function InfoFourth() {
  return (
    <Container>
      <Description>
        결혼식에 사용될 노래랍니다.
        <br />
        오시는길에 편안하게 들어주세요 🎶
        <br />
        <br />
        <a href="https://www.youtube.com/playlist?list=PLub2mRHS7Cho2m1UN31f2b49uAObM608m">
          https://www.youtube.com/playlist?list=PLub2mRHS7Cho2m1UN31f2b49uAObM608m
        </a>
      </Description>
    </Container>
  );
}
