import styled from "styled-components";

const Text = (props) => {
    const { styles, children } = props;

    return (
        <StyledP style={styles}>
            {children}
        </StyledP>
    )
}

const StyledP = styled.p`
    font-size: 17px;
    font-weight: 500;
`;

export default Text;