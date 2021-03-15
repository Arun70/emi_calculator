import React from 'react';
import EMIForm from './EMIForm';
import EMISummary from './EMISummary';
import { EMIReportTable } from './EMIReportTable';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      principal: 0,
      interest: 0,
      tenure: 0,
      reportTableData: [],
      summary: { monthly_emi: 0, total_interest: 0, total_payment: 0 }
    };

    this.calculateEMI = this.calculateEMI.bind(this);
    // this.handleSummary = this.handleSummary.bind(this);
    // this.handleReport = this.handleReport.bind(this);
  }

  handleFormInput = formData => {
    this.setState({
      principal: formData.pr,
      interest: formData.intr,
      tenure: formData.ten
    });
    this.handleSummary();
    this.handleReport();
  };

  handleSummary = () => {
    let summaryObj = {};
    summaryObj.monthly_emi = this.calculateEMI();
    summaryObj.total_payment = summaryObj.monthly_emi * this.state.tenure;
    summaryObj.total_interest = summaryObj.total_payment - this.state.principal;
    this.setState({
      summary: { ...summaryObj }
    });
  };

  handleReport = () => {
    let a = 0;
    let { principal, interest, tenure } = this.state;
    let monthly_emi = this.calculateEMI();
    let reportData = [];

    while (a < tenure) {
      let dataObject = {};
      dataObject.month = a + 1;
      dataObject.interest = Math.round(principal * interest);
      dataObject.principal = Math.round(monthly_emi - dataObject.interest);
      dataObject.balance = Math.round(principal - dataObject.principal);
      dataObject.loan_paid = (100 * (principal - dataObject.balance)) / principal;
      principal = dataObject.balance;
      a++;
      reportData.push(dataObject);
    }

    this.setState({
        reportTableData: [ ...reportData ]
    });
  };

  calculateEMI = () => {
    const { principal, tenure } = this.state;
    let { interest } = this.state;
    interest = interest / 12 / 100;
    const mEMI = principal * interest * ((Math.pow((1+interest),tenure))/((Math.pow((1+interest),tenure))-1))
    return Math.round(mEMI);
  };

  render() {
      return (
        
      <div className="emi-calculator-contaienr">
        <div className="emi-form">
                  <EMIForm
                      handleFormInput={this.handleFormInput}
                      principal={this.state.principal}
                      interest={this.state.interest}
                      tenure={this.state.tenure}
                  />
        </div>
        <div className="emi-summary">
          <EMISummary summary={this.state.summary} />
        </div>
        <div className="emi-report-table">
          <EMIReportTable reportTable={this.state.reportTableData} />
        </div>
      </div>
    )
  }
}
