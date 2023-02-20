import DatePicker from "./datePicker"
import TimePicker from "./timePicker"

const Calendar = () => {
    return(
        <div className="w-[400px]">
            <DatePicker>
                <DatePicker.MonthSwitcher />
                <DatePicker.DaysOfTheWeek />
                <DatePicker.DatesOfTheMonth />
            </DatePicker>
            <TimePicker />
        </div>
    )
}

export default Calendar
