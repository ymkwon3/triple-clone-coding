import React from 'react';

const useIntersectionObserver = (cursor) => {
    // 요소가 화면에 보일 경우 view: true
    const [view, isView] = React.useState(false);

    // observer에 의해 요소가 threshold 만큼 보이면 실행되는 콜백함수
    const intersectCallback = ([entry], observer) => {
        if (!entry.isIntersecting) {
            // 해당 요소가 뷰에 threshold 만큼 보이지 않을 경우
            isView(false)
            return;
        } else {
            // 해당 요소가 뷰에 threshold 만큼 보일 경우
            isView(true)
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
            observer && observer.disconnect()
        };
    }, [cursor])


    return view;
}

export default useIntersectionObserver;