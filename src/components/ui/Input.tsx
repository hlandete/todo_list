import React, { type FC } from 'react';

interface Props {
  'data-testid'?: string;
}

const Input: FC<Props> = ({ 'data-testid': dataTestId = 'Input' }) => (
  <div data-testid={dataTestId}>Input</div>
);

export default Input;


