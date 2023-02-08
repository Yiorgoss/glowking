import HeaderLayout from '@layouts/headerLayout'

import { ReactElement } from 'react'

import type { PageWithHeaderLayout } from "@cTypes/layoutTypes"

const Services: PageWithHeaderLayout = () => {
    return(
        <div className="mx-auto">
            hi
        </div>
    )
}

Services.getLayout = function getLayout(page:ReactElement) {
    return <HeaderLayout>{page}</HeaderLayout>
}

export default Services
