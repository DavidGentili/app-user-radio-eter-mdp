import React, { useEffect, useState } from 'react'

import { getReports } from '@services/reports';
import ReportSlider from '@components/reports/ReportSlider';
import AllReports from '@components/reports/AllReports';
import PublicityPanel from '@components/PublicityPanel';

export default function PanelReport({ oficialPublicities }) {

    const [reports, setReports] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getReports()
            .then(data => {
                setReports(data);
                setLoading(false)
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    if (isLoading || !(reports && reports.length > 0))
        return <></>

    return (
        <main className="ReportsPage">
            <ReportSlider reports={reports} />
            <AllReports reports={reports} />
            <section>
                <PublicityPanel horizontal oficialPublicities={oficialPublicities} />
            </section>
        </main>
    )
}
