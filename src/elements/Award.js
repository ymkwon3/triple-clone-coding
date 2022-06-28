import styled from "styled-components"

const Award = (props) => {
    const { url, children } = props

    return (
        <StyledDiv url={url}>
            {children}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
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

export default Award;