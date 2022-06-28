const Text = (props) => {
    const { styles, children } = props;

    const defaultStyles = {
        fontSize: '17px',
        fontWeight: '500',
    }


    return (
        <p style={{ ...defaultStyles, ...styles }}>
            {children}
        </p>
    )
}

export default Text;