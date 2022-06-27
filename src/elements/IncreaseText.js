import React from "react"

const IncreaseText = (props) => {
    const { number, unit, purpose } = props;

    const defaultStyles = {
        width: '420px',
        fontSize: '36px',
        color: '#3A3A3A',
        letterSpacing: '-1px',
        marginBottom: '20px',
        lineHeight: '36px',
    }

    return (
        <div style={{ ...defaultStyles }}>
            <strong>
                {number}{unit}
            </strong>
            {purpose}
        </div>
    )
}

export default IncreaseText;