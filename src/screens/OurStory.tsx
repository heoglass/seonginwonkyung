import styled from "@emotion/styled";
import IMG_OURSTORY from "../assets/images/our-story.png";
import IMG_BOTTOM from "../assets/images/bottom-image.png";

const Container = styled.div({
  backgroundColor: "#fff",
  padding: "20px 0",
  width: "100%",
});
const NoticeArea = styled.div({
  width: "100%",
  padding: "0 16px",
  marginBottom: "30px",
});
const NoticeTitleArea = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "10px",
});
const NoticeLeftArea = styled.div({
  width: "100%",
  borderTop: "1px solid #4A393A",
  position: "relative",
});
const NoticeLeftBox = styled.div({
  width: "5px",
  height: "5px",
  backgroundColor: "#4A393A",
  transform: "rotate(45deg)",
  position: "absolute",
  top: "-3.5px",
  left: "0",
});
const NoticeTitle = styled.p({
  fontFamily: "areyouserious",
  fontSize: "36px",
  color: "#4A393A",
  margin: "0 16px",
});
const NoticeRightArea = styled.div({
  width: "100%",
  borderTop: "1px solid #4A393A",
  position: "relative",
});
const NoticeRightBox = styled.div({
  width: "5px",
  height: "5px",
  backgroundColor: "#4A393A",
  transform: "rotate(45deg)",
  position: "absolute",
  top: "-3.5px",
  right: "0",
});
const NoticeDescription = styled.p({
  fontFamily: "Dovemayo",
  color: "#000",
  fontSize: "14px",
  lineHeight: "25px",
  textAlign: "center",
});
const BottomImg = styled.img({
  width: "100%",
  height: "auto",
  marginBottom: "30px",
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
      <NoticeArea>
        <NoticeTitleArea>
          <NoticeLeftArea>
            <NoticeLeftBox />
          </NoticeLeftArea>
          <NoticeTitle>Notice!!</NoticeTitle>
          <NoticeRightArea>
            <NoticeRightBox />
          </NoticeRightArea>
        </NoticeTitleArea>

        <NoticeDescription>
          저희 예식은 1부와 2부로 나누어 진행됩니다.
          <br />
          2부에서는 사랑과 웃음이 가득히 함께 즐길 수 있는
          <br />
          작은 파티가 준비되어 있습니다.
          <br />
          <br />
          예식과 식사, 2부 행사까지
          <br />
          약 12:30 ~ 14:30 동안 진행될 예정이며,
          <br />
          편한 마음으로 함께 즐겨주시면 감사하겠습니다.
          <br />
          <br />
          일정이 있으신 분들은 중간에 편히 이동하셔도 괜찮습니다.
        </NoticeDescription>
      </NoticeArea>
      <BottomImg src={IMG_BOTTOM} alt="하단 이미지" />

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
