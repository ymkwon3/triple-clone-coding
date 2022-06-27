import React from 'react'

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import { triple, playstore, apple } from '../../image';
import { Flex, IncreaseText, Award } from "../../elements";

const sectionStyle = {
    background: "inherit",
    height: "552px",
    width: "1040px",
    flexDirection: 'row',
    justifyContent: "start",
    alignItems: 'start',
    position: 'relative',
    opacity: '0'
}

const imageStyle = {
    position: 'absolute',
    backgroundImage: `url(${triple})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "400px 338px",
    width: '400px',
    height: '330px',
    textAlign: 'center',
    paddingTop: '280px',
    top: '150px',
    color: 'rgba(58, 58, 58, 0.7)',
    fontSize: '15px',
    lineHeight: '15px'
}

const Section2 = () => {
    const [cursor, setCursor] = React.useState(null);
    const animationRefList = React.useRef([null, null, null]);

    const view = useIntersectionObserver(cursor)
    // if (view) {
    //     animationRefList.current[0].style = 'transform: translateY(0)'
    // }
    // const view = true;
    console.log(view)
    console.log(cursor)

    React.useEffect(() => {
        if (view) {
            cursor.style.opacity = 1;

            for (let i = 0; i < animationRefList.current.length; i++) {

                setTimeout(() => {
                    animationRefList.current[i].className = 'fade-enter-active';
                }, 100 * i);
            }
        }
    }, [view])

    return (
        <Flex styles={sectionStyle} ref={setCursor}>

            <div style={imageStyle} ref={r => animationRefList.current[0] = r} className='fade-enter'>
                2021년 12월 기준
            </div>
            <Flex styles={{
                alignItems: 'end',
                marginTop: '150px',
            }}>
                <Flex styles={{ width: '414px', marginBottom: '30px' }} ref={r => animationRefList.current[1] = r} className='fade-enter'>
                    <IncreaseText number={700} unit="만 명" purpose="의 여행자"></IncreaseText>
                    <IncreaseText number={100} unit="만 개" purpose="의 여행 리뷰"></IncreaseText>
                    <IncreaseText number={470} unit="만 개" purpose="의 여행 일정"></IncreaseText>
                </Flex>
                <Flex styles={{ flexDirection: 'row', width: '417px', justifyContent: 'start', whiteSpace: 'nowrap' }} ref={r => animationRefList.current[2] = r} className='fade-enter'>
                    <Award url={playstore}>
                        2018 구글 플레이스토어<br />
                        올해의 앱 최우수상 수상
                    </Award>
                    <Award url={apple}>
                        2018 애플 앱스토어<br />
                        오늘의 여행앱 선정
                    </Award>
                </Flex>
            </Flex>

        </Flex>
    )
}


export default Section2;

//700만 명의 여행자
// 100만 개의 여행 리뷰
// 470만 개의 여행 일정