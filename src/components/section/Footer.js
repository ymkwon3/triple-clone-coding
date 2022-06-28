import { Flex, Text } from "../../elements";

const Footer = () => {
    return (
        <Flex styles={{ backgroundColor: "#FAFAFA", height: '210px' }}>
            <Text styles={{ fontSize: '11px', color: '#3A3A3A80' }}>본 페이지는 (주)트리플 페이지의 클론 코딩 페이지입니다.</Text>
        </Flex>
    )
}

export default Footer;