import { ReactElement } from "react";

import { GetServerSideProps, GetStaticProps } from "next";

import { t } from "@lingui/macro";
import LandingLayout from "@/layouts/landingLayout";

import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";

import { loadTranslation } from "@/utils/utils";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const translation = await loadTranslation(
        ctx.locale!,
        process.env.NODE_ENV === "production"
    );

    return {
        props: {
            translation,
        },
    };
};

const Legal: PageWithHeaderLayout  = () => {
    return (
        <div className="container mx-auto mb-[100px] mt-[100px]">
        <div className="mx-auto w-4/5 pt-10 text-lg">
        <h1 className="py-10 text-center font-semibold tracking-wider">
        {t({
            id: "Legal.GDPR.header",
            message: "Privacy Policy & Terms of Use",
        })}
        </h1>
        <div className="">
        {t({
                        id: "Legal.GDPR.p1",
                        message:
                            "GLOW KING ATHENS understands that your privacy is important to you and that you care about how your personal data is used and shared online.",
                    })}
                    <br />
                    <br />
                </div>
                <div className="">
                    {t({
                        id: "Legal.GDPR.p2",
                        message:
                            "We respect and value the privacy of everyone who visits this website, and we will only collect and use personal data in ways described here, and in a way that is consistent with your obligations and rights under the law.",
                    })}
                    <br />
                    <br />
                </div>
                <div className="">
                    {t({
                        id: "Legal.GDPR.p3",
                        message:
                            "GLOW KING ATHENS complies with the applicable legislative, regulatory and contractual provisions regarding the collection, storage, recovery and destruction of this data, in particular with the directives of the competent Regulation (EU) 2016/679 which concerns the protection of Personal Data (GDPR)",
                    })}
                    <br />
                    <br />
                </div>
                <div className="">
                    {t({
                        id: "Legal.GDPR.p4",
                        message:
                            "Please read this Privacy Policy carefully and make sure you understand it.",
                    })}
                    <br />
                    <br />
                </div>
                <div className="">
                    {t({
                        id: "Legal.GDPR.p5",
                        message:
                            "Acceptance of the Privacy Policy is deemed to take place upon first use of the website.",
                    })}
                    <br />
                    <br />
                </div>
                <div className="">
                    {t({
                        id: "Legal.GDPR.p6",
                        message:
                            "If you do not accept and agree to this Privacy Policy, you must stop using our Website immediately.",
                    })}
                    <br />
                    <br />
                </div>
                <div className="">
                    {t({
                        id: "Legal.GDPR.p7",
                        message:
                            "Η παρούσα Πολιτική ισχύει για τη χρήση οποιουδήποτε και όλων των Δεδομένων που συλλέγονται από εμάς σε σχέση με τη χρήση της Ιστοσελίδας από εσάς και οποιωνδήποτε Υπηρεσιών ή Συστημάτων σε αυτήν.",
                    })}
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

Legal.getLayout = function getLayout(page: ReactElement) {
    return <LandingLayout>{page}</LandingLayout>;
};

export default Legal;
