import { useEffect, useState } from "react"
import { Switch } from "@headlessui/react"
import CustomDatePicker from "../components/CustomDatePicker"

const defaultFrom = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
}
const defaultTo = {
  day: new Date().getDate() + 2,
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
}

const defaultRangeValue = {
  from: defaultFrom,
  to: defaultTo,
}

const defaultValue = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
}

export default function InputDate({ onChange }) {
  const [date, setDate] = useState("test")
  const [rangeEnabled, setRangeEnabled] = useState(false)
  const [selectedDay, setSelectedDay] = useState(defaultValue)
  const [selectedDayRange, setSelectedDayRange] = useState(defaultRangeValue)

  useEffect(() => {
    formatDate()
  }, [rangeEnabled, selectedDay, selectedDayRange])

  const formatDate = () => {
    let day =
      selectedDay.day == "1"
        ? `${selectedDay.month}/${selectedDay.year}`
        : `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`

    let dayFrom =
      selectedDayRange.from.day == "1" && selectedDayRange.to?.day == "1"
        ? selectedDayRange.from.month != selectedDayRange.to?.month &&
          selectedDayRange.from.year == selectedDayRange.to?.year
          ? `${selectedDayRange.from.month}`
          : `${selectedDayRange.from.month}/${selectedDayRange.from.year}`
        : `${selectedDayRange.from.day}/${selectedDayRange.from.month}/${selectedDayRange.from.year}`
    let dayTo = selectedDayRange.to
      ? selectedDayRange.from.day == "1" && selectedDayRange.to?.day == "1"
        ? `${selectedDayRange.to.month}/${selectedDayRange.to.year}`
        : `${selectedDayRange.to.day}/${selectedDayRange.to.month}/${selectedDayRange.to.year}`
      : ""

    let dayRange = `${dayFrom} - ${dayTo}`
    setDate(!rangeEnabled ? day : dayRange)
    onChange(
      !rangeEnabled
        ? {
            from: `${selectedDay.month}/${selectedDay.day}/${selectedDay.year}`,
          }
        : {
            from: `${selectedDayRange.from?.month}/${selectedDayRange.from?.day}/${selectedDayRange.from?.year}`,
            to: `${selectedDayRange.to?.month}/${selectedDayRange.to?.day}/${selectedDayRange.to?.year}`,
          }
    )
  }

  return (
    <div className="w-full space-y-1">
      <div className="w-full flex space-x-3">
        <CustomDatePicker
          range={rangeEnabled}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedDayRange={selectedDayRange}
          setSelectedDayRange={setSelectedDayRange}
        />
        <Switch.Group>
          <div className="flex items-center">
            {/* <Switch.Label className="text-xs">
                  Enable range picker
                </Switch.Label> */}
            <Switch
              checked={rangeEnabled}
              onChange={setRangeEnabled}
              className={`${
                rangeEnabled ? "bg-primary" : "bg-input"
              } relative inline-flex h-7 w-16 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span
                className={`${
                  rangeEnabled ? "translate-x-9" : "translate-x-2"
                } inline-block h-5 w-5 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        </Switch.Group>
      </div>
      <p className="pl-5 text-xs text-gray-300">ex: {date}</p>
    </div>
  )
}
