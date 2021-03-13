import React from 'react'

export const EMIReportTable = props => {
    <div className='reporttable'>
        <h4>Monthly Report</h4>
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
                {props.reportTable.map((data) => {
                  <tr>
                    <td>{ data.month }</td>
                    <td>&#8377;  { data.principal.round() }</td>
                    <td>&#8377;  { data.interest.round()}</td>
                    <td>&#8377;  { (data.principal + data.interest).round()}</td>
                    <td>&#8377;  { data.balance.round()}</td>
                    <td>{data.loan_paid.round(2)}%</td>
                  </tr>
              })}
            </tbody>
          </table>
    </div>
}
