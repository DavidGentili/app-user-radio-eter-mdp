import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getReportById, getReportsWithoutId } from '@services/reports';
import ErrorPage from '@components/ErrorPage';
import SingleReportMain from '@components/reports/SingleReportMain';
import OtherReports from '@components/reports/OtherReports';

export default function SingleReport() {

    const [report, setReport] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [otherReports, setOtherReports] = useState([]);

    const { reportId } = useParams();

    useEffect(() => {
        getReportById(reportId)
            .then(res => {
                setReport(res);
                setLoading(false);
            })
            .catch()
    }, [])

    useEffect(() => {
        getReportsWithoutId(reportId)
        .then(res => {
            setOtherReports(res);
        })
        .catch()
    }, [])

    if (isLoading)
        return <></>

    if (!report)
        return <ErrorPage />

    return (
        <main className="singleReport">
            <SingleReportMain report={report} />
            <OtherReports reports={otherReports} />
        </main>
    )
}
