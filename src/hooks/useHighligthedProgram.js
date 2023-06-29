import React, { useEffect, useState } from 'react';
import { completeSliderContent } from '@helpers/sliederContent';

import { getHighlightedPrograms } from '@services/program'

export default function useHighligthedProgram() {
    const [mainSliderContent, setMainSliderContent] = useState([]);

    useEffect(() => {
        getHighlightedPrograms()
            .then(({ data }) => {
                const sliderContent = completeSliderContent(data);
                setMainSliderContent(sliderContent);
            })
            .catch(e => console.log(e));
    }, [])


    return mainSliderContent;
}