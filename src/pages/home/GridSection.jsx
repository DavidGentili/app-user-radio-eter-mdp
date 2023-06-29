import React from 'react'

import ProgramGrid from '@components/home/programGrid';
import PublicityPanel from '@components/PublicityPanel';

export default function GridSection({ oficialPublicities }) {
    return (
        <section className="gridSection">
            <ProgramGrid />
            <PublicityPanel {...{ oficialPublicities }} />

        </section>
    )
}
