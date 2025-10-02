import styled from "@emotion/styled";

const Container = styled.div({
  height: "100vh",

  overflow: "hidden",
});

const InvitationContainer = styled.div({
  width: "375px",
  height: "100%",

  margin: "0 auto",
  overflowY: "scroll",

  "::-webkit-scrollbar": {
    display: "none",
  },

  "@media (max-width: 768px)": {
    width: "100%",
  },
});

export default function Main() {
  return (
    <Container>
      <InvitationContainer>
        <p>성인이와 원경이의 모바일 청첩장</p>
      </InvitationContainer>
    </Container>
  );
}
