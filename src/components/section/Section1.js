import React from "react";
import { Button, Flex, LinkText, Text } from "../../elements";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Section1 = () => {
    // intersection obsever를 위한 dom 요소를 가지는 state입니다.
    const [cursor, setCursor] = React.useState(null);

    // view가 true라면 해당 컴포넌트가 화면에 보여진 것입니다.
    const view = useIntersectionObserver(cursor)

    // 애니메이션 등장을 위한 ref 리스트입니다.
    const animationRef = React.useRef(null);

    React.useEffect(() => {
        if (view) {
            cursor.style.opacity = 1;
            // 이 컴포넌트가 화면에 보여진다면 요소들을 순서대로 fade 애니메이션을 실행합니다.
            animationRef.current.className += '-active';
        }
    }, [view])

    return (
        <Flex styles={defaultStyles} ref={setCursor}>
            <Flex styles={headerStyles}>
                <div style={logoStyles}>
                </div>
                <LinkText styles={{ marginRight: '50px', color: '#fff' }}>
                    내 예약
                </LinkText>
            </Flex>
            <Flex styles={{ flexDirection: 'row', width: '1040px', alignItems: 'start', marginTop: '104px' }} ref={animationRef} className='fade-enter'>
                <Flex styles={{ alignItems: 'start', flex: '1', marginTop: '-9px' }}>
                    <Text styles={{ fontSize: '90px', fontWeight: 'bold', color: '#fff', letterSpacing: '-3px', marginLeft: '-4px', lineHeight: '99px', userSelect: 'none' }}>
                        여행의 모든 것<br />
                        트리플로 한 번에
                    </Text>
                    <Text styles={{ fontSize: '17px', color: '#fff', margin: '18px 0 0 1px', lineHeight: '2', userSelect: 'none' }}>
                        예약부터 일정까지 앱 하나로 간편하게 준비하세요.
                    </Text>
                    <Button styles={{ marginTop: '76px' }}>
                        앱 설치하기
                    </Button>
                </Flex>
                <div style={imageOutterStyles}>
                    <div style={imageInnerStyles}>
                    </div>
                </div>
            </Flex>

        </Flex>
    )
}

// 이 컴포넌트의 최상위 요소의 스타일입니다.
const defaultStyles = {
    position: "relative",
    justifyContent: 'start',
    backgroundImage: "url('https://triple.guide/intro/images/img-01-bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    height: "860px",
    overflow: 'hidden',
    zIndex: "10",
}

const headerStyles = {
    padding: '83px 0 17px',
    flexDirection: 'row',
    minWidth: '1200px',
    justifyContent: 'space-between'
}

const logoStyles = {
    width: '77px',
    height: '25px',
    backgroundSize: '77px 25px',
    backgroundImage: 'url("https://triple.guide/intro/images/img-main-logo-white@3x.png")',
    backgroundRepeat: 'no-repeat',
    marginLeft: '50px',
}

const imageOutterStyles = {
    position: 'relative',
    width: '330px',
    height: '680px',
    backgroundColor: '#fff',
    borderRadius: '48px',
    boxShadow: 'rgb(0 0 0 / 18%) 0px 13px 24px 0px, rgb(0 0 0 / 8%) 0px -6px 9px 0px inset',
}

const imageInnerStyles = {
    position: 'absolute',
    top: '15px',
    left: '15px',
    width: '300px',
    height: '650px',
    backgroundImage: 'url("https://triple.guide/intro/images/img_01_screen_3_520@3x.png")',
    backgroundSize: '300px 650px',
    backgroundRepeat: 'no-repeat',
}

export default Section1;