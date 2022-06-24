import styled from "styled-components";

const Flex = (props) => {
    const { styles, children } = props;
    return (
        <FlexDiv style={styles}>
            {children}
        </FlexDiv>
    )
}

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-Items: center;
    justify-content: center;
    width: 100%;
`;

export default Flex;