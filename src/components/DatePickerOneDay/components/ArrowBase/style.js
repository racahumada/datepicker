import styled from 'styled-components';
import arrowSvg from '../../../../assets/arrow.svg'
import arrowDisabledSvg from '../../../../assets/arrow-disabled.svg'

export const ArrowButton = styled.button`
    padding: 0px;
    width: 37.5px;
    height: 37.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #f0f0f0;
    border-right: 0px;
    border-radius: 0px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #fff;
    background-image: ${({disabled}) => disabled ? `url(${arrowDisabledSvg})` : `url(${arrowSvg})`};
    background-repeat: no-repeat;
    background-position: center center;
    outline: 0;
    transform: ${({value}) => value === 'prev' ? 'rotate(0deg)' : 'rotate(180deg)'};
`;
