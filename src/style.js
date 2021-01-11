import styled from 'styled-components';
import { DatePickerOneDay } from './components';

export const DayPicker = styled(DatePickerOneDay)`
  input {
    width: 90px;
    height: 35.5px;
    border: 0;
    border: 1px solid #f0f0f0;
    border-radius: 0px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #0089BF;
    outline: 0;
    padding: 0;
    
  }

  .DayPicker-wrapper {
    font-family: 'Arial', sans-serif;
    font-size: 13px;
    /* left: 50%; */
    border-radius: 50px;
    background-color: #fff;
  }

  .DayPicker-Weekdays {
    font-size: 16px;
    font-weight: bold;
    color: #0089BF;
  }

  .DayPickerInput-Overlay {
  position: absolute;
  z-index: 1;
  border-radius: 10px;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  border: 1px solid #f0f0f0;
}
`;
