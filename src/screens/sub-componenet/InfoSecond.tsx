import styled from "@emotion/styled";

const Container = styled.div({
  paddingTop: "16px",
});
const Description = styled.p({
  fontFamily: "Dovemayo",
  fontSize: "15px",
  lineHeight: "29px",
});

export default function InfoSecond() {
  return (
    <Container>
      <Description>
        축하해주시는 마음만으로도 충분히 감사한 마음입니다.
        <br />
        환경을 생각하는 작은 실천으로, 일회성 화환은 정중히 받지 않기로
        했습니다.
        <br />
        따뜻한 마음만 보내주셔도 큰 축복이 됩니다.
      </Description>
    </Container>
  );
}
