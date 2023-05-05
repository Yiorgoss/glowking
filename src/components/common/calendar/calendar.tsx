import {
    ReactElement,
    useContext,
    createContext,
    useState,
    useEffect
} from 'react';
import { useRouter } from 'next/router';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { t } from '@lingui/macro';

import dayjs, { Dayjs } from 'dayjs';
import isTodayPlugin from 'dayjs/plugin/isToday';
import 'dayjs/locale/el';

const CalendarContext = createContext({} as any);
dayjs.extend(isTodayPlugin);

const TimePicker = ({ unavailableSlots }: { unavailableSlots?: Dayjs[] }) => {
    const [open, setOpen] = useState(false);
    const [, , datetime, setDateTime] = useContext(CalendarContext);

    const createAvailableTimeArr = () => {
        //could prolly memoize this bish if needed
        let currentTime = datetime.hour(8).startOf('hour'); //8:00 in the morning
        const endTime = datetime.hour(20); //20:00 in the evening

        const timeArr: Dayjs[] = [];

        while (currentTime <= endTime) {
            timeArr.push(currentTime);
            currentTime = currentTime.add(0.5, 'hour');
        }
        return timeArr;
    };

    const availableSlots = createAvailableTimeArr();

    //const isUnavailable = (dateObj: Dayjs) => {
    //    //2023-03-23T08:00:00

    //    if (dateObj.isToday()) return true;
    //    const slots = unavailableSlots ?? [];
    //    return slots.find((el) => dateObj.isSame(el)) === undefined
    //        ? false
    //        : true;
    //};
    const isUnavailable = (datetime: Dayjs) => {
        const minBookingTime = dayjs().add(1, 'hour');

        return datetime.isAfter(minBookingTime);
    };

    return (
        <div className='h-[300px] overflow-auto'>
            {open ? (
                <ul
                    className='relative divide-primary overflow-auto '
                    onClick={() => setOpen(false)}>
                    {availableSlots.map((slot, i) => {
                        const clickable = isUnavailable(slot);
                        return (
                            <li
                                className={`px-4 py-2 hover:cursor-pointer ${
                                    clickable
                                        ? ''
                                        : 'text-slate-500 hover:cursor-not-allowed'
                                }`}
                                onClick={(e) =>
                                    clickable
                                        ? setDateTime(slot)
                                        : e.preventDefault()
                                }
                                key={i}>
                                {slot.format('HH:mm')}
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <div
                    className='w-full py-2 px-4 hover:cursor-pointer'
                    onClick={() => setOpen(true)}>
                    {datetime.format('HH:mm') !== '00:00'
                        ? datetime.format('HH:mm')
                        : t({
                              id: `Calendar-select-time`,
                              message: `Select Time`
                          })}
                </div>
            )}
        </div>
    );
};

const SelectedDateTime = ({
    setDateTime,
    show = false
}: {
    setDateTime: (value: Dayjs) => void;
    show?: boolean;
}) => {
    const [, , datetime, setDatetime] = useContext(CalendarContext);
    useEffect(() => {
        setDateTime(datetime);
    }, [datetime, setDateTime, setDatetime]);
    return (
        <>
            {show && (
                <div className=''>{datetime.format('YYYY-MM-DD HH:mm:ss')}</div>
            )}
        </>
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
        <div className=' my-2 grid grid-cols-3 justify-items-center font-semibold'>
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
        <div className='text-md grid grid-cols-7 pb-2 text-center font-medium'>
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
    const [displayMonth, , datetime, setDateTime] = useContext(CalendarContext);

    let arr = fillDateArray(displayMonth);
    const today = dayjs();
    const pickDate = (dateObj: Dayjs) => {
        const day = dateObj.startOf('day');
        setDateTime(day);
    };
    const isPickedDate = (dateObj: Dayjs) => {
        return dateObj.startOf('day').isSame(datetime.startOf('day'));
    };
    return (
        <div className='grid grid-cols-7 justify-items-center  text-center  '>
            {arr.map((dateObj, i) => {
                const isBefore = dateObj.isBefore(today.startOf('day'));

                return (
                    <div
                        className={`h-8 w-8 ${
                            isBefore ? 'cursor-not-allowed text-slate-400' : ''
                        } `}
                        onClick={(e) =>
                            isBefore ? e.preventDefault() : pickDate(dateObj)
                        }
                        key={i}>
                        <div
                            className={`flex h-full w-full items-center justify-center ${
                                isPickedDate(dateObj)
                                    ? 'rounded-full bg-tertiary'
                                    : ''
                            }`}>
                            {dateObj.format('D')}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const Calendar = ({
    children
}: {
    children: ReactElement | ReactElement[];
}) => {
    const router = useRouter();
    const locale = router.locale;

    const [displayMonth, setDisplayMonth] = useState(dayjs());
    const [datetime, setDatetime] = useState(
        dayjs().startOf('hour').startOf('day')
    );

    useEffect(() => {
        dayjs.locale(locale);
    }, [locale]);

    //useEffect(() => {
    //    console.log({ datetime: datetime });
    //}, [datetime]);

    //const value = [displayMonth, setDisplayMonth, time, setTime, day, setDay];
    const value = [displayMonth, setDisplayMonth, datetime, setDatetime];

    return (
        <CalendarContext.Provider value={value}>
            {children}
        </CalendarContext.Provider>
    );
};

Calendar.DatesOfTheMonth = DatesOfTheMonth;
Calendar.MonthSwitcher = MonthSwitcher;
Calendar.DaysOfTheWeek = DaysOfTheWeek;
Calendar.SelectedDateTime = SelectedDateTime;
Calendar.TimePicker = TimePicker;

export default Calendar;
