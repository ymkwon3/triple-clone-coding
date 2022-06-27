const Award = (props) => {
    const { url, children } = props

    const defaultStyles = {
        backgroundImage: `url(${url})`,
        backgroundPosition: `left top`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `54px 54px`,
        color: `rgba(58, 58, 58, 0.8)`,
        fontWeight: `bold`,
        height: `64px`,
        padding: `5px 0px 5px 62px`,
        marginRight: `39px`,
        fontSize: `14px`,
        lineHeight: `22px`,
    }

    return (
        <div style={{ ...defaultStyles }}>
            {children}
        </div>
    )
}

export default Award;