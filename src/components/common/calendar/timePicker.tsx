import { ReactElement, useState, createContext, useContext } from "react";
import dayjs, { Dayjs } from "dayjs";

const TimePicker = () => {
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState<Dayjs>();

    const createAvailableTimeArr = () => {
        //memoize this bish or at least stop thee constant rerendering
        let currentTime = dayjs().hour(10).startOf("hour"); //10:00 in the morning
        const endTime = dayjs().hour(20); //20:00 in the evening

        console.log(currentTime);
        let timeArr = [];
        while (currentTime <= endTime) {
            timeArr.push(currentTime);
            currentTime = currentTime.add(1.5, "hour");
        }
        return timeArr;
    };

    const availableSlots = createAvailableTimeArr();

    return (
        <div className="srta">
            {open ? (
                <ul onClick={() => setOpen(false)}>
                    {availableSlots.map((slot, i) => (
                        <li onClick={() => setTime(slot)} key={i}>
                            {slot.format("HH:mm")}
                        </li>
                    ))}
                </ul>
            ) : (
                <div onClick={() => setOpen(true)}>
                    {time ? time.format("HH:mm") : "Select Time"}
                </div>
            )}
        </div>
    );
};
export default TimePicker;
//const TimePickerContext = createContext({});
//
//const DropDownCell = ({
//    className,
//    children,
//}: {
//    className?: string;
//    children: ReactElement[] | ReactElement | string;
//}) => {
//    return <div className={className}>{children}</div>;
//};
//
//const DropDownMenu = ({
//    className,
//    childrenClassName,
//    availableTimes,
//    placeholder = "Click to see available Times",
//}: {
//    className?: string;
//    childrenClassName?: string;
//    availableTimes: Dayjs[];
//    placeholder?: string;
//}) => {
//    const [open, setOpen] = useContext(TimePickerContext);
//
//    return (
//        <div className="rounded-md border-black" onClick={() => setOpen(!open)}>
//            {open ? (
//                <div>
//                    {availableTimes.map((slot, i) => (
//                        <DropDownCell key={i}>
//                            {slot.format("HH:mm")}
//                        </DropDownCell>
//                    ))}
//                </div>
//            ) : (
//                <div>{placeholder}</div>
//            )}
//        </div>
//    );
//};
//
//const TimePicker = () => {
//    const [curTime, setCurTime] = useState(dayjs());
//    const [open, setOpen] = useState(false);
//
//    const createAvailableTimeArr = () => {
//        //memoize this bish or at least stop thee constant rerendering
//        let currentTime = dayjs().hour(10).startOf("hour"); //10:00 in the morning
//        const endTime = dayjs().hour(20); //20:00 in the evening
//
//        console.log(currentTime);
//        let timeArr = [];
//        while (currentTime <= endTime) {
//            timeArr.push(currentTime);
//            currentTime = currentTime.add(1.5, "hour");
//        }
//        return timeArr;
//    };
//
//    const timeArr = createAvailableTimeArr();
//
//    const value = [curTime, setCurTime, open, setOpen];
//    return (
//        <TimePickerContext.Provider value={value}>
//            <DropDownMenu availableTimes={timeArr} />
//        </TimePickerContext.Provider>
//    );
//};
//
//export default TimePicker;
