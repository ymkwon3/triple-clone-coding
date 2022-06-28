import React from "react"

// ease out 효과를 주기 위한 함수입니다.
function easeOutQuart(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

const IncreaseText = (props) => {
    const { number, unit, target } = props;
    /* 
        number: 숫자
        unit: 숫자의 단위
        target: 숫자의 대상
    */
    // n: 연산이 실행될 횟수입니다.
    const n = 60;

    // num: 화면에 보여지는 숫자입니다.
    const [num, setNum] = React.useState(0);

    React.useEffect(() => {
        let count = 0;
        // count: 연산이 실행되는 횟수입니다. 2초에 n번만큼 실행합니다.
        const increase = setInterval(function () {
            count += 1 / n;
            const progress = easeOutQuart(count)
            setNum(Math.round(number * progress));

            // n번만큼 실행이 된 후 setInterval은 종료됩니다.
            if (progress === 1) {
                clearInterval(increase)
            }
        }, 2000 / n);
    }, [])

    return (
        <div style={{ ...defaultStyles }}>
            <strong>
                {num}{unit}
            </strong>
            {target}
        </div>
    )
}

// 이 컴포넌트의 최상위 요소의 스타일입니다.
const defaultStyles = {
    width: '420px',
    fontSize: '36px',
    color: '#3A3A3A',
    letterSpacing: '-1px',
    marginBottom: '20px',
    lineHeight: '36px',
}

export default IncreaseText;