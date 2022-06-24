import { Flex } from "../../elements";

const Section1 = () => {
    const attr = {
        position: "relative",
        backgroundImage: "url('https://triple.guide/intro/images/img-01-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "860px"
    }

    return (
        <Flex styles={attr}>
            첫번째 섹션입니다.
        </Flex>
    )
}

export default Section1;