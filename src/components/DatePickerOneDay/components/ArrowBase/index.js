import React from 'react';
import { ArrowButton } from './style';

export default function ArrowBase({ type }) {
  return (
    <>
      <ArrowButton>{type}</ArrowButton>
    </>
  );
}
