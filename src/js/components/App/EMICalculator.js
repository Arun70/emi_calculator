// import React from 'react';
// import EMIForm from './EMIForm';
// import EMISummary from './EMISummary';
// import { EMIReportTable } from './EMIReportTable';

// export default class EMICalculator extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       principal: 0,
//       interest: 0,
//       reportTableData: [],
//       summary: {}
//     };

//     this.calculateEMI = this.calculateEMI.bind(this);
//     this.handleSummary = this.handleSummary.bind(this);
//     this.handleReport = this.handleReport.bind(this);
//   }

//   handleFormInput = formData => {
//     this.setState({
//       principal: formData.principal,
//       interest: formData.interest,
//       tenure: formData.tenure
//     });
//     this.handleSummary();
//     this.handleReport();
//   };

//   handleSummary = () => {
//     let summaryObj = {};
//     summaryObj.monthly_emi = this.calculateEMI();
//     summaryObj.total_payment = summaryObj.monthly_emi * this.state.tenure;
//     summaryObj.total_interest = summaryObj.total_payment - this.state.principal;
//     this.setState({
//       summary: { ...summaryObj }
//     });
//   };

//   handleReport = () => {
//     let a = 0;
//     const { principal, interest, tenure } = this.state;
//     let monthly_emi = this.calculateEMI();
//     let reportData = [];

//     while (a < tenure) {
//       let dataObject = {};
//       dataObject.month = a + 1;
//       dataObject.interest = Math.round(principal0 * interest);
//       dataObject.principal = Math.round(monthly_emi - ret.interest);
//       dataObject.balance = Math.round(principal - ret.principal);
//       dataObject.loan_paid = (100 * (principal - ret.balance)) / principal;
//       principal = dataObject.balance;
//       a++;
//       reportData.push(dataObject);
//     }

//     this.setState({
//       reportTableData: [...reportData]
//     });
//   };

//   calculateEMI = () => {
//     const { principal, tenure } = this.state;
//     let { interest } = this.state;
//     interest = interest / 12 / 100;
//     const mEMI = principal * (interest / (1 - Math.pow(1 + interest, -tenure)));
//     return Math.round(mEMI);
//   };

//   render() {
//     return (
//       <div className="emi-calculator-contaienr">
//         <div className="emi-form">
//           <EMIForm handleFormInput={this.handleFormInput} />
//         </div>
//         <div className="emi-summary">
//           <EMISummary summary={this.state.summary} />
//         </div>
//         <div className="emi-report-table">
//           <EMIReportTable reportTable={this.state.reportTableData} />
//         </div>
//       </div>
//     );
//   }
// }
