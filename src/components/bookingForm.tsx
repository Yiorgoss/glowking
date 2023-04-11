import Link from 'next/link';
import { useState, useEffect } from 'react';

import { t } from '@lingui/macro';

import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import calendarSchema from '@/utils/calendarSchema';
import CalendarMain from '@components/calendarMain';
import ResponseBox from '@components/responseBox';

const BookingForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm({
        resolver: yupResolver(calendarSchema)
    });

    const [serverResponse, setServerResponse] = useState(false);
    const [message, setMessage] = useState('');

    const onSubmit = async (data: any, e: any) => {
        //e.defaultPrevented=false
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const res = await fetch('/api/calendar', {
            method: 'POST',
            mode: 'cors',
            headers: {
                Accept: 'application/json, text/plain */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const response = res.status === 200;

        setServerResponse(response);
        if (response) {
            setMessage(
                t({
                    id: 'BookingForm.successMessage',
                    message: 'Successful Submission. We thank you!'
                })
            );
            reset();
        } else {
            setMessage(
                t({
                    id: 'BookingForm.errorMessage',
                    message:
                        'Submission was not recorded. Please contact us directly at 6980 000 015'
                })
            );
        }
    };
    const onError = (err: any) => {
        console.log('error', err);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const [dateTimeStr, setDateTimeStr] = useState('');

    useEffect(() => {
        //console.log(dateTimeStr);
        setValue('datetime', dateTimeStr);
    }, [dateTimeStr, setValue]);

    //todo    i18n the new words
    //        better meta and title per page
    //        Booking form needs to show user errors
    //        finalised pictures
    //        recaptch
    //        dark theme
    //        primary keyword to landing page image
    //        Banner lambo change
    //        validation on date time picking
    //        add some security to api to avoid spam
    //        tertiary color a bit darker
    //        show something whenever the form is submitted successfully

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <div className='container mx-auto grid grid-cols-1 gap-4 bg-slate-300 p-4 md:grid-cols-2'>
                <div className={`${errors.datetime ? 'outline-red-500 outline p-2 outline-2' : ''}  rounded-lg`}>
                    <CalendarMain setDateTimeStr={setDateTimeStr} />
                </div>
                <div className='text-md grid grid-cols-2 gap-3'>
                    <input
                        className={`rounded-lg py-2 px-4 text-secondary focus:outline-tertiary ${
                            errors.name
                                ? 'outline outline-2 outline-red-500'
                                : ''
                        }`}
                        placeholder={t({
                            id: 'bookingForm.input.name',
                            message: 'Full Name'
                        })}
                        disabled={isSubmitting}
                        {...register('name')}
                    />
                    <input
                        className={`rounded-lg py-2 px-4 text-secondary focus:outline-tertiary ${
                            errors.phone
                                ? 'outline outline-2 outline-red-500'
                                : ''
                        } `}
                        placeholder={t({
                            id: 'bookingForm.input.number',
                            message: 'Phone Number'
                        })}
                        disabled={isSubmitting}
                        {...register('phone')}
                    />
                    <input
                        className={`rounded-lg py-2 px-4 text-secondary focus:outline-tertiary `}
                        placeholder={t({
                            id: 'bookingForm.input.email',
                            message: 'Email'
                        })}
                        disabled={isSubmitting}
                        {...register('email')}
                    />
                    <input
                        className={`rounded-lg py-2 px-4 text-secondary focus:outline-tertiary ${
                            errors.location ? 'outline-2 outline-red-500' : ''
                        }`}
                        placeholder={t({
                            id: 'bookingForm.input.location',
                            message: 'Location'
                        })}
                        disabled={isSubmitting}
                        {...register('location')}
                    />
                    <div className=''>
                        <textarea
                            className='h-[200px] w-full rounded-lg py-2 px-4 text-secondary focus:outline-tertiary '
                            placeholder={t({
                                id: 'bookingForm.input.message',
                                message: 'Special Instructions'
                            })}
                            disabled={isSubmitting}
                            {...register('messageBody')}
                        />
                    </div>
                    <div className='my-2 mt-auto ml-auto'>
                        <div className=''>
                            <label>
                                {t({
                                    id: 'bookingForm.input.accept',
                                    message: 'Accept Terms and '
                                })}
                                <Link
                                    className='mr-2 text-blue-500 underline'
                                    href='/legal'>
                                    {t({
                                        id: 'bookingForm.input.conditions',
                                        message: 'Conditions'
                                    })}
                                </Link>
                            </label>
                            <input
                                className={`focus:outline-tertiary ${
                                    errors.acceptTerms
                                        ? 'outline-2 outline-red-500'
                                        : ''
                                }`}
                                type='checkbox'
                                disabled={isSubmitting}
                                {...register('acceptTerms')}
                            />
                        </div>
                        <input
                            className=' float-none mt-4 rounded-lg bg-primary px-4 py-2 hover:cursor-pointer md:float-right'
                            type='submit'
                            value={t({
                                id: 'bookingForm.input.submit',
                                message: 'submit'
                            })}
                        />
                    </div>
                </div>
            </div>
            {isSubmitSuccessful && (
                <ResponseBox text={message} status={serverResponse} />
            )}
        </form>
    );
};

export default BookingForm;
