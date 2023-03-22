// @ts-nocheck
import { createContext, useState, useEffect } from 'react';

import useSWR from 'swr';
import dayjs, { Dayjs } from 'dayjs';

import Calendar from '@components/common/calendar/calendar';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CalendarMain = ({
    setDateTimeStr
}: {
    setDateTimeStr: (value: string) => void;
}) => {
    const { data, error, isLoading } = useSWR('/api/calendar', fetcher);
    const [dateTime, setDateTime] = useState<Dayjs>();

    useEffect(() => {
        setDateTimeStr(
            !!dateTime ? dateTime.format('YYYY-MM-DDTHH:mm:ss').toString() : ''
        );
    }, [dateTime]);
    if (error || isLoading) {
        return (
            <svg
                className='animate-spin'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z' />
            </svg>
        );
    }

    const convertToDayjsArr = (googleDayArr: string[]) => {
        const parsedData = googleDayArr.map((day, _) => {
            return dayjs(day.split('+')[0]); //remove the hardcoded incorrect timezone
        });
        return parsedData;
    };

    const dataStringArr = JSON.parse(data['bookedSlots']);
    const dataArrDayjs = convertToDayjsArr(dataStringArr);
    return (
        <div className=''>
            <Calendar>
                <Calendar.MonthSwitcher />
                <Calendar.DaysOfTheWeek />
                <Calendar.DatesOfTheMonth />
                <Calendar.TimePicker unavailableSlots={dataArrDayjs} />
                <Calendar.SelectedDateTime setDateTime={setDateTime} />
            </Calendar>
        </div>
    );
};

export default CalendarMain;
