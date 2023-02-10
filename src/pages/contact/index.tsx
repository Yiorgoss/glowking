import HeaderLayout from "@layouts/headerLayout";
import { ReactElement, useState } from "react";

import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";

const Contact: PageWithHeaderLayout = () => {
    //TODO: refactor form into compound component
    //TODO: remove form elements and instead use react and axios/fetch
    const [name, setName] = useState("Name");
    const [email, setEmail] = useState("Email");
    const [messageBody, setMessageBody] = useState("Message");

    return (
        <div className="container mx-auto">
            <div className="mt-10">
                <h2 className="text-center font-bold text-4xl">
                    Contact Us
                </h2>
                <div className="grid mt-10 grid-cols-2 gap-4 justify-center font-bold">
                    <div className="text-xl text-right font-semibold">Telephone:</div>
                    <div className="text-xl font-semibold">69 123 456 78</div>
                    <div className="text-xl text-right font-semibold">Email:</div>
                    <div className="text-xl font-semibold">glowkingath@gmail.com</div>
                </div>
            </div>
            <h2 className="mt-10 text-center text-3xl font-bold">
                Send us an Email
            </h2>
            <div className="">
                <form className="" action="/api/contact" method="post">
                    <div className=" grid grid-cols-2 justify-center gap-y-5 gap-x-5 rounded-md p-10 text-lg">
                        <input
                            className="rounded-md px-10 py-2"
                            placeholder="Name"
                            type="text"
                            required
                            id="name"
                            name="name"
                        />
                        <input
                            className="rounded-md px-10 py-2"
                            placeholder="Email"
                            type="text"
                            required
                            id="email"
                            name='email'
                        />
                        <div className="col-span-full h-[300px]">
                            <textarea
                                id="messageBody"
                                required
                                placeholder="Message"
                                name="message"
                                className="h-full w-full rounded-md px-10 py-5"
                            />
                        </div>
                        <button
                            className="w-1/2 rounded-md bg-white px-5 py-2"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

Contact.getLayout = function getLayout(page: ReactElement) {
    return <HeaderLayout>{page}</HeaderLayout>;
};

export default Contact;
