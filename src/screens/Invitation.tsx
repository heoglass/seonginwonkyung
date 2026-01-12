import styled from "@emotion/styled";
import IMG_ARROW_DOWN from "../assets/images/arrow-down.png";
import IMG_TITLE_LINE from "../assets/images/invite-line.png";
import IMG_SEONGIN from "../assets/images/seongin.png";
import IMG_WONKYUNG from "../assets/images/wonkyung.png";
import IMG_CALL from "../assets/images/call.png";

const Container = styled.div({
  backgroundColor: "#F9F6E5",
});

const InviteArea = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px 0",
});
const InviteText = styled.p({
  textAlign: "center",
  fontFamily: "MBKCorpoS",
  marginBottom: "20px",
});
const ArrowDown = styled.img({
  width: "16px",
});
const TitleArea = styled.div({
  position: "relative",
  height: "50px",
  marginBottom: "50px",
});
const Title = styled.p({
  fontSize: "40px",
  fontFamily: "InstrumentSerif-Regular",
  color: "#F27474",
  zIndex: 2,
  position: "absolute",
  left: "50%",
  bottom: -5,
  transform: "translate(-50%,0)",
});
const TitleLine = styled.img({
  width: "115px",
  height: "auto",
  position: "absolute",
  left: "50%",
  bottom: 0,
  zIndex: 1,
  transform: "translate(-50%,0)",
});

const Description = styled.p({
  fontFamily: "KyoboHandwriting2020",
  fontStyle: "normal",
  color: "#4F3E24",
  fontSize: "16px",
  lineHeight: "28px",
  textAlign: "center",
});
const Description2 = styled.p({
  fontFamily: "KyoboHandwriting2020",
  fontWeight: "700",
  color: "#000",
  fontSize: "18px",
  textAlign: "center",
  margin: "20px 0",
});
const ImageArea = styled.div({
  display: "flex",
  justifyContent: "center",
  columnGap: "15px",
});
const SeongIn = styled.img({
  width: "156px",
  height: "auto",
});
const Wonkyung = styled.img({
  width: "156px",
  height: "auto",
});
const ParentNameItem1 = styled.div({
  width: "100%",
  fontFamily: "KyoboHandwriting2020",
  fontSize: "16px",
  display: "flex",
  justifyContent: "center",
  padding: "20px 0 15px",
});
const ParentNameItem2 = styled.div({
  width: "100%",
  fontFamily: "KyoboHandwriting2020",
  fontSize: "16px",
  display: "flex",
  justifyContent: "center",
  paddingBottom: "40px",
});
const DotText = styled.p({
  color: "#a2a2a2",
  margin: "0 10px",
});
const Call = styled.img({
  width: "16px",
  height: "16px",
});
export default function Invitation() {
  function CallButton(phoneNumber: string) {
    window.location.href = `tel:${phoneNumber}`; //사용자 기기의 전화어플로 연결된다
  }

  return (
    <Container>
      <InviteArea>
        <InviteText>
          성인이와 원경이의
          <br />
          특별한 결혼식에 당신을 초대합니다.
        </InviteText>
        <ArrowDown src={IMG_ARROW_DOWN} />
      </InviteArea>
      {/* <TitleArea>
        <Title>invite!</Title>
        <TitleLine src={IMG_TITLE_LINE} alt="" />
      </TitleArea> */}

      <Description>
        스무살 설렘 가득한 새내기 시절 만나
        <br />
        서로에게 의지하며 11년의 시간을 보내고 나니
        <br />
        넘어질 때는 기댈수 있는 사람으로
        <br />
        웃을 때는 가장 먼저 바라볼 사람이 되었습니다.
        <br />
        <br />
        완벽하지 않아도 서로가 있어 무엇이든 가능하도록
        <br />
        마법같은 용기를 만들어준 무적의 평생의 친구와
        <br />
        함께 평생을 걸어가려합니다.
        <br />
        <br />
        축하의 발걸음으로 함께해주신다면
        <br />
        오래도록 감사히 간직하겠습니다.
      </Description>
      <Description2>신랑 함성인 신부 이원경 올림</Description2>

      <ImageArea>
        <SeongIn src={IMG_SEONGIN} />
        <Wonkyung src={IMG_WONKYUNG} />
      </ImageArea>

      <ParentNameItem1>
        <p>함희성 · 김현숙의 아들 함성인</p>
        <DotText>···</DotText>
        <Call
          src={IMG_CALL}
          alt=""
          onClick={() => {
            CallButton("01079220524");
          }}
        />
      </ParentNameItem1>
      <ParentNameItem2>
        <p>이우경 · 허연옥의&nbsp; 딸 &nbsp;이원경</p>
        <DotText>···</DotText>

        <Call
          src={IMG_CALL}
          alt=""
          onClick={() => {
            CallButton("01079220524");
          }}
        />
      </ParentNameItem2>
    </Container>
  );
}
