import { useEffect, useState } from "react";
import { mainSliderCode } from "../config";
import { getPlaformContentByname, getPlatformContentByCode } from "../services/content";
import { completeSliderContent } from "../helpers/sliederContent";


export default function useMainSlider() {

    const [mainSliderContent, setMainSliderContent] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getPlatformContentByCode(mainSliderCode)
            .then(data => {
                const content = completeSliderContent(data.map(item => ({
                    name: item.title,
                    urlImage: item.src
                })));
                setMainSliderContent(content);
            })
            .catch(e => {
                console.log(e);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    return { content: mainSliderContent, isLoading };
}