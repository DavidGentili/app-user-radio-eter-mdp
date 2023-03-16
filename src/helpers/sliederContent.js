import slider1 from '@assets/slider-1.jpg'
import slider2 from '@assets/slider-2.jpg'

const initialSlider = [
    {
        urlImage: slider1,
        name: 'slider-standard-1'
    },
    {
        urlImage: slider2,
        name: 'slider-standard-2'
    }
]


export const completeSliderContent = (data) => {
    const sliderContent = []
    data.forEach(program => {
        if (program.urlImage)
            sliderContent.push(program)
    });
    const aux = [...initialSlider];
    while (sliderContent.length < 3 && aux.length > 0) {
        sliderContent.push(aux.shift());
    }
    return sliderContent;
}