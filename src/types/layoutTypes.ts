import type { ReactElement, ReactNode } from "react"
import type { NextPage } from 'next'

export type PageWithHeaderLayout<P = {}, IP = P> = NextPage<P, IP> &   = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

//const layoutTypes = { PageTransitionEvent }
//
//export default layoutTypes
