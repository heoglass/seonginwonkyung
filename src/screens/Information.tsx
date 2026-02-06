import styled from "@emotion/styled";
import IMG_ARROW_DOWN from "../assets/icons/info-arrow-down.png";
// import IMG_BOTTOM from "../assets/images/bottom-image.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InfoFirst from "./sub-componenet/InfoFirst";
import InfoSecond from "./sub-componenet/InfoSecond";
import InfoThird from "./sub-componenet/InfoThird";
import InfoFourth from "./sub-componenet/InfoFourth";
import InfoFifth from "./sub-componenet/InfoFifth";
import InfoSixth from "./sub-componenet/InfoSixth";

const InfoGroup = [
  {
    id: 1,
    title: "마음전하실 곳",
  },
  {
    id: 2,
    title: "화환은 정중히 사양합니다.",
  },
  {
    id: 3,
    title: "식장 내 ATM이 비치되어있지 않습니다.",
  },
  {
    id: 4,
    title: "결혼식 식순 (오래 즐겨요)",
  },
  {
    id: 5,
    title: "웨딩홀 근처 여행 가이드",
  },
  {
    id: 6,
    title: "결혼식 오는길 들으면 좋은 노래 셋리스트",
  },
];
const Container = styled.div({
  backgroundColor: "#fff",
});
const TitleArea = styled.div({
  padding: "10px 15px 0",
});
const Title = styled.p({
  fontFamily: "areyouserious",
  fontSize: "32px",
  color: "#F27474",
  textAlign: "center",
  marginBottom: "20px",
});
const BorderArea = styled.div({
  width: "100%",
  borderTop: "1px solid #F27474",
  marginBottom: "20px",
  position: "relative",
  padding: "0 15px",
});
const LeftDot = styled.div({
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: "#F27474",
  position: "absolute",
  left: 0,
  top: "-3.5px",
});
const RightDot = styled.div({
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: "#F27474",
  position: "absolute",
  right: 0,
  top: "-3.5px",
});
const InfoItemContainer = styled.div({
  marginBottom: "30px",
  padding: "0 15px",
});
const InfoItem = styled.div({});
const InfoTitleArea = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 0",
  borderBottom: "1px solid #DCDCDC",
});
const InfoItemTitle = styled.p({
  fontFamily: "MBKCorpoS",
  fontSize: "18px",
});
const InfoArrow = styled.img<{ open: boolean }>(({ open }) => ({
  width: "16px",
  transform: open ? "rotate(180deg)" : "rotate(0)",
  transition: "transform 0.3s ease",
}));
const InfoContent = styled(motion.div)({
  overflow: "hidden",
});

const InfoContentInner = styled.div({
  paddingBottom: "12px",
  fontFamily: "MBKCorpoS",
  fontSize: "14px",
  lineHeight: "1.6",
});
// const BottomImgArea = styled.div({
//   widht: "100%",
// });
// const BottomImg = styled.img({
//   widht: "100%",
//   height: "auto",
// });
export default function Information() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Container>
      <TitleArea>
        <Title>*Information*</Title>

        <BorderArea>
          <LeftDot />
          <RightDot />
        </BorderArea>
      </TitleArea>

      <InfoItemContainer>
        {InfoGroup.map((item, index) => (
          <InfoItem key={item.id} onClick={() => toggle(item.id)}>
            <InfoTitleArea>
              <InfoItemTitle>{item.title}</InfoItemTitle>
              <InfoArrow src={IMG_ARROW_DOWN} open={openId === item.id} />
            </InfoTitleArea>

            <AnimatePresence initial={false}>
              {openId === item.id && (
                <InfoContent
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <InfoContentInner>
                    {item.id === 1 && <InfoFirst />}
                    {item.id === 2 && <InfoSecond />}
                    {item.id === 3 && <InfoThird />}
                    {item.id === 4 && <InfoFourth />}
                    {item.id === 5 && <InfoFifth />}
                    {item.id === 6 && <InfoSixth />}
                  </InfoContentInner>
                </InfoContent>
              )}
            </AnimatePresence>
          </InfoItem>
        ))}
      </InfoItemContainer>
      {/* <BottomImgArea>
        <BottomImg src={IMG_BOTTOM} alt="하단 이미지" />
      </BottomImgArea> */}
    </Container>
  );
}
