import styled from "@emotion/styled";
import IMG_COPY from "../../assets/icons/copy.png";

const GroomGroup = [
  {
    type: "신랑",
    accountNumber: "111-111-1111",
    name: "국민은행 함성인",
  },
  {
    type: "신랑 아버지",
    accountNumber: "111-111-1111",
    name: "국민은행 함희성",
  },
  {
    type: "신랑 어머니",
    accountNumber: "111-111-1111",
    name: "국민은행 김현숙",
  },
];
const BrideGroup = [
  {
    type: "신부",
    accountNumber: "111-111-1111",
    name: "우리은행 이원경",
  },
  {
    type: "신부 아버지",
    accountNumber: "111-111-1111",
    name: "우리은행 이우경",
  },
  {
    type: "신부 어머니",
    accountNumber: "111-111-1111",
    name: "우리은행 허연옥",
  },
];

const Container = styled.div({
  paddingTop: "20px",
});
const PinkTitleArea = styled.div({
  display: "flex",
  alignItems: "center",
  columnGap: "6px",
  marginBottom: "10px",
});
const PinkDot = styled.div({
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: "#F27474",
});
const PinkTitle = styled.div({
  fontFamily: "MBKCorpoS",
  fontSize: "16px",
  color: "#F27474",
});
const AccountArea = styled.div<{ idx: number }>(({ idx }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: idx === 2 ? "20px" : "10px",
}));
const AccountTextArea = styled.div({});
const AccountText = styled.p({
  fontFamily: "MBKCorpoS",
  fontSize: "14px",
  lineHeight: "24px",
});
const CopyBtn = styled.button({
  border: "none",
  padding: "6px 12px",
  backgroundColor: "#fff",
  fontFamily: "MBKCorpoS",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  borderRadius: "6px",
  columnGap: "5px",
});
const CopyImg = styled.img({
  width: "19px",
});

export default function InfoFirst() {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`[${text}] 복사 완료되었습니다.`);
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };
  return (
    <Container>
      <PinkTitleArea>
        <PinkDot />
        <PinkTitle>신랑측 계좌번호</PinkTitle>
      </PinkTitleArea>
      {GroomGroup.map((item, index) => (
        <AccountArea key={index} idx={index}>
          <AccountTextArea>
            <AccountText>
              {item.type}
              <br />
              {item.accountNumber}
              <br />
              {item.name}
            </AccountText>
          </AccountTextArea>
          <CopyBtn
            onClick={() => {
              handleCopyClipBoard(item.accountNumber);
            }}
          >
            복사하기
            <CopyImg src={IMG_COPY} />
          </CopyBtn>
        </AccountArea>
      ))}
      <PinkTitleArea>
        <PinkDot />
        <PinkTitle>신부측 계좌번호</PinkTitle>
      </PinkTitleArea>
      {BrideGroup.map((item, index) => (
        <AccountArea key={index} idx={index}>
          <AccountTextArea>
            <AccountText>
              {item.type}
              <br />
              {item.accountNumber}
              <br />
              {item.name}
            </AccountText>
          </AccountTextArea>
          <CopyBtn
            onClick={() => {
              handleCopyClipBoard(item.accountNumber);
            }}
          >
            복사하기
            <CopyImg src={IMG_COPY} />
          </CopyBtn>
        </AccountArea>
      ))}
    </Container>
  );
}
