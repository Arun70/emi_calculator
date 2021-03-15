import React from 'react';

const EMISummary = props => {
  // console.log('hi', props);
  return (
    <div className="emiSummary">
      <div className="monthly_emi">
        <h2>Loan EMI</h2>
        <h3>
          &#8377;{' '}
          {Math.round(props.summary.monthly_emi) !== NaN &&
            Math.round(props.summary.monthly_emi) !== Infinity &&
            Math.round(props.summary.monthly_emi)}
        </h3>
      </div>
      <div className="total_interest">
        <h2>Total Interest Payable</h2>
        <h3>
          &#8377;{' '}
          {Math.round(props.summary.total_interest) !== NaN &&
            Math.round(props.summary.total_interest) !== Infinity &&
            Math.round(props.summary.total_interest)}
        </h3>
      </div>
      <div className="total_payment">
        <h2>Total Payment</h2>
        <h3>
          &#8377;{' '}
          {Math.round(props.summary.total_payment) !== NaN &&
            Math.round(props.summary.total_payment) !== Infinity &&
            Math.round(props.summary.total_payment)}
        </h3>
      </div>
    </div>
  );
};

export default EMISummary;
