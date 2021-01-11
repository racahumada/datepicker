import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { ArrowBase } from './components';
import { Wrapper } from './style';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import 'moment/locale/pt-br';
import moment from 'moment'

const classNames = DayPickerInput.defaultProps.classNames;
const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
const WEEKDAYS_SHORT = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const displayInput = (date) => {

  const today = moment().format('l');
  const yesterday = moment().subtract(1, 'day').format('l');
  const dayState = moment(date).format('l');

  return (dayState === today) ? 'Hoje' : (dayState === yesterday) ? 'Ontem' : formatDate(date, 'L', 'pt-br');
}

export default function DatePickerOneDay({ className = '' }) {
  const [day, setDay] = useState(moment().startOf('day')._d);

  const handleCalendarClick = (selectedDay) => {
    setDay(selectedDay);
  };

  const handleButtonClick = ({target}) => {
    const {value} = target;
    if (value === 'prev') {
      setDay(moment(day).startOf('day').subtract(1,'day')._d)
    }
    if (value === 'next') {
      setDay(moment(day).startOf('day').add(1,'day')._d)
    }
  }


  
  return (
    <Wrapper>
      <ArrowBase type="prev" onClick={handleButtonClick} />
      <DayPickerInput
        onDayChange={handleCalendarClick}
        formatDate={formatDate}
        format="L"
        parseDate={parseDate}
        value={displayInput(day)}
        dayPickerProps={{
          locale: 'pt-br',
          localeUtils: MomentLocaleUtils,
          weekdaysShort: WEEKDAYS_SHORT,
          months: MONTHS
        }}
        classNames={{
          ...classNames,
          container: `${classNames.container} ${className}`,
        }}
      />
      <ArrowBase type="next" onClick={handleButtonClick} disabled={(moment(day).startOf('day').format('l') === moment().startOf('day').format('l'))} />
    </Wrapper>
  );
}
