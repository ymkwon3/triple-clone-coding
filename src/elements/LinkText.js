import styled from "styled-components";

const LinkText = (props) => {
    const { styles, _onClick, children } = props;

    return (
        <StyledA style={styles} onClick={_onClick}>
            {children}
        </StyledA>
    )
}

const StyledA = styled.a`
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
`;

export default LinkText;