import styled from "@emotion/styled";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import ICO_NMAP from "../assets/icons/n-map.webp";
import ICO_KMAP from "../assets/icons/k-map.png";
import ICO_TMAP from "../assets/icons/t-map.webp";
import { useEffect } from "react";

const Container = styled.div({
  padding: "30px 15px",
  fontFamily: "MBKCorpoS",
});

const Title = styled.p({
  fontSize: "30px",
  textAlign: "center",
  marginBottom: "12px",
  fontFamily: "areyouserious",
  color: "#ddd",
});
const SubTitle = styled.p({
  fontSize: "16px",
  marginBottom: "20px",
  lineHeight: "24px",

  span: {
    fontWeight: "700",
    display: "inline-block",
    paddingBottom: "5px",
  },
});

const MoveMapArea = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#F27474",
  opacity: 0.7,
});

const MoveMapItem = styled.div({
  width: "100%",
  padding: "15px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const MoveMapIcon = styled.img({
  width: "16px",
  height: "16px",
  borderRadius: "5px",
  objectFit: "cover",
  marginRight: "4px",
});
const MoveMapText = styled.p({});

const TransPortationArea = styled.div({
  padding: "20px 16px 12px",
});

const TransPortationItem = styled.div({
  marginBottom: "16px",
});
const TransPortationTitle = styled.p({
  fontSize: "16px",
  marginBottom: "8px",
});
const TransPortationText = styled.p({
  fontSize: "16px",
  lineHeight: "24px",
});
const SubwayItem = styled.div({
  display: "flex",
  alignItems: "center",
  paddingLeft: "16px",
  marginBottom: "4px",
});
const Dot = styled.div({
  width: "6px",
  height: "6px",
  borderRadius: "8px",
  marginRight: "8px",
  backgroundColor: "#000",
  alignSelf: "baseline",
  marginTop: "8px",
});

// const BusCarItem = styled.div({
//   display: "flex",
//   alignItems: "center",
//   paddingLeft: "16px",
//   marginBottom: "4px",
// });

// const BusCarTitle = styled.p({
//   marginBottom: "8px",
// });

export default function Location() {
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        console.log("✅ kakao maps loaded");
      });
    }
  }, []);
  return (
    <Container>
      <Title>*Location*</Title>
      <SubTitle>
        <span>오시는 길</span>
        <br />
        온즈드롬 명동
        <br />
        서울특별시 중구 퇴계로 115,
        <br />
        밀리오레 호텔 서울 명동 18층, 루프탑 (PH층)
      </SubTitle>

      <Map
        center={{ lat: 37.5610141, lng: 126.9845097 }}
        style={{ width: "100%", height: "350px" }}
        level={3}
        zoomable
      >
        <MapMarker position={{ lat: 37.5610141, lng: 126.9845097 }} />
      </Map>

      <MoveMapArea>
        <MoveMapItem>
          <MoveMapIcon src={ICO_NMAP} />
          <MoveMapText>네이버 지도</MoveMapText>
        </MoveMapItem>
        <p>|</p>
        <MoveMapItem>
          <MoveMapIcon src={ICO_KMAP} />
          <MoveMapText>카카오 네비</MoveMapText>
        </MoveMapItem>
        <p>|</p>
        <MoveMapItem>
          <MoveMapIcon src={ICO_TMAP} />
          <MoveMapText>티맵</MoveMapText>
        </MoveMapItem>
      </MoveMapArea>
      <TransPortationArea>
        <TransPortationItem>
          <TransPortationTitle>🚊 지하철 이용시</TransPortationTitle>

          <SubwayItem>
            <Dot />
            <TransPortationText>
              명동역 5번 출구 바로앞
              <br />
              (밀리오레 호텔 서울 명동 건물)
            </TransPortationText>
          </SubwayItem>
        </TransPortationItem>
        <TransPortationItem>
          <TransPortationTitle>🚌 버스 이용시</TransPortationTitle>

          <SubwayItem>
            <Dot />
            <TransPortationText>
              [퇴계로2가, 명동역 정류장]
              <br /> 간선버스(파랑) 104, 105, 463, 507, 604
              <br />
              지선버스(초록) 7011
            </TransPortationText>
          </SubwayItem>
          <SubwayItem>
            <Dot />
            <TransPortationText>
              [명동입구 정류장]
              <br /> 간선버스(파랑) 104, 421, 463, 507, 604
              <br />
              지선버스(초록) 7011
            </TransPortationText>
          </SubwayItem>
        </TransPortationItem>
        <TransPortationItem>
          <TransPortationTitle>🚘 자가용 이용시</TransPortationTitle>
          <SubwayItem>
            <TransPortationText>
              명동역 밀리오레 호텔 서울 명동 건물 지하주차장
              <br />
              (3시간 무료이용)
              <br />
              교통이 혼잡하오니 대중교통이용을 권장합니다.
            </TransPortationText>
          </SubwayItem>
          <SubwayItem>
            <TransPortationText
              style={{
                fontSize: "14px",
                color: "#F27474",
              }}
            >
              명동역에 위치한 밀리오레호텔 입니다.
              <br />
              동대문의 동명 호텔과 착오 없으시도록 유의부탁드립니다.
            </TransPortationText>
          </SubwayItem>
        </TransPortationItem>
      </TransPortationArea>
    </Container>
  );
}
