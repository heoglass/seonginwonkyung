import styled from "@emotion/styled";
import IMG_WEDDING_01 from "../assets/images/img01.png";
import IMG_WEDDING_02 from "../assets/images/img02.png";
import IMG_WEDDING_03 from "../assets/images/img03.png";
import IMG_WEDDING_04 from "../assets/images/img04.png";
import IMG_WEDDING_05 from "../assets/images/img05.png";
import IMG_WEDDING_06 from "../assets/images/img06.png";
import IMG_WEDDING_07 from "../assets/images/img07.png";
import IMG_WEDDING_08 from "../assets/images/img08.png";
import IMG_WEDDING_09 from "../assets/images/img09.png";
import IMG_WEDDING_10 from "../assets/images/img10.png";
import IMG_WEDDING_11 from "../assets/images/img11.png";
import IMG_WEDDING_12 from "../assets/images/img12.png";
import IMG_WEDDING_13 from "../assets/images/img13.png";
import IMG_WEDDING_14 from "../assets/images/img14.png";
import IMG_WEDDING_15 from "../assets/images/img15.png";
import IMG_WEDDING_16 from "../assets/images/img16.png";
import IMG_WEDDING_17 from "../assets/images/img17.png";
import IMG_WEDDING_18 from "../assets/images/img18.png";
import IMG_MORE_ARROW from "../assets/images/arrow-down.png";
import { useState } from "react";

const ImageGroup1 = [
  {
    id: 1,
    src: IMG_WEDDING_01,
    alt: "웨딩촬영 사진01",
  },
  {
    id: 2,
    src: IMG_WEDDING_02,
    alt: "웨딩촬영 사진02",
  },
  {
    id: 3,
    src: IMG_WEDDING_03,
    alt: "웨딩촬영 사진03",
  },
  {
    id: 4,
    src: IMG_WEDDING_04,
    alt: "웨딩촬영 사진04",
  },
  {
    id: 5,
    src: IMG_WEDDING_05,
    alt: "웨딩촬영 사진05",
  },
  {
    id: 6,
    src: IMG_WEDDING_06,
    alt: "웨딩촬영 사진06",
  },
  {
    id: 7,
    src: IMG_WEDDING_07,
    alt: "웨딩촬영 사진07",
  },
  {
    id: 8,
    src: IMG_WEDDING_08,
    alt: "웨딩촬영 사진08",
  },
  {
    id: 9,
    src: IMG_WEDDING_09,
    alt: "웨딩촬영 사진09",
  },
];
const ImageGroup2 = [
  {
    id: 10,
    src: IMG_WEDDING_10,
    alt: "웨딩촬영 사진10",
  },
  {
    id: 11,
    src: IMG_WEDDING_11,
    alt: "웨딩촬영 사진11",
  },
  {
    id: 12,
    src: IMG_WEDDING_12,
    alt: "웨딩촬영 사진12",
  },
  {
    id: 13,
    src: IMG_WEDDING_13,
    alt: "웨딩촬영 사진13",
  },
  {
    id: 14,
    src: IMG_WEDDING_14,
    alt: "웨딩촬영 사진14",
  },
  {
    id: 15,
    src: IMG_WEDDING_15,
    alt: "웨딩촬영 사진15",
  },
  {
    id: 16,
    src: IMG_WEDDING_16,
    alt: "웨딩촬영 사진16",
  },
  {
    id: 17,
    src: IMG_WEDDING_17,
    alt: "웨딩촬영 사진17",
  },
  {
    id: 18,
    src: IMG_WEDDING_18,
    alt: "웨딩촬영 사진18",
  },
];
const Container = styled.div({
  padding: "30px 0 0",
  backgroundColor: "#F9F6E5",
});

const Title = styled.p({
  fontSize: "30px",
  fontFamily: "areyouserious",
  color: "#FFC8EF",
  textAlign: "center",
  marginBottom: "30px",
});

const ImageContianer = styled.div({
  width: "100%",
  padding: "0 15px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  // gap: "5px",
  rowGap: "2px",
  columnGap: "5px",
});
const ImageItemContainer = styled.div({
  width: `${(375 - 30) / 3}px`,
  height: "auto",

  "@media (max-width: 768px)": {
    width: "100%",
  },
});

const WeddingImageItem = styled.img({
  width: "100%",
  objectFit: "cover",
});

const MoreBtnArea = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  padding: "20px 0 ",
});
const MoreBtn = styled.div({
  fontFamily: "MBKCorpoS",
  fontSize: "16px",
});
const MoreArrowDown = styled.img({
  width: "16px",
  height: "10px",
});
const MoreArrowUp = styled.img({
  width: "16px",
  height: "10px",
  transform: "rotate(180deg)",
});

export default function Gallery() {
  const [more, setMore] = useState<boolean>(false);
  return (
    <Container>
      <Title>*Gallery*</Title>

      <ImageContianer>
        {ImageGroup1.map((item, index) => (
          <ImageItemContainer key={item.id}>
            <WeddingImageItem src={item.src} alt={item.alt} />
          </ImageItemContainer>
        ))}

        {more &&
          ImageGroup2.map((item, index) => (
            <ImageItemContainer key={item.id}>
              <WeddingImageItem src={item.src} alt={item.alt} />
            </ImageItemContainer>
          ))}
      </ImageContianer>

      <MoreBtnArea onClick={() => setMore(!more)}>
        <MoreBtn>더보기</MoreBtn>
        {more ? (
          <MoreArrowUp src={IMG_MORE_ARROW} />
        ) : (
          <MoreArrowDown src={IMG_MORE_ARROW} />
        )}
      </MoreBtnArea>
    </Container>
  );
}
