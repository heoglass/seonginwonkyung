import styled from "@emotion/styled";
import IMG_SEONGIN_CHILD from "../assets/images/seongin-child.png";
import IMG_WONKYUNG_CHILD from "../assets/images/wonkyung-child.png";
import IMG_LETTER1 from "../assets/images/letter2.png";
import IMG_LETTER2 from "../assets/images/letter2.png";

const Container = styled.div({
  backgroundColor: "#5B4A39",
  padding: "40px 30px 100px",
});
const Title = styled.p({
  fontFamily: "areyouserious",
  fontSize: "30px",
  color: "#FFC8EF",
  textAlign: "center",
  marginBottom: "30px",
});
const ChildImageItem1 = styled.div({
  position: "relative",
  marginBottom: "100px",
});
const ChildImageItem2 = styled.div({
  position: "relative",
});
const ChildImage = styled.img({
  width: "300px",
  height: "300px",
});

const LetterImage1 = styled.img({
  width: "345px",
  height: "auto",
  position: "absolute",
  bottom: -80,
  left: 0,
});
const LetterImage2 = styled.img({
  width: "345px",
  height: "auto",
  position: "absolute",
  bottom: -80,
  left: 0,
});

export default function ParentLetter() {
  return (
    <Container>
      <Title>*Letter of mom*</Title>
      <ChildImageItem1>
        <ChildImage src={IMG_SEONGIN_CHILD} />
        <LetterImage1 src={IMG_LETTER1} />
      </ChildImageItem1>
      <ChildImageItem2>
        <ChildImage src={IMG_WONKYUNG_CHILD} />
        <LetterImage2 src={IMG_LETTER2} />
      </ChildImageItem2>
    </Container>
  );
}
