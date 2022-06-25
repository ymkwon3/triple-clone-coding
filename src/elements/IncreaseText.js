import React from "react"
import styled from "styled-components";

const IncreaseText = (props) => {
    const { number, unit, purpose } = props;
    return (
        <StyledDiv>
            <strong>
                {number}{unit}
            </strong>
            {purpose}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    width: 420px;
    font-size: 36px;
    color: #3A3A3A;
    letter-spacing: -1px;
    margin-bottom: 20px;
    line-height: 36px;
`;

export default IncreaseText;