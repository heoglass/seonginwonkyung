import styled from "@emotion/styled";
import IMG_TEST from "../assets/images/test1.png";

const Container = styled.div({
  height: "100vh",
  overflow: "hidden",
});

const InvitationContainer = styled.div({
  width: "100%",
  height: "100%",
  fontFamily: "areyouserious",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled.p({
  fontSize: "70px",
  textAlign: "center",
  margin: "30px 0",
  color: "#F27474",
});

const MainImg = styled.img({
  width: "100%",
  height: "auto",
});

const SubTitle = styled.p({
  fontSize: "40px",
  textAlign: "center",
  color: "#F27474",
  margin: "25px 0",
});
const DatePlace = styled.p({
  fontSize: "25px",
  textAlign: "center",
  color: "#F27474",
  lineHeight: "35px",
});

export default function Main() {
  return (
    <Container>
      <InvitationContainer>
        <Title>Save the Date!</Title>

        <MainImg src={IMG_TEST} />

        <SubTitle>Seongin And Wonkyung</SubTitle>
        <DatePlace>
          31 MAY 2026
          <br />
          oncedrom meongdong
        </DatePlace>
      </InvitationContainer>
    </Container>
  );
}
