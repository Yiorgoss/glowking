import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { i18n } from '@lingui/core';
import { defineMessage } from '@lingui/macro';
import useSWR from 'swr';
import { Category, Subtype, Package, Extra } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Spinner from '@/components/spinner';
import Card from '@/components/common/card/card';
import OptionalExtras from '@/components/optionalExtras';
import onlineBookingSchema from '@/utils/onlineBookingSchema';
import CalendarMain from '@/components/calendarMain'

const FormContext = React.createContext<any>({});

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const DisplayCard = ({
    imageUrl,
    title,
    description,
    tailwindColor
}: {
    imageUrl?: string;
    title: string;
    description: string;
    tailwindColor?: string;
}) => {
    return (
        <div className={`${tailwindColor ? tailwindColor : ''}`}>
            <div className='relative'>
                {imageUrl && (
                    <Image
                        className='h-full w-full object-cover'
                        src={`/media/images/${imageUrl}`}
                        alt=''
                        fill
                        sizes='(max-width:768) 40wv 20vw'
                        quality={1}
                    />
                )}
            </div>
            <div className='text-center'>{title}</div>
            <div className='text-center'>{description}</div>
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
const formSteps: { title: string; step: number }[] = [
    { title: 'Categories', step: 1 },
    { title: 'Subtypes', step: 2 },
    { title: 'Packages', step: 3 },
    { title: 'Extras', step: 4 },
    { title: 'Details', step: 5 }
];

const FormActiveStepCircle = ({ step }: IFormActiveStepCircle) => {
    const { currentStep, setCurrentStep } = React.useContext(FormContext);

    const colorStepCircle = (step: number) => {
        if (currentStep > step) {
            return 'text-slate-700 outline outline-2 outline-slate-700';
        }

        if (currentStep === step) {
            return 'border border-2 border-slate-100 outline outline-2 outline-slate-700 bg-slate-700 text-slate-100';
        }

        if (currentStep < step) {
            return 'text-slate-700';
        }
    };

    return (
        <button
            className={`mx-auto flex h-[40px] w-[40px] items-center justify-center rounded-full ${colorStepCircle(
                step
            )}`}
            onClick={(e) =>
                step < currentStep ? setCurrentStep(step) : e.preventDefault()
            }>
            {step}
        </button>
    );
};

interface IFormStepProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormStepTracker = ({}: IFormStepProps) => {
    const { currentStep, formSteps, stepError } = React.useContext(FormContext);

    return (
        <div className='my-5 flex w-full justify-center text-slate-700'>
            <div className='w-full text-right text-red-500'>
                {stepError && stepError}
            </div>
            {formSteps.map(({ title, step }, index) => (
                <div className='mx-2' key={index}>
                    <FormActiveStepCircle step={step} />
                    <div className='mt-2 w-full text-center font-semibold'>
                        {currentStep === step && i18n._(title)}
                    </div>
                </div>
            ))}
        </div>
    );
};

interface IFormNavigation extends React.HTMLAttributes<HTMLButtonElement> {}
const FormNavigation = ({}: IFormNavigation) => {
    const { currentStep, prevStep, nextStep } = React.useContext(FormContext);

    const NextButton = () => {
        const nextText =
            currentStep === 1
                ? 'Start'
                : currentStep === formSteps.length
                ? 'Submit'
                : 'Next';
        return (
            <button
                className='h-full rounded-lg bg-slate-700 py-2 px-4 text-slate-100'
                role='submit'
                onClick={() => nextStep()}>
                {nextText}
            </button>
        );
    };

    return (
        <div className='mt-8 flex justify-end gap-x-5 py-8 font-normal tracking-wide text-slate-500'>
            {currentStep > 1 && (
                <button className='mr-auto hover:text-red-500'>Reset</button>
            )}
            {currentStep > 1 && (
                <button
                    className='rounded-lg border border-slate-700 px-4 text-slate-700 hover:bg-slate-700 hover:text-slate-100'
                    onClick={() => prevStep()}>
                    Back
                </button>
            )}
            <NextButton />
        </div>
    );
};

interface ISelectWashCategory extends React.HTMLAttributes<HTMLDivElement> {}

const SelectWashCategory = ({}: ISelectWashCategory) => {
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
    const chooseCategory = (id: number) => {
        setFormState((prev: any) => ({ ...prev, categoryId: id }));
        nextStep();
    };

    return (
        <div className='flex h-full w-full flex-wrap gap-0 md:gap-[2%] '>
            {(data as Category[]).map(
                ({ title, id, description, imageUrl }, index) => (
                    <div
                        className={`mt-[2%] flex min-h-[200px] min-w-[50%] grow flex-col md:min-w-[31%] ${
                            formState.categoryId === id
                                ? 'rounded-lg  outline outline-2 outline-green-400'
                                : ''
                        }`}
                        key={index}
                        onClick={() => chooseCategory(id)}>
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

    const chooseSubtype = (id: number) => {
        setFormState((prev: any) => ({ ...prev, subtypeId: id }));
        nextStep();
    };

    return (
        <div className='mx-auto flex h-full w-full flex-wrap gap-0 md:gap-[2%]'>
            {(data as Subtype[]).map(
                ({ id, title, description, imageUrl }, index) => (
                    <div
                        className={`mx-auto mt-[2%] flex min-h-[200px] min-w-[50%] max-w-[31%] grow flex-col md:min-w-[31%] ${
                            formState.subtypeId === id
                                ? 'rounded-lg  outline outline-2 outline-green-400'
                                : 'outline outline-2 outline-black'
                        }`}
                        onClick={() => chooseSubtype(id)}
                        key={index}>
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

interface ISelectPackageType extends React.HTMLAttributes<HTMLDivElement> {}

const SelectPackageType = ({}: ISelectPackageType) => {
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

    const choosePackage = (id: number) => {
        setFormState((prev: any) => ({ ...prev, packageId: id }));
        nextStep();
    };

    return (
        <div className='mx-auto flex h-full w-full flex-wrap gap-0 md:gap-[2%]'>
            {(data as Package[]).map(
                ({ id, title, description, tailwindColor }, index) => (
                    <div
                        className={`mt-[2%] flex min-h-[200px] min-w-[50%] grow flex-col md:min-w-[31%] ${tailwindColor} ${
                            formState.packageId === id
                                ? 'rounded-lg  outline outline-2 outline-green-400'
                                : ''
                        }`}
                        key={index}
                        onClick={() => choosePackage(id)}>
                        <DisplayCard
                            title={title}
                            description={description}
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
    const { locale } = useRouter();
    const { formState, setFormState, nextStep } = React.useContext(FormContext);
    const { data, error, isLoading } = useSWR(
        `/api/selectFromDB?table=package&id=${formState.packageId}&locale=${locale}`,
        fetcher
    );
    const [extraBasket, setExtraBasket] = React.useState<Map<string, number>>(
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

    return (
        <div>
            <OptionalExtras
                extras={extraBasket}
                setExtras={setExtraBasket}
                data={data}
            />
        </div>
    );
};

interface ISelectDatetime extends React.HTMLAttributes<HTMLDivElement> {

}

const SelectDatetime = ({}:ISelectDatetime) => {

    const [datetime, setDatetime] = React.useState('');

    return(
        <div className="">
            <CalendarMain setDateTimeStr={setDatetime}/>
        </div>
    )
}


interface IFormPageDisplay extends React.HTMLAttributes<HTMLDivElement> {
    page: number;
}

const FormPageDisplay = ({ page }: IFormPageDisplay) => {
    const { currentStep } = React.useContext(FormContext);
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
            //case 6:
            //   return <BookingDetails />;
        }
    };

    return <div className=''>{stepSwitcher(currentStep)}</div>;
};

interface IMultiStepForm extends React.HTMLAttributes<HTMLFormElement> {}

const MultiStepForm = ({}: IMultiStepForm) => {
    const [currentStep, setCurrentStep] = React.useState(1);
    const [submitReady, setSubmitReady] = React.useState(false);

    const [stepError, setStepError] =
        React.useState<React.ReactNode>(undefined);

    const [formState, setFormState] = React.useState({
        categoryId: null,
        typeId: null,
        packageId: null,
        extraId: null
    });

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm({
        resolver: yupResolver(onlineBookingSchema)
    });

    const nextStep = () => {
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

    const onSubmit = (data: any, e: any) => {
        e.preventDefault();
        //console.log(data);
    };
    const onError = (err: any, e: any) => {
        e.preventDefault();
        //console.log(err);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormContext.Provider
                value={{
                    currentStep: currentStep,
                    setCurrentStep: setCurrentStep,
                    submitReady: submitReady,
                    setSubmitReady: setSubmitReady,
                    formSteps: formSteps,
                    formState: formState,
                    setFormState: setFormState,
                    stepError: stepError,
                    setStepError: setStepError,
                    prevStep: prevStep,
                    nextStep: nextStep
                }}>
                <div className='container mx-auto flex h-full min-h-[500px] w-[800px] flex-col justify-between divide-y-2 divide-slate-500/50 rounded-lg border-2 border-slate-400 bg-primary p-3'>
                    <FormStepTracker />
                    <div className='min-h-[300px]'>
                        <FormPageDisplay page={currentStep} />
                    </div>
                    <FormNavigation />
                </div>
            </FormContext.Provider>
        </form>
    );
};

export default MultiStepForm;
