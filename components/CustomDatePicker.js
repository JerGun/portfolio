import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css"
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faClose } from "@fortawesome/free-solid-svg-icons"

export default function CustomDatePicker({
  range,
  selectedDay,
  setSelectedDay,
  selectedDayRange,
  setSelectedDayRange,
}) {
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref}
      placeholder="Select date"
      value={
        selectedDay
          ? `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`
          : ""
      }
      className="h-12 w-full flex items-center p-2 px-5 rounded-xl bg-input outline-none cursor-pointer"
    />
  )

  const renderCustomRangeInput = ({ ref }) => (
    <input
      readOnly
      ref={ref}
      placeholder="Select date range"
      value={
        selectedDayRange
          ? `${selectedDayRange?.from?.day}/${selectedDayRange?.from.month}/${
              selectedDayRange?.from?.year
            } - ${
              selectedDayRange.to
                ? `${selectedDayRange?.to?.day}/${selectedDayRange?.to?.month}/${selectedDayRange?.to?.year}`
                : "dd/mm/yyyy"
            }`
          : ""
      }
      className="h-12 w-full flex items-center p-2 px-5 rounded-xl bg-input outline-none cursor-pointer"
    />
  )

  return range ? (
    <DatePicker
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      renderInput={renderCustomRangeInput}
      shouldHighlightWeekends
      calendarClassName="text-black"
      wrapperClassName="w-full"
      colorPrimary="#FFC300"
      colorPrimaryLight="#FFF5D5"
    />
  ) : (
    // <p>{selectedDayRange.from.day}</p>
    <DatePicker
      value={selectedDay}
      onChange={setSelectedDay}
      renderInput={renderCustomInput}
      shouldHighlightWeekends
      calendarClassName="text-black"
      calendarSelectedDayClassName="w-full bg-red-500"
      wrapperClassName="w-full"
      colorPrimary="#FFC300"
    />
  )
}
