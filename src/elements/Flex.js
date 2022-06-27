import React from "react"

const Flex = React.forwardRef((props, ref) => {
    const { styles, className, children } = props;

    const defaultStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }

    return (
        <div style={{ ...defaultStyles, ...styles }} ref={ref} className={className}>
            {children}
        </div>
    )
})

export default Flex;