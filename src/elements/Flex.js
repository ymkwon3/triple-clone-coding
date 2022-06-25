import React from "react"
import styled from "styled-components";

const Flex = React.forwardRef((props, ref) => {
    const { styles, children } = props;
    return (
        <FlexDiv style={styles} ref={ref}>
            {children}
        </FlexDiv>
    )
})

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-Items: center;
    justify-content: center;
    width: 100%;
`;

export default Flex;