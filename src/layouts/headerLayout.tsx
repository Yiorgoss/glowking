import NewsletterForm from "@/components/newsletterform"
import Footer from '@/components/footer'
import Header from "@/components/header"
import { ReactElement } from "react"

interface HeaderLayoutProps {
    children?: ReactElement | ReactElement[]
}

const NAV_LINKS = [
    //TODO: correct navlinks
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Services",
        path: "/services",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Portfolio",
        path: "/portfolio",
    },
];

export default function HeaderLayout({ children }: HeaderLayoutProps) {
    return (
        <div className="text-secondary bg-primary">
            <Header navLinks={NAV_LINKS} />
            <main>
                {children}
            </main>
            <NewsletterForm />
            <Footer navLinks={NAV_LINKS} />
        </div>
    )
}

//TODO: change add getLayout function as a property of layout and then bind statically to page component instead of as a static function on a perpage basis
//TODO: change the stackign order for header, by passing content through as props, ie enclose the content within the haeder


//export const getLayout = (page: ReactElement ) => {
//    <HeaderLayout>{page}</HeaderLayout>
//}
