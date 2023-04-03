import {useRouter} from 'next/router'
import Link from 'next/link';
import { useState, useEffect } from 'react';

import {t} from "@lingui/macro"

import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import calendarSchema from '@/utils/calendarSchema';
import CalendarMain from '@components/calendarMain';


const BookingForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(calendarSchema)
    });
    const router = useRouter()

    const onSubmit = async (data: any, e:any) => {
        //e.defaultPrevented=false
        const res = await fetch('/api/calendar', {
            method: 'POST',
            mode: 'cors',
            headers: {
                Accept: 'application/json, text/plain */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        router.reload()
    };
    const onError = (err: any) => {
        console.log();
        console.log('error', err);
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
                <CalendarMain setDateTimeStr={setDateTimeStr} />
                <div className='text-md grid grid-cols-2 gap-3'>
                    <input
                        className='rounded-lg py-2 px-4 text-secondary focus:outline-tertiary '
                        placeholder={t({
                            id: 'bookingForm.input.name',
                            message: 'Full Name'
                        })}
                        {...register('name')}
                    />
                    <input
                        className='rounded-lg py-2 px-4 text-secondary focus:outline-tertiary '
                        placeholder={t({
                            id: 'bookingForm.input.number',
                            message: 'Phone Number'
                        })}
                        {...register('phone')}
                    />
                    <input
                        className='rounded-lg py-2 px-4 text-secondary focus:outline-tertiary '
                        placeholder={t({
                            id: 'bookingForm.input.email',
                            message: 'Email'
                        })}
                        {...register('email')}
                    />
                    <input
                        className='rounded-lg py-2 px-4 text-secondary focus:outline-tertiary '
                        placeholder={t({
                            id: 'bookingForm.input.location',
                            message: 'Location'
                        })}
                        {...register('location')}
                    />
                    <div className=''>
                        <textarea
                            className='h-[200px] w-full rounded-lg py-2 px-4 text-secondary focus:outline-tertiary '
                            placeholder={t({
                                id: 'bookingForm.input.message',
                                message: 'Special Instructions'
                            })}
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
                                className='focus:outline-tertiary '
                                type='checkbox'
                                {...register('acceptTerms')}
                            />
                        </div>
                        <input
                            className=' float-none mt-4 rounded-lg bg-primary px-4 py-2 hover:cursor-pointer md:float-right'
                            type='submit'
                            value={t({id:'bookingForm.input.', message:'submit'})}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BookingForm;
