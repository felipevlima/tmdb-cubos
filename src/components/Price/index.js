import React from 'react';
import NumberFormat from 'react-number-format';

const Price = ({ value }) => {
  return (
    <div>
      <NumberFormat
        value={value}
        displayType="text"
        thousandSeparator
        prefix="$"
      />
      .00
    </div>
  );
};

export default Price;
