import React from 'react'
import styled from 'styled-components';
import { Flex, IncreaseText } from "../../elements";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import { triple, playstore, apple } from '../../image';

const sectionStyle = {
    background: "inherit",
    height: "552px",
    flexDirection: 'row',
    width: "1040px",
    justifyContent: "start",
    position: 'relative'
}

const imageStyle = {
    position: 'absolute',
    backgroundImage: `url(${triple})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "400px 338px",
    width: '400px',
    textAlign: 'center',
    paddingTop: '280px',
    top: '150px',
    color: 'rgba(58, 58, 58, 0.7)',
    fontSize: '15px',
}

const Section2 = () => {
    const [cursor, setCursor] = React.useState(null);

    const view = useIntersectionObserver(cursor)
    console.log(view)
    console.log(cursor)



    return (
        <Flex styles={sectionStyle} ref={setCursor}>
            {view &&
                <>
                    <div style={imageStyle}>
                        2021년 12월 기준
                    </div>
                    <Flex styles={{ alignItems: 'end' }}>
                        <Flex styles={{ width: '420px' }}>
                            <IncreaseText number={700} unit="만 명" purpose="의 여행자"></IncreaseText>
                            <IncreaseText number={100} unit="만 개" purpose="의 여행 리뷰"></IncreaseText>
                            <IncreaseText number={470} unit="만 개" purpose="의 여행 일정"></IncreaseText>
                        </Flex>
                        <Flex styles={{ flexDirection: 'row' }}>
                            <Award>
                                2018 구글 플레이스토어<br />
                                올해의 앱 최우수상 수상
                            </Award>
                        </Flex>
                    </Flex>
                </>
            }
        </Flex>
    )
}

const Award = styled.div`
    background-image: url(${playstore});
    background-position: left top;
    background-repeat: no-repeat;
    background-size: 54px 54px;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
    width: 214px;
    height: 64px;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
`;

export default Section2;

//700만 명의 여행자
// 100만 개의 여행 리뷰
// 470만 개의 여행 일정