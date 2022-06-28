const LinkText = (props) => {
    const { styles, _onClick, children } = props;

    const defaultStyles = {
        textDecoration: 'none',
        fontSize: '17px',
        fontWeight: '500',
        cursor: 'pointer',
        userSelect: 'none',
    }

    return (
        <a style={{ ...defaultStyles, ...styles }} onClick={_onClick}>
            {children}
        </a>
    )
}

export default LinkText;