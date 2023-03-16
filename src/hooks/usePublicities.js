import { useState, useEffect } from "react";
import {getStandardPublicities, getOficialPublicities } from '@services/publicity';
import { completePublicities } from "@helpers/publicity";

export default function usePublicies() {

    const [oficialPublicities, setOficialPublicities] = useState([]);
    const [standardPublicities, setStandardPublicities] = useState([]);

    useEffect(() => {
        getStandardPublicities()
            .then(data => {
                completePublicities(data);
                setStandardPublicities(data);
            })
            .catch(e => {
                const aux = [];
                completePublicities(aux);
                setStandardPublicities(aux);
            })
    }, [])


    useEffect(() => {
        getOficialPublicities()
            .then(data => {
                completePublicities(data);
                setOficialPublicities(data);
            })
            .catch(e => {
                const aux = [];
                completePublicities(aux);
                setOficialPublicities(aux);
            })
    }, [])

    return {
        oficialPublicities,
        standardPublicities
    }
}