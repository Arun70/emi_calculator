import React from 'react';

export default class EMIForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pr: this.props.principal || 0,
      intr: this.props.interest || 0,
      ten: this.props.tenure || 0
    };
  }

  handleStateChange = e => {
    const value = parseInt(e.target.value);
    this.setState(
      {
        ...this.state,
        [e.target.name]: value
      },
      this.updateParent
    );
  };

  updateParent = () => {
    this.props.handleFormInput(this.state);
  };

  render() {
    return (
      <div className="form-container">
        <h1>Home Loan</h1>
        <div className="form">
          <form className="emi-form">
            <div className="form-group">
              <label htmlFor="principal">
                <b>Principal (&#8377;) </b>
              </label>
              <input
                type="number"
                placeholder="Enter principal amount"
                onChange={e => this.handleStateChange(e)}
                name="pr"
              />
            </div>
            <div className="form-group">
              <label htmlFor="interest">
                <b>Interest Rate (%) </b>
              </label>
              <input
                type="number"
                placeholder="Enter interest rate"
                onChange={e => this.handleStateChange(e)}
                name="intr"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tenure">
                <b>Loan Tenure </b>
              </label>
              <input
                type="number"
                placeholder="Enter duration (In Months)"
                onChange={e => this.handleStateChange(e)}
                name="ten"
              />
            </div>
            {/* <button
              type="submit"
              onClick={() => this.props.handleFormInput(this.state)}
            >
              Calculate EMI
            </button> */}
          </form>
        </div>
      </div>
    );
  }
}
