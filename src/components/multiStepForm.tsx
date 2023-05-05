import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Prisma } from '@prisma/client';
import useSWR from 'swr';
import { Category, Subtype, Package, Extra } from '@prisma/client';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiFillCaretLeft } from 'react-icons/ai';

import Spinner from '@/components/spinner';
import ResponseBox from '@/components/responseBox';
import OptionalExtras from '@/components/optionalExtras';
import bookingFormSchema from '@/utils/bookingFormSchema';
import CalendarMain from '@/components/calendarMain';
import BookingForm from '@/components/bookingForm';

const FormContext = React.createContext<any>({});

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const DisplayCard = ({
    imageUrl,
    title,
    description,
    tailwindColor,
    cover
}: {
    imageUrl?: string;
    title: string;
    description: string;
    tailwindColor?: string;
    cover?: boolean;
}) => {
    return (
        <div
            className={`flex h-full min-h-[200px] flex-col justify-around rounded-lg ${tailwindColor}`}>
            {imageUrl && (
                <div className='relative h-full min-h-[150px] '>
                    <Image
                        className={`${
                            cover ? 'object-cover' : 'object-contain'
                        }`}
                        src={`/media/images/wizard-form-icons/${imageUrl}`}
                        alt=''
                        fill
                        sizes='(max-width:768) 40wv 20vw'
                        quality={50}
                    />
                </div>
            )}
            <div className='text-center text-lg font-semibold'>{title}</div>
            <div className='p-2 text-center'>{description}</div>
        </div>
    );
};
interface ILoading extends React.HTMLAttributes<HTMLDivElement> {}

const Loading = ({}: ILoading) => {
    return <Spinner className='h-[300px] fill-slate-700' />;
};

interface IFormActiveStepCircle extends React.HTMLAttributes<HTMLDivElement> {
    step: number;
}

const FormActiveStepCircle = ({ step }: IFormActiveStepCircle) => {
    const { currentStep, setCurrentStep, setManualBook } =
        React.useContext(FormContext);

    const colorStepCircle = (step: number) => {
        if (currentStep > step) {
            return 'text-slate-700 outline outline-2 outline-slate-700';
        }

        if (currentStep === step) {
            return 'border border-2 border-slate-100 outline outline-2 outline-slate-700 bg-slate-700 text-slate-100';
        }

        if (currentStep < step) {
            return 'text-slate-700 cursor-not-allowed';
        }
    };

    const handleClick = (step: number) => {
        if (step === 1) {
            setManualBook(false);
        }
        setCurrentStep(step);
    };

    return (
        <div
            className={`mx-auto flex h-[40px] w-[40px] items-center justify-center rounded-full ${colorStepCircle(
                step
            )}`}
            onClick={(e) =>
                step < currentStep ? handleClick(step) : e.preventDefault()
            }>
            {step}
        </div>
    );
};

interface IFormStepProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormStepTracker = ({}: IFormStepProps) => {
    const { prevStep, currentStep, formSteps, manualBook } =
        React.useContext(FormContext);

