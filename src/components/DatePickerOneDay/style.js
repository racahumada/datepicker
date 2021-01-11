import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export const Wrapper = styled.div`
  &&& {
    .DayPicker-Weekday {
      font-family: Arial;
    }
  }

  display: flex;
  flex-direction: row;
`;

export const DayPickerInputMod = styled(DayPickerInput)`
  .DayPicker-wrapper {
    font-family: Arial;
  }
`;
