import React from 'react';
import { EMIReportTableRow } from './EMIReportTableRow';

export const EMIReportTable = props => {
  // const row = <EMIReportTableRow rows={props} />;
  console.log('sfsdf', props);
  return (
    <div className="reporttable">
      <h2>Monthly Report</h2>
      <table className="table table-striped table-hover">
        <tbody>
          <tr>
            <th>Month</th>
            <th>Principal (P)</th>
            <th>Interest (I)</th>
            <th>Total (P + I)</th>
            <th>Balance</th>
            <th>Loan Paid Till Date</th>
          </tr>
          <tr>
            <td>1</td>
            <td>&#8377; 1000</td>
            <td>&#8377; 1.25</td>
            <td>&#8377; 1005</td>
            <td>&#8377; 990</td>
            <td>3%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>&#8377; 1111</td>
            <td>&#8377; 3</td>
            <td>&#8377; 1111</td>
            <td>&#8377; 1123</td>
            <td>9%</td>
          </tr>
          {props.reportTable.map(data => {
            <tr>
              <td>{data[month]}</td>
              <td>&#8377; {data[principal].toFixed(2)}</td>
              <td>&#8377; {data[interest].toFixed(2)}</td>
              <td>&#8377; {(data[principal] + data[interest]).toFixed(2)}</td>
              <td>&#8377; {data[balance].toFixed(2)}</td>
              <td>{data[loan_paid].toFixed(2)}%</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};
