// @ts-nocheck
import Link from 'next/link';
import { useState, useEffect } from 'react';

import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
//@ts-nocheck
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

    const onSubmit = async (data, e) => {
        e.preventDefault();
        console.log('data', data);
        const res = await fetch('/api/calendar', {
            method: 'POST',
            mode: 'cors',
            headers: {
                Accept: 'application/json, text/plain */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };
    const onError = (err) => {
        console.log();
        console.log('error', err);
    };

    const [dateTimeStr, setDateTimeStr] = useState('');

    useEffect(() => {
        console.log(dateTimeStr);
        setValue('datetime', dateTimeStr);
    }, [dateTimeStr, setValue]);

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <div className='container mx-auto grid grid-cols-1 gap-4 bg-slate-300 p-4 md:grid-cols-2'>
                <CalendarMain setDateTimeStr={setDateTimeStr} />
                <div className='grid grid-cols-2 gap-3'>
                    <input
                        className='rounded-lg py-0.5 px-4 text-lg text-secondary focus:outline-tertiary '
                        placeholder='First Name'
                        {...register('name')}
                    />
                    <input
                        className='rounded-lg py-0.5 px-4 text-lg text-secondary focus:outline-tertiary '
                        placeholder='Phone Number'
                        {...register('phone')}
                    />
                    <input
                        className='rounded-lg py-0.5 px-4 text-lg text-secondary focus:outline-tertiary '
                        placeholder='Email'
                        {...register('email')}
                    />
                    <input
                        className='rounded-lg py-0.5 px-4 text-lg text-secondary focus:outline-tertiary '
                        placeholder='Location'
                        {...register('location')}
                    />
                    <input
                        className='rounded-lg py-0.5 px-4 text-lg text-secondary focus:outline-tertiary '
                        placeholder='Message Body'
                        {...register('messageBody')}
                    />
                    <div className='my-2 ml-auto'>
                        <div className=''>
                            <label>
                                Accept Terms and{' '}
                                <Link
                                    className='mr-2 text-blue-500 underline'
                                    href='/legal'>
                                    conditions
                                </Link>
                            </label>
                            <input
                                className='focus:outline-tertiary '
                                type='checkbox'
                                {...register('acceptTerms')}
                            />
                        </div>
                        <input
                            className='float-none my-2 rounded-lg bg-primary px-4 py-2 hover:cursor-pointer md:float-right'
                            type='submit'
                            value='submit'
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BookingForm;
