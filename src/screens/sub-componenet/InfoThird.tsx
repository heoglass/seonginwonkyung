import styled from "@emotion/styled";

const Container = styled.div({
  paddingTop: "16px",
});
const Description = styled.p({
  fontFamily: "Dovemayo",
  fontSize: "15px",
  lineHeight: "29px",
});

export default function InfoThird() {
  return (
    <Container>
      <Description>
        식장 내에는 ATM이 마련되어 있지 않습니다.
        <br />
        필요하신 경우, 식장이 위치한 밀리오레 호텔 정문 오른쪽 기업은행ATM을
        이용하실 수 있습니다.
      </Description>
    </Container>
  );
}
