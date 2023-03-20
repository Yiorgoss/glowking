import { ReactElement, useContext, createContext, useState } from 'react';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import dayjs, { Dayjs } from 'dayjs';
import isTodayPlugin from 'dayjs/plugin/isToday';

const CalendarContext = createContext({} as any);
dayjs.extend(isTodayPlugin);

const TimePicker = () => {
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState<Dayjs>();

    const createAvailableTimeArr = () => {
        //memoize this bish or at least stop thee constant rerendering
        let currentTime = dayjs().hour(8).startOf('hour'); //10:00 in the morning
        const endTime = dayjs().hour(20); //20:00 in the evening

        console.log(currentTime);
        let timeArr = [];
        while (currentTime <= endTime) {
            timeArr.push(currentTime);
            currentTime = currentTime.add(1.5, 'hour');
        }
        return timeArr;
    };

    const availableSlots = createAvailableTimeArr();

    return (
        <div className='srta'>
            {open ? (
                <ul onClick={() => setOpen(false)}>
                    {availableSlots.map((slot, i) => (
                        <li onClick={() => setTime(slot)} key={i}>
                            {slot.format('HH:mm')}
                        </li>
                    ))}
                </ul>
            ) : (
                <div onClick={() => setOpen(true)}>
                    {time ? time.format('HH:mm') : 'Select Time'}
                </div>
            )}
        </div>
    );
};

const MonthSwitcher = () => {
    const [displayMonth, setDisplayMonth] = useContext(CalendarContext);
    const nextMonth = () => {
        setDisplayMonth(displayMonth.add(1, 'month'));
    };
    const prevMonth = () => {
        setDisplayMonth(displayMonth.subtract(1, 'month'));
    };

    return (
        <div className='grid grid-cols-3 justify-items-center'>
            <div className='' onClick={() => prevMonth()}>
                <AiOutlineLeft />
            </div>
            <div className=''>{displayMonth.format('MMM')}</div>
            <div className=''>
                <AiOutlineRight onClick={() => nextMonth()} />
            </div>
        </div>
    );
};
const DaysOfTheWeek = () => {
    return (
        <div className='grid grid-cols-7'>
            {Array(7)
                .fill(0)
                .map((_, i) => (
                    <div className='' key={i}>
                        {dayjs().day(i).format('ddd')}
                    </div>
                ))}
        </div>
    );
};

const fillDateArray = (day: Dayjs): Dayjs[] => {
    let startDate = day.startOf('month');
    let nMonth = startDate.add(1, 'month').month();

    const dayArr: Dayjs[] = [];
    const prevMonthOverlap = () => {
        // current day unti 0 (start of the week)
        for (let i = startDate.day(); i > 0; i--) {
            dayArr.push(startDate.subtract(i, 'day'));
        }
    };
    const curMonthDays = () => {
        while (startDate.month() != nMonth) {
            dayArr.push(startDate);
            startDate = startDate.add(1, 'day');
        }
    };
    const nextMonthOverlap = () => {
        // current day unti 6 (end of the week)
        if (startDate.day() == 0) return;

        const daysUntil = 6 - startDate.day();
        for (let i = 0; i <= daysUntil; i++) {
            dayArr.push(startDate.add(i, 'day'));
        }
    };

    prevMonthOverlap();
    curMonthDays();
    nextMonthOverlap();
    return dayArr;
};

const DatesOfTheMonth = () => {
    const [displayMonth] = useContext(CalendarContext);

    let arr = fillDateArray(displayMonth);

    return (
        <div className='grid grid-cols-7'>
            {arr.map((dateObj, i) => (
                <div className='' key={i}>
                    {dateObj.format('D')}
                </div>
            ))}
        </div>
    );
};

const SelectedDateDisplay = () => {
    return <div className=''>needs context date</div>;
};
const Calendar = ({
    children
}: {
    children: ReactElement | ReactElement[];
}) => {
    const [displayMonth, setDisplayMonth] = useState(dayjs());
    return (
        <CalendarContext.Provider value={[displayMonth, setDisplayMonth]}>
            {children}
        </CalendarContext.Provider>
    );
};

Calendar.DatesOfTheMonth = DatesOfTheMonth;
Calendar.MonthSwitcher = MonthSwitcher;
Calendar.DaysOfTheWeek = DaysOfTheWeek;
Calendar.SelectedDateDisplay = SelectedDateDisplay;
Calendar.TimePicker = TimePicker;

export default Calendar;
