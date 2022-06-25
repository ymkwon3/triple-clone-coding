import React from 'react';

const useIntersectionObserver = (cursor) => {
    console.log(cursor)
    const [view, isView] = React.useState(false);
    const intersectCallback = ([entry], observer) => {
        if (!entry.isIntersecting) {
            // 해당 요소가 뷰에 threshold 만큼 보이지 않을 경우
            isView(false)
            console.log("요소가 안 보임")
            return;
        } else {
            // 해당 요소가 뷰에 threshold 만큼 보일 경우
            isView(true)
            console.log("요소가 보임")

            // 요소의 애니메이션은 한 번만 적용될 예정이니 사용후 종료
            observer.unobserve(entry.target);
        }
    }

    React.useEffect(() => {
        let observer;
        if (cursor) {
            observer = new IntersectionObserver(intersectCallback, {
                threshold: 0.9,
            }).observe(cursor);
        }
        return () => {
            console.log("종료")
            observer && observer.disconnect()
        };
    }, [cursor])


    return view;
}

export default useIntersectionObserver;