import styled from "@emotion/styled";

const Container = styled.div({
  paddingTop: "16px",
});
const Description = styled.p({
  fontFamily: "Dovemayo",
  fontSize: "15px",
  lineHeight: "29px",
});

export default function InfoFifth() {
  return (
    <Container>
      <Description>
        준비중입니다.
        <br />
        추후 업데이트 할게요 :&#41;
      </Description>
    </Container>
  );
}
