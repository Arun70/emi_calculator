import React from 'react';
import EMIForm from './EMIForm';
import EMISummary from './EMISummary';
import { EMIReportTable } from './EMIReportTable';
import './App.css'

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
  }

  handleFormInput = formData => {
    this.setState({
      principal: formData.pr,
      interest: formData.intr,
      tenure: formData.ten
    }, () => {
        this.handleSummary();
        this.handleReport();
    });
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
    let pr = principal, intr = interest, ten = tenure;
    intr = intr / 12 / 100;
    let monthly_emi = this.calculateEMI();
    let reportData = [];

    while (a < ten) {
      let dataObject = {};
      dataObject.month = a + 1;
      dataObject.interest = Math.round(pr * intr);
      dataObject.principal = Math.round(monthly_emi - dataObject.interest);
      dataObject.balance = Math.round(pr - dataObject.principal)
      dataObject.balance = Math.round(pr-dataObject.principal)
      dataObject.loan_paid = this.roundNumber((100 * (principal - dataObject.balance)) / principal);
      pr = (dataObject.balance);
      a++;
      reportData.push(dataObject);
    }

    this.setState({
        reportTableData: [ ...reportData ]
    });
  };

  roundNumber = (number,decimal=2) => {
    let dummyMultiply = Math.pow(10, decimal);
    const fixedValue = Math.round(number * dummyMultiply)
    console.log('fixedVlue',fixedValue)
    const floatedValue = fixedValue/dummyMultiply
    return floatedValue
  }

  calculateEMI = () => {
    const { principal, interest, tenure } = this.state;
    let pr = principal, intr = interest, ten = tenure;
    intr = intr / 12 / 100;
    let mEMI = pr * (intr / (1 - Math.pow(1 + intr, -ten)) )
    return Math.round(mEMI);
  };

  render() {
      return (
        
      <div className="emi-calculator-contaienr">
        <div className="emi-form center">
                  <EMIForm
                      handleFormInput={this.handleFormInput}
                      principal={this.state.principal}
                      interest={this.state.interest}
                      tenure={this.state.tenure}
                  />
        </div>
        <div className="emi-summary center">
          <EMISummary summary={this.state.summary} />
        </div>
        <div className="emi-report-table center">
          <EMIReportTable reportTable={this.state.reportTableData} />
        </div>
      </div>
    )
  }
}
