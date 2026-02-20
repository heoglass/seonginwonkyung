import styled from "@emotion/styled";
import IMG_SEONGIN_CHILD from "../assets/images/seongin-child.png";
import IMG_WONKYUNG_CHILD from "../assets/images/wonkyung-child.png";
import IMG_LETTER1 from "../assets/images/letter1.png";
import IMG_LETTER2 from "../assets/images/letter2.png";

const Container = styled.div({
  backgroundColor: "#4A393A",
  padding: "20px 15px 70px",
});
const Title = styled.p({
  fontFamily: "areyouserious",
  fontSize: "32px",
  color: "#F49B96",
  textAlign: "center",
  marginBottom: "30px",
  span: {
    fontFamily: "Dovemayo",
    fontSize: "17px",
  },
});
const ImageGrid = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const ChildImageItem1 = styled.div({
  position: "relative",
  marginBottom: "70px",
});
const ChildImageItem2 = styled.div({
  position: "relative",
});
const ChildImage = styled.img({
  width: "300px",
  height: "300px",
});

const LetterImage1 = styled.img({
  // width: "345px",
  width: "370px",
  height: "auto",
  position: "absolute",
  bottom: "-45px",
  // left: "-16px",
  left: "-34px",
});
const LetterImage2 = styled.img({
  // width: "345px",
  width: "370px",
  height: "auto",
  position: "absolute",
  bottom: "-45px",
  // left: "-16px",
  left: "-34px",
});

export default function ParentLetter() {
  return (
    <Container>
      <Title>
        Letter of mom <span>: 어머니들의 한마디</span>
      </Title>
      <ImageGrid>
        <ChildImageItem1>
          <ChildImage src={IMG_SEONGIN_CHILD} />
          <LetterImage1 src={IMG_LETTER1} />
        </ChildImageItem1>
        <ChildImageItem2>
          <ChildImage src={IMG_WONKYUNG_CHILD} />
          <LetterImage2 src={IMG_LETTER2} />
        </ChildImageItem2>
      </ImageGrid>
    </Container>
  );
}
