import styled from "@emotion/styled";
import IMG_OURSTORY from "../assets/images/our-story.png";

const Container = styled.div({
  backgroundColor: "#fff",
  padding: "40px 0 0",
});
const MainImage = styled.img({
  width: "100%",
  height: "auto",
  marginBottom: "30px",
});
const Description = styled.p({
  fontFamily: "Dovemayo",
  fontSize: "16px",
  textAlign: "center",
  marginBottom: "20px",
});
const BtnArea = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});
const SeeMoreBtn = styled.div({
  backgroundColor: "#FFF6C6",
  boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
  fontFamily: "InstrumentSerif-Regular",
  padding: "12px 32px",
  marginBottom: "40px",
});

export default function OurStory() {
  function moveLink() {
    window.open(
      "https://www.notion.so/Seongin-Wonkyung-mini-interview-2e6a594d742680a48cd3f456b3ac9012?source=copy_link",
      "_blank",
      "noopener, noreferrer"
    );
  }
  return (
    <Container>
      <MainImage src={IMG_OURSTORY} />

      <Description>
        저희의 이야기가 더 궁금하시다면
        <br />
        미니 인터뷰 공간에 놀러오세요.
      </Description>

      <BtnArea>
        <SeeMoreBtn onClick={moveLink}>See more....❤️</SeeMoreBtn>
      </BtnArea>
    </Container>
  );
}
