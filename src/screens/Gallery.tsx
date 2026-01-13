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
import { useEffect, useState } from "react";

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
const ModalOverlay = styled.div({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.8)",
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ModalContent = styled.div({
  position: "relative",
  width: "90%",
  maxWidth: "500px",
});

const ModalImage = styled.img({
  width: "100%",
  borderRadius: "8px",
});

const CloseBtn = styled.button({
  position: "absolute",
  top: "-40px",
  right: "0",
  fontSize: "24px",
  background: "none",
  border: "none",
  color: "#fff",
});

const Arrow = styled.button({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.5)",
  border: "none",
  color: "#fff",
  fontSize: "24px",
  padding: "8px 12px",
});

const LeftArrow = styled(Arrow)({ left: "-50px" });
const RightArrow = styled(Arrow)({ right: "-50px" });

const ModalViewport = styled.div({
  overflow: "hidden",
  width: "100%",
});

const SlideTrack = styled.div<{ index: number }>(({ index }) => ({
  display: "flex",
  transform: `translateX(-${index * 100}%)`,
  // transition: "transform 0.35s ease",
  transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  willChange: "transform",
}));

const SlideImage = styled.img({
  width: "100%",
  flexShrink: 0,
  objectFit: "contain",
  userSelect: "none",
  touchAction: "pan-y",
});
const PageIndicator = styled.div({
  position: "absolute",
  bottom: "-32px",
  left: "50%",
  transform: "translateX(-50%)",
  color: "#fff",
  fontSize: "14px",
  fontFamily: "MBKCorpoS",
});
export default function Gallery() {
  const [more, setMore] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const ALL_IMAGES = [...ImageGroup1, ...ImageGroup2];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;

    const diff = touchStartX - e.changedTouches[0].clientX;

    if (Math.abs(diff) < 50) return;

    diff > 0 ? goNext() : goPrev();
    setTouchStartX(null);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === ALL_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ALL_IMAGES.length - 1 : prev - 1));
  };

  return (
    <Container>
      <Title>*Gallery*</Title>

      <ImageContianer>
        {/* {ImageGroup1.map((item, index) => (
          <ImageItemContainer key={item.id}>
            <WeddingImageItem
              src={item.src}
              alt={item.alt}
              onClick={() => {
                setCurrentIndex(index);
                setIsOpen(true);
              }}
            />
          </ImageItemContainer>
        ))}

        {more &&
          ImageGroup2.map((item, index) => (
            <ImageItemContainer key={item.id}>
              <WeddingImageItem
                src={item.src}
                alt={item.alt}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }}
              />
            </ImageItemContainer>
          ))} */}
        {ALL_IMAGES.slice(0, more ? ALL_IMAGES.length : ImageGroup1.length).map(
          (item, index) => (
            <ImageItemContainer key={item.id}>
              <WeddingImageItem
                src={item.src}
                alt={item.alt}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }}
              />
            </ImageItemContainer>
          )
        )}
      </ImageContianer>

      <MoreBtnArea onClick={() => setMore(!more)}>
        <MoreBtn>더보기</MoreBtn>
        {more ? (
          <MoreArrowUp src={IMG_MORE_ARROW} />
        ) : (
          <MoreArrowDown src={IMG_MORE_ARROW} />
        )}
      </MoreBtnArea>

      {isOpen && (
        <ModalOverlay onClick={() => setIsOpen(false)}>
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <CloseBtn onClick={() => setIsOpen(false)}>×</CloseBtn>

            <LeftArrow onClick={goPrev}>‹</LeftArrow>

            <ModalViewport>
              <SlideTrack index={currentIndex}>
                {ALL_IMAGES.map((img) => (
                  <SlideImage key={img.id} src={img.src} alt={img.alt} />
                ))}
              </SlideTrack>
            </ModalViewport>

            <RightArrow onClick={goNext}>›</RightArrow>

            <PageIndicator>
              {currentIndex + 1} / {ALL_IMAGES.length}
            </PageIndicator>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}
