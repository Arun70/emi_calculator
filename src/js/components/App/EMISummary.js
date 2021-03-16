import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const EMISummary = props => {
  return (
    <div className="emiSummary">
      <div>
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
      <div style={{ width: '20%', height: '20%' }}>
        <div>
          <h3>Break-up of Total Payment</h3>
        </div>
        <PieChart
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
          data={[
            {
              title: 'Total Payment',
              value: props.summary.total_payment,
              color: '#21aa47'
            },
            {
              title: 'Total Interest',
              value: props.summary.total_interest,
              color: '#fd7e14'
            }
          ]}
        />
        <div>
          <h4 style={{ color: '#21aa47' }}>Principal Amount:</h4>
          <h4 style={{ color: '#fd7e14' }}>Total Payment:</h4>
        </div>
      </div>
    </div>
  );
};

export default EMISummary;
