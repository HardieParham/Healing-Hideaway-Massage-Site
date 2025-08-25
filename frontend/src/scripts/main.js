import Splide from '@splidejs/splide';


new Splide( '.splide', {
        type    : 'loop',
        autoplay: 'play',
        perPage : 1,
        arrows: false,
        resetProgress: false,
    }
).mount();
