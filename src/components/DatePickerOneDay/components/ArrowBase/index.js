import React from 'react';
import { ArrowButton } from './style';

export default function ArrowBase({ type, onClick, children, disabled }) {

  return (
    <>
      <ArrowButton onClick={onClick} value={type} disabled={disabled}>{children}</ArrowButton>
    </>
  );

}
