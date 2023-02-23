import LayoutLayout from "@layouts/landingLayout";
import { ReactElement, useState } from "react";

import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";

const Contact: PageWithHeaderLayout = () => {
    //TODO: refactor form into compound component
    //TODO: remove form elements and instead use react and axios/fetch

    return (
        <div className="10 container mx-auto mt-[100px]">
            <div className="my-10 pb-20">
                <h2 className="my-20 pt-10 text-center text-5xl font-semibold">
                    Contact Us
                </h2>
                <div className="grid grid-cols-2 tracking-wider ">
                    <div className="pr-20 text-right text-6xl">
                        We love to
                        <br />
                        <span className="text-9xl  font-bold uppercase text-tertiary">
                            {" "}
                            help
                        </span>
                    </div>
                    <div className="my-auto flex flex-col text-2xl">
                        <div className="text-2xl ">
                            <span className="text-3xl font-semibold">
                                Phone:
                            </span>{" "}
                            +30 691 234 5678
                        </div>
                        <div className="my-8 pl-10 text-6xl font-bold">
                            Or By
                        </div>
                        <div className="text-2xl">
                            <span className="text-3xl font-semibold">
                                Email:
                            </span>{" "}
                            glowkingath@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Contact.getLayout = function getLayout(page: ReactElement) {
    return <LayoutLayout>{page}</LayoutLayout>;
};

export default Contact;
