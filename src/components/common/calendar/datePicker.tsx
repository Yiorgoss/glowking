import { ReactElement, useContext, createContext, useState } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import dayjs, { Dayjs } from "dayjs";
import objectPlugin from "dayjs/plugin/toObject";
import isTodayPlugin from "dayjs/plugin/isToday";
import toObject from "dayjs/plugin/toObject";

dayjs.extend(objectPlugin);
dayjs.extend(isTodayPlugin);
dayjs.extend(toObject);

const DatePickerContext = createContext({});

const MonthSwitcher = () => {
    const [displayMonth, setDisplayMonth] = useContext(DatePickerContext);
    const nextMonth = () => {
        setDisplayMonth(displayMonth.add(1, "month"));
    };
    const prevMonth = () => {
        setDisplayMonth(displayMonth.subtract(1, "month"));
    };

    return (
        <div className="grid grid-cols-3 justify-items-center">
            <div className="" onClick={() => prevMonth()}>
                <AiOutlineLeft />
            </div>
            <div className="">{displayMonth.format("MMM")}</div>
            <div className="">
                <AiOutlineRight onClick={() => nextMonth()} />
            </div>
        </div>
    );
};
const DaysOfTheWeek = () => {
    return (
        <div className="grid grid-cols-7">
            {Array(7)
                .fill(0)
                .map((_, i) => (
                    <div className="" key={i}>
                        {dayjs().day(i).format("ddd")}
                    </div>
                ))}
        </div>
    );
};

const MonthlyHeader = () => {
    return (
        <div className="">
            <MonthSwitcher />
            <DaysOfTheWeek />
        </div>
    );
};

const fillDateArray = (day: Dayjs): Dayjs[] => {
    let startDate = day.startOf("month");
    let nMonth = startDate.add(1, "month").month();

    const dayArr: Dayjs[] = [];
    const prevMonthOverlap = () => {
        // current day unti 0 (start of the week)
        for (let i = startDate.day(); i > 0; i--) {
            dayArr.push(startDate.subtract(i, "day"));
        }
    };
    const curMonthDays = () => {
        while (startDate.month() != nMonth) {
            dayArr.push(startDate);
            startDate = startDate.add(1, "day");
        }
    };
    const nextMonthOverlap = () => {
        // current day unti 6 (end of the week)
        if (startDate.day() == 0) return;

        const daysUntil = 6 - startDate.day();
        for (let i = 0; i <= daysUntil; i++) {
            dayArr.push(startDate.add(i, "day"));
        }
    };

    prevMonthOverlap();
    curMonthDays();
    nextMonthOverlap();
    return dayArr;
};

const DatesOfTheMonth = () => {
    const [displayMonth] = useContext(DatePickerContext);

    let arr = fillDateArray(displayMonth);

    return (
        <div className="grid grid-cols-7">
            {arr.map((dateObj, i) => (
                <div className="" key={i}>
                    {dateObj.format("dd DD MMM")}
                </div>
            ))}
        </div>
    );
};

const DatePicker = () => {
    const [displayMonth, setDisplayMonth] = useState(dayjs());

    return (
        <DatePickerContext.Provider value={[displayMonth, setDisplayMonth]}>
            <div className="">
                <MonthlyHeader />
                <DatesOfTheMonth />
            </div>
        </DatePickerContext.Provider>
    );
};

export default DatePicker;