    return (
        <div className='my-5 flex w-full text-slate-700'>
            <div className='w-1/5 '>
                {currentStep > 1 && !manualBook && (
                    <AiFillCaretLeft
                        onClick={() => prevStep()}
                        className='h-[40px] w-[40px]'
                    />
                )}
            </div>
            {(formSteps as { step: number; title: string }[]).map(
                ({ step, title }, index) => (
                    <div className='mx-2' key={index}>
                        <FormActiveStepCircle step={step} />
                        <div className='mt-2 w-full grow text-center font-semibold'>
                            {currentStep === step && title}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

interface ISelectWashCategory extends React.HTMLAttributes<HTMLDivElement> {}

const SelectWashCategory = ({}: ISelectWashCategory) => {
    const { setValue } = useFormContext();
    const { locale } = useRouter();
    const { formState, setFormState, nextStep } = React.useContext(FormContext);
    const { data, error, isLoading } = useSWR(
        `/api/selectFromDB?table=initial&id=0&locale=${locale}`,
        fetcher
    );

    if (error)
        return (
            <div>
                Failed to load. Try refreshing your browser it this problem
                persists.{' '}
            </div>
        );
    if (isLoading) return <Loading />;
    const chooseCategory = (id: number, hasNext: boolean) => {
        setFormState((prev: any) => ({ ...prev, categoryId: id }));
        setValue('category', id);
        nextStep(hasNext);
    };

    return (
        <div className='flex h-full w-full flex-wrap items-center justify-center gap-[2%]  '>
            {(data as Category[]).map(
                ({ title, id, description, imageUrl, hasNext }, index) => (
                    <div
                        className={`mx-auto mt-[3%] flex w-[49%] flex-col md:w-[31%] ${
                            formState.categoryId === id
                                ? 'rounded-lg  outline outline-2 outline-green-400'
                                : 'rounded-lg  outline outline-2 outline-slate-700'
                        }`}
                        key={index}
                        onClick={() => chooseCategory(id, hasNext)}>
                        <DisplayCard
                            title={title}
                            description={description}
                            imageUrl={imageUrl}
                        />
                    </div>
                )
            )}
        </div>
    );
};
interface ISelectWashSubType extends React.HTMLAttributes<HTMLDivElement> {}

const SelectWashSubType = ({}: ISelectWashSubType) => {
    const { setValue } = useFormContext();
    const { locale } = useRouter();
    const { formState, setFormState, nextStep } = React.useContext(FormContext);
    const { data, error, isLoading } = useSWR(
        `/api/selectFromDB?table=category&id=${formState.categoryId}&locale=${locale}`,
        fetcher
    );
    if (error)
        return (
            <div>
                Failed to load. Try refreshing your browser it this problem
                persists.{' '}
            </div>
        );
    if (isLoading) return <Loading />;

    const chooseSubtype = (id: number, hasNext: boolean) => {
        setFormState((prev: any) => ({ ...prev, subtypeId: id }));
        setValue('subtype', id);
        nextStep(hasNext);
    };

    return (
        <div className='mx-auto flex h-full w-full flex-wrap items-start justify-center gap-[2%]  '>
            {(data as Subtype[]).map(
                ({ id, title, description, imageUrl, hasNext }, index) => (
                    <div
                        className={`mt-[3%] flex min-h-[200px] w-[49%] flex-col md:w-[31%] ${
                            formState.subtypeId === id
                                ? 'rounded-lg  outline outline-2 outline-green-400'
                                : 'rounded-lg  outline outline-2 outline-slate-700'
                        }`}
                        onClick={() => chooseSubtype(id, hasNext)}
                        key={index}>
                        <DisplayCard
                            title={title}
                            description={description}
                            cover={true}
                            imageUrl={imageUrl}
                        />
                    </div>
                )
            )}
        </div>
    );
};

interface ISelectPackageType extends React.HTMLAttributes<HTMLDivElement> {}

const SelectPackageType = ({}: ISelectPackageType) => {
    const { setValue } = useFormContext();
    const { locale } = useRouter();
    const { formState, setFormState, nextStep } = React.useContext(FormContext);
    const { data, error, isLoading } = useSWR(
        `/api/selectFromDB?table=subtype&id=${formState.subtypeId}&locale=${locale}`,
        fetcher
    );
    if (error)
        return (
            <div>
                Failed to load. Try refreshing your browser it this problem
                persists.{' '}
            </div>
        );
    if (isLoading) return <Loading />;

    const choosePackage = (id: number, hasNext: boolean) => {
        setFormState((prev: any) => ({ ...prev, packageId: id }));
        setValue('category', id);
        nextStep(hasNext);
    };

    return (
        <div className='mx-auto flex h-full w-full flex-wrap items-start justify-center gap-[2%]  '>
            {(data as Package[]).map(
                ({ id, title, description, tailwindColor, hasNext }, index) => (
                    <div
                        className={`mt-[3%] flex w-[49%] flex-col md:w-[31%] ${
                            formState.packageId === id
                                ? 'rounded-lg  outline outline-2 outline-green-400'
                                : 'rounded-lg  outline outline-2 outline-slate-700'
                        }`}
                        key={index}
                        onClick={() => choosePackage(id, hasNext)}>
                        <DisplayCard
                            title={title}
                            description={description}
                            cover={true}
                            tailwindColor={tailwindColor}
                        />
                    </div>
                )
            )}
        </div>
    );
};

interface ISelectExtras extends React.HTMLAttributes<HTMLDivElement> {}

const SelectExtras = ({}: ISelectExtras) => {
    const { setValue } = useFormContext();
    const { locale } = useRouter();
    const { formState, nextStep } = React.useContext(FormContext);
    const { data, error, isLoading } = useSWR(
        `/api/selectFromDB?table=package&id=${formState.packageId}&locale=${locale}`,
        fetcher
    );
    const [extraBasket, setExtraBasket] = React.useState<Map<number, Extra>>(
        new Map()
    );
    if (error) {
        return (
            <div>
                Failed to load. Try refreshing your browser it this problem
                persists.
            </div>
        );
    }
    if (isLoading) return <Loading />;

    const setExtras = (extras: Map<number, Extra>) => {
        const tmpArr: {
            id: number;
            title: string;
            price: number;
            time: Prisma.Decimal;
        }[] = [];
        extras.forEach(({ price, id, time, title }, _) => {
            tmpArr.push({ id, title, price, time });
        });
        setValue('extras', tmpArr);
        nextStep(true);
    };

    return (
        <div className='mx-auto flex flex-wrap py-5'>
            {data.length !== 0 ? (
                <OptionalExtras
                    extras={extraBasket}
                    setExtras={setExtraBasket}
                    data={data}
                />
            ) : (
                <div className=''>There are no packages for this category</div>
            )}
            <div
                className='mt-10 ml-auto w-fit rounded-lg border border-slate-700 bg-slate-700 px-10 py-5 text-slate-100 hover:bg-slate-100 hover:text-slate-700'
                onClick={() => setExtras(extraBasket)}>
                Go To Booking
            </div>
        </div>
    );
};

interface ISelectDatetime extends React.HTMLAttributes<HTMLDivElement> {}

const SelectDatetime = ({}: ISelectDatetime) => {
    const { setValue } = useFormContext();
    const { nextStep } = React.useContext(FormContext);
    const [datetime, setDatetime] = React.useState('');
    const [pickTimeErr, setPickTimeErr] = React.useState(false);

    const handleNextStep = () => {
        if (!datetime) {
            setPickTimeErr(true);
            window.scrollTo({
                top: 100,
                behavior: 'smooth'
            });
            return;
        }
        setValue('datetime', datetime);
        nextStep(true);
    };

    return (
        <div className=''>
            <div className='mt-3 h-14'>
                {pickTimeErr && (
                    <div className='ml-auto w-fit rounded-lg border border-red-500 bg-red-200 py-2 px-5 text-red-500'>
                        Please select a time for your clean
                    </div>
                )}
            </div>
            <CalendarMain setDateTimeStr={setDatetime} />
            <div
                className='my-5 ml-auto w-fit rounded-lg border border-slate-700 bg-slate-700 py-2 px-5 text-slate-100 hover:bg-slate-800'
                onClick={() => handleNextStep()}>
                Confirm Time
            </div>
        </div>
    );
};

interface ISelectBookingDetails extends React.HTMLAttributes<HTMLDivElement> {}

const SelectBookingDetails = ({}: ISelectBookingDetails) => {
    return (
        <div className='flex-cols my-10 flex flex-wrap justify-end'>
            <BookingForm />
            <button
                className='my-5 ml-auto w-fit rounded-lg border border-slate-700 bg-slate-700 py-2 px-5 text-slate-100 hover:bg-slate-800'
                type='submit'>
                Submit
            </button>
        </div>
    );
};

interface IGiveUsACall extends React.HTMLAttributes<HTMLDivElement> {}

const GiveUsACall = ({}: IGiveUsACall) => {
    return (
        <div className='mt-10 flex h-full w-full flex-col flex-wrap items-center justify-center text-xl'>
            <div className=''>
                Please give us a call to arrange a custom offer for you.
            </div>
            <div className='font-semibold'>
                Phone:
                <Link
                    className='cursor-alias font-normal'
                    href='tel:6980 000 015'>
                    {' '}
                    6980 000 015
                </Link>
            </div>
        </div>
    );
};

interface IFormPageDisplay extends React.HTMLAttributes<HTMLDivElement> {}

const FormPageDisplay = ({}: IFormPageDisplay) => {
    const { currentStep, manualBook } = React.useContext(FormContext);
    const stepSwitcher = (currentStep: number) => {
        switch (currentStep) {
            case 1:
                return <SelectWashCategory />;
            case 2:
                return <SelectWashSubType />;
            case 3:
                return <SelectPackageType />;
            case 4:
                return <SelectExtras />;
            case 5:
                return <SelectDatetime />;
            case 6:
                return <SelectBookingDetails />;
        }
    };

    return (
        <div className=''>
            {manualBook ? (
                <GiveUsACall />
            ) : (
                <div className=''>{stepSwitcher(currentStep)}</div>
            )}
        </div>
    );
};

interface IThankYouPage extends React.HTMLAttributes<HTMLDivElement> {}

const ThankYouPage = ({}: IThankYouPage) => {
    return (
        <div className=''>
            Thank you for the submission. We are emailing you the confirmation
            now.
        </div>
    );
};

interface IMultiStepForm extends React.HTMLAttributes<HTMLFormElement> {
    categoryId?: number;
}

const MultiStepForm = ({ categoryId }: IMultiStepForm) => {
    const [currentStep, setCurrentStep] = React.useState(1);
    const [submitReady, setSubmitReady] = React.useState(false);
    const [manualBook, setManualBook] = React.useState(false);
    const [submitSuccess, setSubmitSuccess] = React.useState(false);
    const [serverResponse, setServerResponse] = React.useState(false);
    const [formSteps, _] = React.useState([
        { title: 'Categories', step: 1 },
        { title: 'Subtypes', step: 2 },
        { title: 'Packages', step: 3 },
        { title: 'Extras', step: 4 },
        { title: 'Confirm Date', step: 5 },
        { title: 'Details', step: 6 }
    ]);

    const firstVisit = React.useRef(0);

    const [formState, setFormState] = React.useState({
        categoryId: categoryId ?? null,
        typeId: null,
        packageId: null
    });

    React.useEffect(() => {
        if (firstVisit.current === 0) {
            if (formState.categoryId) {
                setCurrentStep(2);
            }
            firstVisit.current = 1;
        }
    }, [formState.categoryId]);

    const formMethods = useForm({
        resolver: yupResolver(bookingFormSchema)
    });

    const nextStep = (hasNext?: boolean) => {
        if (!hasNext) {
            setManualBook(true);
            setCurrentStep(formSteps.length);
            return;
        }

        //console.log(window.screenY);
        window.scrollTo({
            top: 100,
            behavior: 'smooth'
        });

        if (currentStep >= formSteps.length) {
            setSubmitReady(true);
            return;
        }

        setCurrentStep((cur: number) => cur + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((cur: number) => cur - 1);
        }
    };

    const onSubmit = async (data: any, e: any) => {
        e.preventDefault();
        //console.log(data);
        const res = await fetch('/api/insertBooking', {
            method: 'POST',
            mode: 'cors',
            headers: {
                Accept: 'application/json, text/plain */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        window.scrollTo({
            top: 100,
            behavior: 'smooth'
        });

        if (res.ok) {
            setSubmitSuccess(true);
            setServerResponse(true);
        } else {
            setSubmitSuccess(true);
            setServerResponse(false);
        }
    };
    const onError = (err: any, e: any) => {
        e.preventDefault();
        console.log('error', err);
        window.scrollTo({
            top: 100,
            behavior: 'smooth'
        });
    };

    return (
        <FormProvider {...formMethods}>
            {submitSuccess && (
                <ResponseBox
                    status={serverResponse}
                    text='Thank you for the submission. We are emailing you the confirmation now.'
                />
            )}
            <form
                onSubmit={formMethods.handleSubmit(onSubmit, onError)}
                className='py-10'>
                <FormContext.Provider
                    value={{
                        currentStep: currentStep,
                        setCurrentStep: setCurrentStep,
                        submitReady: submitReady,
                        setSubmitReady: setSubmitReady,
                        formSteps: formSteps,
                        formState: formState,
                        setFormState: setFormState,
                        prevStep: prevStep,
                        nextStep: nextStep,
                        manualBook: manualBook,
                        setManualBook: setManualBook
                    }}>
                    <div className='container mx-auto flex h-full min-h-[500px] w-full flex-col justify-between divide-y-2 divide-slate-500/50 rounded-lg border-2 border-slate-400 bg-primary p-3 md:w-[800px]'>
                        {formMethods.formState.isSubmitSuccessful && false ? (
                            <ThankYouPage />
                        ) : (
                            <>
                                <FormStepTracker />
                                <div className='min-h-[300px]'>
                                    <FormPageDisplay />
                                </div>
                            </>
                        )}
                    </div>
                </FormContext.Provider>
            </form>
        </FormProvider>
    );
};

export default MultiStepForm;
/*
   Apologies to whoever has to read this shit.
   Form steps defined at the top of the file, these dont change
   Each step component is handled by a switch statement
   Each component makes a request to get the data from the backend, selectFromDB
   Each request has 3 components,   table -> what tabled do we have data from
                                    id -> the id to check out
                                    locale -> anyones guess

   To add a new step first add it to the form steps,
   Then create the component for the page
   Then create a new db query in the api route and return data

   Nextstep takes in an optional hasNext parameter in case there isnt a online booking path available
   Check prisma/seed.ts for information about the database layout

   manualbook is responsible for control flow that cannot be done online
   ie ask for price

 */
