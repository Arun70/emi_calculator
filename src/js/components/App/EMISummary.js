import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './App.css';

const EMISummary = props => {
  return (
    <div className="emiSummary">
      <div className="inlineBlock" style={{ width: '40%' }}>
        <div className="monthly_emi">
          <h2 className="underline">Loan EMI</h2>
          <h3>
            &#8377;{' '}
            {Math.round(props.summary.monthly_emi) !== NaN &&
              Math.round(props.summary.monthly_emi) !== Infinity &&
              Math.round(props.summary.monthly_emi)}
          </h3>
        </div>
        <div className="total_interest">
          <h2 className="underline">Total Interest Payable</h2>
          <h3>
            &#8377;{' '}
            {Math.round(props.summary.total_interest) !== NaN &&
              Math.round(props.summary.total_interest) !== Infinity &&
              Math.round(props.summary.total_interest)}
          </h3>
        </div>
        <div className="total_payment">
          <h2 className="underline">Total Payment</h2>
          <h3>
            &#8377;{' '}
            {Math.round(props.summary.total_payment) !== NaN &&
              Math.round(props.summary.total_payment) !== Infinity &&
              Math.round(props.summary.total_payment)}
          </h3>
        </div>
      </div>
      <div className="inlineBlock">
        <div className="centerPlacement">
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
        <div style={{ display: 'flex' }}>
          <h4
            className="horizontalMargin"
            style={{
              color: 'black',
              border: '1px solid #21aa47',
              backgroundColor: '#21aa47'
            }}
          >
            Principal Amount
          </h4>
          <h4
            className="horizontalMargin"
            style={{
              color: 'black',
              border: '1px solid #fd7e14',
              backgroundColor: '#fd7e14'
            }}
          >
            Total Payment
          </h4>
        </div>
      </div>
    </div>
  );
};

export default EMISummary;
