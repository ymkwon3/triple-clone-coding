import React from "react"
import styled from "styled-components";

const Flex = React.forwardRef((props, ref) => {
    const { styles, className, children } = props;

    return (
        <StyledDiv style={{ ...styles }} ref={ref} className={className}>
            {children}
        </StyledDiv>
    )
})

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export default Flex;