import { createContext, useState, useEffect } from 'react';

import useSWR from 'swr';
import dayjs, { Dayjs } from 'dayjs';

import Calendar from '@components/common/calendar/calendar';
import Spinner from "@components/spinner"

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());


const CalendarMain = ({
    setDateTimeStr
}: {
    setDateTimeStr: (value: string) => void;
}) => {
    const { data, error, isLoading } = useSWR('/api/calendar', fetcher);
    const [dateTime, setDateTime] = useState<Dayjs>();

    useEffect(() => {
        //console.log(dateTime ? dateTime.format("DD-HH:mm") : "aa")
        setDateTimeStr(
            dateTime && dateTime.format("HH:mm") !== '00:00' ? dateTime.format('YYYY-MM-DDTHH:mm:ss').toString() : ''
        );
        //console.log(datetime)
    }, [dateTime, setDateTimeStr]);
    if (error || isLoading) {
        return <Spinner />;
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
                <div className='grid-cols-4 grid divide-x'>
                    <div className="col-span-3">
                        <Calendar.MonthSwitcher />
                        <Calendar.DaysOfTheWeek />
                        <Calendar.DatesOfTheMonth />
                    </div>
                    <div>
                        <Calendar.TimePicker unavailableSlots={dataArrDayjs} />
                        <Calendar.SelectedDateTime setDateTime={setDateTime} />
                    </div>
                </div>
            </Calendar>
        </div>
    );
};

export default CalendarMain;
