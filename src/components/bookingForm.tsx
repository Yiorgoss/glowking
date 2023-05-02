import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

import { MessageDescriptor } from '@lingui/core';
import { t } from '@lingui/macro';

import dayjs from 'dayjs';
import { useForm, useFormContext } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import calendarSchema from '@/utils/calendarSchema';
import CalendarMain from '@components/calendarMain';
import ResponseBox from '@components/responseBox';
import OptionalExtras from '@components/optionalExtras';

const BookingForm = () => {
    //const {
    //    register,
    //    formState: { errors, isSubmitting, isSubmitSuccessful }
    //} = useForm({
    //    resolver: yupResolver(calendarSchema)
    //});

    const {register, formState: {errors, isSubmitting}} = useFormContext()

    //const [serverResponse, setServerResponse] = useState(false);
    //const [message, setMessage] = useState('');
    //const [dateTimeStr, setDateTimeStr] = useState('');
    //const [extras, setExtras] = useState<Map<string, number>>(
    //    new Map([['Silver Wash', 30]])
    //);
    const [total, setTotal] = useState(30);

    //useEffect(() => {
    //    //console.log({ extras: extras });
    //}, [extras]);

//    const onSubmit = async (data: any, e: any) => {
//        //e.defaultPrevented=false
//        e.preventDefault();
//        window.scrollTo({
//            top: 800,
//            behavior: 'smooth'
//        });
//
//        data.extras = [];
//        extras.forEach((value, key) =>
//            data.extras.push({ name: key, price: value })
//        );
//
//        const res = await fetch('/api/calendar', {
//            method: 'POST',
//            mode: 'cors',
//            headers: {
//                Accept: 'application/json, text/plain */*',
//                'Content-Type': 'application/json'
//            },
//            body: JSON.stringify(data)
//        });
//
//        const response = res.status === 200;
//        setServerResponse(response);
//        if (response) {
//            setMessage(
//                t({
//                    id: 'BookingForm.successMessage',
//                    message: 'Successful Submission. We thank you!'
//                })
//            );
//            //reset();
//        } else {
//            setMessage(
//                t({
//                    id: 'BookingForm.errorMessage',
//                    message:
//                        'Submission was not recorded. Please contact us directly at 6980 000 015'
//                })
//            );
//        }
//    };

    //useEffect(() => {
    //    //console.log(dateTimeStr);
    //    setValue('datetime', dateTimeStr);
    //}, [dateTimeStr, setValue]);

    //useEffect(() => {
    //    setTotal([...extras.values()].reduce((tot, cur) => (tot += cur)));
    //}, [extras]);
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
                    <div className='h-full'>
                        <textarea
                            className='h-[250px] w-full rounded-lg py-2 px-4 text-secondary focus:outline-tertiary '
                            placeholder={t({
                                id: 'bookingForm.input.message',
                                message: 'Special Instructions'
                            })}
                            disabled={isSubmitting}
                            {...register('messageBody')}
                        />
                    </div>
                    <div className='my-2 mt-auto ml-auto'>
                        <div className='my-4 px-2'>
                            {t({
                                id: `bookingForm.YourTotalIs`,
                                message: `Your Total is: ${total} €`
                            })}
                        </div>
                        <div className='text-sm'>
                            <div className='py-5 px-2'>
                                <div className='inline'>
                                    {t({
                                        id: `bookingForm.MinimumOvertimeCharge`,
                                        message: `We have to mention that we charge 30€ for the first hour and a half of cleaning. Every aditional hour after that is another 30 euro. Please accept if you agree.`
                                    })}
                                </div>
                                <input
                                    className={`float-right h-5 w-5 px-4 focus:outline-tertiary md:h-3 md:w-3 ${
                                        errors.acceptTerms2
                                            ? 'outline-2 outline-red-500'
                                            : ''
                                    }`}
                                    type='checkbox'
                                    disabled={isSubmitting}
                                    {...register('acceptTerms2')}
                                />
                            </div>
                            <div className=' px-2'>
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
                                <input
                                    className={`float-right h-5 w-5 px-4 focus:outline-tertiary md:h-3 md:w-3 ${
                                        errors.acceptTerms
                                            ? 'outline-2 outline-red-500'
                                            : ''
                                    }`}
                                    type='checkbox'
                                    disabled={isSubmitting}
                                    {...register('acceptTerms')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default BookingForm;
