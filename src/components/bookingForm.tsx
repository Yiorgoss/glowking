import Link from 'next/link';
import { useState, useEffect } from 'react';

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

    const onSubmit = async (data:any, e:any) => {
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
    const onError = (err: any) => {
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
                <div className='grid grid-cols-2 gap-3 text-md'>
                    <input
                        className='rounded-lg py-2 px-4 text-secondary focus:outline-tertiary '
                        placeholder='Full Name'
                        {...register('name')}
                    />
                    <input
                        className='rounded-lg py-2 px-4 text-secondary focus:outline-tertiary '
                        placeholder='Phone Number'
                        {...register('phone')}
                    />
                    <input
                        className='rounded-lg py-2 px-4 text-secondary focus:outline-tertiary '
                        placeholder='Email'
                        {...register('email')}
                    />
                    <input
                        className='rounded-lg py-2 px-4 text-secondary focus:outline-tertiary '
                        placeholder='Location'
                        {...register('location')}
                    />
                    <div className="">
                        <textarea
                            className='rounded-lg h-[200px] w-full py-2 px-4 text-secondary focus:outline-tertiary '
                            placeholder='Special Instructions'
                            {...register('messageBody')}
                        />
                    </div>
                    <div className='my-2 mt-auto ml-auto'>
                        <div className=''>
                            <label>
                                Accept Terms and{' '}
                                <Link
                                    className='mr-2 text-blue-500 underline'
                                    href='/legal'>
                                    Conditions
                                </Link>
                            </label>
                            <input
                                className='focus:outline-tertiary '
                                type='checkbox'
                                {...register('acceptTerms')}
                            />
                        </div>
                        <input
                            className=' rounded-lg mt-4 bg-primary px-4 py-2 hover:cursor-pointer float-none md:float-right'
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
