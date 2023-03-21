import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

import { getReports } from '@services/reports';
import ReportSlider from '@components/reports/ReportSlider';
import AllReports from '@components/reports/AllReports';
import PublicityPanel from '@components/PublicityPanel';
import PageTransition from '../../components/PageTransition';

export default function PanelReport({ oficialPublicities }) {

    const [reports, setReports] = useState(null);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        getReports()
            .then(data => {
                if (data && Array.isArray(data) && data.length > 0)
                    setReports(data);
                setLoading(false)

            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    if (isLoading)
        return <></>

    if (!isLoading && !reports) {
        return <Navigate to='/' />
    }

    return (
        <PageTransition className="ReportsPage">
            <ReportSlider reports={reports.slice(0, 4)} />
            <AllReports reports={reports} />
            <section>
                <PublicityPanel horizontal oficialPublicities={oficialPublicities} />
            </section>
        </PageTransition>
    )
}
