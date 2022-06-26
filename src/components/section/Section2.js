import React from 'react'
import styled from 'styled-components';
import { Flex, IncreaseText } from "../../elements";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import { triple, playstore, apple } from '../../image';

const sectionStyle = {
    background: "inherit",
    height: "552px",
    width: "1040px",
    flexDirection: 'row',
    justifyContent: "start",
    alignItems: 'start',
    position: 'relative'
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

    const view = useIntersectionObserver(cursor)
    // const view = true;
    console.log(view)
    console.log(cursor)



    return (
        <Flex styles={sectionStyle} ref={setCursor}>
            {view &&
                <>
                    <div style={imageStyle}>
                        2021년 12월 기준
                    </div>
                    <Flex styles={{
                        alignItems: 'end',
                        marginTop: '150px',
                    }}>
                        <Flex styles={{ width: '414px', marginBottom: '30px' }}>
                            <IncreaseText number={700} unit="만 명" purpose="의 여행자"></IncreaseText>
                            <IncreaseText number={100} unit="만 개" purpose="의 여행 리뷰"></IncreaseText>
                            <IncreaseText number={470} unit="만 개" purpose="의 여행 일정"></IncreaseText>
                        </Flex>
                        <Flex styles={{ flexDirection: 'row', width: '417px', justifyContent: 'start', whiteSpace: 'nowrap' }}>
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
                </>
            }
        </Flex>
    )
}

const Award = styled.div`
    background-image: url(${props => props.url});
    background-position: left top;
    background-repeat: no-repeat;
    background-size: 54px 54px;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
    height: 64px;
    padding: 5px 0px 5px 62px;
    margin-right: 39px;
    font-size: 14px;
    line-height: 22px;
`;

export default Section2;

//700만 명의 여행자
// 100만 개의 여행 리뷰
// 470만 개의 여행 일정