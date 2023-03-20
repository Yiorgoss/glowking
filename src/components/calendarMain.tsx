import { createContext, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import Calendar from '@components/common/calendar/calendar';

const CalendarMain = ({ data }: { data: string[] }) => {
    return (
        <div className='w-[400px]'>
            <Calendar>
                <Calendar.MonthSwitcher />
                <Calendar.DaysOfTheWeek />
                <Calendar.DatesOfTheMonth />
                <Calendar.TimePicker />
            </Calendar>
        </div>
    );
};

export default CalendarMain;
