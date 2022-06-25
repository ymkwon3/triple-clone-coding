import React from "react";
import { Flex } from "../../elements";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Section1 = () => {
    const style = {
        position: "relative",
        backgroundImage: "url('https://triple.guide/intro/images/img-01-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "860px",
        zIndex: "10"
    }

    return (
        <Flex styles={style}>
            첫번째 섹션입니다.
        </Flex>
    )
}

export default Section1;