import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { ArrowBase } from './components';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import 'moment/locale/pt-br';

const classNames = DayPickerInput.defaultProps.classNames;
export default function DatePickerOneDay({ className = '' }) {
  const [day, setDay] = useState(new Date());

  const handleDayClick = (selectedDay) => {
    setDay(selectedDay);
  };

  return (
    <>
      <ArrowBase type="prev" />
      <DayPickerInput
        onDayChange={handleDayClick}
        formatDate={formatDate}
        format="L"
        parseDate={parseDate}
        value={`${formatDate(day, 'L', 'pt-br')}`}
        dayPickerProps={{
          locale: 'pt-br',
          localeUtils: MomentLocaleUtils,
          todayButton: 'Today',
        }}
        classNames={{
          ...classNames,
          container: `${classNames.container} ${className}`,
        }}
      />
      <ArrowBase type="next" />
    </>
  );
}
