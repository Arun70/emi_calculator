import React from 'react';
import './App.css';

export const EMIReportTable = props => {
  return (
    <div className="reporttable">
      <h2>Monthly Report</h2>
      <table className="table table-striped table-hover">
        <tbody id="monthlyReport">
          <tr>
            <th>Month</th>
            <th>Principal (P)</th>
            <th>Interest (I)</th>
            <th>Total (P + I)</th>
            <th>Balance</th>
            <th>Loan Paid Till Date</th>
          </tr>

          {props.reportTable.map((data, i) => {
            return [
              <tr key={i}>
                <td>{data.month}</td>
                <td>&#8377; {data.principal}</td>
                <td>&#8377; {data.interest}</td>
                <td>&#8377; {data.principal + data.interest}</td>
                <td>&#8377; {data.balance}</td>
                <td>{data.loan_paid} %</td>
              </tr>
            ];
          })}
        </tbody>
      </table>
    </div>
  );
};
