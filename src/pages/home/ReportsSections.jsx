import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import ReportofMain from '@components/home/ReportOfMain';

import { getReports } from '@services/reports';

export default function ReportsSecitons() {

    const [reports, setReports] = useState([]);

    useEffect(() => {
        getReports(3)
            .then(res => {
                setReports(res);
            })
            .catch(e => {
            });
    }, [])


    return (
        <section className="reportSection">
            <div className="reports">
                {reports.length > 0 &&
                    reports.map(report => <ReportofMain key={report.id} report={report} />)
                }
            </div>
            <Link to='./informes'>Ver más</Link>
        </section>
    )
}
