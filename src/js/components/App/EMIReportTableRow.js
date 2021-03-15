export const EMIReportTableRow = props => {
  console.log('tableRow', props);
  let dumArr = [];
  if (Array.isArray(props.rows.reportTable)) {
    dumArr = props.rows.reportTable.map(data => {
      return (
        <tr>
          <td>{data.month}</td>
          <td>&#8377; {data.principal.toFixed(2)}</td>
          <td>&#8377; {data.interest.toFixed(2)}</td>
          <td>&#8377; {(data.principal + data.interest).toFixed(2)}</td>
          <td>&#8377; {data.balance.toFixed(2)}</td>
          <td>{data.loan_paid.toFixed(2)}%</td>
        </tr>
      );
    });
  }
  return dumArr;
};
