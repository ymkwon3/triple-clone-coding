import styled from "styled-components";

const Button = (props) => {
    const { styles, _onClick, children } = props;

    return (
        <ButtonStyled style={styles} onClick={_onClick}>
            {children}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    width: 180px;
    height: 50px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 25px;
    cursor: pointer;
    user-select: none;
    transition: all 200ms ease-in-out 0s;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

export default Button;